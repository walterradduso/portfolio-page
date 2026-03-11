import clsx from 'clsx';
import { ReactElement, ReactNode } from 'react';

interface Props {
  ariaLabel?: string;
  children: ReactNode;
  className?: string;
  download?: boolean;
  href: string;
}

function Link({ ariaLabel, children, className, download = false, href }: Props): ReactElement {
  const linkStyle = clsx('rounded-full border px-4 py-1 transition duration-300 ease-in-out', className);

  return (
    <a aria-label={ariaLabel} className={linkStyle} download={download} href={href} target="_blank">
      {children}
    </a>
  );
}

export default Link;
