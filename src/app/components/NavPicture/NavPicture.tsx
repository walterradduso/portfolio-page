import Image from 'next/image';
import { ReactElement } from 'react';

function NavPicture(): ReactElement {
  return (
    <section>
      <a className="mt-0 hidden flex-col items-center justify-center gap-2 md:mt-10 md:flex" href="/">
        <div className="flex size-44 items-center justify-center rounded-full bg-w-gray">
          <Image alt="Walter's Picture" className="rounded-full" height={160} src="/images/walPic.png" width={160} />
        </div>

        <h1 className="text-xl text-primary-light-color">Walter Radduso</h1>
      </a>

      <a className="mt-0 flex flex-col items-center justify-center gap-2 md:mt-10 md:hidden" href="/">
        <h1 className="ml-4 text-xl text-primary-light-color md:ml-0">Walter Radduso</h1>
      </a>
    </section>
  );
}

export default NavPicture;
