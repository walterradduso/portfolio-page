import { ReactElement } from 'react';

import { SkillsPill } from '@/components/SkillsPill';

function Skills(): ReactElement {
  return (
    <section className="p-5 font-poppins sm:p-10">
      <h2 className="mb-6 text-2xl font-semibold">My Skills</h2>

      <div className="flex flex-none flex-col flex-wrap gap-2 sm:flex-row sm:items-start sm:justify-evenly">
        <div className="flex flex-1 flex-col flex-wrap">
          <h3 className="mb-4 text-lg">Coding Skills</h3>

          <SkillsPill
            skills={['ReactJS', 'Javascript', 'Typescript', 'NodeJS', 'GraphQL', 'CSS', 'HTML', 'MySQL', 'Git', 'GitHub', 'Flutter']}
          />
        </div>

        <div className="flex flex-1 flex-col flex-wrap">
          <h3 className="my-4 text-lg sm:mb-4 sm:mt-0">Language</h3>

          <div className="flex flex-col gap-2">
            <p>
              <span className="mr-2 inline-block w-24 rounded-md bg-primary px-4 py-2 text-white dark:bg-white dark:text-dark">
                English
              </span>
              <span className="pl-2">Upper Intermediate</span>
            </p>

            <p>
              <span className="mr-2 inline-block w-24 rounded-md bg-primary px-4 py-2 text-white dark:bg-white dark:text-dark">
                Spanish
              </span>
              <span className="pl-2">Native</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
