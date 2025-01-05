import { JSX } from 'react';

type ButtonColor = 'default' | 'warning' | 'success' | 'danger';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  // TODO: buttons without props automatically will use default
  // TODO: add color functionality
  buttonColor?: ButtonColor;
}

const Button = ({ className, onClick, children }: ButtonProps): JSX.Element => {
  return (
    <button onClick={onClick} className={`border-solid bg-blue-600 rounded p-2 ${className}`}>
      {children}
    </button>
  );
};

export default Button;
