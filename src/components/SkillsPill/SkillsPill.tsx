import { ReactElement } from 'react';

interface Props {
  skills: string[];
}

function SkillsPill({ skills }: Props): ReactElement {
  return (
    <div className="flex flex-none flex-wrap gap-2">
      {skills.map((skill, index) => (
        <span key={`skill-${index.toString()}`} className="rounded-md bg-primary px-4 py-2 text-white dark:bg-white dark:text-dark">
          {skill}
        </span>
      ))}
    </div>
  );
}

export default SkillsPill;
