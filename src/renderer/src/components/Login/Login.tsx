import { JSX, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { useAuth } from '@renderer/components/Contexts/Auth';
import { InputText } from '@renderer/components/common/Input';
import { Button } from '@renderer/components/common/Button';

const Login = (): JSX.Element => {
  const { logged, login } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (logged) {
      navigate('/', { replace: true }); // Replace to prevent going back to login page
    }
  }, [logged]); // Run effect whenever 'logged' changes

  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  return (
    <div>
      <InputText label="Email" type="text" value={username} setValue={setUsername} />
      <InputText label="Password" type="password" value={password} setValue={setPassword} />
      <Button
        className="ml-[200px]"
        onClick={() => {
          login({ username, password });
        }}
      >
        <p className="text-2xl">Log in</p>
      </Button>
      {logged && <h2>logged</h2>}
    </div>
  );
};

export default Login;
