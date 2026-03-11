import { ReactElement } from 'react';

import { MenuLink } from '@/components/MenuLink';
import { NAVIGATION_ITEMS } from '@/constants/navigationItems';

function NavLinks(): ReactElement {
  return (
    <section className="hidden w-full text-center md:block">
      <ul className="flex flex-col items-center justify-center py-4">
        {NAVIGATION_ITEMS.map((item) => (
          <li key={item.href} className="w-full">
            <MenuLink href={item.href} label={item.label} />
          </li>
        ))}
      </ul>
    </section>
  );
}

export default NavLinks;
