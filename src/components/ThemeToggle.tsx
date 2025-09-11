'use client';

import { Sun, Moon } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';
import { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // No renderizar hasta que esté montado para evitar errores de hidratación
  if (!mounted) {
    return (
      <button className="p-2 rounded-xl bg-gray-800/50 border border-gray-700 opacity-50 cursor-not-allowed">
        <Sun size={20} className="text-gray-300" />
      </button>
    );
  }

  return <ThemeToggleContent />;
}

function ThemeToggleContent() {
  const { effectiveTheme, toggleTheme } = useTheme();
  const CurrentIcon = effectiveTheme === 'dark' ? Moon : Sun;

  const handleClick = () => {
    // Solo logs en desarrollo
    if (process.env.NODE_ENV === 'development') {
      console.log('Toggle clicked. Current theme:', effectiveTheme);
    }

    toggleTheme();

    // Debug: verificar clases después del toggle (solo en desarrollo)
    if (process.env.NODE_ENV === 'development') {
      setTimeout(() => {
        const html = document.documentElement;
        console.log('HTML classes after toggle:', html.classList.toString());
        console.log('Has dark class:', html.classList.contains('dark'));
      }, 100);
    }
  };

  return (
    <button
      onClick={handleClick}
      className="p-2 rounded-xl bg-gray-800/50 dark:bg-gray-200/10 border border-gray-700 dark:border-gray-600 hover:bg-gray-700/50 dark:hover:bg-gray-200/20 group overflow-hidden"
      title={`Cambiar a tema ${effectiveTheme === 'dark' ? 'claro' : 'oscuro'}`}
    >
      <div key={effectiveTheme}>
        <CurrentIcon
          size={20}
          className="text-gray-300 dark:text-gray-400 group-hover:text-white dark:group-hover:text-gray-200"
        />
      </div>
    </button>
  );
}
