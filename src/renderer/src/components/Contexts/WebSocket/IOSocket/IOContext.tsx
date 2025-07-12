import * as pb from '@protos/v1/pb';
import { useAuth } from '@renderer/components/Contexts/Auth';
import { useEvent } from '@renderer/components/Contexts/Event';
import React, { createContext, JSX, useContext, useEffect, useRef, useState } from 'react';

export const pb_v1 = pb.api.v1;
export const pb_google = pb.google.protobuf;

import { getSessionToken } from './utils';

const IO_SERVICE_URL = window.appEnvs.mistIOServiceUrl;

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
  // TODO: Add spinner once user is officially logged in but has no socket connection yet

  const { logged, tokenManager } = useAuth();
  const { emitter } = useEvent();

  const socketRef = useRef<WebSocket | null>(null); // Ref for WebSocket instance
  const [connectionState, setConnectionState] = useState<WSConnectionStatus>(
    WSConnectionStatus.Closed
  );

  useEffect(() => {
    if (logged) {
      connect();
    }

    return (): void => {
      if (socketRef.current) {
        socketRef.current.close();
      }
    };
  }, [logged]);

  // Establish WebSocket connection only when logged in and tokens are available
  const connect = async (): Promise<void> => {
    // TODO: add ability to reconnect
    if (socketRef.current) {
      // Using current state cause connection state within this context is not properly updated
      // due to living inside the emitter's definition
      if (socketRef.current.readyState === WebSocket.OPEN) {
        // new AuthRequest(sendMessage).updateJwtToken(token);
      }

      if (socketRef.current.readyState != WebSocket.CLOSED) {
        return; // may or may not be connected, don't attempt to reestablish connection until
        // guaranteed closed
      }
    }

    setConnectionState(() => WSConnectionStatus.Connecting);
    // TODO: add support for http and https
    const url = new URL(`ws://${IO_SERVICE_URL}/io`);
    // TODO: replace with API call to fetch session token and then connect to Websocket with
    // that single use token
    url.searchParams.set('token', await getSessionToken(tokenManager));

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

    socketRef.current.onmessage = (message): void => {
      const event = pb_v1.event.Event.decode(new Uint8Array(message.data));

      if (event.list_channels) {
        if (!event.list_channels.channels) return;
        emitter.emit('channelListing', event.list_channels.channels);
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
