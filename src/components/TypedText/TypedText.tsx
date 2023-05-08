'use client';

import { ReactElement } from 'react';
import { TypeAnimation } from 'react-type-animation';

import { scrollIntoView } from '@/utils/scrollIntoView';

import { Button } from '../Button';

type Wrapper = 'p' | 'div' | 'span' | 'strong' | 'a' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'b';

interface Props {
  className?: string;
  sequence: (string | number)[];
  wrapper: Wrapper;
}

function TypedText({ className, sequence, wrapper }: Props): ReactElement {
  return (
    <>
      <TypeAnimation className={className} cursor={true} repeat={Infinity} sequence={sequence} wrapper={wrapper} />

      <Button
        className="w-56 border-primary text-primary hover:bg-primary hover:text-white"
        text="More About Me"
        onClick={() => scrollIntoView('AboutMe')}
      />
    </>
  );
}

export default TypedText;
