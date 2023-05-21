import { Link } from '../Link';

function DownloadResume() {
  return (
    <Link
      download
      className="w-52 border-dark py-3 text-center text-dark transition duration-300 ease-in-out hover:bg-dark hover:text-white dark:border-white dark:text-white hover:dark:bg-white hover:dark:text-dark"
      href="/resume-walter-radduso.pdf"
    >
      Download Resume
    </Link>
  );
}

export default DownloadResume;
