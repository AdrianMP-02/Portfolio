'use client';

import { createContext, useContext, useEffect, useState, useCallback } from 'react';

type Theme = 'light' | 'dark' | 'system';

interface ThemeContextType {
  theme: Theme;
  effectiveTheme: 'light' | 'dark';
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>('system');
  const [effectiveTheme, setEffectiveTheme] = useState<'light' | 'dark'>('dark');
  const [mounted, setMounted] = useState(false);

  // Detectar preferencia del sistema
  const getSystemTheme = useCallback((): 'light' | 'dark' => {
    if (typeof window !== 'undefined') {
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    return 'dark';
  }, []);

  // Calcular tema efectivo
  const calculateEffectiveTheme = useCallback((currentTheme: Theme): 'light' | 'dark' => {
    if (currentTheme === 'system') {
      return getSystemTheme();
    }
    return currentTheme;
  }, [getSystemTheme]);

  // Aplicar tema al DOM
  const applyTheme = useCallback((newEffectiveTheme: 'light' | 'dark') => {
    if (typeof window !== 'undefined') {
      const root = document.documentElement;

      if (newEffectiveTheme === 'dark') {
        root.classList.add('dark');
      } else {
        root.classList.remove('dark');
      }
    }
  }, []);

  // Alternar entre temas
  const toggleTheme = useCallback(() => {
    const newTheme = effectiveTheme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
  }, [effectiveTheme]);

  // Efecto para cambios de tema
  useEffect(() => {
    const newEffectiveTheme = calculateEffectiveTheme(theme);
    setEffectiveTheme(newEffectiveTheme);
    applyTheme(newEffectiveTheme);

    if (mounted) {
      localStorage.setItem('theme', theme);
    }
  }, [theme, mounted, calculateEffectiveTheme, applyTheme]);

  // Efecto para inicialización
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Cargar tema guardado
      const savedTheme = localStorage.getItem('theme') as Theme;
      if (savedTheme && ['light', 'dark', 'system'].includes(savedTheme)) {
        setTheme(savedTheme);
      }

      setMounted(true);

      // Escuchar cambios en preferencia del sistema
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      const handleChange = () => {
        const currentTheme = localStorage.getItem('theme') as Theme;
        if (currentTheme === 'system') {
          const newEffectiveTheme = getSystemTheme();
          setEffectiveTheme(newEffectiveTheme);
          applyTheme(newEffectiveTheme);
        }
      };

      mediaQuery.addEventListener('change', handleChange);
      return () => mediaQuery.removeEventListener('change', handleChange);
    }
  }, [getSystemTheme, applyTheme]);

  const contextValue = {
    theme,
    effectiveTheme,
    setTheme,
    toggleTheme
  };

  return (
    <ThemeContext.Provider value={contextValue}>
      <div className={mounted ? '' : 'opacity-0'}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
