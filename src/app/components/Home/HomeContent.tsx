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
      <div className="flex min-h-20 items-center justify-center">
        <TypeAnimation
          className="mb-2 flex text-center font-poppins text-5xl font-semibold text-white sm:text-6xl"
          cursor={true}
          repeat={Infinity}
          sequence={sequence}
          wrapper={wrapper}
        />
      </div>

      <Button
        className="w-56 border-white text-lg text-white hover:border-primary hover:bg-primary hover:text-white"
        text="More About Me"
        onClick={() => scrollIntoView('AboutMe')}
      />

      <button className="absolute bottom-0 h-12 text-white hover:text-primary" onClick={() => scrollIntoView('AboutMe')}>
        <FaChevronDown className="animate-fade-in-down text-xl" />
      </button>
    </>
  );
}

export default HomeContent;
