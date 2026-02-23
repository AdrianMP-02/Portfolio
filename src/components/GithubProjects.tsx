import { Code, ExternalLink, Star, GitFork, Github } from 'lucide-react';
import { StaggerContainer, StaggerItem } from './AnimationWrapper';
import Link from 'next/link';

interface GithubRepo {
  id: number;
  name: string;
  description: string;
  html_url: string;
  homepage: string;
  language: string;
  stargazers_count: number;
  forks_count: number;
  topics: string[];
  fork: boolean;
}

export default async function GithubProjects({ dict }: { dict?: Record<string, string> }) {
  let repos: GithubRepo[] = [];
  try {
    const res = await fetch('https://api.github.com/users/AdrianMP-02/repos?sort=updated&per_page=6', {
      next: { revalidate: 3600 },
    });
    if (res.ok) {
      repos = await res.json();
      // Only keep the top 6 non-forked repos
      repos = repos.filter(repo => !repo.fork).slice(0, 6);
    }
  } catch (error) {
    console.error('Error fetching github projects:', error);
  }

  // Fallback if API fails or rate limited
  if (repos.length === 0) {
    repos = [
      {
        id: 1,
        name: 'Portfolio',
        description: 'Mi portfolio personal usando Next.js, Tailwind CSS y framer-motion.',
        html_url: 'https://github.com/AdrianMP-02/Portfolio',
        homepage: 'https://adrianmartinportfolio.vercel.app',
        language: 'TypeScript',
        stargazers_count: 0,
        forks_count: 0,
        topics: ['nextjs', 'react', 'tailwind'],
        fork: false
      },
      {
        id: 2,
        name: 'MotorReservas',
        description: 'Motor de reservas backend usando NestJS y base de datos SQL.',
        html_url: 'https://github.com/AdrianMP-02/MotorReservas',
        homepage: '',
        language: 'TypeScript',
        stargazers_count: 0,
        forks_count: 0,
        topics: ['nestjs', 'backend', 'api'],
        fork: false
      },
      {
        id: 3,
        name: 'ActividadesPatrimonio',
        description: 'Proyecto PHP y MySQL manejando la gestión de patrimonio.',
        html_url: 'https://github.com/AdrianMP-02/actividadespatrimonio',
        homepage: '',
        language: 'PHP',
        stargazers_count: 0,
        forks_count: 0,
        topics: ['php', 'mysql'],
        fork: false
      }
    ];
  }

  return (
    <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
      {repos.map((repo, index) => (
        <StaggerItem key={repo.id} index={index}>
          <div className="glass-morphism h-full flex flex-col group border border-white/10 hover:border-primary/50 rounded-3xl p-8 relative overflow-hidden transition-all duration-500 hover:-translate-y-2">
            {/* Subtle glow effect on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="flex-1 relative z-10">
              <div className="flex justify-between items-start mb-6">
                <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10 group-hover:border-primary/50 group-hover:shadow-[0_0_15px_rgba(0,242,255,0.4)] transition-all duration-300">
                  <Code className="text-slate-400 group-hover:text-primary transition-colors" size={28} />
                </div>
                <div className="flex gap-2">
                  {repo.homepage && repo.homepage !== "" && (
                    <Link href={repo.homepage} target="_blank" className="p-2 text-slate-400 hover:text-white bg-white/5 hover:bg-white/20 border border-white/10 rounded-full transition-colors">
                      <ExternalLink size={18} />
                    </Link>
                  )}
                  <Link href={repo.html_url} target="_blank" className="p-2 text-slate-400 hover:text-white bg-white/5 hover:bg-white/20 border border-white/10 rounded-full transition-colors">
                    <Github size={18} />
                  </Link>
                </div>
              </div>
              <Link href={repo.html_url} target="_blank">
                <h3 className="text-2xl font-display font-black text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-secondary transition-all duration-300">
                  {repo.name}
                </h3>
              </Link>
              <p className="text-slate-400 text-sm mb-6 line-clamp-3 leading-relaxed">
                {repo.description || dict?.error || 'Código fuente y repositorio disponible en GitHub'}
              </p>
            </div>

            <div className="mt-auto relative z-10 pt-4">
              <div className="flex flex-wrap gap-2 mb-4">
                {repo.language && (
                  <span className="text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
                    {repo.language}
                  </span>
                )}
                {repo.topics?.slice(0, 3).map(topic => (
                  <span key={topic} className="text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full bg-secondary/10 text-secondary border border-secondary/20">
                    {topic}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-widest text-slate-500">
                <div className="flex items-center gap-1.5 hover:text-yellow-400 transition-colors">
                  <Star size={14} />
                  <span>{repo.stargazers_count}</span>
                </div>
                <div className="flex items-center gap-1.5 hover:text-white transition-colors">
                  <GitFork size={14} />
                  <span>{repo.forks_count}</span>
                </div>
              </div>
            </div>
          </div>
        </StaggerItem>
      ))}
    </StaggerContainer>
  );
}

