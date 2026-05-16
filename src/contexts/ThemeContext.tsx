'use client';

import { createContext, useContext, ReactNode } from 'react';

interface ThemeContextType {
  theme: 'dark';
  effectiveTheme: 'dark';
  setTheme: (theme: 'dark') => void;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const contextValue: ThemeContextType = {
    theme: 'dark',
    effectiveTheme: 'dark',
    setTheme: () => {},
    toggleTheme: () => {},
  };

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
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
