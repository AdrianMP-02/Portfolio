'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import type { MouseEvent } from 'react';
import ProjectSlider from './ProjectSlider';
import { SLIDE, SLIDE_WIDE } from './slideClasses';

interface ProductionProject {
  id: string;
  title: string;
  description: { es: string; en: string };
  url?: string;
  preview?: string;
  icon: string;
  tags: { label: string; variant: 'cyan' | 'magenta' }[];
  featured?: boolean;
}

interface ProductionDict {
  live_badge: string;
  section_label: string;
  company: string;
  title_1: string;
  title_2: string;
  live_status: string;
  role: string;
  view_site: string;
  internal: string;
}

function onSpot(e: MouseEvent<HTMLElement>) {
  const r = e.currentTarget.getBoundingClientRect();
  e.currentTarget.style.setProperty('--mx', `${e.clientX - r.left}px`);
  e.currentTarget.style.setProperty('--my', `${e.clientY - r.top}px`);
}

function SkeletonCard({ featured }: { featured?: boolean }) {
  return (
    <div
      className={`panel clip-cut p-6 flex flex-col gap-4 ${
        featured ? SLIDE_WIDE : SLIDE
      }`}
    >
      <div className={`${featured ? 'h-[260px]' : 'h-[180px]'} -mx-6 -mt-6 mb-2 bg-line animate-pulse`} />
      <div className="flex items-center justify-between">
        <div className="w-11 h-11 bg-line animate-pulse" />
        <div className="w-20 h-4 bg-line animate-pulse" />
      </div>
      <div className="h-7 w-3/4 bg-line animate-pulse" />
      <div className="space-y-2">
        <div className="h-4 w-full bg-line animate-pulse" />
        <div className="h-4 w-5/6 bg-line animate-pulse" />
      </div>
      <div className="flex gap-2">
        <div className="h-6 w-16 bg-line animate-pulse" />
        <div className="h-6 w-14 bg-line animate-pulse" />
      </div>
      <div className="h-px w-full bg-line mt-auto" />
      <div className="h-4 w-24 bg-line animate-pulse" />
    </div>
  );
}

export default function ProductionProjects({
  dict,
  lang,
}: {
  dict: ProductionDict;
  lang: 'es' | 'en';
}) {
  const [projects, setProjects] = useState<ProductionProject[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/projects')
      .then((res) => res.json())
      .then((data) => {
        setProjects(Array.isArray(data) ? data : []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <section id="production" className="scroll-mt-20 max-w-7xl mx-auto px-6 py-24 lg:py-32">
      <div className="flex items-end justify-between border-b border-line pb-5 mb-10">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
        >
          <div className="section-index">{`// 04 — ${dict.section_label}`}</div>
          <h2 className="font-display uppercase text-4xl sm:text-5xl lg:text-6xl break-words leading-none mt-2">
            {dict.title_1} <span className="text-primary">{dict.title_2}</span>
          </h2>
        </motion.div>
        <div className="hidden md:flex items-center gap-2 font-mono text-[12px] text-muted">
          <span className="dot-live" /> {dict.live_badge} · {dict.company}
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.5 }}
      >
        {loading ? (
          <div className="flex gap-4 overflow-hidden">
            <SkeletonCard featured />
            <SkeletonCard />
            <SkeletonCard />
          </div>
        ) : (
          <ProjectSlider label={`${dict.title_1} ${dict.title_2}`} lang={lang}>
            {[...projects].sort((a, b) => Number(!!b.featured) - Number(!!a.featured)).map((project, i) => (
            <div
              key={project.id}
              onMouseMove={onSpot}
              className={`group panel clip-cut spotlight relative p-6 flex flex-col gap-4 hover:border-primary transition-[border-color] duration-[250ms] ${
                project.featured ? SLIDE_WIDE : SLIDE
              }`}
            >
              <span aria-hidden="true" className="absolute z-10 top-3 right-[30px] font-mono text-[11px] text-muted bg-dark-bg/70 px-1.5 py-0.5">
                {`P_0${i + 1}`}
              </span>

              <div
                className={`relative overflow-hidden border-b border-line -mx-6 -mt-6 mb-2 ${
                  project.featured ? 'h-[260px]' : 'h-[180px]'
                }`}
              >
                {project.preview && project.url ? (
                  <>
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noreferrer"
                      tabIndex={-1}
                      aria-hidden="true"
                      className="absolute inset-0 block"
                    >
                      <Image
                        src={project.preview}
                        alt={lang === 'es' ? `Captura de ${project.title}` : `Screenshot of ${project.title}`}
                        fill
                        sizes="(min-width:1024px) 60vw, 85vw"
                        className="object-cover object-top grayscale brightness-[.45] contrast-125 transition-[filter,scale] duration-500 group-hover:grayscale-0 group-hover:brightness-100 group-hover:scale-[1.03] [@media(hover:none)]:brightness-75 [@media(hover:none)]:grayscale-[.4]"
                      />
                    </a>
                    <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-primary/15 mix-blend-color transition-opacity duration-500 group-hover:opacity-0" />
                    <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[repeating-linear-gradient(0deg,rgba(0,0,0,.25)_0_1px,transparent_1px_3px)] opacity-60 group-hover:opacity-20 transition-opacity" />
                    <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-gradient-to-t from-panel via-transparent to-transparent" />
                    <span className="pointer-events-none absolute bottom-3 left-3 font-mono text-[10px] uppercase tracking-widest text-primary bg-dark-bg/70 border border-line px-2 py-1">
                      {new URL(project.url).hostname.replace(/^www\./, '')}
                    </span>
                  </>
                ) : (
                  <div className="absolute inset-0 bg-gradient-to-br from-[#14141c] to-[#1b1b26] flex flex-col items-center justify-center gap-2">
                    <span
                      className="material-symbols-outlined text-line"
                      style={{ fontSize: project.featured ? '96px' : '72px' }}
                    >
                      {project.icon}
                    </span>
                    <span className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-widest text-muted">
                      <span className="material-symbols-outlined" style={{ fontSize: '13px' }}>
                        lock
                      </span>
                      {dict.internal}
                    </span>
                  </div>
                )}
              </div>

              <div className="flex items-center justify-between gap-3">
                <div className="w-11 h-11 border border-line text-secondary flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined">{project.icon}</span>
                </div>
                <span className="inline-flex items-center gap-2 font-mono text-[11px] text-primary">
                  <span className="dot-live" /> {dict.live_status}
                </span>
              </div>

              <h3 className="font-display uppercase text-2xl text-heading">{project.title}</h3>
              <p className="text-[14px] text-muted leading-relaxed">{project.description[lang]}</p>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag.label}
                    className="font-mono text-[11px] border border-line text-muted px-2 py-1"
                  >
                    {tag.label}
                  </span>
                ))}
              </div>

              <div className="border-t border-line pt-4 mt-auto flex items-center justify-between flex-wrap gap-2">
                <span className="font-mono text-[11px] text-muted">{dict.role}</span>
                {project.url ? (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noreferrer"
                    className="font-mono text-[12px] text-heading hover:text-primary transition-colors"
                  >
                    {dict.view_site} ↗
                  </a>
                ) : (
                  <span className="inline-flex items-center gap-1.5 font-mono text-[12px] text-muted">
                    <span className="material-symbols-outlined" style={{ fontSize: '15px' }}>
                      lock
                    </span>
                    {dict.internal}
                  </span>
                )}
              </div>
            </div>
            ))}
          </ProjectSlider>
        )}
      </motion.div>
    </section>
  );
}
