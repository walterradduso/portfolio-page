'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { BsSunFill } from 'react-icons/bs';
import { RiMoonFill } from 'react-icons/ri';

function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- next-themes hydration guard
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const isDark = resolvedTheme === 'dark';

  return (
    <button
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      className="hover:text-primary inline-flex cursor-pointer items-center text-sm"
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
    >
      {isDark ? <BsSunFill /> : <RiMoonFill />}
    </button>
  );
}

export default ThemeSwitcher;
