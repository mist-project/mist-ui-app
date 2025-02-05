import { JSX, useState } from 'react';

import { InputText } from '@renderer/components/common/Input';
import { CommonFooter } from '@renderer/components/common/Modal';
import { AppserverRequest } from '@renderer/requests';
import { Button } from '@renderer/components/common/Button';
import { useIOSocket } from '@renderer/components/Contexts';

const JoinServer = (): JSX.Element => {
  const { sendMessage } = useIOSocket();

  const [serverId, setServerId] = useState<string>('');

  return (
    <div>
      <InputText
        label="Server ID"
        required
        value={serverId}
        setValue={setServerId}
        placeholder="server id"
      />
      <CommonFooter
        accept={() => {
          new AppserverRequest(sendMessage).joinAppserver(serverId);
        }}
      />
    </div>
  );
};

const CreateServer = (): JSX.Element => {
  const { sendMessage } = useIOSocket();

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

const AddAppserverModal = (): JSX.Element => {
  const [content, setContent] = useState<JSX.Element>();

  return (
    <div className="flex flex-col gap-10">
      {!content && (
        <>
          <Button onClick={() => setContent(<CreateServer />)}>Create a server</Button>
          <Button onClick={() => setContent(<JoinServer />)}>Join a server</Button>
        </>
      )}
      {content}
    </div>
  );
};

export default AddAppserverModal;
