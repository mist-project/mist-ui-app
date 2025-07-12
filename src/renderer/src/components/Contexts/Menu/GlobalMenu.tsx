import { JSX, useEffect, useRef } from 'react';

import { useGlobalMenu } from './MenuContext';

const GlobalMenuRenderer = (): JSX.Element | null => {
  const { menu, setMenu } = useGlobalMenu();
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Handles left-click outside the menu to close it
    const handleOutsideClick = (event: MouseEvent): void => {
      // if (event.button !== 0) return; // Only respond to left-clicks
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenu(null);
      }
    };

    // If a context menu is open and user right-clicks again,
    // just close the current context menu and cancel the right-click action
    const handleGlobalContextMenu = (event: MouseEvent): void => {
      if (menu.type === 'context') {
        console.log('not here');
        event.preventDefault(); // Prevent native context menu
        event.stopPropagation(); // Prevent bubbling to other handlers
        setMenu(null);
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);
    document.addEventListener('contextmenu', handleGlobalContextMenu, true);

    return (): void => {
      document.removeEventListener('mousedown', handleOutsideClick);
      document.removeEventListener('contextmenu', handleGlobalContextMenu, true);
    };
  }, [menu.type, setMenu]);

  // Do not render anything if no menu is set
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
