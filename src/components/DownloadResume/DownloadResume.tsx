import { Link } from '../Link';

function DownloadResume() {
  return (
    <Link
      download
      className="border-dark text-dark hover:bg-dark hover:dark:text-dark w-52 py-3 text-center transition duration-300 ease-in-out hover:text-white dark:border-white dark:text-white hover:dark:bg-white"
      href="/resume-walter-radduso.pdf"
    >
      Download Resume
    </Link>
  );
}

export default DownloadResume;
