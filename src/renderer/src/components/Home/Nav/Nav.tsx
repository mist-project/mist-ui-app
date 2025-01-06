import { JSX, useCallback, useEffect, useState } from 'react';

import * as pb from '@protos/v1/pb';
import { Button, ButtonWithMenu } from '@renderer/components/common/Button';
import MenuItem from '@renderer/components/common/Menu/MenuItem';
import { useEvent, useIOSocket, useModal } from '@renderer/components/Contexts';
import AppserverRequest from '@renderer/requests/appserver';

import CreateAppserverModal from './CreateAppserverModal';
import DeleteAppserverModal from './DeleteAppserverModal';

type AppserverButtonsProps = {
  servers: pb.api.v1.messages.IAppserverAndSub[];
};

const Nav = (): JSX.Element => {
  const { sendMessage } = useIOSocket();
  const { emitter } = useEvent();
  const { showModal, setModalContent } = useModal();

  const [servers, setServers] = useState<pb.api.v1.messages.IAppserverAndSub[]>([]);

  useEffect(() => {
    new AppserverRequest(sendMessage).getAppserverListing();
    emitter.on('appserverListing', (listing) => {
      if (listing.appservers) {
        setServers(listing.appservers);
      }
    });
  }, []);

  const AppserverButtons = useCallback(({ servers }: AppserverButtonsProps): JSX.Element => {
    return (
      <div>
        {servers.map((s): JSX.Element => {
          return (
            <div key={s.appserver?.id} className="mb-[10px]">
              <ButtonWithMenu
                onClick={() => {}}
                menuItems={[AppServerMenuItems(s.appserver as pb.api.v1.messages.IAppserver)]}
              >
                {s.appserver?.name}
              </ButtonWithMenu>
            </div>
          );
        })}
      </div>
    );
  }, []);

  const AppServerMenuItems = useCallback(
    (appserver: pb.api.v1.messages.IAppserver): JSX.Element => {
      return (
        <MenuItem
          key={`delete-${appserver?.id}`}
          onClick={() => {
            setModalContent(
              <DeleteAppserverModal sendMessage={sendMessage} appserver={appserver} />
            );
            showModal(true);
          }}
        >
          Delete
        </MenuItem>
      );
    },
    []
  );

  //TODO Remove opacity in the future for a color
  return (
    <div className="h-full w-[75px] bg-black bg-opacity-30">
      {<AppserverButtons servers={servers} />}
      <div>
        <Button
          onClick={() => {
            setModalContent(<CreateAppserverModal sendMessage={sendMessage} />);
            showModal(true);
          }}
        >
          Create
        </Button>
      </div>
    </div>
  );
};

export default Nav;
