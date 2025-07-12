import { JSX } from 'react';

interface DividerProps {
  className?: string;
}

const baseClass = 'bg-gray-600 rounded';

const Divider = ({ className }: DividerProps): JSX.Element => {
  return <div className={`${baseClass} ${className}`} />;
};

export default Divider;
