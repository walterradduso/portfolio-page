import { ReactElement } from 'react';
import { BsGithub, BsLinkedin, BsTwitter } from 'react-icons/bs';

function NavSocial(): ReactElement {
  return (
    <section>
      <ul className="mb-4 flex items-center justify-center gap-6">
        <li className="text-base hover:text-primary">
          <a href="https://github.com/walterradduso" rel="noreferrer" target="_blank">
            <BsGithub />
          </a>
        </li>

        <li className="text-base hover:text-primary">
          <a href="https://www.linkedin.com/in/walterradduso/" rel="noreferrer" target="_blank">
            <BsLinkedin />
          </a>
        </li>

        <li className="text-base hover:text-primary">
          <a href="https://twitter.com/walterradduso" rel="noreferrer" target="_blank">
            <BsTwitter />
          </a>
        </li>
      </ul>
    </section>
  );
}

export default NavSocial;
