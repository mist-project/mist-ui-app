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
      className="flex items-center gap-3 px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-gray-100 transition-colors duration-150"
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
