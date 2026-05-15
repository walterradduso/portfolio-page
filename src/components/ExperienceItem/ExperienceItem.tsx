import { ExternalLink } from 'lucide-react';
import Image from 'next/image';

import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import type { ExperienceEntry } from '@/data/profile';

interface ExperienceItemProps {
  entry: ExperienceEntry;
  isLast?: boolean;
}

function ExperienceItem({ entry, isLast = false }: ExperienceItemProps) {
  return (
    <li className="relative grid grid-cols-[auto_1fr] gap-4 sm:gap-6">
      <div className="relative flex flex-col items-center">
        <span className="border-border bg-background relative z-10 flex h-12 w-12 items-center justify-center rounded-full border shadow-sm">
          <Image
            alt={`${entry.company} logo`}
            className="h-9 w-9 rounded-full object-cover"
            height={48}
            src={entry.companyLogo}
            width={48}
          />
        </span>

        {!isLast ? <span aria-hidden="true" className="bg-border absolute top-12 bottom-0 w-px" /> : null}
      </div>

      <Card className={cn('mb-8 transition-shadow hover:shadow-md', isLast && 'mb-0')}>
        <CardHeader>
          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <CardTitle className="text-lg sm:text-xl">{entry.role}</CardTitle>
            <Badge variant="muted">{entry.period}</Badge>
          </div>

          <a
            className="text-muted-foreground hover:text-accent inline-flex w-fit items-center gap-1 text-sm font-medium transition-colors"
            href={entry.companyHref}
            rel="noopener noreferrer"
            target="_blank"
          >
            {entry.company}
            <ExternalLink className="size-3" />
          </a>
        </CardHeader>

        <CardContent>
          <ul className="text-muted-foreground flex flex-col gap-2 text-sm leading-relaxed sm:text-base">
            {entry.bullets.map((bullet) => (
              <li key={bullet.slice(0, 32)} className="flex gap-3">
                <span aria-hidden="true" className="bg-accent mt-2.5 size-1 shrink-0 rounded-full" />
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </li>
  );
}

export default ExperienceItem;
