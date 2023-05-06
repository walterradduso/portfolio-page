import { ReactElement } from 'react';

import { NavLinks } from '../NavLinks';
import { NavPicture } from '../NavPicture';
import { NavSocial } from '../NavSocial';

function LeftNavigator(): ReactElement {
  return (
    <header className="sticky top-0 font-poppins">
      <nav className="fixed left-0 top-0 flex h-full w-60 flex-col items-center justify-between bg-w-black">
        <NavPicture />
        <NavLinks />
        <NavSocial />
      </nav>
    </header>
  );
}

export default LeftNavigator;
