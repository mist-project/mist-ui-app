import { InputText } from '@renderer/components/common/Input';
import { CommonFooter, CommonHeader } from '@renderer/components/common/Modal';
import { useAuth } from '@renderer/components/Contexts';
import ChannelService from '@renderer/services/channel';
import { Channel, ReactSetState } from '@renderer/types';
import { JSX, useState } from 'react';

type CreateChannelModalProps = {
  appserverId: string;
  setChannelListing: ReactSetState<Channel[]> | undefined;
};
export const CreateChannelModal = ({
  appserverId,
  setChannelListing
}: CreateChannelModalProps): JSX.Element => {
  const { tokenManager } = useAuth();

  const [channelName, setChannelName] = useState<string>('');

  return (
    <div className="flex flex-col gap-3">
      <CommonHeader title="Create Channel" />
      <div className="mx-5">
        <InputText
          label="Channel Name"
          required
          value={channelName}
          setValue={setChannelName}
          placeholder="name"
          className="w-full"
        />
      </div>
      <CommonFooter
        accept={async () => {
          const response = await new ChannelService(tokenManager).createChannel(
            channelName,
            appserverId
          );

          if (setChannelListing) setChannelListing((prev) => [...prev, response.data.data]);
        }}
        confirmText="Create"
        confirmButtonClassname="bg-green-900 hover:bg-green-700 text-white"
        cancelText="Cancel  "
        cancelButtonClassname="bg-gray-700 hover:bg-gray-600 text-white"
        justifyContent="justify-between"
      />
    </div>
  );
};
