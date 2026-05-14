'use client';

import clsx from 'clsx';
import { ReactElement, useState } from 'react';

import { MenuLink } from '@/components/MenuLink';
import { NAVIGATION_ITEMS } from '@/constants/navigationItems';

function NavBurger(): ReactElement {
  const [isOpen, setIsOpen] = useState(false);

  const firstLine = clsx('bg-primary-light-color absolute block h-0.5 w-6 transition duration-500 ease-in-out', {
    'rotate-45': isOpen,
    '-translate-y-1.5': !isOpen,
  });
  const secondLine = clsx('bg-primary-light-color absolute block h-0.5 w-6 transition duration-500 ease-in-out', {
    'opacity-0': isOpen,
  });
  const thirdLine = clsx('bg-primary-light-color absolute block h-0.5 w-6 transition duration-500 ease-in-out', {
    '-rotate-45': isOpen,
    'translate-y-1.5': !isOpen,
  });

  const menuStyles = clsx(
    'bg-primary-menu-color absolute top-14 left-0 z-10 block w-full overflow-hidden transition-all duration-500 ease-in-out md:hidden',
    {
      'max-h-0': !isOpen,
      'max-h-60': isOpen,
    },
  );

  return (
    <>
      <button
        aria-expanded={isOpen}
        aria-label="Toggle navigation menu"
        className="relative mr-2 block size-10 focus:outline-none md:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="absolute top-1/2 left-1/2 block w-6 -translate-x-1/2 -translate-y-1/2 rounded-md">
          <span aria-hidden="true" className={firstLine} />
          <span aria-hidden="true" className={secondLine} />
          <span aria-hidden="true" className={thirdLine} />
        </div>
      </button>

      <section className={menuStyles}>
        <ul className="flex flex-col items-center justify-center py-4">
          {NAVIGATION_ITEMS.map((item) => (
            <li key={item.href} className="border-w-light-white w-full border-b">
              <MenuLink href={item.href} label={item.label} />
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}

export default NavBurger;
