import { JSX, useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import MenuItem from '@renderer/components/common/Button/ButtonWithMenu/MenuItem';
import { Menu } from '@renderer/components/common/Button/ButtonWithMenu';
import { WSConnectionStatus } from '@renderer/components/Contexts/WebSocket/IOSocket/IOContext';
import { Button, ButtonWithMenu } from '@renderer/components/common/Button';
import { useAuth, useIOSocket, useModal } from '@renderer/components/Contexts';
import AppserverService, { AppserverListingResponse } from '@renderer/services/appserver';
import { Appserver } from '@renderer/types';

import AddAppserverModal from './AddAppserverModal';
import RemoveAppserver from './RemoveAppserverModal';

type AppserverButtonsProps = {
  servers: AppserverListingResponse[];
};

const Nav = (): JSX.Element => {
  const { connectionState } = useIOSocket();
  const { showModal, setModalContent } = useModal();
  const { logout, tokenManager } = useAuth();
  const navigate = useNavigate();

  const [servers, setServers] = useState<AppserverListingResponse[]>([]);

  const loadServers = useCallback(async (): Promise<void> => {
    const response = await new AppserverService(tokenManager).getAppserverListing();
    setServers(response.data.data);
  }, []);

  useEffect(() => {
    if (connectionState === WSConnectionStatus.Connected) {
      loadServers();
    }
  }, [connectionState]);

  const AppserverButtons = useCallback(({ servers }: AppserverButtonsProps): JSX.Element => {
    return (
      <>
        {servers.map((s): JSX.Element => {
          return (
            <div key={s.appserver?.id}>
              <ButtonWithMenu
                internalType="custom"
                onClick={() => {
                  navigate(`/appserver/${s.appserver?.id}`);
                }}
                contextMenuItems={AppServerMenuItems(s.appserver as Appserver)}
                // TODO: replace overflow-hidden with react-textfit
                className={`
                  w-12 h-12 rounded-full bg-gray-700 flex items-center justify-center cursor-pointer
                  transition-all duration-200 font-semibold text-lg text-white
                  hover:rounded-2xl hover:bg-indigo-500 relative group overflow-hidden
                `}
              >
                {s.appserver?.name?.split(' ').map((word) => {
                  return word[0].toUpperCase();
                })}
              </ButtonWithMenu>
            </div>
          );
        })}
      </>
    );
  }, []);

  const AppServerMenuItems = useCallback((appserver: Appserver): JSX.Element => {
    return (
      <Menu>
        <MenuItem
          key={`delete-${appserver?.id}`}
          onClick={() => {
            setModalContent(
              <RemoveAppserver
                appserver={appserver}
                updateServers={() => {
                  loadServers();
                }}
              />
            );
            showModal(true);
          }}
        >
          {/* TODO: need to replace text for when user is owner */}
          Leave Server
        </MenuItem>
      </Menu>
    );
  }, []);

  //TODO Remove opacity in the future for a color
  return (
    <div className="bg-gray-800 p-3 flex flex-col gap-2 border-r border-gray-700">
      {<AppserverButtons servers={servers} />}

      {/* dash inbetween servers and add action */}
      <div className="w-full h-0.5 bg-gray-600 rounded my-1" />

      {/* <div className="flex flex-col gap-2"> */}
      <Button
        internalType="custom"
        onClick={() => {
          setModalContent(
            <AddAppserverModal
              updateServers={() => {
                loadServers();
              }}
            />
          );
          showModal(true);
        }}
        className={`
          w-12 h-12 rounded-full bg-gray-700 flex items-center justify-center cursor-pointer
          transition-all duration-200 font-semibold text-lg text-white
          hover:rounded-2xl hover:bg-green-600 relative group overflow-hidden
        `}
      >
        (+)
      </Button>

      <Button
        internalType="custom"
        onClick={() => {
          logout();
        }}
        className={`
          w-12 h-8 bg-red-900 flex items-center justify-center cursor-pointer
          transition-all duration-200 font-semibold text-xs text-white
         hover:bg-red-600 relative group overflow-hidden
        `}
      >
        Logout
      </Button>
    </div>
  );
};

export default Nav;
