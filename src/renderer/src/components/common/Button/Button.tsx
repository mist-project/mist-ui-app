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
    { className, children, buttonColor = 'default', internalType, ...remainingProps }: ButtonProps,
    ref
  ): JSX.Element => {
    // TODO: do something with button color in the future
    const btnClass = classNames(
      {
        'border-solid rounded p-2': internalType === 'button',
        'bg-transparent border-none text-gray-400 cursor-pointer text-base p-1 hover:text-gray-300 transition-colors duration-150':
          internalType === 'icon',
        'bg-indigo-600 hover:text-indigo-500 text-base font-semibold':
          buttonColor === 'default' && internalType !== 'custom'
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
