'use client';

import { ReactElement } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';

import { Button } from '@/components/Button';
import { scrollIntoView } from '@/utils/scrollIntoView';

type Wrapper = 'p' | 'div' | 'span' | 'strong' | 'a' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'b';

interface Props {
  sequence: (string | number)[];
  wrapper: Wrapper;
}

function HomeContent({ sequence, wrapper }: Props): ReactElement {
  return (
    <>
      <TypeAnimation
        className="mb-2 text-center font-poppins text-6xl font-semibold text-dark dark:text-white"
        cursor={true}
        repeat={Infinity}
        sequence={sequence}
        wrapper={wrapper}
      />

      <Button
        className="w-56 border-dark text-lg text-dark hover:border-primary hover:bg-primary hover:text-white dark:border-white dark:text-white hover:dark:border-primary"
        text="More About Me"
        onClick={() => scrollIntoView('AboutMe')}
      />

      <button className="absolute bottom-0 h-12 text-dark hover:text-primary dark:text-white" onClick={() => scrollIntoView('AboutMe')}>
        <FaChevronDown className="animate-fade-in-down text-xl" />
      </button>
    </>
  );
}

export default HomeContent;
