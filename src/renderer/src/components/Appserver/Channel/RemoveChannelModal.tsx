import * as pb from '@protos/v1/pb';
import { CommonFooter, CommonHeader } from '@renderer/components/common/Modal';
import { useAuth } from '@renderer/components/Contexts';
import AppserverService from '@renderer/services/appserver';
import { Channel, ReactSetState } from '@renderer/types';
import { JSX } from 'react';

type RemoveChannelProps = {
  channel: Channel;
  setChannelListing?: ReactSetState<Channel[] | pb.api.v1.channel.IChannel[]>;
};

const RemoveChannelModal = ({ channel, setChannelListing }: RemoveChannelProps): JSX.Element => {
  const { tokenManager } = useAuth();

  return (
    <div className="text-center flex flex-col gap-3">
      <CommonHeader title={`Delete "${channel.name}"`} />
      <p>Are you sure you want to delete this channel?</p>
      <CommonFooter
        order="cancel-first"
        accept={async (): Promise<void> => {
          await new AppserverService(tokenManager).deleteChannel(channel);
          if (setChannelListing)
            setChannelListing((prev) => prev.filter((ch) => ch.id !== channel.id));
        }}
        confirmText="Leave"
        confirmButtonClassname="bg-red-900 hover:bg-red-700 text-white"
        cancelText="Cancel"
        cancelButtonClassname="bg-gray-700 hover:bg-gray-600 text-white"
      />
    </div>
  );
};

export default RemoveChannelModal;
