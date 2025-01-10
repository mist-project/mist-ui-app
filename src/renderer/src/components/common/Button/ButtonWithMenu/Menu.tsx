import React, { JSX } from 'react';

import { ReactSetState } from '@renderer/types';
import classNames from 'classnames';

import { Position } from './constants';
import { useMenuContext } from './MenuContext';

type MenuProps = {
  children: React.ReactNode;
  setShowMenu?: ReactSetState<boolean>;
  ref?: React.ForwardedRef<HTMLUListElement>;
  position?: Position;
};

const Menu = ({ children }: MenuProps): JSX.Element => {
  const { position, ref } = useMenuContext();
  const menuClass = classNames(
    'absolute mt-1 w-48 rounded-md bg-gray-800 shadow-lg z-50 ring-1 ring-black ring-opacity-5 focus:outline-none'
  );

  return (
    <ul
      ref={ref}
      className={menuClass}
      style={{ top: position ? position.top : 0, left: position ? position.left : 0 }}
    >
      {children}
    </ul>
  );
};

export default Menu;
