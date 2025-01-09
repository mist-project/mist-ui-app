import { ChangeEvent, JSX } from 'react';

import { ReactSetState } from '@renderer/types';

interface InputTextProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  setValue?: ReactSetState<string>;
  className?: string;
}

const focusVisible = ['border-white-600'].map((css) => `focus-visible:${css}`).join(' ');
const focus = ['border-white-600'].map((css) => `focus:${css}`).join(' ');

const InputText = ({ label, className, type, value, setValue }: InputTextProps): JSX.Element => {
  return (
    <div className="p-3 flex flex-col">
      {label && <label className="font-bold">{label}</label>}
      <input
        className={`bg-gray-600 border-solid border-1 rounded p-[5px] border-gray-500 ${focusVisible} ${focus} ${className}`}
        type={type}
        value={value}
        onChange={(event: ChangeEvent<HTMLInputElement>) =>
          setValue && setValue(event.target.value)
        }
      />
    </div>
  );
};

export default InputText;
