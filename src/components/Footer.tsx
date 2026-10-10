'use client';

import { motion } from 'framer-motion';
import ContactForm from './ContactForm';

const LINKS = [
  { label: 'github', href: 'https://github.com/AdrianMP-02' },
  { label: 'linkedin', href: 'https://www.linkedin.com/in/adrián-martín-pereira-167813222/' },
];

export default function Footer({ dict, lang }: { dict: Record<string, string | string[]>, lang: 'es' | 'en' }) {
  if (!dict) return null;

  return (
    <footer id="contact" className="scroll-mt-20 mt-20 lg:mt-40 px-6 pb-10 relative z-10 w-full">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto"
      >
        <div className="pb-8 mb-12 border-b border-line">
          <div className="section-index">{`// 05 — ${lang === 'es' ? 'CONTACTO' : 'CONTACT'}`}</div>
          <h2 className="font-display uppercase text-4xl sm:text-5xl lg:text-6xl break-words text-heading mt-3">
            {dict.start_conversation as string}
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div className="panel hud-corners p-8">
            <a
              className="block font-mono text-lg lg:text-2xl text-heading hover:text-primary transition-colors break-all"
              href="mailto:adrian.m.p.02022002@gmail.com"
            >
              adrian.m.p.02022002@gmail.com
            </a>
            <div className="mt-8 pt-6 border-t border-line flex flex-col gap-3">
              {LINKS.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center justify-between font-mono text-sm text-muted hover:text-primary transition-colors"
                >
                  <span><span className="text-primary">❯</span> {l.label}</span>
                  <span>↗</span>
                </a>
              ))}
            </div>
          </div>

          <div>
            <ContactForm lang={lang} />
          </div>
        </div>

        <div className="mt-16 pt-6 border-t border-line flex flex-col sm:flex-row justify-between gap-2 font-mono text-[11px] text-muted">
          <p>© {new Date().getFullYear()} {dict.rights as string}</p>
          <p>AMP:// · v2026</p>
        </div>
      </motion.div>
    </footer>
  );
}
