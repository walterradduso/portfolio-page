import { JSX } from 'react';
import { HiOutlineExternalLink } from 'react-icons/hi';
import { SiGithub } from 'react-icons/si';

import { UpdatedRepository } from '@/app/models';
import { getRepositories } from '@/app/services';
import { Title } from '@/components/Title';
import { languageIcon } from '@/constants/languageIcon';

async function fetchRepositories(): Promise<UpdatedRepository[]> {
  return getRepositories();
}

async function Portfolio() {
  const repositories = await fetchRepositories();

  return (
    <section className="py-16">
      <Title subText="My Work" text="Portfolio" />

      <div className="relative columns-1 p-10 font-poppins xs:columns-2 sm:columns-3 md:columns-3 lg:columns-3 xl:columns-4">
        {repositories.map((repository: UpdatedRepository) => {
          return (
            <div
              key={repository?.id}
              className="relative mb-8 flex w-full break-inside-avoid flex-col overflow-hidden rounded-md bg-primary-light-gray/40 p-4 dark:bg-light"
            >
              <h3 className="mb-3 text-xl font-bold text-dark">{repository?.name}</h3>

              <p className="text-base text-dark">{repository?.description}</p>

              {repository?.language && (
                <div className="mt-2 flex cursor-default items-center gap-2 self-start rounded-md border border-dark px-2 py-1 text-sm text-dark">
                  {languageIcon(repository?.language)} <span>{repository?.language}</span>
                </div>
              )}

              <div className="mt-4 flex justify-center gap-2">
                <a
                  className="flex w-full items-center justify-center gap-2 rounded-md border border-primary px-4 py-2 text-center text-primary hover:bg-primary hover:text-white"
                  href={repository?.url}
                  target="_blank"
                >
                  View demo <HiOutlineExternalLink />
                </a>

                <a
                  className="bottom-0 left-0 flex items-center justify-center rounded-md border border-dark px-4 py-2 text-center text-dark hover:bg-dark hover:text-white"
                  href={repository?.url}
                  target="_blank"
                >
                  <SiGithub />
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Portfolio as unknown as () => JSX.Element;
