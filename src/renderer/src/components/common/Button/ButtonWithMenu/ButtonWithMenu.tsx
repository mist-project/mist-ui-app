import React, { JSX, useState, useEffect, useRef } from 'react';

import Button, { ButtonProps } from '../Button';
import { MenuContext } from './MenuContext';
import { Position } from './constants';

interface ButtonWithMenu extends ButtonProps {
  menuItems?: React.ReactNode;
  contextMenuItems?: JSX.Element;
}

const ButtonWithMenu = ({
  menuItems,
  contextMenuItems,
  children,
  ...props
}: ButtonWithMenu): JSX.Element => {
  const [showMenu, setShowMenu] = useState(false);
  const [showContextMenu, setShowContextMenu] = useState(false);
  const [position, setPosition] = useState<Position>({ top: 0, left: 0 });
  const buttonRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLUListElement>(null);
  const contextMenuRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    // Close menus if click is outside
    const mouseDownOutside = (event): void => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        buttonRef.current != event.target
      ) {
        setShowMenu(false);
      }
      if (
        contextMenuRef.current &&
        !contextMenuRef.current.contains(event.target) &&
        buttonRef.current != event.target
      ) {
        setShowContextMenu(false);
      }
    };

    const mouseUpOutside = (event): void => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        buttonRef.current != event.target
      ) {
        setShowMenu(!showMenu);
      }
    };

    // Add event listener to detect outside clicks
    document.addEventListener('mousedown', mouseDownOutside);
    document.addEventListener('mouseup', mouseUpOutside);

    // Cleanup on component unmount
    return (): void => {
      document.removeEventListener('mousedown', mouseDownOutside);
      document.removeEventListener('mouseup', mouseUpOutside);
    };
  }, []);

  const handleMenu = (event): void => {
    setShowMenu(!showMenu);
    setShowContextMenu(false);

    const divRect = event.target.getBoundingClientRect();

    setPosition({
      top: divRect.bottom,
      left: divRect.left
    });
  };

  const handleContextMenu = (event): void => {
    setShowContextMenu(true);
    setShowMenu(false);

    setPosition({
      top: event.clientY,
      left: event.clientX
    });
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
