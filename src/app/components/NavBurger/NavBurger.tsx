'use client';

import clsx from 'clsx';
import { ReactElement, useState } from 'react';

import { MenuLink } from '@/components/MenuLink';

function NavBurger(): ReactElement {
  const [isOpen, setIsOpen] = useState(false);

  const firstLine = clsx('absolute block h-0.5 w-6 bg-primary-light-color transition duration-500 ease-in-out', {
    'rotate-45': isOpen,
    '-translate-y-1.5': !isOpen,
  });
  const secondLine = clsx('absolute block h-0.5 w-6 bg-primary-light-color transition duration-500 ease-in-out', {
    'opacity-0': isOpen,
  });
  const thirdLine = clsx('absolute block h-0.5 w-6 bg-primary-light-color transition duration-500 ease-in-out', {
    '-rotate-45': isOpen,
    'translate-y-1.5': !isOpen,
  });

  const menuStyles = clsx(
    'absolute left-0 top-14 z-10 block w-full overflow-hidden bg-primary-menu-color transition-all duration-500 ease-in-out md:hidden',
    {
      'max-h-0': !isOpen,
      'max-h-60': isOpen,
    },
  );

  return (
    <>
      <button className="relative mr-2 block h-10 w-10 focus:outline-none md:hidden" onClick={() => setIsOpen(!isOpen)}>
        <div className="absolute left-1/2 top-1/2 block w-6 -translate-x-1/2 -translate-y-1/2 rounded-md">
          <span aria-hidden="true" className={firstLine} />
          <span aria-hidden="true" className={secondLine} />
          <span aria-hidden="true" className={thirdLine} />
        </div>
      </button>

      <section className={menuStyles}>
        <ul className="flex flex-col items-center justify-center py-4">
          <li className="w-full border-b border-w-light-white">
            <MenuLink href="Home" label="Home" />
          </li>

          <li className="w-full border-b border-w-light-white">
            <MenuLink href="AboutMe" label="About Me" />
          </li>

          <li className="w-full border-b border-w-light-white">
            <MenuLink href="Resume" label="Resume" />
          </li>

          <li className="w-full border-b border-w-light-white">
            <MenuLink href="Portfolio" label="Portfolio" />
          </li>
        </ul>
      </section>
    </>
  );
}

export default NavBurger;
