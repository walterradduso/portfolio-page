'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { BsSunFill } from 'react-icons/bs';
import { RiMoonFill } from 'react-icons/ri';

function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { setTheme, systemTheme, theme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const currentTheme = theme === 'system' ? systemTheme : theme;

  return (
    <button
      className="cursor-pointer text-base text-white hover:text-primary"
      onClick={() => setTheme(currentTheme === 'dark' ? 'light' : 'dark')}
    >
      {currentTheme === 'dark' ? <BsSunFill /> : <RiMoonFill />}
    </button>
  );
}

export default ThemeSwitcher;
