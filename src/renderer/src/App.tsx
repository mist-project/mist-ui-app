import { JSX } from 'react';
import { BrowserRouter, Routes, Route, Outlet, Navigate } from 'react-router-dom';

import { useAuth, useIOSocket } from '@renderer/components/Contexts';
import { WSConnectionStatus } from '@renderer/components/Contexts/WebSocket/IOSocket/IOContext';
import { Login } from '@renderer/components/Login';
import { Home } from '@renderer/components/Home';

import { Nav } from './components/Home/Nav';
import { AppserverScreen } from './components/Appserver';

import './App.scss';

const Layout = (): JSX.Element => (
  <div className="bg-gray-900 text-gray-100 h-screen grid grid-cols-[72px_300px_1fr] overflow-hidden">
    <Nav />
    <Outlet />
  </div>
);

const LoginLayout = (): JSX.Element => (
  <div className="bg-gray-900 text-gray-100 h-full flex items-center justify-center">
    <Outlet />
  </div>
);

const ProtectedRoute = ({ children }: { children: JSX.Element }): JSX.Element => {
  const { logged } = useAuth();
  const { connectionState } = useIOSocket();

  // If not logged in, redirect to login page
  if (!logged) {
    return <Navigate to="/login" replace />;
  }

  if (connectionState === WSConnectionStatus.Connecting) {
    return <div>connecting...</div>;
  }
  if (connectionState === WSConnectionStatus.Closed) {
    return <div>connection error</div>;
  }

  return children; // If logged in, render the protected route
};

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route
            path="/appserver/:appserverId"
            element={
              <ProtectedRoute>
                <AppserverScreen />
              </ProtectedRoute>
            }
          />
        </Route>
        <Route element={<LoginLayout />}>
          <Route path="/login" element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
