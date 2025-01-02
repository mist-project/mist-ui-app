import { JSX } from 'react';
import { BrowserRouter, Routes, Route, Outlet, Navigate } from 'react-router-dom';

import { Login } from './components/Login';

import './App.scss';
import { useAuth } from './components/Auth';

const Layout = (): JSX.Element => (
  <div className="bg-gray-900 text-white h-full">
    <Outlet />
  </div>
);

const Home = (): JSX.Element => {
  const { logout } = useAuth();
  return (
    <div>
      Youre in!!!
      <button onClick={logout}>logout</button>
    </div>
  );
};

const ProtectedRoute = ({ children }: { children: JSX.Element }): JSX.Element => {
  const { logged } = useAuth();

  // If not logged in, redirect to login page
  if (!logged) {
    return <Navigate to="/login" replace />;
  }

  return children; // If logged in, render the protected route
};

function App(): JSX.Element {
  // State to store the message received from the main process
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
          {/* <Route path="/logged" element={<Logged />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
