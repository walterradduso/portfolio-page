'use client';

export default function Error({ reset }: { error: Error; reset: () => void }) {
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-4 font-poppins">
      <h2 className="text-2xl font-semibold text-dark dark:text-white">Something went wrong</h2>
      <button
        className="rounded-md border border-primary px-6 py-2 text-primary transition hover:bg-primary hover:text-white"
        onClick={() => reset()}
      >
        Try again
      </button>
    </div>
  );
}
