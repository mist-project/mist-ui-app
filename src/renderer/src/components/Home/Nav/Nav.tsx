import { create, toBinary } from '@bufbuild/protobuf';

import { Button } from '@renderer/components/common/Button';
import { useEvent } from '@renderer/components/Contexts';

import { JSX } from 'react';

import { UpdateJwtTokenSchema } from '@protos/v1/auth_pb';

const dummyServer = ['Server 1', 'Server 2'];

const Nav = (): JSX.Element => {
  const { emitter } = useEvent();

  const renderServers = (): JSX.Element => {
    return (
      <div>
        {dummyServer.map((s): JSX.Element => {
          return (
            <div key={s}>
              <Button
                onClick={() => {
                  const tokenMessage = create(UpdateJwtTokenSchema, {
                    access: s
                  });
                  const bytes = toBinary(UpdateJwtTokenSchema, tokenMessage);
                  emitter.emit('test', bytes);
                }}
              >
                {s}
              </Button>
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
