import { JSX } from 'react';

import { Button } from '@renderer/components/common/Button';

const dummyServer = ['Server 1', 'Server 2'];

const Nav = (): JSX.Element => {
  const renderServers = (): JSX.Element => {
    return (
      <div>
        {dummyServer.map((s): JSX.Element => {
          return (
            <div key={s}>
              <Button onClick={() => {}}>{s}</Button>
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
