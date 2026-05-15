import { ArrowUpRight, Mail } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { LinkedinIcon } from '@/components/icons';
import { MotionFadeIn } from '@/components/MotionFadeIn';
import { SectionContainer } from '@/components/SectionContainer';
import { contact, profile } from '@/data/profile';

function Contact() {
  return (
    <SectionContainer className="py-24 sm:py-28" id="contact">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <MotionFadeIn>
          <Card className="border-accent/30 from-card via-card to-accent/5 relative overflow-hidden bg-gradient-to-br">
            <div aria-hidden="true" className="bg-accent/20 absolute -top-32 -right-32 h-72 w-72 rounded-full blur-3xl" />
            <div aria-hidden="true" className="bg-accent/10 absolute -bottom-40 -left-32 h-72 w-72 rounded-full blur-3xl" />

            <CardContent className="relative flex flex-col gap-8 py-10 text-center sm:py-12">
              <div className="flex flex-col items-center gap-4">
                <span className="border-border bg-background/60 text-muted-foreground inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium backdrop-blur">
                  <span className="inline-block size-2 rounded-full bg-emerald-500 shadow-[0_0_0_4px_rgb(16_185_129_/_0.15)]" />
                  {profile.availability}
                </span>

                <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">{contact.headline}</h2>

                <p className="text-muted-foreground max-w-xl text-base leading-relaxed sm:text-lg">{contact.body}</p>
              </div>

              <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Button asChild className="w-full sm:w-auto" size="lg" variant="accent">
                  <a aria-label={contact.primaryAction.label} href={contact.primaryAction.href}>
                    <Mail />
                    {contact.primaryAction.label}
                  </a>
                </Button>

                <Button asChild className="w-full sm:w-auto" size="lg" variant="outline">
                  <a
                    aria-label={contact.secondaryAction.label}
                    href={contact.secondaryAction.href}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <LinkedinIcon className="size-4" />
                    {contact.secondaryAction.label}
                    <ArrowUpRight />
                  </a>
                </Button>
              </div>

              <a
                download
                className="text-muted-foreground hover:text-foreground focus-visible:ring-ring focus-visible:ring-offset-background inline-flex items-center justify-center gap-1 rounded-sm text-sm underline-offset-4 transition-colors hover:underline focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
                href={profile.resumeUrl}
              >
                {contact.resumeLabel}
              </a>
            </CardContent>
          </Card>
        </MotionFadeIn>
      </div>
    </SectionContainer>
  );
}

export default Contact;
