import { JSX, useEffect, useState } from 'react';

import { useAuth } from '@renderer/components/Contexts';

const Content = (): JSX.Element => {
  const [message] = useState('');
  const { logout } = useAuth();

  useEffect(() => {}, []);
  return (
    <div>
      {message}
      <button onClick={() => logout()}>logout ( this will be removed )</button>
    </div>
  );
};

export default Content;
