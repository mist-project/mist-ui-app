import { JSX, useState } from 'react';

import { useModal } from '@renderer/components/Contexts';
import ButtonWithMenu from '@renderer/components/common/Button/ButtonWithMenu/ButtonWithMenu';
import { MenuItem, Menu } from '@renderer/components/common/Button/ButtonWithMenu';

import { useAppserverContext } from './AppserverContext';
import { CreateChannelModal } from './Channel/CreateChannelModal';
import { CreateAppserverRoleModal } from './CreateAppserverRoleModal';
import { ChevronDownIcon, XMarkIcon } from '@renderer/icons';

const AppserverHeader = (): JSX.Element => {
  const { appserver } = useAppserverContext();
  const { setModalContent, showModal } = useModal();

  const [toggleChevronOpen, setToggleChevronOpen] = useState<boolean>(false);

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
                  setToggleChevronOpen(false);
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
                  setToggleChevronOpen(false);
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
      onOpenChange={setToggleChevronOpen}
      buttonColor="none"
    >
      <div className="flex justify-between p-2 border-b border-gray-700">
        <h1 className="text-white font-semibold text-lg"> {appserver?.name}</h1>
        {toggleChevronOpen ? <XMarkIcon /> : <ChevronDownIcon />}
      </div>
    </ButtonWithMenu>
  );
};

export default AppserverHeader;
