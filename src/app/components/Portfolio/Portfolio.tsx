import { ReactElement } from 'react';

import { Title } from '@/components/Title';

function Portfolio(): ReactElement {
  return (
    <section className="py-16">
      <Title subText="My Work" text="Portfolio" />
    </section>
  );
}

export default Portfolio;
