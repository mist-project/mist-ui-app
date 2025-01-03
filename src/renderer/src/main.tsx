import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import { AuthProvider } from './components/Contexts/Auth/AuthContext';
import { IOSocketProvider } from './components/Contexts/WebSocket/IOSocket/IOContext';
import { EventEmitterProvider } from './components/Contexts/Event/EventContext';

import './index.scss';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <EventEmitterProvider>
      <IOSocketProvider>
        <AuthProvider>
          <App />
        </AuthProvider>
      </IOSocketProvider>
    </EventEmitterProvider>
  </React.StrictMode>
);
