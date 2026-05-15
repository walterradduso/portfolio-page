'use client';

import { Button } from '@/components/ui/button';

export default function Error({ reset }: { error: Error; reset: () => void }) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 px-6 text-center">
      <h2 className="font-display text-2xl font-semibold">Something went wrong</h2>
      <p className="text-muted-foreground text-sm">Try again, or come back in a moment.</p>
      <Button variant="accent" onClick={() => reset()}>
        Try again
      </Button>
    </div>
  );
}
