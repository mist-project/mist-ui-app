import { JSX } from 'react';

export interface TextLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  className?: string;
  url: string;
}

const TextLink = ({ children, className, onClick, url }: TextLinkProps): JSX.Element => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noreferrer"
      onClick={onClick}
      className={`text-indigo-400 text-md font-medium hover:text-indigo-300 transition-colors duration-150 ${className}`}
    >
      {children}
    </a>
  );
};

export default TextLink;
