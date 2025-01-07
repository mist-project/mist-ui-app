import { JSX } from 'react';

import { CommonFooter } from '@renderer/components/common/Modal';
import AppserverRequest from '@renderer/requests/appserver';
import * as pb from '@protos/v1/pb';

type DeleteAppserverModalProps = {
  sendMessage: (_message: Uint8Array<ArrayBufferLike>) => void;
  appserver: pb.api.v1.messages.IAppserver;
};
const DeleteAppserverModal = ({
  sendMessage,
  appserver
}: DeleteAppserverModalProps): JSX.Element => {
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

export default DeleteAppserverModal;
