import { JSX } from 'react';

import { useModal } from '@renderer/components/Contexts';
import ButtonWithMenu from '@renderer/components/common/Button/ButtonWithMenu/ButtonWithMenu';
import { MenuItem, Menu } from '@renderer/components/common/Button/ButtonWithMenu';

import { useAppserverContext } from './AppserverContext';
import { CreateChannelModal } from './Channel/CreateChannelModal';
import { CreateAppserverRoleModal } from './CreateAppserverRoleModal';

const AppserverHeader = (): JSX.Element => {
  const { appserver } = useAppserverContext();
  const { setModalContent, showModal } = useModal();
  return (
    <ButtonWithMenu
      className="py-2 w-full"
      menuItems={
        <Menu>
          {appserver && appserver.isOwner && (
            <>
              <MenuItem
                onClick={() => {
                  setModalContent(<CreateChannelModal appserverId={appserver.id as string} />);
                  showModal(true);
                }}
              >
                Create Channel
              </MenuItem>
              <MenuItem
                onClick={() => {
                  setModalContent(
                    <CreateAppserverRoleModal appserverId={appserver.id as string} />
                  );
                  showModal(true);
                }}
              >
                Create Role
              </MenuItem>
            </>
          )}
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

export default AppserverHeader;
