import React, { useRef, useId, JSX, useEffect } from 'react';
import Button, { ButtonProps } from '../Button';
import { useGlobalMenu } from '@renderer/components/Contexts/Menu/MenuContext';

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
  const id = useId();
  const { menu, setMenu } = useGlobalMenu();
  const skipClick = useRef(false);

  const isDropdownOpen = menu?.type === 'menu' && menu?.id === id;
  const isContextMenuOpen = menu?.type === 'context';

  const handleMouseDown = (e: React.MouseEvent<HTMLButtonElement>): void => {
    console.log('ButtonWithMenu handleMouseDown');
    if (e.button !== 0) return; // Left-click only
    console.log('ButtonWithMenu handleMouseDown--');

    // If the dropdown is open (from this button), close it
    if (isDropdownOpen) {
      setMenu(null);
      // onOpenChange?.(false); // ✅ manually notify close
      skipClick.current = true;
      return;
    }

    // If context menu is open, also close it
    if (isContextMenuOpen) {
      setMenu(null);
      skipClick.current = true;
    }
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>): void => {
    console.log('ButtonWithMenu handleClick');

    // If we just closed a menu during mousedown, skip this click event
    if (skipClick.current) {
      skipClick.current = false;
      return;
    }

    // Do nothing if there's no dropdown content to show
    if (!menuItems) return;

    // Open dropdown menu below the button
    const rect = e.currentTarget.getBoundingClientRect();
    setMenu({
      content: menuItems,
      position: { top: rect.bottom, left: rect.left },
      type: 'menu',
      id
    });
  };

  const handleContextMenu = (e: React.MouseEvent<HTMLButtonElement>): void => {
    // Prevent default browser context menu
    e.preventDefault();

    // Do nothing if no context menu is provided
    if (!contextMenuItems) return;

    // Show context menu at mouse cursor position
    setMenu({
      content: contextMenuItems,
      position: { top: e.clientY, left: e.clientX },
      type: 'context',
      id
    });
  };

  return (
    <Button
      onMouseDown={handleMouseDown}
      onClick={handleClick}
      onContextMenu={handleContextMenu}
      {...props}
    >
      {children}
    </Button>
  );
};

export default ButtonWithMenu;
