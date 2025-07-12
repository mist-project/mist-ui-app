import { Menu, MenuItem } from '@renderer/components/common/Button/ButtonWithMenu';
import ButtonWithMenu from '@renderer/components/common/Button/ButtonWithMenu/ButtonWithMenu';
import { useGlobalMenu, useModal } from '@renderer/components/Contexts';
import { EllipsisVerticalIcon } from '@renderer/icons';
import { JSX } from 'react';

import { useAppserverContext } from './AppserverContext';
import { CreateChannelModal } from './Channel/CreateChannelModal';
import { CreateAppserverRoleModal } from './CreateAppserverRoleModal';

const AppserverHeader = (): JSX.Element => {
  const { appserver } = useAppserverContext();
  const { setModalContent, showModal } = useModal();
  const { setMenu } = useGlobalMenu();

  return (
    <ButtonWithMenu
      internalType="custom"
      menuItems={
        <Menu>
          {appserver && appserver.is_owner && (
            <>
              <MenuItem
                onClick={() => {
                  setModalContent(<CreateChannelModal appserverId={appserver.id as string} />);
                  showModal(true);
                  setMenu(null);
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
                  setMenu(null);
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
      <div className="flex justify-between p-2 border-b border-gray-700">
        <h1 className="text-white font-semibold text-lg"> {appserver?.name}</h1>
        <EllipsisVerticalIcon />
      </div>
    </ButtonWithMenu>
  );
};

export default AppserverHeader;
