import { ReactElement } from 'react';

interface Skills {
  name: string;
  logo: ReactElement;
}

interface Props {
  skills: Skills[];
}

function SkillsPill({ skills }: Props): ReactElement {
  return (
    <div className="flex flex-none flex-wrap gap-2">
      {skills.map((skill, index) => (
        <div
          key={`skill-${index.toString()}`}
          className="flex cursor-default items-center gap-1 rounded-md bg-primary px-4 py-2 text-white hover:bg-dark dark:bg-white dark:text-dark hover:dark:bg-primary hover:dark:text-white"
        >
          {skill.logo}
          {skill.name}
        </div>
      ))}
    </div>
  );
}

export default SkillsPill;
