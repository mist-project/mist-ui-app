import { JSX, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { useAuth } from '@renderer/components/Contexts/Auth';
import { InputText } from '@renderer/components/common/Input';
import { Button } from '@renderer/components/common/Button';
import { Checkbox } from '../common/Checkbox';

const Login = (): JSX.Element => {
  const { logged, login } = useAuth();
  const navigate = useNavigate();

  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [rememberMe, setRememberMe] = useState<boolean>(false);

  useEffect(() => {
    if (logged) {
      navigate('/', { replace: true }); // Replace to prevent going back to login page
    }

    window.electron.ipcRenderer.send('get-remember-me');
    window.api.getRememberUsername((username: string) => {
      setRememberMe(true);
      setUsername(() => username);
    });
  }, [logged]); // Run effect whenever 'logged' changes

  useEffect(() => {
    window.electron.ipcRenderer.send('get-remember-username');
    window.api.getRememberUsername((username: string) => {
      setRememberMe(true);
      setUsername(() => username);
    });
  }, []);
  return (
    <div>
      <InputText label="Email" type="text" value={username} setValue={setUsername} />
      <InputText label="Password" type="password" value={password} setValue={setPassword} />
      <Button
        className="ml-[200px]"
        onClick={() => {
          console.log(rememberMe, 'hmm');
          if (rememberMe) {
            window.electron.ipcRenderer.send('store-remember-username', username);
          } else {
            window.electron.ipcRenderer.send('delete-remember-username');
          }
          login({ username, password });
        }}
      >
        <p className="text-2xl">Log in</p>
      </Button>
      <Checkbox label="Remember Me" value={rememberMe} setValue={setRememberMe} />
      {logged && <h2>logged</h2>}
    </div>
  );
};

export default Login;
