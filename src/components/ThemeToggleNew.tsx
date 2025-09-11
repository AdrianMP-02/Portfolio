'use client';

import { Sun, Moon } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';

export default function ThemeToggle() {
  const { effectiveTheme, toggleTheme } = useTheme();

  const CurrentIcon = effectiveTheme === 'dark' ? Moon : Sun;

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-xl bg-gray-800/50 dark:bg-gray-200/10 border border-gray-700 dark:border-gray-600 hover:bg-gray-700/50 dark:hover:bg-gray-200/20 transition-all duration-300 group"
      title={`Cambiar a tema ${effectiveTheme === 'dark' ? 'claro' : 'oscuro'}`}
    >
      <CurrentIcon
        size={20}
        className="text-gray-300 dark:text-gray-400 group-hover:text-white dark:group-hover:text-gray-200 transition-all duration-300 group-hover:scale-110 transform"
      />
    </button>
  );
}
