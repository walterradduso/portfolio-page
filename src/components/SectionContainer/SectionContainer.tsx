'use client';

import clsx from 'clsx';
import { ReactElement, ReactNode } from 'react';

import { useActiveSection } from '@/contexts/ActiveSection';
import useIntersectionObserver from '@/hooks/useIntersectionObserver';

interface Props {
  children: ReactNode;
  className?: string;
  id?: string;
}

function SectionHoc({ children, className, id }: Props): ReactElement {
  const { setActiveSection } = useActiveSection();
  const ref = useIntersectionObserver((intersectedId) => setActiveSection(intersectedId));

  const sectionStyles = clsx('relative z-0 min-h-screen', className);

  return (
    <section ref={ref} className={sectionStyles} id={id}>
      {children}
    </section>
  );
}

export default SectionHoc;
