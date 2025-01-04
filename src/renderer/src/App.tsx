import { JSX } from 'react';
import { BrowserRouter, Routes, Route, Outlet, Navigate } from 'react-router-dom';

import { useAuth } from '@renderer/components/Contexts';
import { Login } from '@renderer/components/Login';
import { Home } from '@renderer/components/Home';

import './App.scss';

const Layout = (): JSX.Element => (
  <div className="bg-gray-900 text-white h-full">
    <Outlet />
  </div>
);

const ProtectedRoute = ({ children }: { children: JSX.Element }): JSX.Element => {
  const { logged } = useAuth();
  // If not logged in, redirect to login page
  if (!logged) {
    return <Navigate to="/login" replace />;
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
          <Route path="/login" element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
