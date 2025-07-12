import { createContext, JSX, useContext, useState } from 'react';

export type GlobalMenuState = {
  content: JSX.Element | null;
  position: { top: number; left: number } | null;
  type: 'menu' | 'context' | null;
  id?: string; // Optional ID for menu identification
};

type MenuContextType = {
  menu: GlobalMenuState;
  setMenu: (menu: GlobalMenuState | null) => void;
};

export const MenuContext = createContext<MenuContextType | null>(null);

export const useGlobalMenu = (): MenuContextType => {
  const ctx = useContext(MenuContext);
  if (!ctx) throw new Error('useGlobalMenu must be used inside a MenuProvider');
  return ctx;
};

export const MenuProvider = ({ children }: { children: React.ReactNode }): JSX.Element => {
  const [menu, setMenuState] = useState<GlobalMenuState>({
    content: null,
    position: null,
    type: null,
    id: undefined
  });

  const setMenu = (menu: GlobalMenuState | null): void => {
    setMenuState(menu ?? { content: null, position: null, type: null });
  };

  return <MenuContext.Provider value={{ menu, setMenu }}>{children}</MenuContext.Provider>;
};
