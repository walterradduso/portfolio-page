import { ActiveSectionProvider } from '@/contexts/ActiveSection';

import { NavContainer } from './components/NavContainer';
import { PageContainer } from './components/PageContainer';

export default function Home() {
  return (
    <main className="ml-0 mt-14 md:ml-60 md:mt-0">
      <ActiveSectionProvider initialActiveSection="">
        <NavContainer />
        <PageContainer />
      </ActiveSectionProvider>
    </main>
  );
}
