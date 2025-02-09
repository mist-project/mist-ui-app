import { JSX } from 'react';

import { useModal } from '@renderer/components/Contexts';

import { Button } from '../Button';

type CommonFooterProps = {
  accept: () => void;
};

const CommonFooter = ({ accept }: CommonFooterProps): JSX.Element => {
  const { showModal } = useModal();

  return (
    <div className="flex gap-3 p-3">
      <Button
        onClick={() => {
          accept();
          showModal(false);
        }}
        buttonColor="success"
      >
        Accept
      </Button>
      <Button onClick={() => showModal(false)} buttonColor="danger">
        Cancel
      </Button>
    </div>
  );
};

export default CommonFooter;
