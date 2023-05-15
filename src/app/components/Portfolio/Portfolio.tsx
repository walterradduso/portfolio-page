import { HiOutlineExternalLink } from 'react-icons/hi';
import { SiGithub } from 'react-icons/si';

import { UpdatedRepository } from '@/app/models';
import { getRepositories } from '@/app/services';
import { Title } from '@/components/Title';

async function fetchRepositories(): Promise<UpdatedRepository[]> {
  return getRepositories();
}

async function Portfolio() {
  const repositories = await fetchRepositories();

  return (
    <section className="py-16">
      <Title subText="My Work" text="Portfolio" />

      <div className="relative columns-1 p-10 xs:columns-2 sm:columns-3 md:columns-3 lg:columns-3 xl:columns-4">
        {repositories.map((repository: UpdatedRepository) => {
          return (
            <div
              key={repository?.id}
              className="relative mb-5 w-full break-inside-avoid overflow-hidden rounded-md border-2 border-dark bg-gray-d p-4 dark:bg-white"
            >
              <h3 className="my-3 text-center text-xl font-bold text-dark">{repository?.name}</h3>

              <p className="text-sm text-dark">{repository?.description}</p>

              <p className="mt-2 text-sm text-dark">
                <span className="underline">Language</span>: <span className="">{repository?.language}</span>
              </p>

              <a
                className="absolute -right-7 -top-2 flex h-10 w-20 rotate-45 items-end justify-center bg-black px-4 py-2 text-center text-white"
                href={repository?.url}
                target="_blank"
              >
                <SiGithub className="-rotate-45" />
              </a>

              <a
                className="mt-4 flex items-center justify-center gap-2 rounded-md bg-primary py-2 text-center text-white"
                href={repository?.url}
                target="_blank"
              >
                View demo <HiOutlineExternalLink />
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Portfolio;
