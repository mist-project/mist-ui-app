import { useAuth } from '@renderer/components/Contexts';
import { JSX, useEffect, useState } from 'react';

const Content = (): JSX.Element => {
  const [message] = useState('');
  const { logout } = useAuth();

  useEffect(() => {}, []);
  return (
    <div>
      {message}
      <button onClick={() => logout()}>logout ( this will be removed )</button>
      <div>---------</div>
    </div>
  );
};

export default Content;
