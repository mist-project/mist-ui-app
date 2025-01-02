import { JSX } from 'react';

type ButtonProps = {
  onClick: () => void;
  children: React.ReactNode;
  className?: string;
};

const Button = ({ className, onClick, children }: ButtonProps): JSX.Element => {
  return (
    <button onClick={onClick} className={`border-solid bg-blue-500 rounded p-2 ${className}`}>
      {children}
    </button>
  );
};

export default Button;
