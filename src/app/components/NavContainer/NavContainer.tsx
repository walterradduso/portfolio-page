import { ReactElement } from 'react';

import { NavBurger } from '../NavBurger';
import { NavLinks } from '../NavLinks';
import { NavPicture } from '../NavPicture';
import { NavSocial } from '../NavSocial';

function LeftNavigator(): ReactElement {
  return (
    <header className="font-poppins relative top-0 z-10 md:sticky">
      <nav className="bg-secondary-menu-color fixed top-0 left-0 flex h-14 w-full items-center justify-between md:h-screen md:w-60 md:flex-col">
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
