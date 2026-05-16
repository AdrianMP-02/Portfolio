'use client';

import { motion } from 'framer-motion';
import ContactForm from './ContactForm';

export default function Footer({ dict, lang }: { dict: Record<string, string | string[]>, lang: 'es' | 'en' }) {
  if (!dict) return null;

  return (
    <footer id="contact" className="mt-20 lg:mt-40 px-6 lg:px-24 pb-20 relative z-10 w-full">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative glass-morphism p-10 lg:p-20 rounded-[2rem] lg:rounded-[4rem] border-glass overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-30"></div>
        <div className="relative z-10 flex flex-col items-center text-center max-w-5xl mx-auto">
          <span className="text-xs font-black uppercase tracking-[0.5em] text-muted mb-12">{dict.start_conversation}</span>
          <a className="block text-[clamp(1.5rem,4vw,3.5rem)] font-display font-black tracking-tighter text-heading hover:text-primary transition-all duration-500 mb-8 leading-none break-all liquid-hover p-4 rounded-xl" href="mailto:adrian.m.p.02022002@gmail.com">
            adrian.m.p.02022002@gmail.com
          </a>

          <div className="w-full max-w-lg mx-auto mb-16">
            <ContactForm lang={lang} />
          </div>

          <div className="grid grid-cols-2 gap-12 w-full max-w-2xl border-t border-glass pt-12 lg:pt-20">
            <a className="group flex flex-col items-center gap-6" target="_blank" href="https://github.com/AdrianMP-02" rel="noreferrer">
              <div className="w-20 h-20 lg:w-24 lg:h-24 rounded-full glass-morphism flex items-center justify-center group-hover:scale-110 group-hover:shadow-[0_0_40px_var(--glow-primary-40)] transition-all duration-500">
                <span className="material-symbols-outlined text-3xl lg:text-4xl text-primary">code</span>
              </div>
              <span className="text-xs lg:text-sm font-black uppercase tracking-[0.3em] opacity-40 group-hover:opacity-100 transition-opacity text-primary">GitHub</span>
            </a>
            <a className="group flex flex-col items-center gap-6" target="_blank" href="https://www.linkedin.com/in/adrián-martín-pereira-167813222/" rel="noreferrer">
              <div className="w-20 h-20 lg:w-24 lg:h-24 rounded-full glass-morphism flex items-center justify-center group-hover:scale-110 group-hover:shadow-[0_0_40px_var(--glow-secondary-40)] transition-all duration-500">
                <span className="material-symbols-outlined text-3xl lg:text-4xl text-secondary">person</span>
              </div>
              <span className="text-xs lg:text-sm font-black uppercase tracking-[0.3em] opacity-40 group-hover:opacity-100 transition-opacity text-secondary">LinkedIn</span>
            </a>
          </div>
        </div>

        <div className="mt-20 lg:mt-32 pt-10 border-t border-glass flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] lg:text-[11px] font-bold text-muted uppercase tracking-widest">
          <p className="text-center md:text-right">© {new Date().getFullYear()} {dict.rights as string}</p>
        </div>
      </motion.div>
    </footer>
  );
}
