import { JSX, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import * as pb from '@protos/v1/pb';

import { Divider } from '@renderer/components/common/Divider';
import ButtonWithMenu from '@renderer/components/common/Button/ButtonWithMenu/ButtonWithMenu';
import { MenuItem, Menu } from '@renderer/components/common/Button/ButtonWithMenu';
import { useEvent, useIOSocket, useModal } from '@renderer/components/Contexts';
import { AppserverRequest, ChannelRequest } from '@renderer/requests';
import { ReactSetState } from '@renderer/types';

import { Channel } from './Channel/Channel';
import { AppserverContext, useAppserverContext } from './AppserverContext';
import { CreateChannelModal } from './Channel/CreateChannelModal';

const AppserverHeader = (): JSX.Element => {
  const { appserver } = useAppserverContext();
  const { setModalContent, showModal } = useModal();

  return (
    <ButtonWithMenu
      className="py-2 w-full"
      menuItems={
        <Menu>
          <MenuItem
            onClick={() => {
              if (!appserver) return;
              setModalContent(<CreateChannelModal appserverId={appserver.id as string} />);
              showModal(true);
            }}
          >
            Create Channel
          </MenuItem>
        </Menu>
      }
      contextMenuItems={
        <Menu>
          <MenuItem>right</MenuItem>
        </Menu>
      }
      buttonColor="none"
    >
      {appserver?.name}
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
      contextMenuItems={
        <Menu>
          <MenuItem key="boom">right</MenuItem>
        </Menu>
      }
      onClick={setChannelId}
    >
      {children}
    </ButtonWithMenu>
  );
};

const AppserverPanel = ({ setChannelId }: { setChannelId: ReactSetState<string> }): JSX.Element => {
  const { channels } = useAppserverContext();
  return (
    <div>
      <AppserverHeader />
      <Divider />
      <div className="flex flex-col gap-2 mt-2">
        {channels.map((channel) => (
          <ChannelButton key={channel.id} setChannelId={() => setChannelId(channel.name as string)}>
            {channel.name}
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
  const [channelListing, setChannelListing] = useState<pb.api.v1.channel.IChannel[]>([]);
  const [appserverDetails, setAppserverDetails] = useState<pb.api.v1.server.IAppserver>();

  useEffect(() => {
    if (!appserverId) return;
    new AppserverRequest(sendMessage).getAppserverDetails(appserverId);
    emitter.on('appserverDetails', (appserverDetails) => {
      setAppserverDetails(appserverDetails);
    });

    new ChannelRequest(sendMessage).channelListing(appserverId);
    emitter.on('channelListing', (channelListing) => {
      setChannelListing(channelListing);
    });

    return (): void => {
      emitter.off('appserverDetails');
      emitter.off('channelListing');
    };
  }, [appserverId]);

  return (
    <AppserverContext.Provider value={{ appserver: appserverDetails, channels: channelListing }}>
      <div className="flex w-full">
        <div className="w-[240px]">
          <AppserverPanel setChannelId={setChannelContentId} />
        </div>
        <Channel channelId={channelContentId} />
      </div>
    </AppserverContext.Provider>
  );
};

export default Appserver;
