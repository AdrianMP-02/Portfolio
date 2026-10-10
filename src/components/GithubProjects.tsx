import { ExternalLink, Star, GitFork, Github } from 'lucide-react';
import ProjectSlider from './ProjectSlider';
import { SLIDE } from './slideClasses';
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

export default async function GithubProjects({
  dict,
  lang,
}: {
  dict?: Record<string, string>;
  lang: 'es' | 'en';
}) {
  let repos: GithubRepo[] = [];
  try {
    const res = await fetch('https://api.github.com/users/AdrianMP-02/repos?type=public&sort=updated&per_page=6', {
      next: { revalidate: 300 },
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
    <ProjectSlider label={lang === 'es' ? 'Repositorios de GitHub' : 'GitHub repositories'} lang={lang}>
      {repos.map((repo, index) => (
          <div
            key={repo.id}
            className={`panel clip-cut flex flex-col p-6 hover:border-primary transition-[border-color] duration-[250ms] ${SLIDE}`}
          >
            <div className="flex justify-between items-start mb-4">
              <span aria-hidden="true" className="font-mono text-[11px] text-[#6b6b78]">{`REPO_0${index + 1}`}</span>
              <div className="flex gap-2">
                {repo.homepage && repo.homepage !== "" && (
                  <Link
                    href={repo.homepage}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${repo.name} website`}
                    className="w-8 h-8 border border-line flex items-center justify-center text-muted hover:border-primary hover:text-primary transition-colors"
                  >
                    <ExternalLink size={15} />
                  </Link>
                )}
                <Link
                  href={repo.html_url}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`${repo.name} on GitHub`}
                  className="w-8 h-8 border border-line flex items-center justify-center text-muted hover:border-primary hover:text-primary transition-colors"
                >
                  <Github size={15} />
                </Link>
              </div>
            </div>

            <div className="flex-1">
              <div className="flex items-center flex-wrap gap-2 mb-3">
                <Link href={repo.html_url} target="_blank" rel="noreferrer">
                  <h3 className="font-mono text-lg text-heading break-all">
                    <span className="text-primary">~/</span>
                    {repo.name}
                  </h3>
                </Link>
                {repo.topics?.includes('wip') && (
                  <span className="font-mono text-[11px] border border-accent text-accent px-2 py-0.5">WIP</span>
                )}
              </div>
              <p className="text-[14px] text-muted mb-6 line-clamp-3 leading-relaxed">
                {repo.description || dict?.error || 'Código fuente y repositorio disponible en GitHub'}
              </p>
            </div>

            <div className="mt-auto pt-4">
              <div className="flex flex-wrap gap-2 mb-4">
                {repo.language && (
                  <span className="font-mono text-[11px] border border-secondary/40 text-secondary px-2 py-1">
                    {repo.language}
                  </span>
                )}
                {repo.topics?.filter(t => t.toLowerCase() !== 'wip').slice(0, 3).map(topic => (
                  <span key={topic} className="font-mono text-[11px] border border-line text-muted px-2 py-1">
                    {topic}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-4 font-mono text-[11px] text-muted">
                <div className="flex items-center gap-1.5">
                  <Star size={13} />
                  <span>{repo.stargazers_count}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <GitFork size={13} />
                  <span>{repo.forks_count}</span>
                </div>
              </div>
            </div>
          </div>
      ))}
    </ProjectSlider>
  );
}
