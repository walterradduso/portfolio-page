import { ReactElement } from 'react';
import { GrMysql } from 'react-icons/gr';
import { RiBracesFill } from 'react-icons/ri';
import {
  SiCss,
  SiEslint,
  SiFirebase,
  SiFlutter,
  SiGit,
  SiGithub,
  SiGraphql,
  SiHtml5,
  SiJavascript,
  SiJest,
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

interface Skill {
  name: string;
  logo?: ReactElement;
}

export const CODE_SKILLS: Skill[] = [
  { name: 'ReactJS', logo: <SiReact /> },
  { name: 'Javascript', logo: <SiJavascript /> },
  { name: 'Typescript', logo: <SiTypescript /> },
  { name: 'NodeJS', logo: <SiNodedotjs /> },
  { name: 'NextJS', logo: <SiNextdotjs /> },
  { name: 'CSS', logo: <SiCss /> },
  { name: 'Sass', logo: <SiSass /> },
  { name: 'TailwindCSS', logo: <SiTailwindcss /> },
  { name: 'HTML', logo: <SiHtml5 /> },
  { name: 'Redux', logo: <SiRedux /> },
  { name: 'GraphQL', logo: <SiGraphql /> },
  { name: 'RESTful', logo: <RiBracesFill /> },
  { name: 'MongoDB', logo: <SiMongodb /> },
  { name: 'MySQL', logo: <GrMysql /> },
  { name: 'Jest', logo: <SiJest /> },
  { name: 'Git', logo: <SiGit /> },
  { name: 'GitHub', logo: <SiGithub /> },
  { name: 'ViteJs', logo: <SiVite /> },
  { name: 'ESLint', logo: <SiEslint /> },
  { name: 'Prettier', logo: <SiPrettier /> },
  { name: 'Firebase', logo: <SiFirebase /> },
  { name: 'Flutter', logo: <SiFlutter /> },
];

export const SOFT_SKILLS: Skill[] = [
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
