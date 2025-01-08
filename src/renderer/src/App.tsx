import { JSX } from 'react';
import { BrowserRouter, Routes, Route, Outlet, Navigate } from 'react-router-dom';

import { useAuth, useIOSocket } from '@renderer/components/Contexts';
import { WSConnectionStatus } from '@renderer/components/Contexts/WebSocket/IOSocket/IOContext';
import { Login } from '@renderer/components/Login';
import { Home } from '@renderer/components/Home';

import { Nav } from './components/Home/Nav';
import { Appserver } from './components/Appserver';

import './App.scss';

const Layout = (): JSX.Element => (
  <div className="bg-gray-900 text-white h-full flex">
    <Nav />
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
                <Appserver />
              </ProtectedRoute>
            }
          />
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
