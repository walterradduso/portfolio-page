import { ReactElement } from 'react';
import { BsGithub, BsLinkedin, BsSuitHeartFill, BsTwitter } from 'react-icons/bs';

import { SOCIAL_LINKS } from '@/constants/socialLinks';

const iconMap = {
  BsLinkedin: <BsLinkedin />,
  BsGithub: <BsGithub />,
  BsTwitter: <BsTwitter />,
};

function Footer(): ReactElement {
  return (
    <section className="bg-dark font-poppins py-12">
      <ul className="flex items-center justify-center gap-12">
        {SOCIAL_LINKS.map((link) => (
          <li key={link.label} className="text-primary-light-color hover:text-primary text-2xl">
            <a aria-label={link.label} href={link.href} rel="noopener noreferrer" target="_blank">
              {iconMap[link.icon]}
            </a>
          </li>
        ))}
      </ul>

      <div className="font-poppins mt-6 flex items-center justify-center gap-1 text-center text-white">
        Made with <BsSuitHeartFill className="text-w-red" /> by <span className="font-semibold">Walter Radduso</span> &#169;{' '}
        {new Date().getFullYear()}
      </div>
    </section>
  );
}

export default Footer;
