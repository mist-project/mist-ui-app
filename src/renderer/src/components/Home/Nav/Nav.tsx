import { JSX, useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import * as pb from '@protos/v1/pb';
import { Button, ButtonWithMenu } from '@renderer/components/common/Button';
import MenuItem from '@renderer/components/common/Button/ButtonWithMenu/MenuItem';
import { Menu } from '@renderer/components/common/Button/ButtonWithMenu';
import { useAuth, useEvent, useIOSocket, useModal } from '@renderer/components/Contexts';
import { WSConnectionStatus } from '@renderer/components/Contexts/WebSocket/IOSocket/IOContext';
import AppserverRequest from '@renderer/requests/appserver';

import AddAppserverModal from './AddAppserverModal';
import RemoveAppserver from './RemoveAppserverModal';

type AppserverButtonsProps = {
  servers: pb.api.v1.server.IAppserverAndSub[];
};

const Nav = (): JSX.Element => {
  const { sendMessage, connectionState } = useIOSocket();
  const { emitter } = useEvent();
  const { showModal, setModalContent } = useModal();
  const { logout } = useAuth();
  const navigate = useNavigate();

  const [servers, setServers] = useState<pb.api.v1.server.IAppserverAndSub[]>([]);

  useEffect(() => {
    if (connectionState === WSConnectionStatus.Connected) {
      new AppserverRequest(sendMessage).getAppserverListing();
      emitter.on('appserverListing', (listing) => {
        if (listing.appservers) {
          setServers(listing.appservers);
        }
      });
    }
  }, [connectionState]);

  const AppserverButtons = useCallback(({ servers }: AppserverButtonsProps): JSX.Element => {
    return (
      <div>
        {servers.map((s): JSX.Element => {
          return (
            <div key={s.appserver?.id} className="mb-[10px]">
              <ButtonWithMenu
                onClick={() => {
                  navigate(`/appserver/${s.appserver?.id}`);
                }}
                contextMenuItems={AppServerMenuItems(s.appserver as pb.api.v1.server.IAppserver)}
              >
                {s.appserver?.name}
              </ButtonWithMenu>
            </div>
          );
        })}
      </div>
    );
  }, []);

  const AppServerMenuItems = useCallback((appserver: pb.api.v1.server.IAppserver): JSX.Element => {
    return (
      <Menu>
        <MenuItem
          key={`delete-${appserver?.id}`}
          onClick={() => {
            setModalContent(<RemoveAppserver appserver={appserver} />);
            showModal(true);
          }}
        >
          Delete
        </MenuItem>
      </Menu>
    );
  }, []);

  //TODO Remove opacity in the future for a color
  return (
    <div className="h-full w-[72px] bg-black bg-opacity-30 p-1">
      {<AppserverButtons servers={servers} />}
      <div className="flex flex-col gap-2">
        <Button
          onClick={() => {
            setModalContent(<AddAppserverModal />);
            showModal(true);
          }}
        >
          (+)
        </Button>

        <Button
          onClick={() => {
            logout();
          }}
        >
          Logout
        </Button>
      </div>
    </div>
  );
};

export default Nav;
