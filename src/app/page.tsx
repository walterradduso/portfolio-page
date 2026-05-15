import { ActiveSectionProvider } from '@/contexts/ActiveSection';

import { About } from './sections/About';
import { Contact } from './sections/Contact';
import { Experience } from './sections/Experience';
import { Footer } from './sections/Footer';
import { Hero } from './sections/Hero';
import { Navigation } from './sections/Navigation';
import { Stack } from './sections/Stack';
import { TrustBar } from './sections/TrustBar';
import { Work } from './sections/Work';

export default function HomePage() {
  return (
    <ActiveSectionProvider initialActiveSection="home">
      <Navigation />

      <main className="flex flex-col">
        <Hero />
        <TrustBar />
        <About />
        <Experience />
        <Work />
        <Stack />
        <Contact />
      </main>

      <Footer />
    </ActiveSectionProvider>
  );
}
