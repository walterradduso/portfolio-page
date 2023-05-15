import { ReactElement } from 'react';
import { FaAddressBook } from 'react-icons/fa';

import { Timeline, TimelineItem } from '@/components/Timeline';
import { Title } from '@/components/Title';

import { Skills } from '../Skills';

function Resume(): ReactElement {
  return (
    <section className="py-16">
      <Title subText="Resume" text="Summary" />

      <Timeline>
        <TimelineItem date="Sep 2022 - Present" icon={<FaAddressBook />}>
          <h3 className="text-xl font-bold">Sr. Frontend Software Engineer</h3>

          <h4 className="text-base font-bold text-gray-500">
            <a href="https://www.linkedin.com/company/munditrade/mycompany/" target="_blank">
              Mundi
            </a>
          </h4>

          <div className="mt-4 text-sm">
            <p>Work on frontend development projects using cutting-edge technologies.</p>
            <p>Work closely with cross-functional teams to ensure seamless integration and alignment with project goals.</p>

            <p className="mt-2">Some responsibilities include:</p>

            <ul className="ml-5 list-disc">
              <li>Performing code reviews.</li>
              <li>Maintaining, optimizing, and enhancing current projects.</li>
              <li>Implementing new features and procedures.</li>
              <li>Working with the backend team.</li>
              <li>Add unit tests.</li>
              <li>Improve performance.</li>
              <li>Perform various other tasks as needed.</li>
            </ul>
          </div>
        </TimelineItem>

        <TimelineItem isRight date="Jan 2022 - Sep 2022" icon={<FaAddressBook />}>
          <h3 className="text-xl font-bold">Software Technical Lead</h3>

          <h4 className="text-base font-bold text-gray-500">
            <a href="https://www.linkedin.com/company/mercadolibre/" target="_blank">
              Mercado Libre
            </a>
          </h4>

          <div className="mt-4 text-sm">
            <p>Oversaw frontend development for multiple initiatives, using React and NodeJS as core technologies.</p>
            <p>Embraced a dynamic role, performing a wide variety of tasks in multiple environments.</p>
            <p>Maintained a strong understanding of current industry trends and emerging technologies to stay ahead of the competition.</p>
          </div>
        </TimelineItem>

        <TimelineItem date="Jan 2021 - Dec 2021" icon={<FaAddressBook />}>
          <h3 className="text-xl font-bold">Sr. Frontend Software Engineer</h3>

          <h4 className="text-base font-bold text-gray-500">
            <a href="https://www.linkedin.com/company/mercadolibre/" target="_blank">
              Mercado Libre
            </a>
          </h4>

          <div className="mt-4 text-sm">
            <p>Worked with cross-functional teams to drive front-end development projects and ensure alignment with project goals.</p>
            <p>Actively participated in code reviews and helped optimize and improve existing projects.</p>
          </div>
        </TimelineItem>

        <TimelineItem isRight date="Oct 2019 - Dec 2020" icon={<FaAddressBook />}>
          <h3 className="text-xl font-bold">Ssr. Frontend Software Engineer</h3>

          <h4 className="text-base font-bold text-gray-500">
            <a href="https://www.linkedin.com/company/mercadolibre/" target="_blank">
              Mercado Libre
            </a>
          </h4>

          <div className="mt-4 text-sm">
            <p>Assisted in the frontend development of different initiatives using React and NodeJS.</p>
            <p>Adapted to a dynamic role, performing a variety of tasks in multiple environments.</p>
          </div>
        </TimelineItem>

        <TimelineItem date="Jun 2016 - Oct 2019" icon={<FaAddressBook />}>
          <h3 className="text-xl font-bold">Frontend Developer</h3>

          <h4 className="text-base font-bold text-gray-500">
            <a href="https://www.linkedin.com/company/endeev/" target="_blank">
              Endeev
            </a>
          </h4>

          <div className="mt-4 text-sm">
            <p>Managed the frontend development of a web application using HTML, CSS, and React.</p>
            <p>Developed mobile applications using React Native and contributed to the creation of a RESTful API using NodeJS.</p>
            <p>Collaborated with product managers to design innovative features and validate project requirements.</p>
          </div>
        </TimelineItem>

        <TimelineItem isRight date="May 2011 - Jun 2016" icon={<FaAddressBook />}>
          <h3 className="text-xl font-bold">Web Developer</h3>

          <h4 className="text-base font-bold text-gray-500">Freelancer / Tecnosan / 1st Outsourcing Choice SRL</h4>

          <div className="mt-4 text-sm">
            <p>
              Created custom and complex WordPress sites, RESTful APIs, and user interfaces for a variety of applications through freelance
              projects and while working at Tecnosan and 1st Outsourcing Choice SRL..
            </p>
            <p>Utilized PHP, HTML, CSS, and JavaScript to create and maintain responsive and visually appealing web applications.</p>
            <p>
              Developed a local e-commerce platform for users in San Justo, Santa Fe, and surrounding areas, allowing them to easily upload
              and sell products.
            </p>
          </div>
        </TimelineItem>
      </Timeline>

      <Skills />
    </section>
  );
}

export default Resume;
