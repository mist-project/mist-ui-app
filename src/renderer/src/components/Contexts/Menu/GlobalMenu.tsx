import { useEffect, useRef } from 'react';
import { useGlobalMenu } from './MenuContext';

const GlobalMenuRenderer = () => {
  const { menu, setMenu } = useGlobalMenu();
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (event.button !== 0) return; // only left click
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenu(null);
      }
    };

    const handleGlobalContextMenu = (event: MouseEvent) => {
      // If any context menu is open, cancel the right-click entirely
      if (menu.type === 'context') {
        event.preventDefault();
        event.stopPropagation();
        setMenu(null);
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);
    document.addEventListener('contextmenu', handleGlobalContextMenu, true);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
      document.removeEventListener('contextmenu', handleGlobalContextMenu, true);
    };
  }, [menu.type, setMenu]);

  useEffect(() => {
    const closeOnClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenu(null);
      }
    };

    document.addEventListener('mousedown', closeOnClickOutside);
    return () => {
      document.removeEventListener('mousedown', closeOnClickOutside);
    };
  }, [setMenu]);

  if (!menu.content || !menu.position) return null;

  return (
    <div
      ref={menuRef}
      style={{
        position: 'absolute',
        top: menu.position.top,
        left: menu.position.left,
        zIndex: 9999
      }}
    >
      {menu.content}
    </div>
  );
};

export default GlobalMenuRenderer;
