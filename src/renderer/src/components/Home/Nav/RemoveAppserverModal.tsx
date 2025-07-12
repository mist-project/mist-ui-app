import { JSX } from 'react';

import { CommonFooter, CommonHeader } from '@renderer/components/common/Modal';
import { useAuth } from '@renderer/components/Contexts';
import AppserverService from '@renderer/services/appserver';
import { Appserver } from '@renderer/types';

type RemoveAppserverProps = {
  appserver: Appserver;
  updateServers: () => void;
};

const RemoveAppserver = ({ appserver, updateServers }: RemoveAppserverProps): JSX.Element => {
  const { tokenManager } = useAuth();

  return (
    <div className="text-center flex flex-col gap-3">
      <CommonHeader title={`Leave "${appserver.name}"`} />
      {/* TODO: need to replace text for when user is owner */}
      <p>Are you sure you want to leave this server?</p>
      <CommonFooter
        order="cancel-first"
        accept={async (): Promise<void> => {
          await new AppserverService(tokenManager).deleteAppserver(appserver.id as string);
          updateServers();
        }}
        confirmText="Leave"
        confirmButtonClassname="bg-red-900 hover:bg-red-700 text-white"
        cancelText="Cancel"
        cancelButtonClassname="bg-gray-700 hover:bg-gray-600 text-white"
      />
    </div>
  );
};

export default RemoveAppserver;
