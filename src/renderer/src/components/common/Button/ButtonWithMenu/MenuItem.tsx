import { JSX } from 'react';
import { useMenuContext } from './MenuContext';

interface MenuItemProps {
  children: React.ReactNode;
  onClick?: () => void;
}

const MenuItem = ({ children, onClick, ...props }: MenuItemProps): JSX.Element => {
  const { setShowMenu } = useMenuContext();

  return (
    <li
      {...props}
      className="px-4 py-2  hover:bg-gray-700 cursor-pointer first:rounded-t last:rounded-b"
      onClick={() => {
        if (onClick) onClick();
        setShowMenu(false);
      }}
    >
      {children}
    </li>
  );
};

export default MenuItem;
