import * as pb from '@protos/v1/pb';
import { Appserver, AppserverRole, Channel, ReactSetState } from '@renderer/types';
import { createContext, use } from 'react';

type AppserverContextType = {
  appserver: Appserver | undefined;
  roles: AppserverRole[];
  channels: Channel[] | pb.api.v1.channel.IChannel[];

  setChannelListing: ReactSetState<Channel[] | pb.api.v1.channel.IChannel[]> | undefined;
  setRoleListing:
    | ReactSetState<AppserverRole[] | pb.api.v1.appserver_role.AppserverRole[]>
    | undefined;
};

export const AppserverContext = createContext<AppserverContextType>({
  appserver: undefined,
  roles: [],
  channels: [],

  setChannelListing: undefined,
  setRoleListing: undefined
});

export const useAppserverContext = (): AppserverContextType => {
  const ctx = use(AppserverContext);
  return ctx;
};
