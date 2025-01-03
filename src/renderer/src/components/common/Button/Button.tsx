import { JSX } from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

const Button = ({ className, onClick, children }: ButtonProps): JSX.Element => {
  return (
    <button onClick={onClick} className={`border-solid bg-blue-500 rounded p-2 ${className}`}>
      {children}
    </button>
  );
};

export default Button;
