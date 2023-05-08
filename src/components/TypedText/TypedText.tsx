'use client';

import { ReactElement } from 'react';
import { TypeAnimation } from 'react-type-animation';

type Wrapper = 'p' | 'div' | 'span' | 'strong' | 'a' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'b';

interface Props {
  className?: string;
  sequence: (string | number)[];
  wrapper: Wrapper;
}

function TypedText({ className, sequence, wrapper }: Props): ReactElement {
  return <TypeAnimation className={className} cursor={true} repeat={Infinity} sequence={sequence} wrapper={wrapper} />;
}

export default TypedText;
