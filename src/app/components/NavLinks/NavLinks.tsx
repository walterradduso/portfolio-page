import { ReactElement } from 'react';

import { MenuLink } from '@/components/MenuLink';

function NavLinks(): ReactElement {
  return (
    <section className="hidden w-full text-center md:block">
      <ul className="flex flex-col items-center justify-center py-4">
        <li className="w-full">
          <MenuLink href="Home" label="Home" />
        </li>

        <li className="w-full">
          <MenuLink href="AboutMe" label="About Me" />
        </li>

        <li className="w-full">
          <MenuLink href="Resume" label="Resume" />
        </li>

        <li className="w-full">
          <MenuLink href="Portfolio" label="Portfolio" />
        </li>
      </ul>
    </section>
  );
}

export default NavLinks;
