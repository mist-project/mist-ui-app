import { createContext, use } from 'react';

import * as pb from '@protos/v1/pb';
import { Appserver, AppserverRole, Channel } from '@renderer/types';

type AppserverContextType = {
  appserver: Appserver | undefined;
  users: pb.api.v1.appserver.IAppuserAndSub[];
  roles: AppserverRole[];
  channels: Channel[];
};

export const AppserverContext = createContext<AppserverContextType>({
  appserver: undefined,
  users: [],
  roles: [],
  channels: []
});

export const useAppserverContext = (): AppserverContextType => {
  const ctx = use(AppserverContext);
  return ctx;
};
