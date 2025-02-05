import { JSX } from 'react';

import { CommonFooter } from '@renderer/components/common/Modal';
import { AppserverRequest } from '@renderer/requests';
import * as pb from '@protos/v1/pb';
import { useIOSocket } from '@renderer/components/Contexts';

type RemoveAppserverProps = {
  appserver: pb.api.v1.server.IAppserver;
};
const RemoveAppserver = ({ appserver }: RemoveAppserverProps): JSX.Element => {
  const { sendMessage } = useIOSocket();

  return (
    <div className="text-center">
      <div className="text-lg">Confirmation you want to delete server: </div>
      <div className="font-bold text-xl">{appserver.name}</div>
      <CommonFooter
        accept={() => {
          new AppserverRequest(sendMessage).deleteAppserver(appserver.id as string);
        }}
      />
    </div>
  );
};

export default RemoveAppserver;
