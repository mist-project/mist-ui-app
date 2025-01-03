import React, { createContext, useContext, useState, useEffect, JSX } from 'react';
import { useEmitter } from '../../Event/Emitter';

interface IOSocketContextType {
  socket: WebSocket | null;
  sendMessage: (_message: any) => void;
  connect: (_url: string) => void;
  isConnected: () => boolean;
}

const IOSocketContext = createContext<IOSocketContextType | undefined>(undefined);

export const useIOSocket = (): IOSocketContextType => {
  const context = useContext(IOSocketContext);
  if (!context) {
    throw new Error('useIOSocket must be used within a IOSocketProvider');
  }
  return context;
};

export const IOSocketProvider = ({ children }: { children: React.ReactNode }): JSX.Element => {
  const [socket, setSocket] = useState<WebSocket | null>(null);
  const { emitter } = useEmitter();

  useEffect(() => {
    return (): void => {
      if (socket) {
        socket.close();
      }
    };
  }, []);

  // Establish WebSocket connection only when logged in and tokens are available
  const connect = (url: string): void => {
    // Create the WebSocket URL with the token

    const ws = new WebSocket(url.toString());
    setSocket(ws);
    ws.onopen = (): void => console.log('WebSocket connected');
    ws.onerror = (error): void => console.error('WebSocket error:', error);

    // Listen for messages and forward to specific components
    ws.onmessage = (event): void => {
      console.log(event.data, 'boom');
      emitter.emit('test', event.data);
      // const message = JSON.parse(event.data);
      // console.log(message, 'hi');
      // This is where you'd direct messages based on the type
      // Pass the message to the appropriate component/state via context
    };
  };

  const isConnected = (): boolean => {
    if (socket == null) {
      return false;
    }
    return socket.readyState === WebSocket.CONNECTING || socket.readyState === WebSocket.OPEN;
  };

  const sendMessage = (message: any): void => {
    if (socket) {
      socket.send(JSON.stringify(message));
    }
  };

  return (
    <IOSocketContext.Provider value={{ socket, sendMessage, connect, isConnected }}>
      {children}
    </IOSocketContext.Provider>
  );
};
