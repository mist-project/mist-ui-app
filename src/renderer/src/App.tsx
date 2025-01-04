import { JSX } from 'react';
import { BrowserRouter, Routes, Route, Outlet, Navigate } from 'react-router-dom';

import { Login } from '@renderer/components/Login';
import { useAuth } from '@renderer/components/Contexts/Auth';
import { Home } from '@renderer/components/Home';

import './App.scss';
import { useIOSocket } from './components/Contexts';
// import { useIOSocket } from './components/Contexts/';
// import { useEvent } from './components/Contexts';

const Layout = (): JSX.Element => (
  <div className="bg-gray-900 text-white h-full">
    <Outlet />
  </div>
);

// const Home = (): JSX.Element => {
//   const { logout } = useAuth();
//   const { sendMessage, socket } = useIOSocket();
//   const { emitter } = useEvent();
//   useEffect(() => {
//     const handle = (data): void => {
//       console.log('here it is', data);
//     };
//     emitter.on('test', handle);

//     return (): void => {
//       emitter.off('test', handle);
//     };
//   }, [emitter]);

//   return (
//     <div>
//       <div>Youre in!!!</div>

//       {socket && (
//         <div>
//           <div>Socket connection succesful</div>
//           <button onClick={() => sendMessage('echo')}>echo</button>
//         </div>
//       )}
//       <div>
//         <button onClick={logout}>logout</button>
//       </div>
//     </div>
//   );
// };

const ProtectedRoute = ({ children }: { children: JSX.Element }): JSX.Element => {
  const { logged } = useAuth();
  const { getWebSocket } = useIOSocket();

  // If not logged in, redirect to login page
  if (!logged) {
    return <Navigate to="/login" replace />;
  }

  if (getWebSocket()?.readyState !== WebSocket.OPEN) {
    return <div> connecting ... </div>;
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
