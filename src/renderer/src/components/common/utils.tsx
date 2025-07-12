import { ComponentType, JSX, useEffect, useRef, useState } from 'react';

// Can probably get rid of this. not using it
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
