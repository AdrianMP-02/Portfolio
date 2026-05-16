'use client';

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from 'lucide-react';

const SECTION_IDS = ['hero', 'about', 'arsenal', 'projects', 'production', 'contact'];

const NAV_ITEMS = [
  { key: 'home', section: 'hero' },
  { key: 'about', section: 'about' },
  { key: 'stack', section: 'arsenal' },
  { key: 'projects', section: 'projects' },
  { key: 'contact', section: 'contact' },
];

export default function Navbar({ dict, currentLang }: { dict: Record<string, string>, currentLang: string }) {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => { setMenuOpen(false); }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id); },
        { rootMargin: '-40% 0px -55% 0px' }
      );
      observer.observe(el);
      observers.push(observer);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const scrollTo = (section: string) => {
    setMenuOpen(false);
    const el = document.getElementById(section);
    if (el) {
      const offset = 120;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  const toggleLang = currentLang === 'es' ? 'en' : 'es';
  const newPath = pathname.replace(`/${currentLang}`, `/${toggleLang}`);

  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] px-6 lg:px-12 transition-all duration-500 ease-out pointer-events-none">
      <div className={`max-w-7xl mx-auto flex items-center justify-between pointer-events-auto mt-4 lg:mt-8 px-6 lg:px-8 py-3 rounded-full border-glass transition-all duration-500 ${
        scrolled
          ? 'bg-dark-bg/85 backdrop-blur-2xl shadow-[0_8px_32px_rgba(0,0,0,0.5)]'
          : 'bg-subtle backdrop-blur-sm'
      }`}>
        <button onClick={() => scrollTo('hero')} className="font-display font-black text-2xl tracking-tighter cursor-pointer">
          A<span className="text-primary">.</span>M<span className="text-secondary">.</span>P
        </button>

        <div className="hidden md:flex items-center gap-1">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.key}
              onClick={() => scrollTo(item.section)}
              className={`px-4 py-2 rounded-full text-sm font-bold tracking-wider uppercase transition-all duration-300 ${
                activeSection === item.section
                  ? 'text-heading bg-subtle-hover'
                  : 'text-muted hover:text-heading bg-subtle-hover'
              }`}
            >
              {dict[item.key]}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <Link href={newPath} className="hidden md:flex h-10 px-4 rounded-full items-center justify-center bg-subtle-hover transition-colors border-glass">
            <span className="font-bold tracking-widest text-xs uppercase opacity-70">{currentLang === 'es' ? 'EN' : 'ES'}</span>
          </Link>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden h-10 w-10 rounded-full flex items-center justify-center bg-subtle-hover transition-colors border-glass"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="pointer-events-auto max-w-7xl mx-auto mt-2 mx-6 rounded-3xl p-4 border-glass bg-dark-bg/95 backdrop-blur-2xl shadow-[0_16px_48px_rgba(0,0,0,0.5)]"
          >
            <div className="flex flex-col gap-1">
              {NAV_ITEMS.map((item, i) => (
                <motion.button
                  key={item.key}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04 }}
                  onClick={() => scrollTo(item.section)}
                  className={`text-left px-5 py-4 rounded-2xl text-base font-bold tracking-wider uppercase transition-all ${
                    activeSection === item.section
                      ? 'text-heading bg-subtle-hover'
                      : 'text-muted hover:text-heading bg-subtle-hover'
                  }`}
                >
                  {dict[item.key]}
                </motion.button>
              ))}
              <Link
                href={newPath}
                className="mt-2 px-5 py-4 rounded-2xl text-base font-bold tracking-wider uppercase text-muted hover:text-heading bg-subtle-hover transition-all text-center border-t border-glass pt-5"
              >
                {currentLang === 'es' ? 'EN 🇬🇧' : 'ES 🇪🇸'}
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
