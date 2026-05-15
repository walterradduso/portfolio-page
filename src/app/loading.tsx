export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div aria-label="Loading" className="border-accent size-10 animate-spin rounded-full border-4 border-t-transparent" role="status" />
    </div>
  );
}
