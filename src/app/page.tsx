import { ActiveSectionProvider } from '@/contexts/ActiveSection';

import { NavContainer } from './components/NavContainer';
import { PageContainer } from './components/PageContainer';

export default function Home() {
  return (
    <main className="mt-14 ml-0 md:mt-0 md:ml-60">
      <ActiveSectionProvider initialActiveSection="">
        <NavContainer />
        <PageContainer />
      </ActiveSectionProvider>
    </main>
  );
}
