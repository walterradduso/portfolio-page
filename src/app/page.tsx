import { NavContainer } from '@/app/components/NavContainer';

import PageContainer from './components/PageContainer/PageContainer';

export default function Home() {
  return (
    <main className="ml-0 mt-14 md:ml-60 md:mt-0">
      <NavContainer />
      <PageContainer />
    </main>
  );
}
