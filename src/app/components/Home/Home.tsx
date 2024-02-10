import { ReactElement } from 'react';

import HomeContent from './HomeContent';

function Home(): ReactElement {
  const sequence = ["I'm Walter Radduso", 3000, "I'm a Frontend Engineer", 3000, ''];

  return (
    <section className="flex h-screen flex-col items-center justify-center gap-14 font-poppins">
      <h2 className="text-3xl text-white">Welcome</h2>

      <HomeContent sequence={sequence} wrapper="span" />

      <div className="absolute top-0 -z-10 size-full bg-home-bg bg-cover bg-center bg-no-repeat opacity-20" />
    </section>
  );
}

export default Home;
