import dynamic from 'next/dynamic';

import { SectionContainer } from '@/components/SectionContainer';

import { Home } from '../Home';

const AboutMe = dynamic(() => import('../AboutMe/AboutMe'));
const Resume = dynamic(() => import('../Resume/Resume'));
const Portfolio = dynamic(() => import('../Portfolio/Portfolio'));
const Footer = dynamic(() => import('../Footer/Footer'));

function PageContainer() {
  return (
    <>
      <SectionContainer className="bg-primary-dark-color" id="Home">
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
