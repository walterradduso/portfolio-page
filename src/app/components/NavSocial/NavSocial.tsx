import { ReactElement } from 'react';
import { BsGithub, BsLinkedin, BsTwitter } from 'react-icons/bs';

import { ThemeSwitcher } from '@/components/ThemeSwitcher';
import { SOCIAL_LINKS } from '@/constants/socialLinks';

const iconMap = {
  BsLinkedin: <BsLinkedin />,
  BsGithub: <BsGithub />,
  BsTwitter: <BsTwitter />,
};

function NavSocial(): ReactElement {
  return (
    <section className="my-0 md:mb-4 md:mt-0">
      <ul className="flex items-center justify-center gap-4 md:gap-6">
        {SOCIAL_LINKS.map((link) => (
          <li key={link.label} className="text-sm text-primary-light-color hover:text-primary">
            <a aria-label={link.label} href={link.href} rel="noopener noreferrer" target="_blank">
              {iconMap[link.icon]}
            </a>
          </li>
        ))}

        <li className="text-sm text-primary-light-color hover:text-primary">
          <ThemeSwitcher />
        </li>
      </ul>
    </section>
  );
}

export default NavSocial;
