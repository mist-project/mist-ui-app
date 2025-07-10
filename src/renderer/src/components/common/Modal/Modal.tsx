import { useModal } from '@renderer/components/Contexts';
import { JSX } from 'react';

type ModalProps = {
  children: React.ReactNode;
};

const Modal = ({ children }: ModalProps): JSX.Element => {
  const { showModal } = useModal();

  const onKeyDownHandler = (event: React.KeyboardEvent<HTMLInputElement>): void => {
    if (event.key === 'Escape') {
      showModal(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 modal-backdrop flex items-center justify-center z-50">
      <div
        className="bg-gray-800 rounded-lg shadow-2xl max-w-md w-full mx-4 border border-gray-700 text-gray-100 gap-2"
        tabIndex={-1}
        onKeyDown={onKeyDownHandler}
      >
        {children}
      </div>
    </div>
  );
};

export default Modal;
