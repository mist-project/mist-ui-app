import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import { AuthProvider } from './components/Contexts/Auth/AuthContext';
import { IOSocketProvider } from './components/Contexts/WebSocket/IOSocket/IOContext';
import { EventEmitterProvider } from './components/Contexts/Event/EventContext';
import { ModalProvider } from './components/Contexts/Modal/ModalContext';

import './index.scss';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <EventEmitterProvider>
      <ModalProvider>
        <AuthProvider>
          <IOSocketProvider>
            <App />
          </IOSocketProvider>
        </AuthProvider>
      </ModalProvider>
    </EventEmitterProvider>
  </React.StrictMode>
);
