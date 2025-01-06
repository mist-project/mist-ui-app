import { InputText } from '@renderer/components/common/Input';
import { CommonFooter } from '@renderer/components/common/Modal';
import AppserverRequest from '@renderer/requests/appserver';
import { JSX, useState } from 'react';

type CreateAppserverModalProps = {
  sendMessage: (_message: Uint8Array<ArrayBufferLike>) => void;
};
const CreateAppserverModal = ({ sendMessage }: CreateAppserverModalProps): JSX.Element => {
  const [serverName, setServerName] = useState<string>('');

  return (
    <div>
      <InputText
        label="Server Name"
        required
        value={serverName}
        setValue={setServerName}
        placeholder="name"
      />
      <CommonFooter
        accept={() => {
          new AppserverRequest(sendMessage).createAppserver(serverName);
        }}
      />
    </div>
  );
};

export default CreateAppserverModal;
