import { Home } from '@/app/components/Home';
import { SectionContainer } from '@/components/SectionContainer';

function PageContainer() {
  return (
    <>
      <SectionContainer className="bg-primary-light-color dark:bg-primary-dark-color">
        <Home />
      </SectionContainer>

      <SectionContainer className="bg-secondary-light-color dark:bg-secondary-dark-color">About Me</SectionContainer>

      <SectionContainer className="bg-primary-light-color dark:bg-primary-dark-color">Resume</SectionContainer>

      <SectionContainer className="bg-secondary-light-color dark:bg-secondary-dark-color">Portfolio</SectionContainer>

      <SectionContainer className="bg-primary-light-color dark:bg-primary-dark-color">Contact</SectionContainer>
    </>
  );
}

export default PageContainer;
