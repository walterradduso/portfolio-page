import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-4 font-poppins">
      <h2 className="text-6xl font-bold text-primary">404</h2>
      <p className="text-xl text-dark dark:text-white">Page not found</p>
      <Link className="rounded-md border border-primary px-6 py-2 text-primary transition hover:bg-primary hover:text-white" href="/">
        Go back home
      </Link>
    </div>
  );
}
