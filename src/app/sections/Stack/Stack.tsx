import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MotionFadeIn } from '@/components/MotionFadeIn';
import { SectionContainer } from '@/components/SectionContainer';
import { SectionHeading } from '@/components/SectionHeading';
import { stackGroups } from '@/data/profile';

function Stack() {
  return (
    <SectionContainer className="py-24 sm:py-28" id="stack">
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-4 sm:px-6 lg:px-8">
        <MotionFadeIn>
          <SectionHeading
            description="From the core React stack to the AI tooling that's now part of how I ship. Opinionated about React and TypeScript, pragmatic about everything else."
            eyebrow="Tech Stack"
            title="What I work with day to day."
          />
        </MotionFadeIn>

        <div className="grid gap-5 sm:grid-cols-2">
          {stackGroups.map((group, index) => (
            <MotionFadeIn key={group.id} delay={Math.min(index * 0.05, 0.2)}>
              <Card className="h-full transition-shadow hover:shadow-md">
                <CardContent className="flex flex-col gap-4">
                  <h3 className="font-display text-muted-foreground text-sm font-semibold tracking-wider uppercase">{group.label}</h3>

                  <ul className="flex flex-wrap gap-2" role="list">
                    {group.items.map((item) => (
                      <li key={item}>
                        <Badge className="rounded-full px-3 py-1 text-sm" variant="outline">
                          {item}
                        </Badge>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </MotionFadeIn>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
}

export default Stack;
