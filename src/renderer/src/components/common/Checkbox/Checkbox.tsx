import { ReactSetState } from '@renderer/types';
import classNames from 'classnames';
import { JSX, useId } from 'react';

interface InputTextProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  setValue?: ReactSetState<boolean>;
  className?: string;
  value;
}

const Checkbox = ({ label, value, setValue }: InputTextProps): JSX.Element => {
  const objId = useId();

  const checkboxClassNames = classNames(
    'checkbox-input cursor-pointer h-5 w-5 border-2 border-gray-500 rounded ring-2 focus:ring-blue-500 checked:bg-blue-500'
  );

  return (
    <div className="flex gap-2">
      <input
        id={`${objId}-checkbox`}
        className={checkboxClassNames}
        type="checkbox"
        checked={value}
        onChange={() => {
          setValue && setValue(!value);
        }}
      />
      <label htmlFor={`${objId}-checkbox`} className="cursor-pointer">
        {label}
      </label>
    </div>
  );
};

export default Checkbox;
