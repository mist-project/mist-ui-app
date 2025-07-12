import React, { JSX, useRef } from 'react';
import Button, { ButtonProps } from '../Button';
import { useGlobalMenu } from '@renderer/components/Contexts/Menu/MenuContext';
import { useId } from 'react';

interface ButtonWithMenuProps extends ButtonProps {
  menuItems?: JSX.Element;
  contextMenuItems?: JSX.Element;
}

const ButtonWithMenu = ({
  menuItems,
  contextMenuItems,
  children,
  ...props
}: ButtonWithMenuProps): JSX.Element => {
  const id = useId(); // uniquely identify this button
  const buttonRef = useRef<HTMLButtonElement>(null);
  const { menu, setMenu } = useGlobalMenu();

  const handleMouseDown = (event: React.MouseEvent<HTMLButtonElement>): void => {
    if (event.button !== 0) return; // left-click only
    event.preventDefault();

    const rect = event.currentTarget.getBoundingClientRect();
    const isAlreadyOpen = menu?.type === 'menu' && menu?.id === id;

    if (isAlreadyOpen) {
      setMenu(null);
    } else {
      setMenu({
        content: menuItems ?? null,
        position: { top: rect.bottom, left: rect.left },
        type: 'menu',
        id
      });
    }
  };

  const handleContextMenu = (event: React.MouseEvent<HTMLButtonElement>): void => {
    event.preventDefault();

    setMenu({
      content: contextMenuItems ?? null,
      position: { top: event.clientY, left: event.clientX },
      type: 'context',
      id
    });
  };

  return (
    <Button
      ref={buttonRef}
      onMouseDown={handleMouseDown}
      onContextMenu={handleContextMenu}
      {...props}
    >
      {children}
    </Button>
  );
};

export default ButtonWithMenu;
