import React, { createContext, useContext, useEffect, JSX, useRef } from 'react';

import * as pb from '@protos/v1/pb';

type IOSocketContextType = {
  sendMessage: (_message: Uint8Array<ArrayBufferLike>) => void;
  connect: (_url: string) => void;

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
  const socketRef = useRef<WebSocket | null>(null); // Ref for WebSocket instance

  useEffect(() => {
    return (): void => {
      if (socketRef.current) {
        socketRef.current.close();
      }
    };
  }, []);

  // Establish WebSocket connection only when logged in and tokens are available
  const connect = (url: string): void => {
    // Create the WebSocket URL with the token
    if (socketRef.current) {
      return; // Already connected, no need to connect again
    }

    // TODO: add ability to reconnect
    const ws = new WebSocket(url);
    socketRef.current = ws;
    socketRef.current.binaryType = 'arraybuffer';

    ws.onopen = (): void => {};

    ws.onerror = (error): void => {
      console.error('WebSocket error:', error);
    };

    ws.onmessage = async (event): Promise<void> => {
      //todo: add message handler
      console.log('socket message', event);
      // console.log(pb.api.v1.messages.Output.decode(new Uint8Array(await event.data.arrayBuffer())));
    };

    ws.onclose = (): void => {};
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
    <IOSocketContext.Provider value={{ sendMessage, connect, getWebSocket, closeWebSocket }}>
      {children}
    </IOSocketContext.Provider>
  );
};
