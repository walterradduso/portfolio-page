import Image from 'next/image';

import { companies } from '@/data/profile';

function TrustBar() {
  return (
    <section aria-labelledby="trustbar-label" className="border-border bg-muted/40 border-y py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 sm:px-6 lg:px-8">
        <p className="text-muted-foreground text-xs font-medium tracking-[0.18em] uppercase" id="trustbar-label">
          Trusted by teams at
        </p>

        <ul className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6 sm:gap-x-14" role="list">
          {companies.map((company) => (
            <li key={company.name} className="flex items-center gap-2">
              <Image
                alt={`${company.name} logo`}
                className="h-8 w-8 rounded-full object-cover opacity-70 grayscale transition-all hover:opacity-100 hover:grayscale-0 sm:h-9 sm:w-9"
                height={48}
                src={company.logo}
                width={48}
              />
              <span className="text-muted-foreground hover:text-foreground text-sm font-medium transition-colors">{company.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default TrustBar;
