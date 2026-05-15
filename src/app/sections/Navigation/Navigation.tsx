'use client';

import { Menu } from 'lucide-react';
import { useEffect, useState } from 'react';

import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { ThemeSwitcher } from '@/components/ThemeSwitcher';
import { useActiveSection } from '@/contexts/ActiveSection';
import { cn } from '@/lib/utils';
import { navigationSections, profile } from '@/data/profile';
import { scrollIntoView } from '@/utils/scrollIntoView';

function Navigation() {
  const { activeSection } = useActiveSection();
  const [isScrolled, setIsScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    function onScroll() {
      setIsScrolled(window.scrollY > 12);
    }

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  function handleNavigate(id: string) {
    scrollIntoView(id);
    setOpen(false);
  }

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-200',
        isScrolled ? 'border-border bg-background/80 border-b backdrop-blur-md' : 'bg-transparent',
      )}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <button
          aria-label="Back to top"
          className="font-display hover:text-accent cursor-pointer text-base font-semibold tracking-tight transition-colors"
          type="button"
          onClick={() => handleNavigate('home')}
        >
          {profile.name.split(' ')[0]}
          <span className="text-muted-foreground">.{profile.name.split(' ')[1]?.toLowerCase()}</span>
        </button>

        <nav aria-label="Primary" className="hidden md:flex md:items-center md:gap-1">
          {navigationSections.map((section) => {
            const isActive = activeSection === section.id;

            return (
              <button
                key={section.id}
                aria-current={isActive ? 'page' : undefined}
                className={cn(
                  'focus-visible:ring-ring focus-visible:ring-offset-background cursor-pointer rounded-md px-3 py-2 text-sm font-medium transition-colors outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
                  isActive ? 'text-foreground' : 'text-muted-foreground hover:text-foreground',
                )}
                type="button"
                onClick={() => handleNavigate(section.id)}
              >
                {section.label}
              </button>
            );
          })}
        </nav>

        <div className="flex items-center gap-1">
          <ThemeSwitcher />

          <div className="md:hidden">
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button aria-label="Open menu" size="icon" variant="ghost">
                  <Menu />
                </Button>
              </SheetTrigger>

              <SheetContent className="w-72" side="right">
                <SheetHeader>
                  <SheetTitle>Navigation</SheetTitle>
                  <SheetDescription>Jump to a section</SheetDescription>
                </SheetHeader>

                <Separator />

                <nav aria-label="Mobile primary" className="flex flex-col gap-1 px-4 pb-6">
                  {navigationSections.map((section) => {
                    const isActive = activeSection === section.id;

                    return (
                      <SheetClose key={section.id} asChild>
                        <button
                          aria-current={isActive ? 'page' : undefined}
                          className={cn(
                            'focus-visible:ring-ring cursor-pointer rounded-md px-3 py-2.5 text-left text-sm font-medium transition-colors outline-none focus-visible:ring-2',
                            isActive ? 'bg-accent/15 text-foreground' : 'text-muted-foreground hover:bg-muted hover:text-foreground',
                          )}
                          type="button"
                          onClick={() => handleNavigate(section.id)}
                        >
                          {section.label}
                        </button>
                      </SheetClose>
                    );
                  })}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navigation;
