'use client';

import clsx from 'clsx';
import { ReactElement } from 'react';

import { useActiveSection } from '@/contexts/ActiveSection';
import { scrollIntoView } from '@/utils/scrollIntoView';

interface Props {
  href: string;
  label: string;
}

function MenuLink({ href, label }: Props): ReactElement {
  const { activeSection } = useActiveSection();

  const buttonStyles = clsx('block w-full cursor-pointer py-2 text-base hover:bg-light hover:text-dark', {
    'bg-primary-light-color text-dark': activeSection === href && (href === 'Home' || href === 'Resume' || href === 'Contact'),
    'bg-secondary-light-color text-dark': activeSection === href && (href === 'AboutMe' || href === 'Portfolio'),
    'bg-secondary-menu-color text-white': activeSection !== href,
  });

  return (
    <button
      className={buttonStyles}
      onClick={() => {
        scrollIntoView(href);
      }}
    >
      {label}
    </button>
  );
}

export default MenuLink;
