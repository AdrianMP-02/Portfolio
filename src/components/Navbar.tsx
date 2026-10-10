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
  const [activeSection, setActiveSection] = useState('hero');
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const [prevPathname, setPrevPathname] = useState(pathname);
  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    setMenuOpen(false);
  }

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
      const offset = 80;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  const toggleLang = currentLang === 'es' ? 'en' : 'es';
  const newPath = pathname.replace(`/${currentLang}`, `/${toggleLang}`);

  const indexOf: Record<string, string> = { home: '00', about: '01', stack: '02', projects: '03', contact: '05' };

  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] bg-dark-bg/75 backdrop-blur border-b border-line">
      <div className="max-w-7xl mx-auto h-[60px] px-6 flex items-center justify-between">
        <button onClick={() => scrollTo('hero')} className="font-mono font-semibold text-primary tracking-[0.1em] cursor-pointer">
          AMP://
        </button>

        <div className="hidden md:flex items-center gap-6 h-full">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.key}
              onClick={() => scrollTo(item.section)}
              className={`h-full flex items-center gap-2 font-mono text-xs uppercase tracking-wider border-b transition-colors cursor-pointer ${
                activeSection === item.section
                  ? 'text-heading border-primary'
                  : 'text-muted hover:text-heading border-transparent'
              }`}
            >
              <span className="text-primary">{indexOf[item.key]}</span>
              {dict[item.key]}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden lg:flex items-center gap-2 font-mono text-[11px] text-muted">
            <span className="dot-live" />
            ONLINE
          </div>
          <Link href={newPath} className="hidden md:flex h-9 w-9 items-center justify-center border border-line hover:border-primary transition-colors font-mono text-xs uppercase text-heading">
            {currentLang === 'es' ? 'EN' : 'ES'}
          </Link>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden h-9 w-9 flex items-center justify-center border border-line hover:border-primary transition-colors cursor-pointer"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 right-0 bg-dark-bg/95 border-b border-line"
          >
            <div className="flex flex-col px-6 py-2">
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.key}
                  onClick={() => scrollTo(item.section)}
                  className={`text-left py-4 flex gap-3 font-mono text-sm uppercase tracking-wider border-b border-line transition-colors ${
                    activeSection === item.section ? 'text-heading' : 'text-muted hover:text-heading'
                  }`}
                >
                  <span className="text-primary">{indexOf[item.key]}</span>
                  {dict[item.key]}
                </button>
              ))}
              <Link
                href={newPath}
                className="py-4 font-mono text-sm uppercase tracking-wider text-muted hover:text-primary transition-colors"
              >
                {currentLang === 'es' ? 'EN' : 'ES'}
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
