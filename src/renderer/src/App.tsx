import { JSX, useEffect, useState } from 'react';

function App(): JSX.Element {
  // State to store the message received from the main process
  const [tokens, setTokens] = useState<LoginJwtParams>({ accessToken: '', refreshToken: '' });
  useEffect(() => {
    // Listen for messages from the main process
    window.api.loginJwt((message) => {
      setTokens(message);
      console.log('message:', message);
    });
  }, []);

  return (
    <div>
      hello
      <div className="text-white bg-gray-900">Access token: {tokens.accessToken}</div>
      <p>Refresh token: {tokens.refreshToken}</p>
    </div>
  );
}

export default App;
