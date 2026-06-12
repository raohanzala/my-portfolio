'use client';

import { useEffect, useState } from 'react';
import { FiSun, FiMoon } from 'react-icons/fi';

export default function ThemeSwitcher({ isScrolled }) {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('theme');
    if (saved === 'dark') {
      document.documentElement.classList.add('dark');
      setIsDark(true);
    }
  }, []);

  const toggleTheme = () => {
    const html = document.documentElement;
    const isCurrentlyDark = html.classList.toggle('dark');
    localStorage.setItem('theme', isCurrentlyDark ? 'dark' : 'light');
    setIsDark(isCurrentlyDark);
  };

  return (
    <button
      onClick={toggleTheme}
      className={`p-2 rounded-full border border-[var(--accent)]  hover:bg-[var(--accent)] hover:text-[var(--primary)] transition duration-300 ${!isScrolled ? 'text-[var(--secondary)]' : 'text-[var(--text)]'
        } `}
      title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
    >
      {isDark ? <FiSun size={18} /> : <FiMoon size={18} />}
    </button>
  );
}
