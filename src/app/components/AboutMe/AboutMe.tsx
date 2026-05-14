import { ReactElement } from 'react';

import { DownloadResume } from '@/components/DownloadResume';
import { Title } from '@/components/Title';

function AboutMe(): ReactElement {
  return (
    <section className="py-16">
      <Title subText="Know Me More" text="About Me" />

      <div className="mt-12 flex flex-col items-start justify-center p-5 md:flex-row md:p-10">
        <div className="font-poppins flex-1 pr-0 md:pr-10">
          <h3 className="mb-6 text-center text-3xl font-semibold md:text-left">
            I&apos;m <span className="text-primary dark:text-primary-light">Walter Radduso</span>, Frontend Engineer
          </h3>

          <p className="text-dark mb-5 text-center text-base leading-7 md:text-left dark:text-white/80">
            I&apos;m a Frontend Engineer passionate about frontend technologies. From my first encounter with frontend development, it was
            love at first line of code. I have since refined my skills in building visually appealing and user-friendly applications,
            primarily using ReactJS, NodeJS, JavaScript, and TypeScript.
          </p>

          <p className="text-dark mb-5 text-center text-base leading-7 md:text-left dark:text-white/80">
            My background spans various programming languages and tools, which has helped me lead teams, collaborate with product managers,
            and adapt to different environments. I enjoy keeping up with new technologies and finding ways to apply them in my everyday
            work.
          </p>

          <p className="text-dark text-center text-base md:text-left dark:text-white/80">
            Please feel free to explore my portfolio. If you&apos;re interested in collaborating or just want to say hello, don&apos;t
            hesitate to reach out. Thanks for stopping by!
          </p>
        </div>

        <div className="mt-12 flex w-full flex-col items-center gap-8 md:w-fit">
          <ul className="font-poppins w-full text-base md:mt-0 md:w-fit">
            <li className="border-w-gray-2 text-dark border-b py-3 dark:border-white/10 dark:text-white/80">
              <span className="mr-2 font-semibold">Name:</span> Walter Radduso
            </li>

            <li className="border-w-gray-2 text-dark border-b py-3 dark:border-white/10 dark:text-white/80">
              <span className="mr-3 font-semibold">Email:</span>

              <a
                className="text-dark hover:text-primary hover:dark:text-primary-light underline dark:text-white/80"
                href="mailto:w.radduso@gmail.com"
              >
                w.radduso@gmail.com
              </a>
            </li>

            <li className="border-w-gray-2 text-dark border-b py-3 dark:border-white/10 dark:text-white/80">
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
