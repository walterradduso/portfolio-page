'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { BsFillMoonFill, BsFillSunFill } from 'react-icons/bs';

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

  if (currentTheme === 'dark') {
    return (
      <button onClick={() => setTheme('light')}>
        <BsFillSunFill />
      </button>
    );
  }

  return (
    <button onClick={() => setTheme('dark')}>
      <BsFillMoonFill />
    </button>
  );
}

export default ThemeSwitcher;
