import { JSX } from 'react';

type ChannelProps = {
  channelId: string;
};

export const Channel = ({ channelId }: ChannelProps): JSX.Element => {
  return (
    <div className="flex flex-1 bg-gray-900">
      <div className="flex-grow">Channel: {channelId}</div>
      <div className="w-[240px] bg-gray-950">Channel: {channelId}</div>
    </div>
  );
};
