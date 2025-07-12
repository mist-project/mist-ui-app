import { JSX } from 'react';
import { useAppserverContext } from '../AppserverContext';

type ChannelContentProps = {
  channelId: string;
};

export const ChannelContent = ({ channelId }: ChannelContentProps): JSX.Element => {
  const { roles, users } = useAppserverContext();

  return (
    <div className="flex flex-1 bg-gray-900">
      <div className="flex-grow">Channel: {channelId}</div>
      <div className="w-[240px] bg-gray-950 flex flex-col">
        <div className="h-1/4">
          <div className="font-bold">Roles</div>
          <div>
            {roles.map((role) => (
              <div key={role.id}>{role.name}</div>
            ))}
          </div>
        </div>
        <div className="h-3/4">
          <div className="font-bold">Users</div>
          {users.map((user) => (
            <div key={user.appuser.id}>{user.appuser.username}</div>
          ))}
        </div>
      </div>
    </div>
  );
};
