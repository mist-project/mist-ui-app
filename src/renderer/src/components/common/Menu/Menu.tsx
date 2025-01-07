import { Children, JSX } from 'react';

import { ReactSetState } from '@renderer/types';

import MenuItem from './MenuItem';
import React from 'react';

type MenuProps = {
  children: React.ReactNode;
  setShow: ReactSetState<boolean>;
  ref: React.ForwardedRef<HTMLDivElement>;
};

const addSetShow = (onClick: () => void, setShow: ReactSetState<boolean>) => (): void => {
  onClick();
  setShow(false);
};

const Menu = ({ ref, children, setShow }: MenuProps): JSX.Element => {
  return (
    <div
      ref={ref}
      className="menu absolute left-0 mt-2 w-48 rounded-md bg-gray-800 shadow-lg  z-50 ring-1 ring-black ring-opacity-5 focus:outline-none"
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
