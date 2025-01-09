import { JSX } from 'react';
import classNames from 'classnames';

import { ReactSetState } from '@renderer/types';

interface InputTextProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  setValue?: ReactSetState<boolean>;
  className?: string;
  value;
}

const Checkbox = ({ label, value, setValue }: InputTextProps): JSX.Element => {
  const checkboxClassNames = classNames(
    'checkbox-input h-5 w-5 border-2 border-gray-500 rounded ring-2 focus:ring-blue-500 checked:bg-blue-500'
  );
  return (
    <div className="flex gap-2 p-2">
      <input
        className={checkboxClassNames}
        type="checkbox"
        checked={value}
        onChange={() => {
          setValue && setValue(!value);
        }}
      />
      <label>{label}</label>
    </div>
  );
};

export default Checkbox;
