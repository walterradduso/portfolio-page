import { ExperienceItem } from '@/components/ExperienceItem';
import { MotionFadeIn } from '@/components/MotionFadeIn';
import { SectionContainer } from '@/components/SectionContainer';
import { SectionHeading } from '@/components/SectionHeading';
import { experience } from '@/data/profile';

function Experience() {
  return (
    <SectionContainer className="py-24 sm:py-28" id="experience">
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-4 sm:px-6 lg:px-8">
        <MotionFadeIn>
          <SectionHeading
            description="Senior frontend roles across fintechs, marketplaces, and developer platforms — focused on shipping reliable React at scale."
            eyebrow="Experience"
            title="Where I've shipped production work."
          />
        </MotionFadeIn>

        <MotionFadeIn delay={0.1}>
          <ul className="flex flex-col" role="list">
            {experience.map((entry, index) => (
              <ExperienceItem key={entry.id} entry={entry} isLast={index === experience.length - 1} />
            ))}
          </ul>
        </MotionFadeIn>
      </div>
    </SectionContainer>
  );
}

export default Experience;
