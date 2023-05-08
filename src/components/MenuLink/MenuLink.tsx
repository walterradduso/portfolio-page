'use client';

import { ReactElement } from 'react';

import { scrollIntoView } from '@/utils/scrollIntoView';

interface Props {
  href: string;
  label: string;
}

function MenuLink({ href, label }: Props): ReactElement {
  return (
    <button
      className="block w-full cursor-pointer py-2 text-base text-primary-light-color hover:text-primary"
      onClick={() => {
        scrollIntoView(href);
      }}
    >
      {label}
    </button>
  );
}

export default MenuLink;
