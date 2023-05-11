import { ReactElement } from 'react';
import { FaAddressBook } from 'react-icons/fa';

import { Timeline, TimelineItem } from '@/components/Timeline';
import { Title } from '@/components/Title';

function Resume(): ReactElement {
  return (
    <section className="py-16">
      <Title subText="Resume" text="Summary" />

      <Timeline>
        <TimelineItem icon={<FaAddressBook />}>
          <h3>Creative Director</h3>
          <h4>Miami, FL</h4>
          <p>Creative Direction, User Experience, Visual Design, Project Management, Team Leading</p>
        </TimelineItem>
      </Timeline>
    </section>
  );
}

export default Resume;
