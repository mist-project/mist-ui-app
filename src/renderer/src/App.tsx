import { JSX, useEffect } from 'react';

import Versions from './components/Versions';
import electronLogo from './assets/electron.svg';

function App(): JSX.Element {
  // State to store the message received from the main process

  useEffect(() => {
    // Listen for messages from the main process
    window.api.loginJwt((event, message) => {
      // Update state whenever 0a new message is received
      console.log(messageFromMain);
    });
  }, []);
  const ipcHandle = (): void => window.electron.ipcRenderer.send('ping');

  return (
    <>
      <img alt="logo" className="logo" src={electronLogo} />
      <div className="creator">Powered by electron-vite</div>
      <div className="text">
        Build an Electron app with <span className="react">React</span>
        &nbsp;and <span className="ts">TypeScript</span>
      </div>
      <p className="tip">
        Please try pressing <code>F12</code> to open the devTool
      </p>
      <div className="actions">
        <div className="action">
          <a href="https://electron-vite.org/" target="_blank" rel="noreferrer">
            Documentation
          </a>
        </div>
        <div className="action">
          <a target="_blank" rel="noreferrer" onClick={ipcHandle}>
            Send IPC
          </a>
        </div>
      </div>
      <Versions></Versions>
    </>
  );
}

export default App;
