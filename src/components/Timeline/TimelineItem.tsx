/* eslint-disable tailwindcss/no-custom-classname */
import clsx from 'clsx';
import { ReactElement, ReactNode } from 'react';

interface Props {
  children?: ReactNode;
  className?: string;
  icon: ReactNode | null;
  iconClassName?: string;
  position?: string;
  textClassName?: string;
}

function TimelineItem({ children, className, icon, iconClassName, position, textClassName }: Props): ReactElement {
  const timelineItemStyle = clsx('relative my-8 md:my-16', className, {
    'float-right': position === 'left',
    'float-left': position === 'right',
    'bg-transparent shadow-transparent': children === '',
  });

  const iconStyle = clsx(
    'visible absolute inset-x-0 top-0 h-10 w-10 animate-cd-bounce rounded-full shadow-timeline md:left-1/2 md:-ml-8 md:h-14 md:w-14',
    iconClassName,
  );

  const contentStyle = clsx(
    'visible relative mx-14 animate-cd-bounce rounded-e bg-white p-4 shadow-timeline-content md:ml-0 md:w-2/5 md:p-6',
    textClassName,
  );

  return (
    <div className={timelineItemStyle}>
      <>
        <span className={iconStyle}>{icon}</span>

        <div className={contentStyle}>
          <div className="absolute right-full top-4 h-0 w-0 border-8 border-transparent border-r-white md:left-full md:top-6" />

          {children}
        </div>
      </>
    </div>
  );
}

export default TimelineItem;
