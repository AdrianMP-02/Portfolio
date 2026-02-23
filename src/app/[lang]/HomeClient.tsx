'use client';

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ReactNode } from "react";
import type { Dictionary } from "@/types/i18n";

export default function HomeClient({ children, dict }: { children: ReactNode, dict: Dictionary }) {
  const { scrollYProgress } = useScroll();
  const opacityHero = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  if (!dict) return null;

  return (
    <>
      <div className="fixed inset-0 -z-10 bg-dark-bg mesh-gradient-bg">
        <div className="absolute inset-0 grid-bg opacity-30"></div>
        <div className="absolute inset-0 star-field opacity-20 animate-pulse-slow"></div>
        <div className="absolute top-0 left-0 w-full h-full opacity-30 bg-[url('https://www.transparenttextures.com/patterns/asfalt-dark.png')]"></div>
      </div>

      {/* HERO SECTION */}
      <header id="hero" className="relative min-h-screen flex items-center px-6 lg:px-24 overflow-hidden pt-20 lg:pt-0">
        <div className="grid lg:grid-cols-2 w-full gap-12 items-center">
          <motion.div
            style={{ opacity: opacityHero }}
            className="relative z-10 space-y-8 text-center lg:text-left"
          >
            <motion.p
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-primary font-display font-bold tracking-[0.5em] uppercase text-sm opacity-80"
            >
              {dict.hero.badge}
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 1, type: "spring" }}
              className="hero-text font-display"
            >
              Adrián <br /> M. P.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-xl lg:text-2xl text-slate-400 font-light max-w-lg leading-relaxed mx-auto lg:mx-0"
            >
              {dict.hero.subtitle} <span className="text-white font-medium italic underline decoration-primary/50 underline-offset-8">{dict.hero.highlight}</span>
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="pt-6"
            >
              <Link href="#arsenal" className="group relative inline-flex items-center gap-6 bg-white text-black px-10 py-6 rounded-2xl font-black text-xl transition-all hover:scale-105 active:scale-95 glow-pulse">
                {dict.hero.cta}
                <span className="material-symbols-outlined font-black group-hover:translate-x-2 transition-transform">east</span>
              </Link>
            </motion.div>
          </motion.div>

          <div className="relative hidden lg:flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.5, rotate: -45 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1.5, type: "spring" }}
              className="relative w-[500px] h-[500px]"
            >
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/20 via-secondary/20 to-accent/20 blur-3xl animate-pulse"></div>
              <div className="absolute inset-0 border-[0.5px] border-white/10 rounded-full scale-110"></div>
              <div className="absolute inset-0 border-[0.5px] border-primary/20 rounded-full scale-125 opacity-50"></div>
              <div className="absolute inset-10 rounded-full glass-morphism overflow-hidden flex items-center justify-center group animate-float">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 opacity-50"></div>
                <div className="w-64 h-64 rounded-full border border-white/20 flex items-center justify-center animate-[spin_20s_linear_infinite]">
                  <div className="w-48 h-48 rounded-full border-t-2 border-primary/40"></div>
                </div>
                <div className="absolute w-80 h-80 border border-secondary/20 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </header>

      {/* STORYTELLING ABOUT SECTION */}
      <section id="about" className="py-24 lg:py-48 px-6 lg:px-24">
        <div className="grid lg:grid-cols-2 gap-24 items-start">
          <div className="sticky top-32 hidden lg:block">
            <motion.h2
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="text-8xl font-black font-display tracking-tight text-white/10 leading-none"
            >
              <span className="text-white">{dict.about.title_1}</span> <br />
              <span className="text-primary italic">{dict.about.title_2}</span> <br />
              {dict.about.title_3}
            </motion.h2>
          </div>
          <div className="block lg:hidden text-center mb-12">
            <h2 className="text-6xl font-black font-display tracking-tight leading-none">
              <span className="text-white">{dict.about.title_1}</span> <br />
              <span className="text-primary italic">{dict.about.title_2}</span> {dict.about.title_3}
            </h2>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-16"
          >
            <p className="text-3xl lg:text-5xl leading-[1.3] text-slate-300 font-light font-sans">
              {dict.about.p1_1}
              <span className="text-white font-bold border-b-4 border-primary/50 pb-1 mx-2">{dict.about.p1_highlight}</span>
              {dict.about.p1_2}
            </p>
            <div className="h-px w-full bg-gradient-to-r from-primary via-secondary to-transparent"></div>
            <p className="text-xl lg:text-2xl text-slate-500 font-light max-w-2xl leading-relaxed">
              {dict.about.p2}
            </p>
          </motion.div>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            visible: { transition: { staggerChildren: 0.2 } },
            hidden: {},
          }}
          className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="glass-morphism p-8 rounded-3xl text-center group hover:border-primary/50 transition-colors relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="text-6xl font-black font-display text-white mb-2 group-hover:text-primary transition-colors">{dict.about.stats[0].value}</div>
            <div className="text-xs uppercase tracking-[0.3em] font-bold text-slate-500">{dict.about.stats[0].label}</div>
          </motion.div>
          <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="glass-morphism p-8 rounded-3xl text-center group hover:border-secondary/50 transition-colors relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-secondary to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="text-6xl font-black font-display text-white mb-2 group-hover:text-secondary transition-colors">{dict.about.stats[1].value}</div>
            <div className="text-xs uppercase tracking-[0.3em] font-bold text-slate-500">{dict.about.stats[1].label}</div>
          </motion.div>
          <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="glass-morphism p-8 rounded-3xl text-center group hover:border-accent/50 transition-colors relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="text-6xl font-black font-display text-white mb-2 group-hover:text-accent transition-colors">{dict.about.stats[2].value}</div>
            <div className="text-xs uppercase tracking-[0.3em] font-bold text-slate-500">{dict.about.stats[2].label}</div>
          </motion.div>
        </motion.div>
      </section>

      {/* ARSENAL (Bento Grid 2.0) */}
      <section id="arsenal" className="py-32 px-6 lg:px-24 bg-white/[0.01]">
        <div className="mb-20 text-center lg:text-left">
          <motion.h3
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl lg:text-6xl font-display font-black mb-4"
          >
            {dict.arsenal.title}
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-500 text-lg lg:text-xl max-w-2xl mx-auto lg:mx-0"
          >
            {dict.arsenal.subtitle}
          </motion.p>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: { transition: { staggerChildren: 0.15 } },
            hidden: {},
          }}
          className="grid grid-cols-1 md:grid-cols-4 gap-6"
        >
          <motion.div variants={{ hidden: { opacity: 0, scale: 0.9 }, visible: { opacity: 1, scale: 1 } }} className="md:col-span-2 bento-card p-10 group">
            <div className="absolute -right-10 -top-10 w-40 h-40 bg-primary/10 blur-3xl rounded-full group-hover:bg-primary/20 transition-all"></div>
            <div className="flex justify-between items-start mb-20">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary border border-primary/20">
                <span className="material-symbols-outlined text-4xl">{dict.arsenal.items[0].icon}</span>
              </div>
              <span className="px-4 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-black tracking-widest uppercase">{dict.arsenal.items[0].badge}</span>
            </div>
            <div>
              <h4 className="text-4xl lg:text-5xl font-black mb-4">{dict.arsenal.items[0].title}</h4>
              <p className="text-slate-400 text-base lg:text-lg leading-relaxed">{dict.arsenal.items[0].desc}</p>
            </div>
          </motion.div>

          <motion.div variants={{ hidden: { opacity: 0, scale: 0.9 }, visible: { opacity: 1, scale: 1 } }} className="md:col-span-2 bento-card p-10 group">
            <div className="absolute -left-10 -bottom-10 w-40 h-40 bg-secondary/10 blur-3xl rounded-full group-hover:bg-secondary/20 transition-all"></div>
            <div className="flex justify-between items-start mb-20">
              <div className="w-16 h-16 rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary border border-secondary/20">
                <span className="material-symbols-outlined text-4xl">{dict.arsenal.items[1].icon}</span>
              </div>
              <span className="px-4 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-black tracking-widest uppercase">{dict.arsenal.items[1].badge}</span>
            </div>
            <div>
              <h4 className="text-4xl lg:text-5xl font-black mb-4">{dict.arsenal.items[1].title}</h4>
              <p className="text-slate-400 text-base lg:text-lg leading-relaxed">{dict.arsenal.items[1].desc}</p>
            </div>
          </motion.div>

          {/* Rendering the remaining 4 items generically if they exist, or using hardcoded index for layout matching */}
          <motion.div variants={{ hidden: { opacity: 0, scale: 0.9 }, visible: { opacity: 1, scale: 1 } }} className="bento-card p-8 group">
            <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-8 border border-white/10 group-hover:bg-primary/20 transition-colors">
              <span className="font-black italic text-primary">{dict.arsenal.items[2].icon}</span>
            </div>
            <h4 className="text-2xl font-black mb-2">{dict.arsenal.items[2].badge}</h4>
            <p className="text-slate-500 text-sm">{dict.arsenal.items[2].desc}</p>
          </motion.div>

          <motion.div variants={{ hidden: { opacity: 0, scale: 0.9 }, visible: { opacity: 1, scale: 1 } }} className="bento-card p-8 group">
            <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-8 border border-white/10 group-hover:bg-secondary/20 transition-colors">
              <span className="material-symbols-outlined text-secondary">{dict.arsenal.items[3].icon}</span>
            </div>
            <h4 className="text-2xl font-black mb-2">{dict.arsenal.items[3].badge}</h4>
            <p className="text-slate-500 text-sm">{dict.arsenal.items[3].desc}</p>
          </motion.div>

          <motion.div variants={{ hidden: { opacity: 0, scale: 0.9 }, visible: { opacity: 1, scale: 1 } }} className="bento-card p-8 group">
            <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-8 border border-white/10 group-hover:bg-white/20 transition-colors">
              <span className="material-symbols-outlined text-white">{dict.arsenal.items[4].icon}</span>
            </div>
            <h4 className="text-2xl font-black mb-2">{dict.arsenal.items[4].badge}</h4>
            <p className="text-slate-500 text-sm">{dict.arsenal.items[4].desc}</p>
          </motion.div>

          <motion.div variants={{ hidden: { opacity: 0, scale: 0.9 }, visible: { opacity: 1, scale: 1 } }} className="bento-card p-8 group">
            <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-8 border border-white/10 group-hover:bg-accent/20 transition-colors">
              <span className="material-symbols-outlined text-accent">{dict.arsenal.items[5].icon}</span>
            </div>
            <h4 className="text-2xl font-black mb-2">{dict.arsenal.items[5].badge}</h4>
            <p className="text-slate-500 text-sm">{dict.arsenal.items[5].desc}</p>
          </motion.div>

          <motion.div variants={{ hidden: { opacity: 0, scale: 0.9 }, visible: { opacity: 1, scale: 1 } }} className="col-span-1 md:col-span-4 mt-8">
            <h4 className="text-xl font-display font-bold text-white mb-6 pl-2 border-l-4 border-primary/50">{dict.arsenal.tools_title}</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {['Git', 'Docker', 'Figma', 'VS Code'].map(tool => (
                <div key={tool} className="glass-morphism p-4 rounded-2xl flex items-center justify-center gap-4 hover:bg-white/10 transition-colors cursor-default">
                  <span className="font-bold text-sm text-slate-300">{tool}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* LATEST CREATIONS (GITHUB PROJECTS) */}
      <section id="projects" className="py-24 lg:py-48 px-6 lg:px-24">
        <div className="flex items-end justify-between mb-24 lg:mb-32">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <h3 className="text-6xl lg:text-8xl font-display font-black leading-[0.8]">{dict.projects.title_1} <br /><span className="text-primary italic">{dict.projects.title_2}</span></h3>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="hidden lg:block text-right">
            <span className="text-slate-500 font-black text-sm uppercase tracking-[0.4em]">{dict.projects.badge}</span>
            <p className="text-white font-display text-xl mt-2 italic">{dict.projects.subtitle}</p>
          </motion.div>
        </div>

        {children}
      </section>

    </>
  );
}
