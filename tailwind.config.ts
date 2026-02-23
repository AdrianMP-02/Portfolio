import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#00f2ff",
        "secondary": "#ff00e5",
        "accent": "#4f46e5",
        "dark-bg": "#050505",
      },
      fontFamily: {
        "display": ["var(--font-outfit)", "var(--font-geist-sans)", "sans-serif"],
        "sans": ["var(--font-inter)", "var(--font-geist-sans)", "sans-serif"]
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      }
    },
  },
} satisfies Config;
