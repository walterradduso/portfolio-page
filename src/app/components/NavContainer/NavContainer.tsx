import { ReactElement } from 'react';

import { NavBurger } from '../NavBurger';
import { NavLinks } from '../NavLinks';
import { NavPicture } from '../NavPicture';
import { NavSocial } from '../NavSocial';

function LeftNavigator(): ReactElement {
  return (
    <header className="sticky top-0 font-poppins">
      <nav className="fixed left-0 top-0 flex h-14 w-full items-center justify-between bg-secondary-menu-color md:h-screen md:w-60 md:flex-col">
        <NavPicture />
        <NavLinks />

        <section className="flex items-center justify-center gap-3">
          <NavSocial />
          <NavBurger />
        </section>
      </nav>
    </header>
  );
}

export default LeftNavigator;
