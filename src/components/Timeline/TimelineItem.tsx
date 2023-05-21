import clsx from 'clsx';
import { ReactElement, ReactNode } from 'react';

interface Props {
  children?: ReactNode;
  className?: string;
  date: string;
  icon: ReactNode | null;
  iconClassName?: string;
  isRight?: boolean;
  textClassName?: string;
}

function TimelineItem({ children, className, date, icon, iconClassName, isRight = false, textClassName }: Props): ReactElement {
  const timelineItemStyle = clsx(
    'relative mx-0 my-8 text-black',
    'after:clear-both after:table',
    'first:mt-0 last:mb-0',
    'sm:mx-0 sm:my-16 sm:first:mt-0 sm:last:mb-0',
    className,
  );

  const iconStyle = clsx(
    'absolute left-0 top-2 flex h-8 w-8 animate-custom-bounce items-center justify-center overflow-hidden rounded-full bg-primary text-white shadow-dark-icon-timeline dark:shadow-icon-timeline',
    'sm:left-1/2 sm:top-0.5 sm:-ml-8 sm:h-14 sm:w-14',
    iconClassName,
  );

  const contentStyle = clsx(
    'relative ml-14 animate-right-enter rounded border-t-4 border-primary bg-primary-light-gray/40 p-4 text-dark',
    'dark:bg-light dark:text-dark',
    'after:clear-both after:table',
    'sm:ml-0 sm:w-[43%] sm:px-6 sm:py-5',
    textClassName,
    {
      'sm:float-right sm:w-[44%]': isRight,
      'sm:animate-left-enter': !isRight,
    },
  );

  const arrowStyle = clsx('absolute right-full top-3 h-0 w-0 rotate-180 border-8 border-transparent border-l-light', {
    'rotate-180 sm:top-4': isRight,
    'sm:rotate-0 sm:left-full sm:top-5': !isRight,
  });

  const dateStyle = clsx(
    'top-0 float-left inline-block pt-3 text-sm font-medium text-gray-300',
    'dark:text-gray-500',
    'sm:absolute sm:w-full sm:text-lg sm:text-gray-500 sm:dark:text-gray-300',
    {
      'sm:right-[130%] sm:text-right': isRight,
      'sm:left-[128%]': !isRight,
    },
  );

  return (
    <div className={timelineItemStyle}>
      <span className={iconStyle}>{icon}</span>

      <div className={contentStyle}>
        <div className={arrowStyle} />

        {children}

        <span className={dateStyle}>{date}</span>
      </div>
    </div>
  );
}

export default TimelineItem;
