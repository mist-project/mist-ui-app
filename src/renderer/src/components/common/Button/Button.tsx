import classNames from 'classnames';
import { forwardRef, JSX } from 'react';

type ButtonColor = 'default' | 'warning' | 'success' | 'danger' | 'none';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  // TODO: buttons without props automatically will use default
  // TODO: add color functionality
  buttonColor?: ButtonColor;
}

const Button = forwardRef<HTMLButtonElement, React.ButtonHTMLAttributes<HTMLButtonElement>>(
  ({ className, children, buttonColor, ...remainingProps }: ButtonProps, ref): JSX.Element => {
    // TODO: do something with bottom color in the future
    const btnClass = classNames(
      {
        'border-solid bg-blue-600 rounded p-2': buttonColor != 'none'
      },
      className
    );
    return (
      <button ref={ref} className={btnClass || undefined} {...remainingProps}>
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';


export default Button;
