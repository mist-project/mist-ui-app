import { fromBinary } from '@bufbuild/protobuf';
import { JSX, useEffect, useState } from 'react';

import { useEvent } from '@renderer/components/Contexts';

import { UpdateJwtTokenSchema } from '@protos/v1/auth_pb';

const Content = (): JSX.Element => {
  const { emitter } = useEvent();
  const [message, setMessage] = useState('');

  useEffect(() => {
    const handle = (data): void => {
      const accessToken = fromBinary(UpdateJwtTokenSchema, data);
      setMessage(accessToken.access);
    };

    emitter.on('test', handle);

    return (): void => {
      emitter.off('test', handle);
    };
  }, []);
  return <div>{message}</div>;
};

export default Content;
