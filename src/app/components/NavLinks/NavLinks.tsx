import { ReactElement } from 'react';

import { MenuLink } from '@/components/MenuLink';

function NavLinks(): ReactElement {
  return (
    <section className="hidden w-full text-center md:block">
      <ul className="flex flex-col items-center justify-center p-4">
        <li className="w-full">
          <MenuLink href="#home" label="Home" />
        </li>

        <li className="w-full">
          <MenuLink href="#about" label="About Me" />
        </li>

        <li className="w-full">
          <MenuLink href="#resume" label="Resume" />
        </li>

        <li className="w-full">
          <MenuLink href="#portfolio" label="Portfolio" />
        </li>

        <li className="w-full">
          <MenuLink href="#contact" label="Contact" />
        </li>
      </ul>
    </section>
  );
}

export default NavLinks;
