import { JSX, useState } from 'react';

import { useModal } from '@renderer/components/Contexts';

import { Button } from '../Button';

type CommonFooterProps = {
  accept: () => void;
  cancel?: () => void;
  confirmText?: string;
  cancelText?: string;
  cancelButtonClassname?: string;
  confirmButtonClassname?: string;
  order?: 'accept-first' | 'cancel-first';
  justifyContent?: 'justify-start' | 'justify-end' | 'justify-center' | 'justify-between';
};

const CommonFooter = ({
  accept,
  cancel,
  cancelText,
  confirmText,
  cancelButtonClassname,
  confirmButtonClassname,
  order = 'cancel-first',
  justifyContent = 'justify-end'
}: CommonFooterProps): JSX.Element => {
  const { showModal } = useModal();

  const [showError, setShowError] = useState<boolean>(false);

  const renderConfirmButton = (): JSX.Element => (
    <Button
      internalType="button"
      buttonColor="none"
      onClick={async () => {
        try {
          await accept();
          setShowError(false);
          showModal(false);
        } catch (error) {
          console.error('Error:', error);
          setShowError(true);
        }
        // TODO: if accept fails, don't close the modal
      }}
      className={confirmButtonClassname}
    >
      {confirmText || 'Confirm'}
    </Button>
  );

  const renderCancelButton = (): JSX.Element => (
    <Button
      internalType="button"
      buttonColor="none"
      onClick={() => {
        if (cancel) {
          console.log('hi');
          cancel();
        } else {
          showModal(false);
        }
      }}
      className={cancelButtonClassname}
    >
      {cancelText || 'Cancel'}
    </Button>
  );

  return (
    <div className={`flex gap-5 py-3 px-5 ${justifyContent}`}>
      {showError && (
        <p role="alert" className="text-red-600 text-sm">
          An error occurred while processing your request. Try again.
        </p>
      )}
      {order === 'accept-first' ? (
        <>
          {renderConfirmButton()}
          {renderCancelButton()}
        </>
      ) : (
        <>
          {renderCancelButton()}
          {renderConfirmButton()}
        </>
      )}
    </div>
  );
};
export default CommonFooter;
