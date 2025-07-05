import { createContext, useState, use, useEffect, JSX, useCallback } from 'react';

import AuthService from '@renderer/services/authService';

// Create a Context for Authentication
export type LoginCredentials = {
  username: string;
  password: string;
};

export type AuthTokens = {
  access: string;
  refresh: string;
};

type AuthContextType = {
  accessToken: string | null;
  logged: boolean;
  // eslint-disable-next-line no-unused-vars
  login: (arg0: LoginCredentials) => Promise<boolean>;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Custom hook to use the Auth context
export const useAuth = (): AuthContextType => {
  const context = use(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthContext provider.');
  }
  return context;
};

export const AuthProvider = ({ children }: { children: React.ReactNode }): JSX.Element => {
  const [logged, setLogged] = useState<boolean>(false);
  const [accessToken, setAccessToken] = useState<string | null>(null);

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
  }, []);

  const login = async (creds: LoginCredentials): Promise<boolean> => {
    const response = await new AuthService().login(creds);
    if (response.ok) {
      const data = await response.json();
      window.electron.ipcRenderer.send('store-jwt-main', data);
      setLogged(true);
      setAccessToken(data.access);
      return true;
    }
    return false;
  };

  const logout = (): void => {
    window.electron.ipcRenderer.send('remove-jwt-main');
    setAccessToken(null);
    setLogged(false);
  };

  return (
    <AuthContext.Provider value={{ accessToken, logged, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
