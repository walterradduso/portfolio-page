import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { MotionFadeIn } from '@/components/MotionFadeIn';
import { SectionContainer } from '@/components/SectionContainer';
import { SectionHeading } from '@/components/SectionHeading';
import { profile } from '@/data/profile';

function About() {
  return (
    <SectionContainer className="py-24 sm:py-28" id="about">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 md:grid-cols-[1.5fr_1fr] md:gap-16 lg:px-8">
        <MotionFadeIn className="flex flex-col gap-8">
          <SectionHeading
            description="Bridging architecture, performance, and developer experience in modern React applications."
            eyebrow="About"
            title="Built for the boring parts that compound over time."
          />

          <div className="text-muted-foreground flex flex-col gap-5 text-base leading-relaxed sm:text-lg">
            {profile.about.summary.map((paragraph) => (
              <p key={paragraph.slice(0, 24)}>{paragraph}</p>
            ))}
          </div>
        </MotionFadeIn>

        <MotionFadeIn delay={0.1}>
          <Card className="bg-card/60 backdrop-blur-sm">
            <CardContent className="flex flex-col gap-1">
              {profile.about.highlights.map((item, index) => (
                <div key={item.label} className="flex flex-col gap-1.5">
                  <div className="flex items-baseline justify-between gap-4 py-3">
                    <span className="text-muted-foreground text-xs font-medium tracking-wider uppercase">{item.label}</span>
                    <span className="text-foreground text-right text-sm font-medium">{item.value}</span>
                  </div>

                  {index < profile.about.highlights.length - 1 ? <Separator /> : null}
                </div>
              ))}
            </CardContent>
          </Card>

          <div className="mt-4 flex flex-wrap gap-2">
            {profile.languages.map((lang) => (
              <span
                key={lang}
                className="border-border bg-card text-muted-foreground inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium"
              >
                {lang}
              </span>
            ))}
          </div>
        </MotionFadeIn>
      </div>
    </SectionContainer>
  );
}

export default About;
