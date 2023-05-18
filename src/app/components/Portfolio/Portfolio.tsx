import clsx from 'clsx';
import { JSX } from 'react';
import { HiOutlineExternalLink } from 'react-icons/hi';
import { SiGithub } from 'react-icons/si';

import { UpdatedRepository } from '@/app/models';
import { getRepositories } from '@/app/services';
import { Link } from '@/components/Link';
import { Title } from '@/components/Title';
import { languageIcon } from '@/constants/languageIcon';
import { capitalizeFirstLetter } from '@/utils/capitalizeFirstLetter';

async function fetchRepositories(): Promise<UpdatedRepository[]> {
  return getRepositories();
}

async function Portfolio() {
  const repositories = await fetchRepositories();

  return (
    <section className="py-16 font-poppins">
      <Title subText="My Work" text="Portfolio" />

      <div className="relative columns-1 gap-10 p-10 font-poppins xs:columns-2 sm:columns-3 md:columns-3 lg:columns-3 xl:columns-4">
        {repositories.map((repository: UpdatedRepository) => {
          const buttonsStyle = clsx('mt-3 flex gap-2', {
            'justify-center': repository?.homepage,
            'justify-end': !repository?.homepage,
          });

          const githubStyles = clsx(
            'bottom-0 left-0 flex h-8 items-center justify-center border-dark text-center text-dark transition duration-300 ease-in-out hover:bg-dark hover:text-white',
            {
              'w-full': !repository?.homepage,
            },
          );

          return (
            <div
              key={repository?.id}
              className="relative mb-10 flex w-full break-inside-avoid flex-col gap-2 overflow-hidden rounded-md bg-primary-light-gray/40 p-4 dark:bg-light"
            >
              <h3 className="text-xl font-bold text-dark">{repository?.name}</h3>

              {repository?.description && <p className="text-base text-dark">{repository?.description}</p>}

              {!repository?.topics?.length && repository?.language ? (
                <div className="flex cursor-default items-center gap-2 self-start rounded-md border border-dark px-2 py-1 text-sm text-dark">
                  {languageIcon(repository?.language)} <span>{capitalizeFirstLetter(repository?.language.toLowerCase())}</span>
                </div>
              ) : null}

              {repository?.topics?.length ? (
                <div className="flex flex-wrap gap-2">
                  {repository?.topics?.map((topic: string) => (
                    <div
                      key={topic}
                      className="flex cursor-default items-center gap-2 self-start rounded-md border border-dark px-2 py-1 text-sm text-dark"
                    >
                      {languageIcon(topic)} <span>{capitalizeFirstLetter(topic)}</span>
                    </div>
                  ))}
                </div>
              ) : null}

              <div className={buttonsStyle}>
                {repository?.homepage && (
                  <Link
                    className="flex w-full items-center justify-center gap-1 border-primary text-center text-primary hover:bg-primary hover:text-white"
                    href={repository?.homepage}
                  >
                    View <HiOutlineExternalLink />
                  </Link>
                )}

                <Link className={githubStyles} href={repository?.url}>
                  <SiGithub />
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Portfolio as unknown as () => JSX.Element;
