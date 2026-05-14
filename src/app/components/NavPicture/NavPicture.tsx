import Image from 'next/image';
import Link from 'next/link';
import { ReactElement } from 'react';

function NavPicture(): ReactElement {
  return (
    <section>
      <Link className="mt-0 hidden flex-col items-center justify-center gap-2 md:mt-10 md:flex" href="/">
        <div className="bg-w-gray flex size-44 items-center justify-center rounded-full">
          <Image alt="Walter's Picture" className="rounded-full" height={160} src="/images/walPic.jpeg" width={160} />
        </div>

        <h1 className="text-primary-light-color text-xl">Walter Radduso</h1>
      </Link>

      <Link className="mt-0 flex flex-col items-center justify-center gap-2 md:mt-10 md:hidden" href="/">
        <h1 className="text-primary-light-color ml-4 text-xl md:ml-0">Walter Radduso</h1>
      </Link>
    </section>
  );
}

export default NavPicture;
