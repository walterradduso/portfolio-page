'use client';

import clsx from 'clsx';
import { ReactElement, useState } from 'react';

function NavBurger(): ReactElement {
  const [isOpen, setIsOpen] = useState(false);

  const firstLine = clsx('absolute block h-0.5 w-6 bg-current transition duration-500 ease-in-out', {
    'rotate-45': isOpen,
    '-translate-y-1.5': !isOpen,
  });
  const secondLine = clsx('absolute block h-0.5 w-6 bg-current transition duration-500 ease-in-out', {
    'opacity-0': isOpen,
  });
  const thirdLine = clsx('absolute block h-0.5 w-6 bg-current transition duration-500 ease-in-out', {
    '-rotate-45': isOpen,
    'translate-y-1.5': !isOpen,
  });

  return (
    <button className="relative mr-2 block h-10 w-10 focus:outline-none md:hidden" onClick={() => setIsOpen(!isOpen)}>
      <div className="absolute left-1/2 top-1/2 block w-6 -translate-x-1/2 -translate-y-1/2 rounded-md">
        <span aria-hidden="true" className={firstLine} />
        <span aria-hidden="true" className={secondLine} />
        <span aria-hidden="true" className={thirdLine} />
      </div>
    </button>
  );
}

export default NavBurger;
