import { ReactElement } from 'react';

import { DownloadResume } from '@/components/DownloadResume';
import { Title } from '@/components/Title';

function AboutMe(): ReactElement {
  return (
    <section className="py-16">
      <Title subText="Know Me More" text="About Me" />

      <div className="mt-12 flex flex-col items-start justify-center p-5 md:flex-row md:p-10">
        <div className="flex-1 pr-0 font-poppins md:pr-10">
          <h3 className="mb-6 text-center text-3xl font-semibold md:text-left">
            I&apos;m <span className="text-primary dark:text-primary-light">Walter Radduso</span>, Frontend Engineer
          </h3>

          <p className="mb-5 text-center text-base leading-7 text-dark dark:text-white/80 md:text-left">
            I&apos;m a Frontend Engineer passionate about frontend technologies. From my first encounter with frontend development, it was
            love at first line of code. I have since refined my skills in building visually appealing and user-friendly applications,
            primarily using ReactJS, NodeJS, JavaScript, and TypeScript.
          </p>

          <p className="mb-5 text-center text-base leading-7 text-dark dark:text-white/80 md:text-left">
            My background spans various programming languages and tools, which has helped me lead teams, collaborate with product managers,
            and adapt to different environments. I enjoy keeping up with new technologies and finding ways to apply them in my everyday
            work.
          </p>

          <p className="text-center text-base text-dark dark:text-white/80 md:text-left">
            Please feel free to explore my portfolio. If you&apos;re interested in collaborating or just want to say hello, don&apos;t
            hesitate to reach out. Thanks for stopping by!
          </p>
        </div>

        <div className="mt-12 flex w-full flex-col items-center gap-8 md:w-fit">
          <ul className="w-full font-poppins text-base md:mt-0 md:w-fit">
            <li className="border-b border-w-gray-2 py-3 text-dark dark:border-white/10 dark:text-white/80">
              <span className="mr-2 font-semibold">Name:</span> Walter Radduso
            </li>

            <li className="border-b border-w-gray-2 py-3 text-dark dark:border-white/10 dark:text-white/80">
              <span className="mr-3 font-semibold">Email:</span>

              <a
                className="text-dark underline hover:text-primary dark:text-white/80 hover:dark:text-primary-light"
                href="mailto:w.radduso@gmail.com"
              >
                w.radduso@gmail.com
              </a>
            </li>

            <li className="border-b border-w-gray-2 py-3 text-dark dark:border-white/10 dark:text-white/80">
              <span className="mr-2 font-semibold">From:</span> Santa Fe, Argentina
            </li>
          </ul>

          <DownloadResume />
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
