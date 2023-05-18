import { ReactElement } from 'react';
import { GrMysql } from 'react-icons/gr';
import { MdLanguage } from 'react-icons/md';
import { RiBracesFill } from 'react-icons/ri';
import {
  SiCss3,
  SiEslint,
  SiFirebase,
  SiFlutter,
  SiGit,
  SiGithub,
  SiGraphql,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiPrettier,
  SiReact,
  SiRedux,
  SiSass,
  SiTailwindcss,
  SiTypescript,
  SiVite,
} from 'react-icons/si';

import { Pill } from '@/components/Pill';
import { SkillsPill } from '@/components/SkillsPill';

function Skills(): ReactElement {
  const codeSkills = [
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
      name: 'Sass',
      logo: <SiSass />,
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
      name: 'Redux',
      logo: <SiRedux />,
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
      name: 'ViteJs',
      logo: <SiVite />,
    },
    {
      name: 'ESLint',
      logo: <SiEslint />,
    },
    {
      name: 'Prettier',
      logo: <SiPrettier />,
    },
    {
      name: 'Firebase',
      logo: <SiFirebase />,
    },
    {
      name: 'Flutter',
      logo: <SiFlutter />,
    },
  ];

  const softSkills = [
    { name: 'Adaptability' },
    { name: 'Attention to Detail' },
    { name: 'Communication' },
    { name: 'Creativity' },
    { name: 'Learning Agility' },
    { name: 'Proactive Learning' },
    { name: 'Problem-Solving' },
    { name: 'Resilience' },
    { name: 'Teamwork' },
    { name: 'Time Management' },
  ];

  return (
    <section className="p-5 font-poppins sm:p-10">
      <h2 className="mb-6 text-2xl font-semibold">My Skills</h2>

      <div className="flex flex-none flex-col flex-wrap gap-6 xl:flex-row">
        <div className="flex flex-1 flex-col flex-wrap">
          <h3 className="mb-4 text-lg">Coding Skills</h3>

          <SkillsPill skills={codeSkills} />
        </div>

        <div className="flex flex-1 flex-col flex-wrap">
          <h3 className="my-4 text-lg sm:mb-4 sm:mt-0">Soft Skills</h3>

          <SkillsPill skills={softSkills} />
        </div>

        <div className="flex flex-1 flex-col flex-wrap">
          <h3 className="my-4 text-lg sm:mb-4 sm:mt-0">Language</h3>

          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <Pill>
                <MdLanguage className="ml-0" />
                English
              </Pill>

              <span>Upper Intermediate</span>
            </div>

            <div className="flex items-center gap-2">
              <Pill>
                <MdLanguage />
                Spanish
              </Pill>

              <span>Native</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
