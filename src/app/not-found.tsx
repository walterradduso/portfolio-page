import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="font-poppins flex h-screen flex-col items-center justify-center gap-4">
      <h2 className="text-primary text-6xl font-bold">404</h2>
      <p className="text-dark text-xl dark:text-white">Page not found</p>
      <Link className="border-primary text-primary hover:bg-primary rounded-md border px-6 py-2 transition hover:text-white" href="/">
        Go back home
      </Link>
    </div>
  );
}
