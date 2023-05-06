import { ReactElement } from 'react';

function NavLinks(): ReactElement {
  return (
    <section className="w-full text-center">
      <ul className="flex flex-col items-center justify-center gap-4">
        <li className="w-full">
          <a className="block w-full cursor-pointer p-1 text-base hover:text-primary">Home</a>
        </li>

        <li className="w-full">
          <a className="block w-full cursor-pointer p-1 text-base hover:text-primary" href="#about">
            About Me
          </a>
        </li>

        <li className="w-full">
          <a className="block w-full cursor-pointer p-1 text-base hover:text-primary" href="#resume">
            Resume
          </a>
        </li>

        <li className="w-full">
          <a className="block w-full cursor-pointer p-1 text-base hover:text-primary" href="#portfolio">
            Portfolio
          </a>
        </li>

        <li className="w-full">
          <a className="block w-full cursor-pointer p-1 text-base hover:text-primary" href="#contact">
            Contact
          </a>
        </li>
      </ul>
    </section>
  );
}

export default NavLinks;
