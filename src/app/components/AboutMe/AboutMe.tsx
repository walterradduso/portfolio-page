import { ReactElement } from 'react';

import { Title } from '@/components/Title';

function AboutMe(): ReactElement {
  return (
    <section className="py-16">
      <Title subText="Know Me More" text="About Me" />
    </section>
  );
}

export default AboutMe;
