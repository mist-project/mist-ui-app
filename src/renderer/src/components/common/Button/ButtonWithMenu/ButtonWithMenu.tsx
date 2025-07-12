import React, { JSX, useState, useEffect, useRef } from 'react';

import Button, { ButtonProps } from '../Button';
import { MenuContext } from './MenuContext';
import { Position } from './constants';

interface ButtonWithMenuProps extends ButtonProps {
  menuItems?: React.ReactNode;
  contextMenuItems?: JSX.Element;
  externalCloseCallback?: () => void;
  onOpenChange?: (open: boolean) => void;
}

const ButtonWithMenu = ({
  menuItems,
  contextMenuItems,
  children,
  onOpenChange,
  ...props
}: ButtonWithMenuProps): JSX.Element => {
  const [showMenu, setShowMenu] = useState(false);
  const [showContextMenu, setShowContextMenu] = useState(false);
  const [position, setPosition] = useState<Position>({ top: 0, left: 0 });

  const buttonRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLUListElement>(null);
  const contextMenuRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent): void => {
      if (!(event.target instanceof Node)) return;

      const clickedOutsideMenu =
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target);

      const clickedOutsideContextMenu =
        contextMenuRef.current &&
        !contextMenuRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target);

      if (showMenu && clickedOutsideMenu) {
        setShowMenu(false);
        if (onOpenChange) onOpenChange(false);
      }

      if (showContextMenu && clickedOutsideContextMenu && event.button === 0) {
        setShowContextMenu(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return (): void => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showMenu, showContextMenu, onOpenChange]);

  const handleMenu = (event: React.MouseEvent<HTMLButtonElement>): void => {
    event.preventDefault();
    const rect = event.currentTarget.getBoundingClientRect();
    const willOpen = !showMenu;

    setPosition({
      top: rect.bottom,
      left: rect.left
    });

    setShowMenu(willOpen);
    setShowContextMenu(false);

    if (onOpenChange) onOpenChange(willOpen);
  };

  const handleContextMenu = (event: React.MouseEvent<HTMLButtonElement>): void => {
    event.preventDefault();

    setPosition({
      top: event.clientY,
      left: event.clientX
    });

    setShowContextMenu(true);
    setShowMenu(false);
    if (onOpenChange) onOpenChange(false);
  };

  return (
    <>
      <Button ref={buttonRef} onClick={handleMenu} onContextMenu={handleContextMenu} {...props}>
        {children}
      </Button>

      {showMenu && (
        <MenuContext.Provider
          value={{
            position,
            setShowMenu,
            ref: menuRef
          }}
        >
          {menuItems}
        </MenuContext.Provider>
      )}

      {showContextMenu && (
        <MenuContext.Provider
          value={{
            position,
            setShowMenu: setShowContextMenu,
            ref: contextMenuRef
          }}
        >
          {contextMenuItems}
        </MenuContext.Provider>
      )}
    </>
  );
};

export default ButtonWithMenu;
