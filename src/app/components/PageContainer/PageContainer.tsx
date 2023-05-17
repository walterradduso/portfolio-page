import { SectionContainer } from '@/components/SectionContainer';

import { AboutMe } from '../AboutMe';
import { Footer } from '../Footer';
import { Home } from '../Home';
import { Portfolio } from '../Portfolio';
import { Resume } from '../Resume';

function PageContainer() {
  return (
    <>
      <SectionContainer className="bg-primary-light-color dark:bg-primary-dark-color" id="Home">
        <Home />
      </SectionContainer>

      <SectionContainer className="bg-secondary-light-color dark:bg-secondary-dark-color" id="AboutMe">
        <AboutMe />
      </SectionContainer>

      <SectionContainer className="bg-primary-light-color dark:bg-primary-dark-color" id="Resume">
        <Resume />
      </SectionContainer>

      <SectionContainer className="bg-secondary-light-color dark:bg-secondary-dark-color" id="Portfolio">
        <Portfolio />
      </SectionContainer>

      <Footer />
    </>
  );
}

export default PageContainer;
