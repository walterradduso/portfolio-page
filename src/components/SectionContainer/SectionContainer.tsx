import clsx from 'clsx';
import { ReactElement, ReactNode } from 'react';

interface Props {
  children: ReactNode;
  className?: string;
  id?: string;
}

function SectionContainer({ children, className, id }: Props): ReactElement {
  const sectionStyles = clsx('min-h-screen relative z-1', className);

  return (
    <section className={sectionStyles} id={id}>
      {children}
    </section>
  );
}

export default SectionContainer;
