'use client';

import clsx from 'clsx';
import { ReactElement, ReactNode } from 'react';

import { useActiveSection } from '@/contexts/ActiveSection';
import useIntersectionObserver from '@/hooks/useIntersectionObserver';

interface Props {
  children: ReactNode | ReactElement;
  className?: string;
  id?: string;
}

function SectionHoc({ children, className, id }: Props) {
  const { setActiveSection } = useActiveSection();
  const ref = useIntersectionObserver((intersectedId) => setActiveSection(intersectedId));

  const sectionStyles = clsx('relative z-0', className);

  return (
    <section ref={ref} className={sectionStyles} id={id}>
      {children}
    </section>
  );
}

export default SectionHoc;
