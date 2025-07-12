import { InputText } from '@renderer/components/common/Input';
import { CommonFooter } from '@renderer/components/common/Modal';
import { useIOSocket } from '@renderer/components/Contexts';
import { AppserverRequest } from '@renderer/requests';
import { JSX, useState } from 'react';

type CreateAppserverRoleModalProps = {
  appserverId: string;
};

export const CreateAppserverRoleModal = ({
  appserverId
}: CreateAppserverRoleModalProps): JSX.Element => {
  const [roleName, setRoleName] = useState<string>('');
  const { sendMessage } = useIOSocket();

  return (
    <div>
      <InputText
        label="Role Name"
        required
        value={roleName}
        setValue={setRoleName}
        placeholder="name"
      />
      <CommonFooter
        accept={() => {
          new AppserverRequest(sendMessage).createAppserverRole(appserverId, roleName);
        }}
      />
    </div>
  );
};
