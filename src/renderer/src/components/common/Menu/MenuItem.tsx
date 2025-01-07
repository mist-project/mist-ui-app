import { JSX } from 'react';

interface MenuItemProps {
  children: React.ReactNode;
  onClick?: () => void;
}

const MenuItem = ({ children, ...props }: MenuItemProps): JSX.Element => {
  return (
    <div
      {...props}
      className="px-4 py-2  hover:bg-gray-700 cursor-pointer first:rounded-t last:rounded-b"
    >
      {children}
    </div>
  );
};

export default MenuItem;
