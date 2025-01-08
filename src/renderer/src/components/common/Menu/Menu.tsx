import { Children, JSX } from 'react';

import { ReactSetState } from '@renderer/types';

import MenuItem from './MenuItem';
import React from 'react';
import classNames from 'classnames';

export type Position = {
  top: number;
  left: number;
};

type MenuProps = {
  children: React.ReactNode;
  setShow: ReactSetState<boolean>;
  ref?: React.ForwardedRef<HTMLDivElement>;
  position?: Position;
};

const addSetShow = (onClick: () => void, setShow: ReactSetState<boolean>) => (): void => {
  onClick();
  setShow(false);
};

const Menu = ({ children, setShow, ref, position }: MenuProps): JSX.Element => {
  const menuClass = classNames(
    'absolute mt-1 w-48 rounded-md bg-gray-800 shadow-lg z-50 ring-1 ring-black ring-opacity-5 focus:outline-none'
  );

  return (
    <div
      ref={ref}
      className={menuClass}
      style={{ top: position ? position.top : 0, left: position ? position.left : 0 }}
    >
      {Children.map(children, (child) => {
        if (React.isValidElement(child) && child.type === MenuItem) {
          return React.cloneElement(child, {
            onClick: addSetShow(child.props.onClick, setShow)
          });
        }
        return child;
      })}
    </div>
  );
};

export default Menu;
