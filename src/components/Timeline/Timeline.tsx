import clsx from 'clsx';
import { ReactElement, ReactNode } from 'react';

interface Props {
  className?: string;
  children: ReactNode;
}

function Timeline({ className, children }: Props): ReactElement {
  const timelineStyle = clsx(
    'relative mx-auto my-0 box-border w-full max-w-6xl px-0 py-8 before:absolute before:left-4 before:top-0 before:-ml-0.5 before:h-full before:w-1 before:bg-white/80 md:left-1/2 md:-ml-8 md:h-14 md:w-14',
    className,
  );

  return <div className={timelineStyle}>{children}</div>;
}

export default Timeline;
