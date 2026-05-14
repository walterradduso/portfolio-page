import clsx from 'clsx';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  className?: string;
}

function Pill({ children, className }: Props) {
  const pillStyles = clsx(
    'border-dark text-dark flex cursor-default items-center gap-1 rounded-md border px-2 py-1 dark:border-white dark:text-white',
    className,
  );

  return <div className={pillStyles}>{children}</div>;
}

export default Pill;
