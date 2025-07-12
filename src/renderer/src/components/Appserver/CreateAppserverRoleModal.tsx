import * as pb from '@protos/v1/pb';
import { InputText } from '@renderer/components/common/Input';
import { CommonFooter, CommonHeader } from '@renderer/components/common/Modal';
import { useAuth } from '@renderer/components/Contexts';
import AppserverRoleService from '@renderer/services/appserverRole';
import { AppserverRole, ReactSetState } from '@renderer/types';
import { JSX, useState } from 'react';

type CreateAppserverRoleModalProps = {
  appserverId: string;
  setRoleListing:
    | ReactSetState<AppserverRole[] | pb.api.v1.appserver_role.AppserverRole[]>
    | undefined;
};

export const CreateAppserverRoleModal = ({
  appserverId,
  setRoleListing
}: CreateAppserverRoleModalProps): JSX.Element => {
  const { tokenManager } = useAuth();

  const [roleName, setRoleName] = useState<string>('');

  return (
    <div className="flex flex-col gap-3">
      <CommonHeader title="Create Role" />
      <div className="mx-5">
        <InputText
          label="Role Name"
          required
          value={roleName}
          setValue={setRoleName}
          placeholder="name"
          className="w-full"
        />
      </div>
      <CommonFooter
        accept={async () => {
          const response = await new AppserverRoleService(tokenManager).createAppserverRole(
            roleName,
            appserverId
          );

          if (setRoleListing) setRoleListing((prev) => [...prev, response.data.data]);
        }}
        confirmText="Create"
        confirmButtonClassname="bg-green-900 hover:bg-green-700 text-white"
        cancelText="Cancel  "
        cancelButtonClassname="bg-gray-700 hover:bg-gray-600 text-white"
        justifyContent="justify-between"
      />
    </div>
  );
};
