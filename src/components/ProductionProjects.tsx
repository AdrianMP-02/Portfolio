'use client';

import { motion } from 'framer-motion';

interface ProductionProject {
  id: string;
  title: string;
  description: { es: string; en: string };
  url?: string;
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

// ─── EDIT YOUR PRODUCTION PROJECTS HERE ──────────────────────────────────────
const PROJECTS: ProductionProject[] = [
  {
    id: 'bibliotecas',
    title: 'Bibliotecas CM',
    description: {
      es: 'Plataforma de reservas culturales para las Bibliotecas Públicas de la Comunidad de Madrid. Desarrollo full stack, mantenimiento y soporte 24/7. Logro clave: migración del código legacy a PHP 8.3 con arquitectura MVC y optimización de consultas MySQL para alta demanda.',
      en: 'Cultural booking platform for the Public Libraries of the Community of Madrid. Full stack development, maintenance and 24/7 support. Key achievement: legacy code migration to PHP 8.3 with MVC architecture and MySQL query optimisation for high-demand periods.',
    },
    url: 'https://actividadesbibliotecascm.es/',
    icon: 'menu_book',
    tags: [
      { label: 'PHP 8.3', variant: 'cyan' },
      { label: 'MySQL 8.0', variant: 'magenta' },
      { label: 'MVC', variant: 'cyan' },
      { label: 'AWS', variant: 'magenta' },
    ],
    featured: true,
  },
  {
    id: 'patrimonio',
    title: 'Patrimonio Cultural CM',
    description: {
      es: 'Portal de reservas para visitas guiadas y recorridos urbanos de la Dirección General de Patrimonio Cultural de la Comunidad de Madrid. Desarrollo full stack, mantenimiento continuo y soporte 24/7.',
      en: 'Booking portal for guided tours and urban routes of the Directorate General of Cultural Heritage of the Community of Madrid. Full stack development, ongoing maintenance and 24/7 support.',
    },
    url: 'https://actividadespatrimoniocm.es/',
    icon: 'account_balance',
    tags: [
      { label: 'PHP 8.3', variant: 'cyan' },
      { label: 'MySQL 8.0', variant: 'magenta' },
      { label: 'MVC', variant: 'cyan' },
    ],
  },
  {
    id: 'bmw',
    title: 'BMW — Lead Management',
    description: {
      es: 'Plataforma interna para la gestión de eventos y leads de BMW, dando soporte a eventos de gran escala como BMW Motorrad Days — celebrado en Peñíscola en 2025. Gestión de captación, seguimiento y conversión de clientes potenciales.',
      en: 'Internal platform for BMW event and lead management, supporting large-scale events such as BMW Motorrad Days — held in Peñíscola in 2025. Handles prospect capture, follow-up and conversion workflows.',
    },
    icon: 'directions_car',
    tags: [
      { label: 'PHP 8.3', variant: 'cyan' },
      { label: 'MySQL 8.0', variant: 'magenta' },
      { label: 'MVC', variant: 'cyan' },
    ],
  },
  {
    id: 'dorueda',
    title: 'D.O. Rueda',
    description: {
      es: 'Sitio web oficial de la Denominación de Origen Rueda, organismo regulador y promotor de los vinos de la región de Valladolid. Desarrollo full stack, mantenimiento y soporte 24/7.',
      en: 'Official website of Denominación de Origen Rueda, the regulatory and promotional body for wines from the Valladolid region. Full stack development, maintenance and 24/7 support.',
    },
    url: 'https://dorueda.com/',
    icon: 'wine_bar',
    tags: [
      { label: 'WordPress', variant: 'cyan' },
      { label: 'Elementor', variant: 'magenta' },
      { label: 'PHP', variant: 'cyan' },
      { label: 'MySQL', variant: 'magenta' },
    ],
  },
  {
    id: 'bellas-artes',
    title: 'Bellas Artes CM',
    description: {
      es: 'Central de reservas para museos y espacios culturales de la Comunidad de Madrid, incluyendo Alcalá 31 y Canal de Isabel II. Desarrollo full stack, mantenimiento continuo y soporte 24/7.',
      en: 'Booking centre for museums and cultural venues of the Community of Madrid, including Alcalá 31 and Canal de Isabel II. Full stack development, ongoing maintenance and 24/7 support.',
    },
    url: 'https://actividadesbellasartes.es/',
    icon: 'palette',
    tags: [
      { label: 'PHP 8.3', variant: 'cyan' },
      { label: 'MySQL 8.0', variant: 'magenta' },
      { label: 'MVC', variant: 'cyan' },
    ],
  },
];
// ─────────────────────────────────────────────────────────────────────────────

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] as [number, number, number, number] },
  },
};

function LiveDot({ color = 'green' }: { color?: 'green' | 'magenta' }) {
  return (
    <span
      className={`inline-block w-1.5 h-1.5 rounded-full animate-live-pulse flex-shrink-0 ${
        color === 'green' ? 'bg-green-400' : 'bg-secondary'
      }`}
    />
  );
}

function LiveBadge({ text }: { text: string }) {
  return (
    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-green-500/15 border border-green-500/30 text-green-400 text-[10px] font-black tracking-[0.15em] uppercase flex-shrink-0">
      <LiveDot />
      {text}
    </span>
  );
}

function CardIcon({ icon }: { icon: string }) {
  return (
    <div className="w-[52px] h-[52px] rounded-2xl bg-secondary/[0.08] border border-secondary/20 flex items-center justify-center text-secondary group-hover:bg-secondary/[0.15] group-hover:shadow-[0_0_20px_var(--glow-secondary-30)] transition-all duration-300 flex-shrink-0">
      <span className="material-symbols-outlined text-2xl">{icon}</span>
    </div>
  );
}

function TagChip({ label, variant }: { label: string; variant: 'cyan' | 'magenta' }) {
  return (
    <span
      className={`text-[10px] font-black uppercase tracking-[0.2em] px-3 py-1 rounded-full ${
        variant === 'cyan'
          ? 'bg-primary/10 text-primary border border-primary/20'
          : 'bg-secondary/10 text-secondary border border-secondary/20'
      }`}
    >
      {label}
    </span>
  );
}

function CardFooter({
  role,
  url,
  viewSiteText,
  internalText,
}: {
  role: string;
  url?: string;
  viewSiteText: string;
  internalText: string;
}) {
  return (
    <div className="flex items-center justify-between pt-4 border-t border-glass flex-wrap gap-2 mt-auto">
      <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-slate-500">{role}</span>
      {url ? (
        <a
          href={url}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1.5 text-xs font-bold text-muted-light px-4 py-1.5 rounded-full bg-subtle border-glass hover:text-heading bg-subtle-hover transition-all tracking-wider"
        >
          <span className="material-symbols-outlined" style={{ fontSize: '15px' }}>
            open_in_new
          </span>
          {viewSiteText}
        </a>
      ) : (
        <span className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-600 px-4 py-1.5 rounded-full         bg-subtle border-glass tracking-wider cursor-default">
          <span className="material-symbols-outlined" style={{ fontSize: '15px' }}>
            lock
          </span>
          {internalText}
        </span>
      )}
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
  return (
    <section id="production" className="pb-24 lg:pb-48 px-6 lg:px-24">
      {/* Divider */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-secondary/35 to-primary/20 mb-20 lg:mb-24" />

      {/* Header */}
      <div className="flex items-end justify-between mb-20 flex-wrap gap-6">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
        >
          <div className="mb-5">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-green-500/15 border border-green-500/30 text-green-400 text-[11px] font-black tracking-[0.2em] uppercase">
              <LiveDot />
              {dict.live_badge}
            </span>
          </div>
          <h2 className="text-6xl lg:text-8xl font-display font-black leading-[0.85] tracking-tight">
            {dict.title_1}
            <br />
            <span className="text-secondary italic">{dict.title_2}</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          className="hidden lg:block text-right"
        >
          <span className="block text-[11px] font-black uppercase tracking-[0.4em] text-slate-500">
            {dict.section_label}
          </span>
          <span className="inline-flex items-center gap-2 mt-3 px-4 py-1.5 rounded-full bg-secondary/10 border border-secondary/25 text-secondary text-sm font-bold tracking-wider">
            <LiveDot color="magenta" />
            {dict.company}
          </span>
        </motion.div>
      </div>

      {/* Cards grid */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
        variants={{ visible: { transition: { staggerChildren: 0.12 } }, hidden: {} }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {PROJECTS.map((project) => (
          <motion.div
            key={project.id}
            variants={cardVariants}
            className={`group glass-morphism rounded-3xl p-8 flex flex-col gap-5 overflow-hidden relative hover:-translate-y-2 hover:border-secondary/35 hover:shadow-[0_24px_56px_rgba(0,0,0,0.5)] transition-all duration-[450ms] ease-[cubic-bezier(0.4,0,0.2,1)] ${
              project.featured ? 'lg:col-span-2' : ''
            }`}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-primary/[0.03] opacity-0 group-hover:opacity-100 transition-opacity duration-[450ms] pointer-events-none" />

            {project.featured ? (
              <div className="grid lg:grid-cols-2 gap-9 items-start">
                <div className="flex flex-col gap-5">
                  <div className="flex items-start justify-between gap-3">
                    <CardIcon icon={project.icon} />
                    <LiveBadge text={dict.live_status} />
                  </div>
                  <h3 className="prod-card-title font-display text-2xl font-black tracking-tight leading-tight">
                    {project.title}
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed">{project.description[lang]}</p>
                </div>
                <div className="flex flex-col gap-5 justify-between h-full">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <TagChip key={tag.label} {...tag} />
                    ))}
                  </div>
                  <CardFooter
                    role={dict.role}
                    url={project.url}
                    viewSiteText={dict.view_site}
                    internalText={dict.internal}
                  />
                </div>
              </div>
            ) : (
              <>
                <div className="flex items-start justify-between gap-3">
                  <CardIcon icon={project.icon} />
                  <LiveBadge text={dict.live_status} />
                </div>
                <h3 className="prod-card-title font-display text-2xl font-black tracking-tight leading-tight">
                  {project.title}
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed flex-1">{project.description[lang]}</p>
                <div className="flex flex-wrap gap-1.5 mt-auto">
                  {project.tags.map((tag) => (
                    <TagChip key={tag.label} {...tag} />
                  ))}
                </div>
                <CardFooter
                  role={dict.role}
                  url={project.url}
                  viewSiteText={dict.view_site}
                  internalText={dict.internal}
                />
              </>
            )}
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
