import { ArrowUpRight } from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { GithubIcon } from '@/components/icons';
import { capitalizeFirstLetter } from '@/utils/capitalizeFirstLetter';
import type { UpdatedRepository } from '@/app/models';

interface RepoCardProps {
  repo: UpdatedRepository;
}

function RepoCard({ repo }: RepoCardProps) {
  const primaryHref = repo.homepage || repo.url;
  const primaryLabel = repo.homepage ? 'Live' : 'GitHub';

  return (
    <Card className="group h-full transition-shadow hover:shadow-md">
      <CardContent className="flex h-full flex-col gap-3">
        <div className="flex items-start justify-between gap-2">
          <h4 className="font-display text-base font-semibold tracking-tight">{repo.name}</h4>

          {repo.language ? (
            <Badge className="shrink-0" variant="muted">
              {capitalizeFirstLetter(repo.language.toLowerCase())}
            </Badge>
          ) : null}
        </div>

        {repo.description ? <p className="text-muted-foreground line-clamp-3 text-sm leading-relaxed">{repo.description}</p> : null}

        {repo.topics?.length ? (
          <ul className="flex flex-wrap gap-1.5" role="list">
            {repo.topics.slice(0, 4).map((topic) => (
              <li key={topic}>
                <Badge variant="outline">{topic}</Badge>
              </li>
            ))}
          </ul>
        ) : null}

        <div className="mt-auto flex items-center gap-3 pt-2">
          <a
            aria-label={`${primaryLabel} for ${repo.name}`}
            className="text-foreground hover:text-accent focus-visible:ring-ring focus-visible:ring-offset-background inline-flex items-center gap-1.5 rounded-sm text-sm font-medium transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
            href={primaryHref}
            rel="noopener noreferrer"
            target="_blank"
          >
            {primaryLabel}
            <ArrowUpRight className="size-3.5" />
          </a>

          {repo.homepage ? (
            <a
              aria-label={`GitHub repository for ${repo.name}`}
              className="text-muted-foreground hover:text-foreground focus-visible:ring-ring focus-visible:ring-offset-background inline-flex items-center gap-1.5 rounded-sm text-sm font-medium transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
              href={repo.url}
              rel="noopener noreferrer"
              target="_blank"
            >
              GitHub
              <GithubIcon className="size-3.5" />
            </a>
          ) : null}
        </div>
      </CardContent>
    </Card>
  );
}

export default RepoCard;
