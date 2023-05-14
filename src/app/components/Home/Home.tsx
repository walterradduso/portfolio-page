import { ReactElement } from 'react';

import HomeContent from './HomeContent';

function Home(): ReactElement {
  const sequence = ["I'm Walter Radduso", 3000, "I'm a Frontend Engineer.", 3000, ''];

  return (
    <section className="flex h-screen flex-col items-center justify-center gap-8 font-poppins">
      <h2 className="text-3xl text-dark dark:text-white">Welcome</h2>

      <HomeContent sequence={sequence} wrapper="span" />
    </section>
  );
}

export default Home;
