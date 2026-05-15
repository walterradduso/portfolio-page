import { FeaturedProject } from '@/components/work/FeaturedProject';
import { RepoCard } from '@/components/work/RepoCard';
import { MotionFadeIn } from '@/components/MotionFadeIn';
import { SectionContainer } from '@/components/SectionContainer';
import { SectionHeading } from '@/components/SectionHeading';
import { featuredProjects } from '@/data/profile';
import { getRepositories } from '@/app/services';

async function Work() {
  const repositories = await getRepositories(9);

  return (
    <SectionContainer className="py-24 sm:py-28" id="work">
      <div className="mx-auto flex max-w-6xl flex-col gap-16 px-4 sm:px-6 lg:px-8">
        <MotionFadeIn>
          <SectionHeading
            description="A short list of recent work. Each one was a chance to ship something real to users, with measurable impact on the product or the team behind it."
            eyebrow="Selected Work"
            title="Things I've shipped lately."
          />
        </MotionFadeIn>

        <div className="flex flex-col gap-8">
          {featuredProjects.map((project, index) => (
            <MotionFadeIn key={project.id} delay={index * 0.05}>
              <FeaturedProject project={project} />
            </MotionFadeIn>
          ))}
        </div>

        <div className="flex flex-col gap-8">
          <MotionFadeIn>
            <div className="flex flex-col gap-2">
              <h3 className="font-display text-xl font-semibold tracking-tight sm:text-2xl">More on GitHub</h3>
              <p className="text-muted-foreground text-sm sm:text-base">
                Side projects and open-source experiments — pulled live from my GitHub.
              </p>
            </div>
          </MotionFadeIn>

          {repositories.length > 0 ? (
            <ul className="grid auto-rows-fr gap-4 sm:grid-cols-2 lg:grid-cols-3" role="list">
              {repositories.map((repo, index) => (
                <li key={repo.id} className="h-full">
                  <MotionFadeIn className="h-full" delay={Math.min(index * 0.04, 0.2)}>
                    <RepoCard repo={repo} />
                  </MotionFadeIn>
                </li>
              ))}
            </ul>
          ) : (
            <div className="border-border bg-muted/40 rounded-xl border border-dashed p-8 text-center">
              <p className="text-muted-foreground text-sm">More projects coming soon. In the meantime, check the featured work above.</p>
            </div>
          )}
        </div>
      </div>
    </SectionContainer>
  );
}

export default Work;
