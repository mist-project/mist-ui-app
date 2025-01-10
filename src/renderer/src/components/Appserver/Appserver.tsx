import { JSX, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { Divider } from '../common/Divider';
import ButtonWithMenu from '../common/Button/ButtonWithMenu';
import { MenuItem } from '../common/Menu';
import { ReactSetState } from '@renderer/types';
import { Channel } from './Channel/Channel';
import { useEvent, useIOSocket } from '../Contexts';

const dummyChannel = ['channel one', 'channel two'];

const AppserverHeader = (): JSX.Element => {
  return (
    <ButtonWithMenu
      className="my-2 mx-2 pb-1"
      menuItems={[<MenuItem key="hello">left</MenuItem>]}
      contextMenuItems={[<MenuItem key="boom">right</MenuItem>]}
      buttonColor="none"
    >
      SERVER NAME
    </ButtonWithMenu>
  );
};

const ChannelButton = ({
  children,
  setChannelId
}: {
  children: React.ReactNode;
  setChannelId: () => void;
}): JSX.Element => {
  return (
    <ButtonWithMenu
      buttonColor="none"
      className="hover:hover:bg-gray-800 p-2 mx-3 mb-1"
      contextMenuItems={[<MenuItem key="boom">right</MenuItem>]}
      onClick={setChannelId}
    >
      {children}
    </ButtonWithMenu>
  );
};

const AppserverPanel = ({ setChannelId }: { setChannelId: ReactSetState<string> }): JSX.Element => {
  return (
    <div>
      <AppserverHeader />
      <Divider />
      <div className="flex flex-col gap-2 mt-2">
        {dummyChannel.map((channel) => (
          <ChannelButton key={channel} setChannelId={() => setChannelId(channel)}>
            {channel}
          </ChannelButton>
        ))}
      </div>
    </div>
  );
};

const Appserver = (): JSX.Element => {
  const { appserverId } = useParams();
  const { sendMessage } = useIOSocket();
  const { emitter } = useEvent();
  const [channelContentId, setChannelContentId] = useState<string>('');

  useEffect(() => {

    emitter.on()
  }, []);

  return (
    <div className="flex w-full">
      <div className="w-[240px]">
        <AppserverPanel setChannelId={setChannelContentId} />
      </div>
      <Channel channelId={channelContentId} />
    </div>
  );
};

export default Appserver;
