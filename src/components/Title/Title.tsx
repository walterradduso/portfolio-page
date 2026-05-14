import clsx from 'clsx';
import { ReactElement } from 'react';

interface Props {
  className?: string;
  text: string;
  subText: string;
}

function Title({ className, subText, text }: Props): ReactElement {
  const titleStyle = clsx('font-poppins relative', className);

  return (
    <section className={titleStyle}>
      <h2 className="text-fluid-title text-primary-light-gray/40 dark:text-primary-dark-gray/40 text-center font-semibold uppercase sm:text-9xl md:text-9xl">
        {text}
      </h2>

      <p className="text-dark absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-4xl font-semibold dark:text-white">
        {subText}

        <span className="border-primary m-auto mt-2 block w-20 border-b-4" />
      </p>
    </section>
  );
}

export default Title;
