import { JSX, useEffect, useState } from 'react';

import { useAuth, useEvent } from '@renderer/components/Contexts';

const Content = (): JSX.Element => {
  const { emitter } = useEvent();
  const [message, setMessage] = useState('');
  const { logout } = useAuth();

  useEffect(() => {
    const handle = async (data): Promise<void> => {
      setMessage(data.access);
    };

    emitter.on('test', handle);

    return (): void => {
      emitter.off('test', handle);
    };
  }, []);
  return (
    <div>
      {message}
      <button onClick={() => logout()}>logout</button>
    </div>
  );
};

export default Content;
