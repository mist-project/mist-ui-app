import { createContext, useState, use, useEffect, JSX, useCallback, useMemo, useRef } from 'react';
import { jwtDecode } from 'jwt-decode';
import AuthService from '@renderer/services/authService';

export type LoginCredentials = {
  username: string;
  password: string;
};

export type AuthTokens = {
  access: string;
  refresh: string;
};

export type TokenManager = {
  getAccessToken: () => Promise<string | null>;
  refreshTokens: () => Promise<string | null>;
};

type JwtPayload = { exp: number };

type AuthContextType = {
  accessToken: string | null;
  logged: boolean;
  tokenManager: TokenManager;
  login: (arg0: LoginCredentials) => Promise<boolean>;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = (): AuthContextType => {
  const context = use(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthContext provider.');
  }
  return context;
};

const isTokenExpired = (token: string): boolean => {
  try {
    const { exp } = jwtDecode<JwtPayload>(token);
    return exp * 1000 < Date.now();
  } catch {
    return true;
  }
};

export const AuthProvider = ({ children }: { children: React.ReactNode }): JSX.Element => {
  const [logged, setLogged] = useState<boolean>(false);
  const [accessToken, setAccessToken] = useState<string | null>(null);

  // Use useRef to persist across renders
  const refreshPromiseRef = useRef<Promise<string | null> | null>(null);

  const refreshTokens = useCallback(async (): Promise<string | null> => {
    if (refreshPromiseRef.current) {
      return refreshPromiseRef.current; // wait for the in-progress refresh
    }

    refreshPromiseRef.current = (async (): Promise<string | null> => {
      const refresh = await window.api.getRefreshToken();

      if (!refresh) {
        console.error('No refresh token available');
        setAccessToken(null);
        setLogged(false);
        refreshPromiseRef.current = null;
        return null;
      }

      try {
        const response = await new AuthService().refreshTokens(refresh);
        const data = response.data;
        window.electron.ipcRenderer.send('store-jwt-main', data);
        setAccessToken(data.access);
        return data.access;
      } catch (error) {
        console.error('[Auth] Failed to refresh tokens:', error);
        setAccessToken(null);
        setLogged(false);
        return null;
      } finally {
        refreshPromiseRef.current = null; // allow future refresh attempts
      }
    })();

    return refreshPromiseRef.current;
  }, []);

  const tokenManager = useMemo(
    (): TokenManager => ({
      getAccessToken: async (): Promise<string | null> => {
        if (accessToken && isTokenExpired(accessToken)) {
          return await refreshTokens();
        }
        return accessToken;
      },
      refreshTokens: refreshTokens
    }),
    [accessToken, refreshTokens]
  );

  const isLogged = useCallback(async (): Promise<void> => {
    const authenticated = await window.api.isAuthenticated();
    if (authenticated) {
      const token = await window.api.getAccessToken();
      setAccessToken(token);
    } else {
      setAccessToken(null);
    }
    setLogged(authenticated);
  }, []);

  useEffect(() => {
    isLogged();
  }, [isLogged]);

  const login = async (creds: LoginCredentials): Promise<boolean> => {
    try {
      const response = await new AuthService().login(creds);
      const data = response.data;
      window.electron.ipcRenderer.send('store-jwt-main', data);
      setLogged(true);
      setAccessToken(data.access);
      return true;
    } catch (error) {
      console.error('[Auth] Login failed:', error);
      setLogged(false);
    }
    return false;
  };

  const logout = (): void => {
    window.electron.ipcRenderer.send('remove-jwt-main');
    setAccessToken(null);
    setLogged(false);
    // Clear any pending refresh promise
    refreshPromiseRef.current = null;
  };

  return (
    <AuthContext.Provider value={{ accessToken, logged, tokenManager, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
