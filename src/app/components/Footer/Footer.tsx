import { ReactElement } from 'react';
import { BsGithub, BsLinkedin, BsSuitHeartFill, BsTwitter } from 'react-icons/bs';

function Footer(): ReactElement {
  return (
    <section className="bg-dark py-12 font-poppins">
      <ul className="flex items-center justify-center gap-12">
        <li className="text-2xl text-primary-light-color hover:text-primary">
          <a href="https://www.linkedin.com/in/walterradduso/" rel="noreferrer" target="_blank">
            <BsLinkedin />
          </a>
        </li>

        <li className="text-2xl text-primary-light-color hover:text-primary">
          <a href="https://github.com/walterradduso" rel="noreferrer" target="_blank">
            <BsGithub />
          </a>
        </li>

        <li className="text-2xl text-primary-light-color hover:text-primary">
          <a href="https://twitter.com/walterradduso" rel="noreferrer" target="_blank">
            <BsTwitter />
          </a>
        </li>
      </ul>

      <div className="mt-6 flex items-center justify-center gap-1 text-center font-poppins">
        Made with <BsSuitHeartFill className="text-w-red" /> by <span className="font-semibold">Walter Radduso</span> &#169;{' '}
        {new Date().getFullYear()}
      </div>
    </section>
  );
}

export default Footer;
