import classNames from 'classnames';
import { forwardRef, JSX } from 'react';

type ButtonColor = 'default' | 'warning' | 'success' | 'danger' | 'none';
type InternalButtonType = 'button' | 'icon' | 'text-link' | 'custom';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  // TODO: buttons without props automatically will use default
  // TODO: add color functionality
  buttonColor?: ButtonColor;
  internalType: InternalButtonType;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, children, buttonColor, internalType, ...remainingProps }: ButtonProps,
    ref
  ): JSX.Element => {
    // TODO: do something with bottom color in the future
    const btnClass = classNames(
      {
        'border-solid bg-indigo-600 rounded p-2':
          buttonColor != 'none' && internalType === 'button',
        'bg-transparent border-none text-gray-400 cursor-pointer text-base p-1 hover:text-gray-300 transition-colors duration-150':
          buttonColor === 'none' && internalType === 'icon'
      },
      className
      //
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
