import { JSX } from 'react';
import { Nav } from './Nav';
import { Content } from './Content';

const Home = (): JSX.Element => {
  return (
    <div className="h-full flex">
      <Nav />
      <Content />
    </div>
  );
};

export default Home;
