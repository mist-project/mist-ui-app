import { createContext, useState, use, useEffect, JSX } from 'react';

import * as pb from '@protos/v1/pb';
import { useIOSocket } from '@renderer/components/Contexts';
import MistApiService from '@renderer/services/mistApiService';
import Pb from '@renderer/utils/pb';

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
  logged: boolean;
  // eslint-disable-next-line no-unused-vars
  login: (arg0: LoginCredentials) => void;
  logout: () => void;
  requestTokens: () => void;
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
  const { connect, getWebSocket, sendMessage, closeWebSocket, isSocketOpen } = useIOSocket();

  useEffect(() => {
    window.electron.ipcRenderer.send('authentication-status');

    window.api.isAuthenticated((message) => {
      setLogged(message);
    });

    window.api.jwtTokens((message) => {
      // TODO: when communicating with socket; whenever this gets hit; send message to the
      // service so it updates the token stored in memory
      // TODO: update this logic, its a bit hacky
      if (!getWebSocket()) {
        const url = new URL(window.appEnvs.mistIOServiceUrl);
        url.searchParams.set('authorization', `Bearer ${message.access}`);
        connect(url.toString());
      } else if (isSocketOpen()) {
        sendMessage(
          Pb.InputMessage(pb.api.v1.messages.ActionType.ACTION_TYPE_UPDATE, {
            updateJwtToken: new pb.api.v1.messages.UpdateJwtToken({
              access: message.access
            })
          })
        );
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
    closeWebSocket();
    window.electron.ipcRenderer.send('remove-jwt-main');
  };

  const requestTokens = (): void => {
    window.electron.ipcRenderer.send('get-jwt-main');
  };

  return (
    <AuthContext.Provider value={{ logged, login, logout, requestTokens }}>
      {children}
    </AuthContext.Provider>
  );
};
