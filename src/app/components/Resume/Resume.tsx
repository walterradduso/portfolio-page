import { ReactElement } from 'react';
import { HiOutlineExternalLink } from 'react-icons/hi';

import { DownloadResume } from '@/components/DownloadResume';
import { Timeline, TimelineItem } from '@/components/Timeline';
import { Title } from '@/components/Title';
import { monthsPassed } from '@/utils/monthPasses';

import { RenderCompanyLogo } from '../RenderCompanyLogo';
import { Skills } from '../Skills';

function Resume(): ReactElement {
  const currentDate: Date = new Date();
  const currentYear: number = currentDate.getFullYear();
  const currentMonth: string = currentDate.toLocaleDateString('en-US', {
    month: 'short',
  });

  return (
    <section className="py-16 font-poppins">
      <Title subText="Resume" text="Summary" />

      <Timeline>
        <TimelineItem
          isRight
          date="Jan 2025 - Present"
          icon={<RenderCompanyLogo company="Nullplatform" />}
          monthPasses={monthsPassed('Jan', 2025, currentMonth, currentYear)}
        >
          <h3 className="text-xl font-bold">SR Frontend Engineer</h3>

          <h4 className="text-base font-semibold text-gray-500">
            <a className="flex items-center gap-1 underline" href="https://www.linkedin.com/company/nullplatform/" target="_blank">
              Nullplatform <HiOutlineExternalLink />
            </a>
          </h4>

          <div className="mt-4 text-base">
            <p>
              Working on the frontend architecture across multiple applications using a micro-frontend approach, focusing on scalability and
              consistency throughout the platform.
            </p>
            <p>
              Responsible for the development and maintenance of a gateway service that connects frontend modules with backend services.
            </p>
            <p>
              Contributing to the integration of AI-powered features into the platform, improving the developer experience and building
              automation tools.
            </p>
          </div>
        </TimelineItem>

        <TimelineItem
          date="Oct 2023 - Dec 2024"
          icon={<RenderCompanyLogo company="Deel" />}
          monthPasses={monthsPassed('Oct', 2023, 'Dec', 2024)}
        >
          <h3 className="text-xl font-bold">SR Frontend Engineer</h3>

          <h4 className="text-base font-semibold text-gray-500">
            <a className="flex items-center gap-1 underline" href="https://www.linkedin.com/company/deel/" target="_blank">
              Deel <HiOutlineExternalLink />
            </a>
          </h4>

          <div className="mt-4 text-base">
            <p>Worked on frontend development projects focused on delivering high-quality user experiences.</p>
            <p>
              Took part in code reviews, helped implement new features, and collaborated closely with backend teams to improve project
              outcomes.
            </p>
          </div>
        </TimelineItem>

        <TimelineItem
          isRight
          date="Nov 2022 - Oct 2023"
          icon={<RenderCompanyLogo company="Mundi" />}
          monthPasses={monthsPassed('Nov', 2022, 'Oct', 2023)}
        >
          <h3 className="text-xl font-bold">SR Frontend Software Engineer</h3>

          <h4 className="text-base font-semibold text-gray-500">
            <a className="flex items-center gap-1 underline" href="https://www.linkedin.com/company/munditrade/" target="_blank">
              Mundi <HiOutlineExternalLink />
            </a>
          </h4>

          <div className="mt-4 text-base">
            <p>Worked on frontend development projects using modern technologies.</p>
            <p>Worked closely with cross-functional teams to ensure smooth integration and alignment with project goals.</p>

            <p className="mt-2">Some responsibilities included:</p>

            <ul className="ml-5 list-disc">
              <li>Performing code reviews.</li>
              <li>Maintaining, optimizing, and enhancing existing projects.</li>
              <li>Implementing new features and procedures.</li>
              <li>Collaborating with the backend team.</li>
              <li>Adding unit tests.</li>
              <li>Improving performance.</li>
            </ul>
          </div>
        </TimelineItem>

        <TimelineItem
          date="Jan 2022 - Nov 2022"
          icon={<RenderCompanyLogo company="MercadoLibre" />}
          monthPasses={monthsPassed('Jan', 2022, 'Nov', 2022)}
        >
          <h3 className="text-xl font-bold">Tech Lead Frontend</h3>

          <h4 className="text-base font-semibold text-gray-500">
            <a className="flex items-center gap-1 underline" href="https://www.linkedin.com/company/mercadolibre/" target="_blank">
              Mercado Libre <HiOutlineExternalLink />
            </a>
          </h4>

          <div className="mt-4 text-base">
            <p>Oversaw frontend development for multiple initiatives, using React and NodeJS as core technologies.</p>
            <p>Took on a versatile role, handling a wide range of tasks across different environments.</p>
            <p>Kept up with industry trends and emerging technologies to bring fresh ideas into the team.</p>
          </div>
        </TimelineItem>

        <TimelineItem
          isRight
          date="Jan 2021 - Dec 2021"
          icon={<RenderCompanyLogo company="MercadoLibre" />}
          monthPasses={monthsPassed('Jan', 2021, 'Dec', 2021)}
        >
          <h3 className="text-xl font-bold">SR Frontend Software Engineer</h3>

          <h4 className="text-base font-semibold text-gray-500">
            <a className="flex items-center gap-1 underline" href="https://www.linkedin.com/company/mercadolibre/" target="_blank">
              Mercado Libre <HiOutlineExternalLink />
            </a>
          </h4>

          <div className="mt-4 text-base">
            <p>Worked with cross-functional teams to drive frontend development projects and ensure alignment with project goals.</p>
            <p>Actively participated in code reviews and helped optimize and improve existing projects.</p>
          </div>
        </TimelineItem>

        <TimelineItem
          date="Oct 2019 - Dec 2020"
          icon={<RenderCompanyLogo company="MercadoLibre" />}
          monthPasses={monthsPassed('Oct', 2019, 'Dec', 2020)}
        >
          <h3 className="text-xl font-bold">SSR Frontend Software Engineer</h3>

          <h4 className="text-base font-semibold text-gray-500">
            <a className="flex items-center gap-1 underline" href="https://www.linkedin.com/company/mercadolibre/" target="_blank">
              Mercado Libre <HiOutlineExternalLink />
            </a>
          </h4>

          <div className="mt-4 text-base">
            <p>Assisted in the frontend development of different initiatives using React and NodeJS.</p>
            <p>Adapted to a dynamic role, performing a variety of tasks in multiple environments.</p>
          </div>
        </TimelineItem>

        <TimelineItem
          isRight
          date="Jun 2016 - Oct 2019"
          icon={<RenderCompanyLogo company="Endeev" />}
          monthPasses={monthsPassed('Jun', 2016, 'Oct', 2019)}
        >
          <h3 className="text-xl font-bold">Frontend Developer</h3>

          <h4 className="text-base font-semibold text-gray-500">
            <a className="flex items-center gap-1 underline" href="https://www.linkedin.com/company/endeev/" target="_blank">
              Endeev <HiOutlineExternalLink />
            </a>
          </h4>

          <div className="mt-4 text-base">
            <p>Managed the frontend development of a web application using HTML, CSS, and React.</p>
            <p>Developed mobile applications using React Native and contributed to the creation of a RESTful API using NodeJS.</p>
            <p>Collaborated with product managers to design new features and validate project requirements.</p>
          </div>
        </TimelineItem>

        <TimelineItem
          date="May 2011 - Jun 2016"
          icon={<RenderCompanyLogo company="WebDev" />}
          monthPasses={monthsPassed('May', 2011, 'Jun', 2016)}
        >
          <h3 className="text-xl font-bold">Web Developer</h3>

          <h4 className="text-base font-semibold text-gray-500">Freelancer / Tecnosan / 1st Outsourcing Choice SRL</h4>

          <div className="mt-4 text-base">
            <p>
              Built custom WordPress sites, RESTful APIs, and user interfaces for various applications through freelance projects and while
              working at Tecnosan and 1st Outsourcing Choice SRL.
            </p>
            <p>Used PHP, HTML, CSS, and JavaScript to create and maintain responsive web applications.</p>
            <p>
              Developed a local e-commerce platform for users in San Justo, Santa Fe, and surrounding areas, allowing them to easily upload
              and sell products.
            </p>
          </div>
        </TimelineItem>
      </Timeline>

      <Skills />

      <div className="flex justify-center">
        <DownloadResume />
      </div>
    </section>
  );
}

export default Resume;
