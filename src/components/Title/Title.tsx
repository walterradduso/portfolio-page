import clsx from 'clsx';
import { ReactElement } from 'react';

interface Props {
  className?: string;
  text: string;
  subText: string;
}

function Title({ className, subText, text }: Props): ReactElement {
  const titleStyle = clsx('relative font-poppins', className);

  return (
    <section className={titleStyle}>
      <h2 className="text-center text-fluid-title font-semibold uppercase text-primary-light-gray/40 dark:text-primary-dark-gray/40 sm:text-9xl md:text-9xl">
        {text}
      </h2>

      <p className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-4xl font-semibold text-dark dark:text-white">
        {subText}

        <span className="m-auto mt-2 block w-20 border-b-4 border-primary" />
      </p>
    </section>
  );
}

export default Title;
