import { JSX } from 'react';

type SelectItem = {
  label: string;
  value: string;
};

type ButtonProps = {
  onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  options: SelectItem[];
  value?: string;
};

const Select = ({ onChange, options, value }: ButtonProps): JSX.Element => {
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
