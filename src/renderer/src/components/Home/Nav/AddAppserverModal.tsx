import { Button } from '@renderer/components/common/Button';
import { InputText } from '@renderer/components/common/Input';
import { CommonFooter, CommonHeader } from '@renderer/components/common/Modal';
import { useAuth } from '@renderer/components/Contexts';
import AppserverService from '@renderer/services/appserver';
import AppserverSubService from '@renderer/services/appserverSub';
import { ReactSetState } from '@renderer/types';
import { JSX, useState } from 'react';

type CreateServerProps = {
  updateServers: () => void;
  setContent?: ReactSetState<JSX.Element | undefined>;
};

const JoinServer = ({ updateServers, setContent }: CreateServerProps): JSX.Element => {
  const { tokenManager } = useAuth();

  const [serverId, setServerId] = useState<string>('');

  return (
    <div className="flex flex-col gap-3">
      <CommonHeader title="Join Server" />
      <div className="mx-5">
        <InputText
          label="Server ID TODO: CHANGE TO INVITE SHORT TOKEN"
          required
          value={serverId}
          setValue={setServerId}
          placeholder="server id"
          className="w-full"
        />
      </div>

      <CommonFooter
        accept={async () => {
          await new AppserverSubService(tokenManager).joinServer(serverId);
          updateServers();
        }}
        cancel={() => {
          if (setContent) {
            setContent(<BaseView updateServers={updateServers} setContent={setContent} />);
          }
        }}
        confirmText="Join"
        confirmButtonClassname="bg-green-900 hover:bg-green-700 text-white"
        cancelText="Back"
        cancelButtonClassname="bg-gray-700 hover:bg-gray-600 text-white"
        justifyContent="justify-between"
      />
    </div>
  );
};

const CreateServer = ({ updateServers, setContent }: CreateServerProps): JSX.Element => {
  const { tokenManager } = useAuth();
  const [serverName, setServerName] = useState<string>('');

  return (
    <div className="flex flex-col gap-3">
      <CommonHeader title="Create Server" />
      <div className="mx-5">
        <InputText
          label="Server Name"
          required
          value={serverName}
          setValue={setServerName}
          placeholder="name"
          className="w-full"
        />
      </div>
      <CommonFooter
        accept={async () => {
          await new AppserverService(tokenManager).createAppserver(serverName);
          updateServers();
        }}
        cancel={() => {
          if (setContent) {
            setContent(<BaseView updateServers={updateServers} setContent={setContent} />);
          }
        }}
        confirmText="Create"
        confirmButtonClassname="bg-green-900 hover:bg-green-700 text-white"
        cancelText="Back"
        cancelButtonClassname="bg-gray-700 hover:bg-gray-600 text-white"
        justifyContent="justify-between"
      />
    </div>
  );
};

const BaseView = ({ updateServers, setContent }: CreateServerProps): JSX.Element => {
  return (
    <div className="flex flex-col gap-5 mb-5">
      <CommonHeader
        title="Add Server"
        description="Create your own server or join an existing one."
      />
      <div className="flex flex-col gap-3 mx-12">
        <Button
          internalType="custom"
          buttonColor="default"
          onClick={() => {
            if (setContent) {
              setContent(<CreateServer updateServers={updateServers} setContent={setContent} />);
            }
          }}
          className="bg-gray-700 hover:bg-gray-600 text-white font-semibold text-lg py-2 px-4 rounded"
        >
          Create a server
        </Button>
        <Button
          internalType="custom"
          onClick={() => {
            if (setContent) {
              setContent(<JoinServer updateServers={updateServers} setContent={setContent} />);
            }
          }}
          className="bg-gray-700 hover:bg-gray-600 text-white font-semibold text-lg py-2 px-4 rounded"
        >
          Join a server
        </Button>
      </div>
    </div>
  );
};

const AddAppserverModal = ({ updateServers }: CreateServerProps): JSX.Element => {
  const [content, setContent] = useState<JSX.Element>();

  return (
    <>
      {!content && <BaseView updateServers={updateServers} setContent={setContent} />}
      {content}
    </>
  );
};

export default AddAppserverModal;

// <CommonFooter
//   accept={async () => {
//     await new AppserverSubService(tokenManager).joinServer(serverId);
//     updateServers();
//   }}
// />
