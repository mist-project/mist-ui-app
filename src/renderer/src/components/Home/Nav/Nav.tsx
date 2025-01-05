import { JSX, useEffect, useState } from 'react';

import * as pb from '@protos/v1/pb';
import { Button } from '@renderer/components/common/Button';
import AppserverRequest from '@renderer/requests/appserver';
import { useEvent, useIOSocket } from '@renderer/components/Contexts';

const Nav = (): JSX.Element => {
  const { sendMessage } = useIOSocket();
  const { emitter } = useEvent();
  const [servers, setServers] = useState<pb.api.v1.messages.IAppserverAndSub[]>([]);

  useEffect(() => {
    new AppserverRequest(sendMessage).userServers();
    emitter.on('serverListing', (listing) => {
      console.log(listing);
      if (listing.appservers) {
        setServers(listing.appservers);
      }
    });
  }, []);

  const renderServers = (): JSX.Element => {
    return (
      <div>
        {servers.map((s): JSX.Element => {
          return (
            <div key={s.appserver?.id} className="mb-[10px]">
              <Button onClick={() => {}}>{s.appserver?.name}</Button>
            </div>
          );
        })}
      </div>
    );
  };

  //TODO Remove opacity in the future for a color
  return <div className="h-full w-[75px] bg-black bg-opacity-30">{renderServers()}</div>;
};

export default Nav;
