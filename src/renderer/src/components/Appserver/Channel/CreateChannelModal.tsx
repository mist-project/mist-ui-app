import { InputText } from '@renderer/components/common/Input';
import { CommonFooter } from '@renderer/components/common/Modal';
import { useIOSocket } from '@renderer/components/Contexts';
import ChannelRequest from '@renderer/requests/channel';
import { JSX, useState } from 'react';

type CreateChannelModalProps = {
  appserverId: string;
};
export const CreateChannelModal = ({ appserverId }: CreateChannelModalProps): JSX.Element => {
  const [channelName, setChannelName] = useState<string>('');
  const { sendMessage } = useIOSocket();

  return (
    <div>
      <InputText
        label="Channel Name"
        required
        value={channelName}
        setValue={setChannelName}
        placeholder="name"
      />
      <CommonFooter
        accept={() => {
          new ChannelRequest(sendMessage).createChannel(channelName, appserverId);
        }}
      />
    </div>
  );
};
