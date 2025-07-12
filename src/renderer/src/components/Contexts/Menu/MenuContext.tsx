import { createContext, JSX, useContext, useState } from 'react';

export type GlobalMenuState = {
  content: JSX.Element | null;
  position: { top: number; left: number } | null;
  type: 'menu' | 'context' | null;
  id?: string;
};

type MenuContextType = {
  menu: GlobalMenuState;
  setMenu: (menu: GlobalMenuState | null) => void;
};

const nullMenuState: GlobalMenuState = {
  content: null,
  position: null,
  type: null
};

export const MenuContext = createContext<MenuContextType | null>(null);

export const useGlobalMenu = (): MenuContextType => {
  const ctx = useContext(MenuContext);
  if (!ctx) {
    throw new Error('useGlobalMenu must be used within a MenuProvider');
  }
  return ctx;
};

export const MenuProvider = ({ children }: { children: React.ReactNode }): JSX.Element => {
  const [menu, setMenuState] = useState<GlobalMenuState>(nullMenuState);

  const setMenu = (newMenu: GlobalMenuState | null): void => {
    setMenuState(newMenu ?? nullMenuState);
  };

  return <MenuContext.Provider value={{ menu, setMenu }}>{children}</MenuContext.Provider>;
};
