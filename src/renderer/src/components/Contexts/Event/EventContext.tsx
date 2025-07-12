import * as pb from '@protos/v1/pb';
import mitt, { Emitter } from 'mitt';
import { createContext, JSX, use, useState } from 'react';

export type Events = {
  test: Uint8Array<ArrayBufferLike>;
  socketToken: string;

  // UPDATES
  // ----- SERVER -----
  appserverListing: pb.api.v1.appserver.Appserver[];

  // ----- SERVER USERS -----

  // ----- SERVER ROLES -----

  // ----- CHANNELS -----
  channelListing: pb.api.v1.channel.IChannel[];
};

type EmitterContextType = {
  emitter: Emitter<Events>;
};
// Create a context
const EventEmitterContext = createContext<EmitterContextType | undefined>(undefined);

// Custom hook to use the event bus
export const useEvent = (): EmitterContextType => {
  const context = use(EventEmitterContext);
  if (!context) {
    throw new Error('useEvent must be used within an EventContext provider.');
  }
  return context;
};

// Create a provider component
export const EventEmitterProvider = ({ children }: { children: React.ReactNode }): JSX.Element => {
  const [emitter] = useState(mitt<Events>());

  return (
    <EventEmitterContext.Provider value={{ emitter }}>{children}</EventEmitterContext.Provider>
  );
};
