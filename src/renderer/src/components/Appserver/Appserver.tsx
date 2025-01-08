import { JSX } from 'react';
import { useParams } from 'react-router-dom';

import { Divider } from '../common/Divider';
import ButtonWithMenu from '../common/Button/ButtonWithMenu';
import { MenuItem } from '../common/Menu';

const dummyChannel = ['channel one', 'channel two'];

const AppserverHeader = (): JSX.Element => {
  return (
    <div className="my-2 mx-2 pb-1">
      <ButtonWithMenu menuItems={[]} buttonColor="none">
        SERVER NAME
      </ButtonWithMenu>
    </div>
  );
};

const ChannelButton = ({ children }: { children: React.ReactNode }): JSX.Element => {
  return (
    <ButtonWithMenu
      menuItems={[<MenuItem key="hello">left</MenuItem>]}
      contextMenuItems={[<MenuItem key="boom">right</MenuItem>]}
    >
      {children}
    </ButtonWithMenu>
  );
};

const AppserverPanel = (): JSX.Element => {
  return (
    <div>
      <AppserverHeader />
      <Divider />
      <div className="flex flex-col gap-2 mt-2">
        {dummyChannel.map((channel) => (
          <ChannelButton key={channel}>channel</ChannelButton>
        ))}
      </div>
    </div>
  );
};

const Appserver = (): JSX.Element => {
  const { appserverId } = useParams();

  return (
    <div className="flex w-full">
      <div className="w-[250px] border-r-2">
        <AppserverPanel />
      </div>
      <div className="flex-grow border p-2">Content: {appserverId}</div>
    </div>
  );
};

export default Appserver;
