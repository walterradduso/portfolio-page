import Image from 'next/image';
import { ReactElement } from 'react';

import HomeContent from './HomeContent';

function Home(): ReactElement {
  const sequence = ["I'm Walter Radduso", 3000, "I'm a Frontend Engineer", 3000, ''];

  return (
    <section className="flex h-screen flex-col items-center justify-center gap-14 font-poppins">
      <h1 className="text-3xl text-white">Welcome</h1>

      <HomeContent sequence={sequence} wrapper="span" />

      <Image fill priority alt="" className="absolute top-0 -z-10 size-full object-cover opacity-20" src="/images/homeBg.jpeg" />
    </section>
  );
}

export default Home;
