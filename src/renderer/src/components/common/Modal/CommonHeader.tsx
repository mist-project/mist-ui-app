import { JSX } from 'react';

import { useModal } from '@renderer/components/Contexts';

import { Button } from '../Button';
import { XMarkIcon } from '@renderer/icons';

type CommonHeaderProps = {
  title: string;
  description?: string;
};

const CommonHeader = ({ title, description }: CommonHeaderProps): JSX.Element => {
  const { showModal } = useModal();

  return (
    <div className="relative flex flex-col items-center justify-between p-6 border-b border-gray-700">
      <h2 className="text-xl font-semibold text-gray-100">{title}</h2>
      {description && <p className="text-gray-400 text-sm">{description}</p>}
      <Button
        internalType="icon"
        onClick={() => showModal(false)}
        className={`
          text-gray-400 hover:text-gray-200 transition-colors duration-150 absolute top-0
          right-0 p-2 rounded-full
        `}
      >
        <XMarkIcon />
      </Button>
    </div>
  );
};

export default CommonHeader;
