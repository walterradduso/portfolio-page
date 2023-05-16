import clsx from 'clsx';
import { ReactElement, ReactNode } from 'react';

interface Props {
  children: ReactNode;
  className?: string;
  href: string;
}

function Link({ children, className, href }: Props): ReactElement {
  const linkStyle = clsx('rounded-full border px-4 py-1 transition duration-300 ease-in-out', className);

  return (
    <a className={linkStyle} href={href} target="_blank">
      {children}
    </a>
  );
}

export default Link;
