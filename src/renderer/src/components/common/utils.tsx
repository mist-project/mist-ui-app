import { useState, useRef, useEffect, JSX, ComponentType } from 'react';

// ANY is fine here
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const hideOnClickOutside = <T extends object>(
  WrappedComponent: ComponentType<T>
): ((props: T) => JSX.Element) => {
  const DecoratedComponent = ({ ...props }: T): JSX.Element => {
    const [show, setShow] = useState(false);

    const ref = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
      const handleClickOutside = (event): void => {
        if (ref.current && !ref.current.contains(event.target)) {
          setShow(false);
        }
      };
      document.addEventListener('mousedown', handleClickOutside);

      return (): void => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, [ref]);

    return <WrappedComponent {...props} show={show} setShow={setShow} ref={ref} />;
  };

  return DecoratedComponent;
};

// const { onClick, children, ...restProps } = props as any;

// const handleClick = (event: React.MouseEvent): void => {
//   console.log('Logging before onClick');
//   if (onClick) {
//     onClick(event);
//   }
// };

// return (
//   <WrappedComponent {...restProps} onClick={handleClick}>
//     {children}
//   </WrappedComponent>
// );
