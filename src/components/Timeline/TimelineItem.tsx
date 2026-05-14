import clsx from 'clsx';
import { ReactElement, ReactNode } from 'react';

interface Props {
  children?: ReactNode;
  className?: string;
  date: string;
  icon: ReactNode | null;
  iconClassName?: string;
  isRight?: boolean;
  monthPasses?: string;
  textClassName?: string;
}

function TimelineItem({
  children,
  className,
  date,
  icon,
  iconClassName,
  isRight = false,
  monthPasses,
  textClassName,
}: Props): ReactElement {
  const timelineItemStyle = clsx(
    'relative mx-0 my-8 text-black',
    'after:clear-both after:table',
    'first:mt-0 last:mb-0',
    'sm:mx-0 sm:my-16 sm:first:mt-0 sm:last:mb-0',
    className,
  );

  const iconStyle = clsx(
    'animate-custom-bounce bg-primary shadow-dark-icon-timeline dark:shadow-icon-timeline absolute top-2 left-0 flex size-8 items-center justify-center overflow-hidden rounded-full text-white',
    'sm:top-0.5 sm:left-1/2 sm:-ml-8 sm:size-14',
    iconClassName,
  );

  const contentStyle = clsx(
    'animate-right-enter border-primary bg-primary-light-gray/40 text-dark relative ml-14 rounded border-t-4 p-4',
    'dark:bg-light dark:text-dark',
    'after:clear-both after:table',
    'sm:ml-0 sm:w-[43%] sm:px-6 sm:py-5',
    textClassName,
    {
      'sm:float-right sm:w-[44%]': isRight,
      'sm:animate-left-enter': !isRight,
    },
  );

  const arrowStyle = clsx('border-l-light absolute top-3 right-full size-0 rotate-180 border-8 border-transparent', {
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

        <span className={dateStyle}>
          {date} ({monthPasses})
        </span>
      </div>
    </div>
  );
}

export default TimelineItem;
