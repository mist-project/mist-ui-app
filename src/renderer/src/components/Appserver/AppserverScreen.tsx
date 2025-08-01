import * as pb from '@protos/v1/pb';
import { ButtonWithMenu } from '@renderer/components/common/Button';
import { Menu, MenuItem } from '@renderer/components/common/Button/ButtonWithMenu';
import { Divider } from '@renderer/components/common/Divider';
import { useAuth, useEvent, useGlobalMenu, useModal } from '@renderer/components/Contexts';
import { CalendarIcon, NewspaperIcon } from '@renderer/icons';
import AppserverService from '@renderer/services/appserver';
import { Appserver, AppserverRole, Channel, ReactSetState } from '@renderer/types';
import { JSX, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { AppserverContext, useAppserverContext } from './AppserverContext';
import AppserverHeader from './AppserverHeader';
import { ChannelContent } from './Channel/ChannelContent';
import RemoveChannelModal from './Channel/RemoveChannelModal';

const ChannelButton = ({
  children,
  setChannelId,
  selected,
  channel
}: {
  children: React.ReactNode;
  setChannelId: () => void;
  selected: boolean;
  channel: Channel;
}): JSX.Element => {
  const { appserver, setChannelListing } = useAppserverContext();
  const { setModalContent, showModal } = useModal();
  const { setMenu } = useGlobalMenu();

  return (
    <ButtonWithMenu
      internalType="custom"
      buttonColor="none"
      className={`flex justify-between mx-2 px-2 py-1 ${selected ? 'bg-gray-600 bg-opacity-50' : ''} rounded-lg`}
      contextMenuItems={
        <Menu>
          {appserver?.is_owner && (
            <MenuItem
              key="edit"
              onClick={() => {
                setModalContent(
                  <RemoveChannelModal channel={channel} setChannelListing={setChannelListing} />
                );
                showModal(true);
                setMenu(null);
              }}
            >
              Delete Channel
            </MenuItem>
          )}
        </Menu>
      }
      onClick={setChannelId}
    >
      {children}
    </ButtonWithMenu>
  );
};

const AppserverPanel = ({
  setChannelId,
  setContent
}: {
  setChannelId: ReactSetState<string>;
  setContent: ReactSetState<JSX.Element | undefined>;
}): JSX.Element => {
  const { channels } = useAppserverContext();

  const [selected, setSelected] = useState<string | undefined>(undefined);

  return (
    <div className="bg-gray-800 flex flex-col border-r border-gray-700 gap-3">
      <AppserverHeader />
      <ButtonWithMenu
        internalType="custom"
        buttonColor="none"
        className={`flex justify-between mx-2 px-2 py-1 ${selected === 'news-board' ? 'bg-indigo-600  bg-opacity-50' : ''} rounded-lg`}
        onClick={() => {
          setContent(<>news-board</>);
          setSelected('news-board');
        }}
        contextMenuItems={
          <Menu>
            <MenuItem key="news-board">biin</MenuItem>
          </Menu>
        }
      >
        <h1 className="text-white font-semibold text-md">News Board</h1>
        <NewspaperIcon />
      </ButtonWithMenu>
      <ButtonWithMenu
        internalType="custom"
        buttonColor="none"
        className={`flex justify-between mx-2 px-2 py-1 ${selected === 'calendar-content' ? 'bg-indigo-600 bg-opacity-50' : ''} rounded-lg`}
        onClick={() => {
          setContent(<>Calendar</>);
          setSelected('calendar-content');
        }}
        contextMenuItems={
          <Menu>
            <MenuItem key="calendar-content">biin</MenuItem>
          </Menu>
        }
      >
        <h1 className="text-white font-semibold text-md">Calendar</h1>
        <CalendarIcon />
      </ButtonWithMenu>

      <Divider className="mx-2 h-0.5" />

      {channels.map((channel) => (
        <ChannelButton
          key={channel.id}
          setChannelId={() => {
            setChannelId(channel.id);
            setContent(<ChannelContent channelId={channel.id} />);
            setSelected(channel.id);
          }}
          channel={channel}
          selected={selected === channel.id}
        >
          <h1 className="text-white font-semibold text-md">{channel.name}</h1>
        </ChannelButton>
      ))}
    </div>
  );
};

const AppserverScreen = (): JSX.Element => {
  const { tokenManager } = useAuth();
  const { appserverId } = useParams();
  const { emitter } = useEvent();

  const [appserverDetails, setAppserverDetails] = useState<Appserver | undefined>();
  const [roleListing, setRoleListing] = useState<AppserverRole[]>([]);
  const [, setChannelContentId] = useState<string>('');
  const [channelListing, setChannelListing] = useState<Channel[] | pb.api.v1.channel.IChannel[]>(
    []
  );

  const [content, setContent] = useState<JSX.Element | undefined>(undefined);

  useEffect(() => {
    if (!appserverId) return;
    // TODO: refactor getappserverdetails to return all server details instead
    // of having separate calls. the emitter must remain as is thought to get new notifications (ex: new channel)

    const fetchData = async (): Promise<void> => {
      const appserverService = new AppserverService(tokenManager);

      const response = await appserverService.getAppserverDetails(appserverId);
      const as = {
        id: response.data.data.id,
        name: response.data.data.name,
        is_owner: response.data.data.is_owner
      };

      setAppserverDetails(as);
      setRoleListing(response.data.data.roles);
      setChannelListing(response.data.data.channels);
    };

    fetchData();
    // new AppserverRequest(sendMessage).getAppserverDetails(appserverId);
    // // emitter.on('appserverDetails', (appserverDetails) => {
    // //   setAppserverDetails(appserverDetails);
    // // });

    emitter.on('channelListing', (channelListing) => {
      // TODO: add IF statement checker. it shouldn't update if the server isn't the one selected
      setChannelListing(channelListing);
    });

    // new AppserverRequest(sendMessage).getAppserverRoleListing(appserverId);
    // emitter.on('appserverRolesListing', (roleListing) => {
    //   setRoleListing(roleListing);
    // });

    // new AppserverRequest(sendMessage).getAppserverUserListing(appserverId);
    // emitter.on('appserverUserListing', (userListing) => {
    //   setUserListing(userListing);
    // });

    return (): void => {
      // emitter.off('appserverDetails');
      emitter.off('channelListing');
    };
  }, [appserverId]);

  return (
    <AppserverContext.Provider
      value={{
        appserver: appserverDetails,
        channels: channelListing,
        roles: roleListing,

        setChannelListing: setChannelListing,
        setRoleListing: setRoleListing
      }}
    >
      <AppserverPanel setChannelId={setChannelContentId} setContent={setContent} />
      <div>{content}</div>
    </AppserverContext.Provider>
  );
};

export default AppserverScreen;
