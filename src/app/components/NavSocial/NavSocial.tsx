import { ReactElement } from 'react';
import { BsGithub, BsLinkedin, BsTwitter } from 'react-icons/bs';

function NavSocial(): ReactElement {
  return (
    <section className="my-0 md:mb-4 md:mt-0">
      <ul className="flex items-center justify-center gap-4 md:gap-6">
        <li className="text-sm hover:text-primary">
          <a href="https://www.linkedin.com/in/walterradduso/" rel="noreferrer" target="_blank">
            <BsLinkedin />
          </a>
        </li>

        <li className="text-sm hover:text-primary">
          <a href="https://github.com/walterradduso" rel="noreferrer" target="_blank">
            <BsGithub />
          </a>
        </li>

        <li className="text-sm hover:text-primary">
          <a href="https://twitter.com/walterradduso" rel="noreferrer" target="_blank">
            <BsTwitter />
          </a>
        </li>
      </ul>
    </section>
  );
}

export default NavSocial;
