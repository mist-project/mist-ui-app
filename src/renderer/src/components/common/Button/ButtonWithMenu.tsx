import { JSX, useState, useEffect, useRef } from 'react';
import Button, { ButtonProps } from './Button';
import { Menu, Position } from '../Menu';

interface ButtonWithMenu extends ButtonProps {
  menuItems?: JSX.Element[];
  contextMenuItems?: JSX.Element[];
}

const ButtonWithMenu = ({
  menuItems,
  contextMenuItems,
  children,
  ...props
}: ButtonWithMenu): JSX.Element => {
  const [showLeftMenu, setShowLeftMenu] = useState(false);
  const [showRightMenu, setShowRightMenu] = useState(false);
  const [leftMenuPosition, setLeftMenuPosition] = useState<Position>({ top: 0, left: 0 });
  const [rightMenuPosition, setRightMenuPosition] = useState<Position>({ top: 0, left: 0 });
  const buttonRef = useRef<HTMLButtonElement>(null);
  const leftMenuRef = useRef<HTMLDivElement>(null);
  const rightMenuRef = useRef<HTMLDivElement>(null);

  // Close menus if click is outside
  const mouseDownOutside = (event): void => {
    if (
      leftMenuRef.current &&
      !leftMenuRef.current.contains(event.target) &&
      buttonRef.current != event.target
    ) {
      setShowLeftMenu(false);
    }
    if (
      rightMenuRef.current &&
      !rightMenuRef.current.contains(event.target) &&
      buttonRef.current != event.target
    ) {
      setShowRightMenu(false);
    }
  };

  const mouseUpOutside = (event): void => {
    if (
      leftMenuRef.current &&
      !leftMenuRef.current.contains(event.target) &&
      buttonRef.current != event.target
    ) {
      setShowLeftMenu(!showLeftMenu);
    }
  };

  useEffect(() => {
    // Add event listener to detect outside clicks
    document.addEventListener('mousedown', mouseDownOutside);
    document.addEventListener('mouseup', mouseUpOutside);

    // Cleanup on component unmount
    return (): void => {
      document.removeEventListener('mousedown', mouseDownOutside);
      document.removeEventListener('mouseup', mouseUpOutside);
    };
  }, []);

  const handleLeftClick = (event): void => {
    setShowLeftMenu(!showLeftMenu);
    setShowRightMenu(false);

    const divRect = event.target.getBoundingClientRect();

    setLeftMenuPosition({
      top: divRect.bottom,
      left: divRect.left
    });
  };

  const handleRightClick = (event): void => {
    setShowRightMenu(true);
    setShowLeftMenu(false);

    setRightMenuPosition({
      top: event.clientY,
      left: event.clientX
    });
  };

  return (
    <>
      <Button ref={buttonRef} onClick={handleLeftClick} onContextMenu={handleRightClick} {...props}>
        {children}
      </Button>

      {showLeftMenu && (
        <Menu setShow={setShowLeftMenu} ref={leftMenuRef} position={leftMenuPosition}>
          {menuItems}
        </Menu>
      )}

      {showRightMenu && (
        <Menu setShow={setShowRightMenu} ref={rightMenuRef} position={rightMenuPosition}>
          {contextMenuItems}
        </Menu>
      )}
    </>
  );
};

export default ButtonWithMenu;
