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
    <div
      className={
        'fixed inset-0 bg-gray-900 bg-opacity-75 flex justify-center items-center z-50 text-white'
      }
    >
      <div className="bg-gray-800 p-5 rounded" tabIndex={-1} onKeyDown={onKeyDownHandler}>
        {children}
      </div>
    </div>
  );
};

export default Modal;
