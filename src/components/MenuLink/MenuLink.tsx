import { ReactElement } from 'react';

interface Props {
  href: string;
  label: string;
}

function MenuLink({ href, label }: Props): ReactElement {
  return (
    <a className="block w-full cursor-pointer py-2 text-base text-primary-light-color hover:text-primary" href={href}>
      {label}
    </a>
  );
}

export default MenuLink;
