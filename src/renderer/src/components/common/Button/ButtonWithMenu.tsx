import { forwardRef, JSX, useCallback, useRef } from 'react';

import { ReactSetState } from '@renderer/types';

import Button, { ButtonProps } from './Button';

import { Menu } from '../Menu';
import { hideOnClickOutside } from '../utils';

interface ButtonWithMenuProps extends ButtonProps {
  menuItems: JSX.Element[];
  show?: boolean;
  setShow?: ReactSetState<boolean>; // will always be provided by decorator/wrapper
}

const ButtonWithMenu = forwardRef<HTMLDivElement, ButtonWithMenuProps>(
  ({ children, menuItems, show, setShow }: ButtonWithMenuProps, ref): JSX.Element => {
    const contextRef = useRef<HTMLDivElement>(null);

    const handle = useCallback(() => {
      if (setShow) setShow(true); // this will always be true because hideOnClickOutside will provide it
    }, []);

    return (
      <div className="relative inline-block text-left" ref={contextRef}>
        <Button onContextMenu={handle}>{children}</Button>

        {show && (
          <Menu ref={ref} setShow={setShow as ReactSetState<boolean>}>
            {menuItems}
          </Menu>
        )}
      </div>
    );
  }
);

ButtonWithMenu.displayName = 'ButtonWithMenu';

export default hideOnClickOutside(ButtonWithMenu);
