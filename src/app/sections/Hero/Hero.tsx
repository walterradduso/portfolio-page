'use client';

import { ArrowRight, MapPin, Sparkles } from 'lucide-react';
import Image from 'next/image';

import { Button } from '@/components/ui/button';
import { MotionFadeIn } from '@/components/MotionFadeIn';
import { SectionContainer } from '@/components/SectionContainer';
import { profile } from '@/data/profile';
import { scrollIntoView } from '@/utils/scrollIntoView';

function Hero() {
  return (
    <SectionContainer className="pt-32 pb-20 sm:pt-40" id="home">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 md:grid-cols-[1.4fr_1fr] md:items-center md:gap-16 lg:px-8">
        <MotionFadeIn className="flex flex-col gap-6">
          <span className="border-border bg-card text-muted-foreground inline-flex w-fit items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium">
            <Sparkles className="text-accent size-3.5" />
            {profile.hero.eyebrow}
          </span>

          <h1 className="font-display text-4xl leading-tight font-semibold tracking-tight sm:text-5xl lg:text-6xl">
            {profile.hero.headline.split('React apps')[0]}
            <span className="text-accent">React apps</span>
            {profile.hero.headline.split('React apps')[1]}
          </h1>

          <p className="text-muted-foreground max-w-xl text-base leading-relaxed sm:text-lg">{profile.hero.subheadline}</p>

          <div className="flex flex-wrap items-center gap-3">
            <Button size="lg" variant="accent" onClick={() => scrollIntoView('contact')}>
              Get in touch
              <ArrowRight />
            </Button>

            <Button size="lg" variant="outline" onClick={() => scrollIntoView('work')}>
              View work
            </Button>
          </div>

          <div className="text-muted-foreground flex flex-wrap items-center gap-4 pt-2 text-xs sm:text-sm">
            <span className="inline-flex items-center gap-1.5">
              <span className="inline-block size-2 rounded-full bg-emerald-500 shadow-[0_0_0_4px_rgb(16_185_129_/_0.15)]" />
              {profile.availability}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="size-3.5" />
              {profile.location}
            </span>
          </div>
        </MotionFadeIn>

        <MotionFadeIn className="relative mx-auto w-full max-w-sm" delay={0.1}>
          <div className="border-accent/40 bg-accent/5 absolute inset-0 -z-10 translate-x-3 translate-y-3 rounded-3xl border" />

          <div className="border-border bg-card overflow-hidden rounded-3xl border shadow-sm">
            <Image
              priority
              alt={`Portrait of ${profile.name}`}
              className="aspect-[4/5] w-full object-cover"
              height={750}
              src="/images/walPic.jpeg"
              width={600}
            />
          </div>
        </MotionFadeIn>
      </div>
    </SectionContainer>
  );
}

export default Hero;
