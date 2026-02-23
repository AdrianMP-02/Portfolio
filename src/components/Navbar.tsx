'use client';

import Link from "next/link";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function Navbar({ dict, currentLang }: { dict: Record<string, string>, currentLang: string }) {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Simple language toggler (assuming we only have /es and /en)
  const toggleLang = currentLang === 'es' ? 'en' : 'es';
  const newPath = pathname ? pathname.replace(`/${currentLang}`, `/${toggleLang}`) : `/${toggleLang}`;

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[100] px-6 lg:px-12 py-8 flex justify-between items-center transition-all duration-500 ease-out pointer-events-none ${scrolled ? 'py-4' : ''}`}>
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="glass-morphism px-6 py-3 rounded-full font-[family-name:var(--font-outfit)] font-black text-2xl tracking-tighter pointer-events-auto"
        style={{
          boxShadow: '0 10px 30px -10px rgba(0, 242, 255, 0.2)',
          backgroundColor: scrolled ? 'rgba(5, 5, 5, 0.8)' : 'rgba(255, 255, 255, 0.05)'
        }}
      >
        A<span className="text-[#00f2ff]">.</span>M<span className="text-[#ff00e5]">.</span>P
      </motion.div>

      <div className="flex gap-4 pointer-events-auto">
        <Link href={newPath} className="glass-morphism h-12 lg:h-14 px-6 rounded-full flex items-center justify-center group hover:bg-white/10 transition-colors"
          style={{
            backgroundColor: scrolled ? 'rgba(5, 5, 5, 0.8)' : 'rgba(255, 255, 255, 0.05)'
          }}
        >
          <span className="font-bold tracking-widest text-xs lg:text-sm uppercase opacity-70 group-hover:opacity-100">{currentLang === 'es' ? 'EN' : 'ES'}</span>
        </Link>
        <Link href="#contact" className="glass-morphism h-12 lg:h-14 px-6 rounded-full flex items-center justify-center group hover:bg-white/10 transition-colors"
          style={{
            backgroundColor: scrolled ? 'rgba(5, 5, 5, 0.8)' : 'rgba(255, 255, 255, 0.05)'
          }}
        >
          <span className="font-bold tracking-[0.2em] lg:tracking-widest text-xs lg:text-sm uppercase">{dict?.contact || "Contact"}</span>
        </Link>
      </div>
    </nav>
  );
}
