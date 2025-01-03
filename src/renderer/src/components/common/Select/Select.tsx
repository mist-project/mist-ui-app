import { JSX } from 'react';

type SelectItem = {
  label: string;
  value: string;
};

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  className?: string;
  options: SelectItem[];
}

const Select = ({ onChange, options, value }: SelectProps): JSX.Element => {
  const onChangeHandler = (event: React.ChangeEvent<HTMLSelectElement>): void => {
    if (onChange) onChange(event);
  };

  return (
    <select onChange={onChangeHandler} value={value}>
      {options.map((option) => (
        <option key={`${option.value}-${option.label}`} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default Select;
export type { SelectItem };
