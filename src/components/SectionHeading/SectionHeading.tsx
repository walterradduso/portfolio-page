import { ReactNode } from 'react';

import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: 'left' | 'center';
  className?: string;
}

function SectionHeading({ eyebrow, title, description, align = 'left', className }: SectionHeadingProps) {
  const alignment = align === 'center' ? 'items-center text-center mx-auto' : 'items-start text-left';

  return (
    <div className={cn('flex max-w-2xl flex-col gap-3', alignment, className)}>
      {eyebrow ? (
        <span className="border-border bg-muted text-muted-foreground inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium tracking-wide uppercase">
          {eyebrow}
        </span>
      ) : null}

      <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h2>

      {description ? <p className="text-muted-foreground text-base leading-relaxed sm:text-lg">{description}</p> : null}
    </div>
  );
}

export default SectionHeading;
