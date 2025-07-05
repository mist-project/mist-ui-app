import { ChangeEvent, JSX } from 'react';

import { ReactSetState } from '@renderer/types';
import { ExclamationCircleIcon } from '@renderer/icons';
import classNames from 'classnames';

interface InputTextProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  setValue?: ReactSetState<string>;
  className?: string;
  placeholder?: string;
  errors?: string;
}

const focusClasses =
  'focus:outline-none focus:border-indigo-600 focus:ring-2 focus:ring-indigo-600 focus:ring-opacity-20';

const InputText = ({
  label,
  type,
  className,
  placeholder,
  value,
  setValue,
  errors,
  ...props
}: InputTextProps): JSX.Element => {
  const inputClasss = classNames(
    'w-full box-border bg-gray-700 border border-gray-600 rounded-md p-3 text-gray-100 text-base',
    focusClasses,
    className
  );

  return (
    <>
      {label && (
        <label className="block text-lg font-semibold text-gray-300 mb-2" htmlFor="username">
          {label}
        </label>
      )}
      <input
        id="username"
        className={inputClasss}
        placeholder={placeholder || 'Enter text...'}
        type={type}
        value={value}
        onChange={(event: ChangeEvent<HTMLInputElement>) => {
          setValue && setValue(event.target.value);
        }}
        {...props}
      />
      {errors && (
        <p role="alert" className="mt-2 text-sm flex gap-1 text-red-600 items-center">
          <ExclamationCircleIcon />
          {errors}
        </p>
      )}
    </>
  );
};

export default InputText;
