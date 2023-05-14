import { ReactElement } from 'react';
import { GrMysql } from 'react-icons/gr';
import { MdLanguage } from 'react-icons/md';
import { RiBracesFill } from 'react-icons/ri';
import {
  SiCss3,
  SiFlutter,
  SiGit,
  SiGithub,
  SiGraphql,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from 'react-icons/si';

import { SkillsPill } from '@/components/SkillsPill';

function Skills(): ReactElement {
  return (
    <section className="p-5 font-poppins sm:p-10">
      <h2 className="mb-6 text-2xl font-semibold">My Skills</h2>

      <div className="flex flex-none flex-col flex-wrap gap-2 sm:flex-row sm:items-start sm:justify-evenly">
        <div className="flex flex-1 flex-col flex-wrap">
          <h3 className="mb-4 text-lg">Coding Skills</h3>

          <SkillsPill
            skills={[
              {
                name: 'ReactJS',
                logo: <SiReact />,
              },
              {
                name: 'Javascript',
                logo: <SiJavascript />,
              },
              {
                name: 'Typescript',
                logo: <SiTypescript />,
              },
              {
                name: 'NodeJS',
                logo: <SiNodedotjs />,
              },
              {
                name: 'NextJS',
                logo: <SiNextdotjs />,
              },
              {
                name: 'CSS',
                logo: <SiCss3 />,
              },
              {
                name: 'TailwindCSS',
                logo: <SiTailwindcss />,
              },
              {
                name: 'HTML',
                logo: <SiHtml5 />,
              },
              {
                name: 'GraphQL',
                logo: <SiGraphql />,
              },
              {
                name: 'RESTful',
                logo: <RiBracesFill />,
              },
              {
                name: 'MongoDB',
                logo: <SiMongodb />,
              },
              {
                name: 'MySQL',
                logo: <GrMysql />,
              },
              {
                name: 'Git',
                logo: <SiGit />,
              },
              {
                name: 'GitHub',
                logo: <SiGithub />,
              },
              {
                name: 'Flutter',
                logo: <SiFlutter />,
              },
            ]}
          />
        </div>

        <div className="flex flex-1 flex-col flex-wrap">
          <h3 className="my-4 text-lg sm:mb-4 sm:mt-0">Language</h3>

          <div className="flex flex-col gap-2">
            <p className="flex items-center gap-2">
              <span className="mr-2 flex w-30 cursor-default items-center gap-1 rounded-md bg-primary px-4 py-2 text-center text-white hover:bg-dark dark:bg-white dark:text-dark hover:dark:bg-primary hover:dark:text-white">
                <MdLanguage className="ml-0.5" />
                English
              </span>

              <span>Upper Intermediate</span>
            </p>

            <p className="flex items-center gap-2">
              <span className="mr-2 flex w-30 cursor-default items-center justify-center gap-1 rounded-md bg-primary px-4 py-2 text-center text-white hover:bg-dark dark:bg-white dark:text-dark hover:dark:bg-primary hover:dark:text-white">
                <MdLanguage />
                Spanish
              </span>

              <span>Native</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
