import Link from 'next/link';

import { Button } from '@/components/ui/button';

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 px-6 text-center">
      <h2 className="font-display text-accent text-6xl font-semibold tracking-tight">404</h2>
      <p className="text-muted-foreground text-base">This page does not exist.</p>
      <Button asChild variant="accent">
        <Link href="/">Go back home</Link>
      </Button>
    </div>
  );
}
