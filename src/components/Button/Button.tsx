import clsx from 'clsx';
import { ReactElement } from 'react';

interface Props {
  className?: string;
  text: string;
}

function Button({ className, text }: Props): ReactElement {
  const buttonStyle = clsx('rounded-full border bg-transparent p-2 transition duration-300 ease-in-out', className);

  return <button className={buttonStyle}>{text}</button>;
}

export default Button;
