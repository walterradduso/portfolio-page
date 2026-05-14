'use client';

export default function Error({ reset }: { error: Error; reset: () => void }) {
  return (
    <div className="font-poppins flex h-screen flex-col items-center justify-center gap-4">
      <h2 className="text-dark text-2xl font-semibold dark:text-white">Something went wrong</h2>
      <button
        className="border-primary text-primary hover:bg-primary rounded-md border px-6 py-2 transition hover:text-white"
        onClick={() => reset()}
      >
        Try again
      </button>
    </div>
  );
}
