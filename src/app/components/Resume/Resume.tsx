import { ReactElement } from 'react';

import { Title } from '@/components/Title';

function Resume(): ReactElement {
  return (
    <section className="py-16">
      <Title subText="Resume" text="Summary" />
    </section>
  );
}

export default Resume;
