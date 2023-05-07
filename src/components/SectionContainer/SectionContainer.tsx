import clsx from 'clsx';
import { ReactElement, ReactNode } from 'react';

interface Props {
  children: ReactNode;
  className?: string;
}

function SectionContainer({ children, className }: Props): ReactElement {
  const sectionStyles = clsx('min-h-screen', className);

  return <section className={sectionStyles}>{children}</section>;
}

export default SectionContainer;
