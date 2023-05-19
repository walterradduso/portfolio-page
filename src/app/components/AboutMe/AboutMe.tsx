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
            I&apos;m <span className="text-primary">Walter Radduso</span>, a Frontend Engineer
          </h3>

          <p className="mb-5 text-center text-base leading-7 text-dark dark:text-white/80 md:text-left">
            I&apos;m a dedicated Frontend Engineer with a strong focus on frontend technologies. When I first encountered frontend
            development, it was love at first line of code. Since then, I&apos;ve honed my skills in creating visually appealing and
            user-friendly applications using ReactJS, NodeJS, JavaScript, and TypeScript.
          </p>

          <p className="mb-5 text-center text-base leading-7 text-dark dark:text-white/80 md:text-left">
            With a rich background in various programming languages and tools, I&apos;ve proven my ability to lead teams, collaborate with
            product managers, and adapt to different environments. I firmly believe in continuous learning and staying updated with the
            latest advances in languages, tools, libraries, and frameworks. This commitment keeps me at the forefront of the industry,
            allowing me to deliver the best digital experiences.
          </p>

          <p className="text-center text-base text-dark dark:text-white/80 md:text-left">
            Feel free to explore my portfolio. If you&apos;re interested in collaborating or just want to say hello, please don&apos;t
            hesitate to reach out. Thanks for stopping by!
          </p>
        </div>

        <div className="mt-12 flex flex-col items-center gap-8">
          <ul className="w-full font-poppins text-base md:mt-0 md:w-fit">
            <li className="border-b border-w-gray-2 py-3 text-dark dark:border-white/10 dark:text-white/80">
              <span className="mr-2 font-semibold">Name:</span> Walter Radduso
            </li>

            <li className="border-b border-w-gray-2 py-3 text-dark dark:border-white/10 dark:text-white/80">
              <span className="mr-3 font-semibold">Email:</span>

              <a
                className="text-dark underline hover:text-primary dark:text-white/80 hover:dark:text-primary"
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
