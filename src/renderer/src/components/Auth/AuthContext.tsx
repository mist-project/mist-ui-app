import MistApiService from '@renderer/services/mistApiService';
import { createContext, useState, use, useEffect, JSX } from 'react';

// Create a Context for Authentication
export interface LoginCredentials {
  username: string;
  password: string;
}

export interface AuthTokens {
  access: string;
  refresh: string;
}

interface AuthContextType {
  logged: boolean;
  // eslint-disable-next-line no-unused-vars
  login: (arg0: LoginCredentials) => void;
  logout: () => void;
}

const AuthContext = createContext({
  logged: false,
  login: () => {},
  logout: () => {}
} as AuthContextType);

// Custom hook to use the Auth context
export const useAuth = (): AuthContextType => {
  return use(AuthContext);
};

// Auth Provider component that will wrap the app
export const AuthProvider = ({ children }: { children: React.ReactNode }): JSX.Element => {
  const [logged, setLogged] = useState<boolean>(false);

  // Simulate a call to check authentication on initial load
  useEffect(() => {
    window.electron.ipcRenderer.send('authentication-status');

    window.api.isAuthenticated((message) => {
      setLogged(message);
    });

    window.api.jwtTokens((message) => {
      // TODO: when communicating with socket; whenever this gets hit; send message to the
      // service so it updates the token stored in memory
      console.log(message);
    });
  }, []);

  const login = async (creds: LoginCredentials): Promise<boolean> => {
    const response = await new MistApiService().login(creds);
    if (response.ok) {
      window.electron.ipcRenderer.send('store-jwt-main', await response.json());
      setLogged(true);
      return true;
    }
    return false;
  };

  const logout = (): void => {
    window.electron.ipcRenderer.send('remove-jwt-main');
  };

  // Return the provider with context value
  return <AuthContext.Provider value={{ logged, login, logout }}>{children}</AuthContext.Provider>;
};
