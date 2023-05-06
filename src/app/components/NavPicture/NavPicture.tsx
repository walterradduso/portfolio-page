import Image from 'next/image';
import { ReactElement } from 'react';

function NavPicture(): ReactElement {
  return (
    <section>
      <a className="mt-10 flex flex-col items-center justify-center gap-2" href="/">
        <div className="flex h-44 w-44 items-center justify-center rounded-full bg-w-gray">
          <Image alt="Walter's Picture" className="rounded-full" height={160} src="/images/walPic.png" width={160} />
        </div>

        <h1 className="text-xl">Walter Radduso</h1>
      </a>
    </section>
  );
}

export default NavPicture;
