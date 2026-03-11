import { ReactElement } from 'react';
import { MdLanguage } from 'react-icons/md';

import { Pill } from '@/components/Pill';
import { SkillsPill } from '@/components/SkillsPill';
import { CODE_SKILLS, SOFT_SKILLS } from '@/constants/skills';

function Skills(): ReactElement {
  return (
    <section className="p-5 font-poppins sm:p-10">
      <h2 className="mb-6 text-2xl font-semibold">My Skills</h2>

      <div className="flex flex-none flex-col flex-wrap gap-6 xl:flex-row">
        <div className="flex flex-1 flex-col flex-wrap">
          <h3 className="mb-4 text-lg">Coding Skills</h3>

          <SkillsPill skills={CODE_SKILLS} />
        </div>

        <div className="flex flex-1 flex-col flex-wrap">
          <h3 className="my-4 text-lg sm:mb-4 sm:mt-0">Soft Skills</h3>

          <SkillsPill skills={SOFT_SKILLS} />
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
