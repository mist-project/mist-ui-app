import { JSX, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import * as pb from '@protos/v1/pb';
import AppserverRequest from '@renderer/requests/appserver';
import { ReactSetState } from '@renderer/types';

import { Divider } from '../common/Divider';
import ButtonWithMenu from '../common/Button/ButtonWithMenu/ButtonWithMenu';
import { MenuItem, Menu } from '../common/Button/ButtonWithMenu';
import { useEvent, useIOSocket, useModal } from '../Contexts';
import { Channel } from './Channel/Channel';
import { AppserverContext, useAppserverContext } from './AppserverContext';
import { CreateChannelModal } from './Channel/CreateChannelModal';

const dummyChannel = ['channel one', 'channel two'];

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
      contextMenuItems={<MenuItem key="boom">right</MenuItem>}
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
  const [appserverDetails, setAppserverDetails] = useState<pb.api.v1.server.IAppserver>();

  useEffect(() => {
    if (!appserverId) return;
    new AppserverRequest(sendMessage).getAppserverDetails(appserverId);
    emitter.on('appserverDetails', (appserverDetails) => {
      setAppserverDetails(appserverDetails);
    });
  }, [appserverId]);

  return (
    <AppserverContext.Provider value={{ appserver: appserverDetails }}>
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
