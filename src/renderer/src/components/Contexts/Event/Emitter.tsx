import { createContext, JSX, use, useState } from 'react';
import mitt, { Emitter, EventType } from 'mitt';

interface EmitterContextType {
  emitter: Emitter<Record<EventType, unknown>>;
}
// Create a context
const EventEmitterContext = createContext<EmitterContextType | undefined>(undefined);

// Custom hook to use the event bus
export const useEmitter = (): Emitter => {
  const context = use(EventEmitterContext);
  return context;
};

// Create a provider component
export const EventEmitterProvider = ({ children }: { children: React.ReactNode }): JSX.Element => {
  const [emitter] = useState(mitt());

  return (
    <EventEmitterContext.Provider value={{ emitter }}>{children}</EventEmitterContext.Provider>
  );
};
