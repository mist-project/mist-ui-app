import React, { createContext, useContext, useEffect, JSX, useRef, useState } from 'react';

import { useAuth } from '../../Auth/AuthContext';
import { useEvent } from '../../Event';
import AuthRequest from '@renderer/requests/auth';

import { pb_v1 } from '@renderer/requests/base';

export enum WSConnectionStatus {
  Closed,
  Connected,
  Connecting
}

type IOSocketContextType = {
  sendMessage: (_message: Uint8Array<ArrayBufferLike>) => void;
  connectionState: WSConnectionStatus;
  getWebSocket: () => WebSocket | null;
  closeWebSocket: () => void;
};

const IOSocketContext = createContext<IOSocketContextType | undefined>(undefined);

export const useIOSocket = (): IOSocketContextType => {
  const context = useContext(IOSocketContext);
  if (!context) {
    throw new Error('useIOSocket must be used within a IOSocketProvider');
  }
  return context;
};

export const IOSocketProvider = ({ children }: { children: React.ReactNode }): JSX.Element => {
  const { logged } = useAuth();
  const { emitter } = useEvent();

  const socketRef = useRef<WebSocket | null>(null); // Ref for WebSocket instance
  const [connectionState, setConnectionState] = useState<WSConnectionStatus>(
    WSConnectionStatus.Closed
  );

  useEffect(() => {
    if (logged) {
      emitter.on('socketToken', (token) => {
        connect(token);
      });
    }

    return (): void => {
      if (socketRef.current) {
        socketRef.current.close();
      }
    };
  }, [logged]);

  // Establish WebSocket connection only when logged in and tokens are available
  const connect = (token: string): void => {
    // TODO: add ability to reconnect
    if (socketRef.current) {
      // Using current state cause connection state within this context is not properly updated
      // due to living inside the emitter's definition
      if (socketRef.current.readyState === WebSocket.OPEN) {
        new AuthRequest(sendMessage).updateJwtToken(token);
      }

      if (socketRef.current.readyState != WebSocket.CLOSED) {
        return; // may or may not be connected, don't attempt to reestablish connection until
        // guaranteed closed
      }
    }

    setConnectionState(() => WSConnectionStatus.Connecting);
    const url = new URL(window.appEnvs.mistIOServiceUrl);
    url.searchParams.set('authorization', `Bearer ${token}`);

    const ws = new WebSocket(url);
    socketRef.current = ws;
    socketRef.current.binaryType = 'arraybuffer';

    socketRef.current.onopen = (): void => {
      setConnectionState(() => WSConnectionStatus.Connected);
    };

    socketRef.current.onclose = (): void => {
      setConnectionState(() => WSConnectionStatus.Closed);
    };

    socketRef.current.onerror = (error): void => {
      console.log('WebSocket error:', error);
    };

    socketRef.current.onmessage = (event): void => {
      const output = pb_v1.Output.decode(new Uint8Array(event.data));
      // TODO: probably should create a handler class
      if (output.appserverListing) {
        emitter.emit('appserverListing', output.appserverListing);
      } else {
        console.log('over here ');
      }
    };
  };

  const sendMessage = (message: Uint8Array<ArrayBufferLike>): void => {
    if (socketRef.current) {
      socketRef.current.send(
        message.buffer.slice(message.byteOffset, message.byteOffset + message.length)
      );
    }
  };

  const getWebSocket = (): WebSocket | null => {
    return socketRef.current;
  };

  const closeWebSocket = (): void => {
    if (socketRef.current) {
      socketRef.current.close();
    }
  };

  return (
    <IOSocketContext.Provider
      value={{ sendMessage, getWebSocket, closeWebSocket, connectionState }}
    >
      {children}
    </IOSocketContext.Provider>
  );
};
