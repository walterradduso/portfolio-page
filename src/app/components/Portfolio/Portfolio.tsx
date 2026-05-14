import clsx from 'clsx';
import { HiOutlineExternalLink } from 'react-icons/hi';
import { SiGithub } from 'react-icons/si';

import { getRepositories } from '@/app/services';
import { DownloadResume } from '@/components/DownloadResume';
import { Link } from '@/components/Link';
import { Title } from '@/components/Title';
import { languageIcon } from '@/constants/languageIcon';
import { capitalizeFirstLetter } from '@/utils/capitalizeFirstLetter';

async function Portfolio() {
  const repositories = await getRepositories();

  return (
    <section className="font-poppins py-16">
      <Title subText="My Work" text="Portfolio" />

      {repositories.length === 0 ? (
        <p className="text-dark py-10 text-center text-lg dark:text-white">No repositories available at the moment.</p>
      ) : (
        <div className="font-poppins xs:columns-2 relative columns-1 gap-10 p-10 sm:columns-3 md:columns-3 lg:columns-3 xl:columns-4">
          {repositories.map((repository) => {
            const buttonsStyle = clsx('mt-3 flex gap-2', {
              'justify-center': repository.homepage,
              'justify-end': !repository.homepage,
            });

            const githubStyles = clsx(
              'border-dark text-dark hover:bg-dark bottom-0 left-0 flex h-8 items-center justify-center text-center transition duration-300 ease-in-out hover:text-white',
              {
                'w-full': !repository.homepage,
              },
            );

            return (
              <div
                key={repository.id}
                className="bg-primary-light-gray/40 dark:bg-light relative mb-10 flex w-full break-inside-avoid flex-col gap-2 overflow-hidden rounded-md p-4"
              >
                <h3 className="text-dark text-xl font-bold">{repository.name}</h3>

                {repository.description && <p className="text-dark text-base">{repository.description}</p>}

                {!repository.topics?.length && repository.language ? (
                  <div className="border-dark text-dark flex cursor-default items-center gap-2 self-start rounded-md border px-2 py-1 text-sm">
                    {languageIcon(repository.language)} <span>{capitalizeFirstLetter(repository.language.toLowerCase())}</span>
                  </div>
                ) : null}

                {repository.topics?.length ? (
                  <div className="flex flex-wrap gap-2">
                    {repository.topics.map((topic: string) => (
                      <div
                        key={topic}
                        className="border-dark text-dark flex cursor-default items-center gap-2 self-start rounded-md border px-2 py-1 text-sm"
                      >
                        {languageIcon(topic)} <span>{capitalizeFirstLetter(topic)}</span>
                      </div>
                    ))}
                  </div>
                ) : null}

                <div className={buttonsStyle}>
                  {repository.homepage && (
                    <Link
                      ariaLabel={`View ${repository.name} live demo`}
                      className="border-primary text-primary hover:bg-primary flex w-full items-center justify-center gap-1 text-center hover:text-white"
                      href={repository.homepage}
                    >
                      View <HiOutlineExternalLink />
                    </Link>
                  )}

                  <Link ariaLabel={`View ${repository.name} source code on GitHub`} className={githubStyles} href={repository.url}>
                    <SiGithub />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      )}

      <div className="flex justify-center">
        <DownloadResume />
      </div>
    </section>
  );
}

export default Portfolio;
