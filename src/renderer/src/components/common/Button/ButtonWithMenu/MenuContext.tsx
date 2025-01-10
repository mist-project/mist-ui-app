import { ReactSetState } from '@renderer/types';
import { Position } from './constants';
import { createContext, use } from 'react';

type MenuContextType = {
  setShowMenu: ReactSetState<boolean>;
  ref: React.ForwardedRef<HTMLUListElement> | undefined;
  position?: Position;
};

export const MenuContext = createContext<MenuContextType>({
  setShowMenu: () => {},
  ref: undefined
});

export const useMenuContext = (): MenuContextType => {
  return use(MenuContext);
};
