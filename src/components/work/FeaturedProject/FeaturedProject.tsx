import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';

import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { GithubIcon } from '@/components/icons';
import type { FeaturedProject as FeaturedProjectType } from '@/data/profile';

interface FeaturedProjectProps {
  project: FeaturedProjectType;
}

function FeaturedProject({ project }: FeaturedProjectProps) {
  const hasLinks = Boolean(project.liveUrl || project.codeUrl);

  return (
    <Card className="overflow-hidden p-0 transition-shadow hover:shadow-md md:grid md:grid-cols-2">
      <div className="bg-muted relative aspect-[16/10] w-full overflow-hidden md:aspect-auto md:h-full">
        <Image
          fill
          alt={`${project.title} preview`}
          className="object-cover object-left transition-transform duration-500 group-hover:scale-105"
          sizes="(min-width: 768px) 50vw, 100vw"
          src={project.thumbnail}
        />
      </div>

      <CardContent className="flex flex-col gap-4 p-6 sm:p-8">
        <p className="text-muted-foreground text-xs font-medium tracking-wider uppercase">{project.role}</p>

        <h3 className="font-display text-2xl leading-tight font-semibold tracking-tight">{project.title}</h3>

        <p className="text-muted-foreground text-sm leading-relaxed sm:text-base">{project.description}</p>

        <p className="text-foreground/80 text-sm leading-relaxed">
          <span className="text-foreground font-medium">Impact: </span>
          {project.outcome}
        </p>

        <ul className="flex flex-wrap gap-1.5 pt-1" role="list">
          {project.stack.map((tech) => (
            <li key={tech}>
              <Badge variant="outline">{tech}</Badge>
            </li>
          ))}
        </ul>

        {hasLinks ? (
          <div className="flex flex-wrap items-center gap-3 pt-2">
            {project.liveUrl ? (
              <a
                aria-label={`View ${project.title} live`}
                className="text-foreground hover:text-accent focus-visible:ring-ring focus-visible:ring-offset-background inline-flex items-center gap-1.5 rounded-sm text-sm font-medium transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
                href={project.liveUrl}
                rel="noopener noreferrer"
                target="_blank"
              >
                Live
                <ArrowUpRight className="size-3.5" />
              </a>
            ) : null}

            {project.codeUrl ? (
              <a
                aria-label={`View ${project.title} source`}
                className="text-foreground hover:text-accent focus-visible:ring-ring focus-visible:ring-offset-background inline-flex items-center gap-1.5 rounded-sm text-sm font-medium transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
                href={project.codeUrl}
                rel="noopener noreferrer"
                target="_blank"
              >
                Code
                <GithubIcon className="size-3.5" />
              </a>
            ) : null}
          </div>
        ) : (
          <p className="text-muted-foreground pt-2 text-xs">{project.status ?? 'Internal product · private repository'}</p>
        )}
      </CardContent>
    </Card>
  );
}

export default FeaturedProject;
