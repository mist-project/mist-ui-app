import MistApiService from '@renderer/services/mistApiService';
import { createContext, useState, use, useEffect, JSX } from 'react';
import { useIOSocket } from '@renderer/components/Contexts/WebSocket';

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
  requestTokens: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Custom hook to use the Auth context
export const useAuth = (): AuthContextType => {
  const context = use(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthContext provider.');
  }
  return context;
};

// Auth Provider component that will wrap the app
export const AuthProvider = ({ children }: { children: React.ReactNode }): JSX.Element => {
  const [logged, setLogged] = useState<boolean>(false);
  const { connect, isConnected } = useIOSocket();

  // Simulate a call to check authentication on initial load
  useEffect(() => {
    window.electron.ipcRenderer.send('authentication-status');

    window.api.isAuthenticated((message) => {
      setLogged(message);
    });

    window.api.jwtTokens((message) => {
      // TODO: when communicating with socket; whenever this gets hit; send message to the
      // service so it updates the token stored in memory
      if (!isConnected()) {
        console.log('boomer');
        const url = new URL(window.appEnvs.mistIOServiceUrl);
        url.searchParams.set('authorization', `Bearer ${message.access}`);
        connect(url.toString());
      } else {
        console.log('user already connected... update tokens');
      }
    });
  }, []);

  useEffect(() => {
    if (logged) {
      requestTokens();
    }
  }, [logged]);
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

  const requestTokens = (): void => {
    window.electron.ipcRenderer.send('get-jwt-main');
  };

  // Return the provider with context value
  return (
    <AuthContext.Provider value={{ logged, login, logout, requestTokens }}>
      {children}
    </AuthContext.Provider>
  );
};
