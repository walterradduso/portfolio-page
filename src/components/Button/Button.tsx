import clsx from 'clsx';
import { ReactElement } from 'react';

interface Props {
  className?: string;
  onClick?: () => void;
  text: string;
}

function Button({ className, onClick, text }: Props): ReactElement {
  const buttonStyle = clsx('rounded-full border bg-transparent p-2 transition duration-300 ease-in-out', className);

  return (
    <button className={buttonStyle} onClick={onClick}>
      {text}
    </button>
  );
}

export default Button;
