import { ReactSetState } from '@renderer/types';
import classNames from 'classnames';
import React, { JSX } from 'react';

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
    'absolute top-full left-0 mt-2 py-2 w-48 bg-gray-800 rounded-lg shadow-2xl border border-gray-700 z-50'
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
