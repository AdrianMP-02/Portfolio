'use client';

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ReactNode } from "react";
import type { Dictionary } from "@/types/i18n";
import ProductionProjects from "@/components/ProductionProjects";

const LEVELS = [4, 5, 3, 4, 5, 4];

export default function HomeClient({ children, dict, lang }: { children: ReactNode, dict: Dictionary, lang: 'es' | 'en' }) {
  const { scrollYProgress } = useScroll();
  const opacityHero = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  if (!dict) return null;

  return (
    <>
      {/* HERO SECTION */}
      <header id="hero" className="relative scroll-mt-20">
        <div className="max-w-7xl mx-auto px-6 min-h-[88vh] pt-28 pb-16 grid lg:grid-cols-[1.3fr_1fr] gap-12 items-center">
          <motion.div style={{ opacity: opacityHero }} className="relative z-10">
            <motion.p
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="font-mono text-xs text-secondary tracking-[.2em] uppercase mb-6"
            >
              <span className="text-primary">&gt; </span>{dict.hero.badge}
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="font-display uppercase glitch font-bold text-heading"
              style={{ fontSize: 'clamp(64px,10vw,140px)', lineHeight: 0.88 }}
            >
              Adrián <br />
              <span className="text-primary" style={{ textShadow: '0 0 28px rgba(243,230,0,.25)' }}>M.P.</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.5 }}
              className="text-[18px] lg:text-[19px] text-muted-light max-w-xl leading-relaxed mt-8"
            >
              {dict.hero.subtitle} <b className="text-heading font-medium">{dict.hero.highlight}</b>
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="flex flex-wrap gap-4 mt-10"
            >
              <Link href="#arsenal" className="btn-cyber btn-cyber-primary">{dict.hero.cta}_</Link>
              <Link href="#contact" className="btn-cyber btn-cyber-ghost">{dict.navbar.contact}</Link>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="panel hud-corners font-mono text-[13px]"
          >
            <div className="flex items-center justify-between px-4 py-3 border-b border-line text-muted">
              <span>~/adrian/whoami.ts</span>
              <span className="tracking-widest">● ● ●</span>
            </div>
            <pre className="whitespace-pre-wrap leading-[1.9] text-muted p-5 m-0 font-mono">
              <span className="text-secondary">const</span> adrian = {'{'}{'\n'}
              {'  '}role:  <span className="text-primary">&quot;Web Developer&quot;</span>,{'\n'}
              {'  '}now:   <span className="text-primary">&quot;Intern @ MadisonMK&quot;</span>,{'\n'}
              {'  '}stack: [<span className="text-primary">&quot;Next&quot;</span>, <span className="text-primary">&quot;Node&quot;</span>, <span className="text-primary">&quot;React&quot;</span>, <span className="text-primary">&quot;PHP&quot;</span>, <span className="text-primary">&quot;MySQL&quot;</span>],{'\n'}
              {'  '}shipped: <span className="text-primary">&quot;{dict.about.stats[0].value}&quot;</span>,{'\n'}
              {'};'}{'\n'}
              <span className="text-[#6b6b78]">{'// system online'}</span>{'\n'}
              <span className="text-primary">❯</span> <span className="term-cursor" />
            </pre>
          </motion.div>
        </div>
      </header>

      {/* ABOUT */}
      <section id="about" className="scroll-mt-20 max-w-7xl mx-auto px-6 py-24 lg:py-32">
        <div className="flex items-end justify-between border-b border-line pb-5 mb-10">
          <div>
            <div className="section-index">{`// 01 — ${dict.navbar.about}`}</div>
            <h2 className="font-display uppercase text-4xl sm:text-5xl lg:text-6xl break-words leading-none mt-2">
              {dict.about.title_1} {dict.about.title_2} <span className="text-primary">{dict.about.title_3}</span>
            </h2>
          </div>
          <div className="hidden md:block font-mono text-xs text-muted">{dict.hero.badge}</div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start"
        >
          <div className="space-y-6 text-lg leading-relaxed text-muted-light">
            <p>
              {dict.about.p1_1}
              <span className="text-heading font-medium border-b border-primary mx-1">{dict.about.p1_highlight}</span>
              {dict.about.p1_2}
            </p>
            <p className="text-muted">{dict.about.p2}</p>
          </div>
          <div className="grid grid-cols-3">
            {dict.about.stats.slice(0, 3).map((stat, i) => (
              <div key={i} className={`panel group p-3 sm:p-6 text-center ${i > 0 ? '-ml-px' : ''}`}>
                <div className="font-display text-3xl sm:text-5xl text-heading group-hover:text-primary transition-colors">{stat.value}</div>
                <div className="font-mono text-[11px] text-muted uppercase tracking-normal sm:tracking-widest break-words mt-2">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ARSENAL */}
      <section id="arsenal" className="scroll-mt-20 max-w-7xl mx-auto px-6 py-24 lg:py-32">
        <div className="flex items-end justify-between border-b border-line pb-5 mb-6">
          <div>
            <div className="section-index">{`// 02 — ${dict.navbar.stack}`}</div>
            <h2 className="font-display uppercase text-4xl sm:text-5xl lg:text-6xl break-words leading-none mt-2">{dict.arsenal.title}</h2>
          </div>
          <div className="hidden md:block font-mono text-xs text-muted">{dict.arsenal.items.length} MODULES</div>
        </div>
        <p className="text-muted max-w-2xl mb-10">{dict.arsenal.subtitle}</p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-l border-line"
        >
          {dict.arsenal.items.map((item, i) => {
            const title = item.title ?? (item.icon === 'PHP' ? 'PHP' : item.badge);
            const label = title === item.badge ? `MODULE_0${i + 1}` : item.badge;
            const level = LEVELS[i] ?? 4;
            return (
              <div key={i} className="group p-7 border-r border-b border-line hover:bg-panel transition-colors">
                <div className="font-mono text-[11px] text-secondary tracking-[.2em] uppercase mb-4">{label}</div>
                <h3 className="font-display uppercase text-2xl mb-3">{title}</h3>
                <p className="text-muted text-sm leading-relaxed mb-6">{item.desc}</p>
                <div className="flex gap-1">
                  {[0, 1, 2, 3, 4].map(n => (
                    <span
                      key={n}
                      className={`w-[22px] h-1 transition-colors ${n < level ? 'bg-muted group-hover:bg-primary' : 'bg-[#2a2a38]'}`}
                    />
                  ))}
                </div>
              </div>
            );
          })}
        </motion.div>

        <div className="mt-12">
          <h4 className="font-mono text-xs text-secondary tracking-[.2em] uppercase mb-4">{dict.arsenal.tools_title}</h4>
          <div className="flex flex-wrap gap-3">
            {['Git', 'Docker', 'Figma', 'VS Code'].map(tool => (
              <span key={tool} className="font-mono text-xs uppercase tracking-widest text-muted-light border border-line px-4 py-2 hover:border-primary hover:text-primary transition-colors cursor-default">
                {tool}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* LATEST CREATIONS (GITHUB PROJECTS) */}
      <section id="projects" className="scroll-mt-20 max-w-7xl mx-auto px-6 py-24 lg:py-32">
        <div className="flex items-end justify-between border-b border-line pb-5 mb-6">
          <div>
            <div className="section-index">{`// 03 — ${dict.navbar.projects}`}</div>
            <h2 className="font-display uppercase text-4xl sm:text-5xl lg:text-6xl break-words leading-none mt-2">
              {dict.projects.title_1} <span className="text-primary">{dict.projects.title_2}</span>
            </h2>
          </div>
          <div className="hidden md:block font-mono text-xs text-muted">{dict.projects.badge}</div>
        </div>
        <p className="text-muted max-w-2xl mb-10">{dict.projects.subtitle}</p>

        {children}
      </section>

      {/* PRODUCTION PROJECTS */}
      <ProductionProjects dict={dict.production} lang={lang} />

    </>
  );
}
