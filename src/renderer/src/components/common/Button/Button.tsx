import { JSX } from 'react';

type ButtonColor = 'default' | 'warning' | 'success' | 'danger' | 'none';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  // TODO: buttons without props automatically will use default
  // TODO: add color functionality
  buttonColor?: ButtonColor;
}

const Button = ({
  className,
  children,
  buttonColor,
  ...remainingProps
}: ButtonProps): JSX.Element => {
  // TODO: do something with bottom color in the future
  return (
    <button className={`border-solid bg-blue-600 rounded p-2 ${className}`} {...remainingProps}>
      {children}
    </button>
  );
};

export default Button;
