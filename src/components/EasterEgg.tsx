'use client';

import { useEffect } from 'react';

const STYLES = [
  'font-size: 28px',
  'font-weight: 900',
  'color: #00f2ff',
  'font-family: monospace',
  'letter-spacing: -1px',
].join(';');

const SUBTLE = [
  'font-size: 13px',
  'color: #64748b',
  'font-family: sans-serif',
].join(';');

export default function EasterEgg() {
  useEffect(() => {
    console.log('%c👨‍💻 Hola, curioso.', STYLES);
    console.log('%c¿Te gusta lo que ves? Escríbeme → adrian.m.p.02022002@gmail.com', SUBTLE);
  }, []);

  return null;
}
