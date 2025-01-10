import { createContext, use } from 'react';

import * as pb from '@protos/v1/pb';

type AppserverContextType = {
  appserver: pb.api.v1.server.Appserver;
};

export const AppserverContext = createContext<AppserverContextType>({
  appserver: new pb.api.v1.server.Appserver()
});

export const useAppserverContext = (): AppserverContextType => {
  const ctx = use(AppserverContext);
  return ctx;
};
