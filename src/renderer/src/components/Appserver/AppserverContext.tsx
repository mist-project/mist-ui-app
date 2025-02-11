import { createContext, use } from 'react';

import * as pb from '@protos/v1/pb';

type AppserverContextType = {
  appserver: pb.api.v1.appserver.IAppserver | undefined;
  roles: pb.api.v1.appserver.IAppserverRole[];
  channels: pb.api.v1.channel.IChannel[];
};

export const AppserverContext = createContext<AppserverContextType>({
  appserver: new pb.api.v1.appserver.Appserver(),
  roles: [],
  channels: []
});

export const useAppserverContext = (): AppserverContextType => {
  const ctx = use(AppserverContext);
  return ctx;
};
