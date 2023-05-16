import { ReactElement } from 'react';

import { Pill } from '../Pill';

interface Skills {
  name: string;
  logo?: ReactElement;
}

interface Props {
  skills: Skills[];
}

function SkillsPill({ skills }: Props): ReactElement {
  return (
    <div className="flex flex-none flex-wrap gap-2">
      {skills.map((skill, index) => (
        <Pill key={`skill-${index.toString()}`}>
          {skill?.logo}
          {skill?.name}
        </Pill>
      ))}
    </div>
  );
}

export default SkillsPill;
