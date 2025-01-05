import { createContext, useState, use, JSX } from 'react';

import { Modal } from '@renderer/components/common/Modal';

type ModalContextType = {
  showModal: (arg0: boolean) => void;
  setModalContent: (arg0: JSX.Element) => void;
};

const ModalContext = createContext<ModalContextType | undefined>(undefined);

// Custom hook to use the Modal context
export const useModal = (): ModalContextType => {
  const context = use(ModalContext);
  if (!context) {
    throw new Error('useModal must be used within an ModalContext provider.');
  }
  return context;
};

export const ModalProvider = ({ children }: { children: React.ReactNode }): JSX.Element => {
  const [visible, setVisible] = useState<boolean>(false);
  const [content, setContent] = useState<JSX.Element | null>(null);

  const showModal = (show: boolean): void => {
    setVisible(show);
  };

  const setModalContent = (c: JSX.Element): void => {
    setContent(c);
  };

  return (
    <ModalContext.Provider value={{ showModal, setModalContent }}>
      {visible && <Modal>{content}</Modal>}
      {children}
    </ModalContext.Provider>
  );
};
