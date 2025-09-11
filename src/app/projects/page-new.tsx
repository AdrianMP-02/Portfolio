'use client';

import Link from 'next/link';
import { Github, Code, Database, Globe, Star } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: "Portfolio Personal",
    description: "Mi portfolio personal desarrollado con Next.js 15, TypeScript y Tailwind CSS. Incluye sistema de blog con MDX, formulario de contacto avanzado con EmailJS y auto-reply, sistema de seguridad anti-spam robusto, y diseño responsive completamente optimizado.",
    image: "/images/portfolio-project.jpg",
    technologies: ["Next.js 15", "TypeScript", "Tailwind CSS", "MDX", "EmailJS", "React"],
    githubUrl: "https://github.com/AdrianMP-02/Portfolio",
    liveUrl: "",
    featured: true,
    status: "En desarrollo",
    highlights: ["Sistema anti-spam avanzado", "EmailJS con auto-reply", "Headers de seguridad HTTP", "Sistema de blog MDX", "Diseño responsive"]
  },
  {
    id: 2,
    title: "ProyectFlow - TFG Sistema de Gestión",
    description: "Mi Trabajo de Fin de Grado: una plataforma de gestión de proyectos con tableros Kanban, sistema de tareas, comentarios y gestión de usuarios. Desarrollado con Node.js y MySQL, actualmente en proceso de mejoras y optimización.",
    image: "/images/proyectflow.jpg",
    technologies: ["Node.js", "Express", "EJS", "MySQL", "JavaScript", "CSS Grid"],
    githubUrl: "https://github.com/AdrianMP-02/ProyectFlow",
    liveUrl: "",
    featured: true,
    status: "En mejora",
    highlights: ["TFG académico", "Tableros Kanban", "Sistema de roles", "En desarrollo continuo"]
  },
  {
    id: 3,
    title: "Perfil de GitHub",
    description: "Mi perfil personalizado de GitHub con README dinámico, estadísticas de desarrollo y organización de repositorios. Incluye información sobre mis tecnologías favoritas y proyectos destacados.",
    image: "/images/github-profile.jpg",
    technologies: ["Markdown", "GitHub Actions", "Git", "Documentation"],
    githubUrl: "https://github.com/AdrianMP-02/AdrianMP-02",
    liveUrl: "https://github.com/AdrianMP-02",
    featured: false,
    status: "Actualizado",
    highlights: ["README dinámico", "Estadísticas automáticas", "Documentación detallada"]
  }
];

export default function Projects() {
  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 pt-24">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold gradient-text">
              Mis Proyectos
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Una colección de proyectos que he desarrollado, desde mi TFG hasta aplicaciones web modernas
            </p>
          </div>

          {/* Featured Projects */}
          <div className="mb-20">
            <div className="flex items-center gap-3 mb-12">
              <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-xl flex items-center justify-center">
                <Star className="text-white" size={24} />
              </div>
              <h2 className="text-3xl font-bold text-white">Proyectos Destacados</h2>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {featuredProjects.map((project) => (
                <div key={project.id}>
                  <FeaturedProjectCard project={project} />
                </div>
              ))}
            </div>
          </div>

          {/* Other Projects */}
          {otherProjects.length > 0 && (
            <div className="mb-20">
              <div className="flex items-center gap-3 mb-12">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                  <Code className="text-white" size={24} />
                </div>
                <h2 className="text-3xl font-bold text-white">Otros Proyectos</h2>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {otherProjects.map((project) => (
                  <div key={project.id}>
                    <ProjectCard project={project} />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Skills Section */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Tecnologías que utilizo</h2>
              <p className="text-gray-400">Las herramientas y tecnologías con las que trabajo diariamente</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <SkillCategory
                title="Backend"
                icon={<Database className="text-white" size={24} />}
                skills={["PHP", "Node.js", "Express", "MySQL"]}
                color="from-green-500 to-emerald-500"
              />
              <SkillCategory
                title="Frontend"
                icon={<Globe className="text-white" size={24} />}
                skills={["React", "Next.js", "TypeScript", "Tailwind CSS"]}
                color="from-blue-500 to-cyan-500"
              />
              <SkillCategory
                title="CMS"
                icon={<Code className="text-white" size={24} />}
                skills={["WordPress", "Elementor", "Custom Themes"]}
                color="from-purple-500 to-pink-500"
              />
              <SkillCategory
                title="Herramientas"
                icon={<Github className="text-white" size={24} />}
                skills={["Git", "VS Code", "Postman", "Laragon"]}
                color="from-yellow-500 to-orange-500"
              />
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 md:p-12 space-y-6">
              <h2 className="text-3xl font-bold text-white">
                ¿Te gusta lo que ves?
              </h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Estos son solo algunos de mis proyectos. Si tienes una idea interesante o necesitas ayuda
                con tu próximo proyecto, ¡me encantaría escucharte!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="btn-primary"
                >
                  Hablemos de tu proyecto
                </Link>
                <a
                  href="https://github.com/AdrianMP-02"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary flex items-center gap-2"
                >
                  <Github size={20} />
                  Ver más en GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

interface ProjectType {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl: string;
  liveUrl: string;
  featured: boolean;
  status: string;
  highlights: string[];
}

interface FeaturedProjectCardProps {
  project: ProjectType;
}

const FeaturedProjectCard = ({ project }: FeaturedProjectCardProps) => {
  return (
    <div className="card group">
      <div className="relative overflow-hidden rounded-xl mb-6">
        <div className="aspect-video bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center">
          <div className="text-center">
            <Code className="text-gray-500 mx-auto mb-2" size={48} />
            <p className="text-gray-500 text-sm">Imagen del proyecto</p>
          </div>
        </div>
        <div className="absolute top-4 right-4">
          <span className={`px-3 py-1 rounded-full text-sm font-medium ${project.status === 'En desarrollo' ? 'bg-yellow-500/20 text-yellow-400' :
              project.status === 'En mejora' ? 'bg-blue-500/20 text-blue-400' :
                'bg-green-500/20 text-green-400'
            }`}>
            {project.status}
          </span>
        </div>
      </div>

      <div className="space-y-4">
        <div>
          <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
          <p className="text-gray-300 leading-relaxed">{project.description}</p>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-gray-400 mb-2">CARACTERÍSTICAS DESTACADAS</h4>
          <div className="flex flex-wrap gap-2">
            {project.highlights.map((highlight) => (
              <span
                key={highlight}
                className="bg-blue-500/20 text-blue-400 px-2 py-1 rounded text-sm"
              >
                {highlight}
              </span>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-gray-400 mb-2">TECNOLOGÍAS</h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="glass text-gray-300 px-3 py-1 rounded-full text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="flex gap-4 pt-4">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-400 hover:text-white"
          >
            <Github size={20} />
            <span>Código</span>
          </a>
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-400 hover:text-white"
            >
              <Globe size={20} />
              <span>Demo</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

interface ProjectCardProps {
  project: ProjectType;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div className="card group">
      <div className="relative overflow-hidden rounded-lg mb-4">
        <div className="aspect-video bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center">
          <Code className="text-gray-500" size={32} />
        </div>
        <div className="absolute top-3 right-3">
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${project.status === 'En desarrollo' ? 'bg-yellow-500/20 text-yellow-400' :
              project.status === 'En mejora' ? 'bg-blue-500/20 text-blue-400' :
                'bg-green-500/20 text-green-400'
            }`}>
            {project.status}
          </span>
        </div>
      </div>

      <div className="space-y-3">
        <h3 className="text-xl font-bold text-white">{project.title}</h3>
        <p className="text-gray-300 text-sm leading-relaxed">{project.description}</p>

        <div className="flex flex-wrap gap-1">
          {project.technologies.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className="glass text-gray-300 px-2 py-1 rounded text-xs"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="text-gray-500 text-xs px-2 py-1">
              +{project.technologies.length - 3} más
            </span>
          )}
        </div>

        <div className="flex gap-3 pt-2">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-gray-400 hover:text-white text-sm"
          >
            <Github size={16} />
            <span>Código</span>
          </a>
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-gray-400 hover:text-white text-sm"
            >
              <Globe size={16} />
              <span>Demo</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

interface SkillCategoryProps {
  title: string;
  icon: React.ReactNode;
  skills: string[];
  color: string;
}

const SkillCategory = ({ title, icon, skills, color }: SkillCategoryProps) => {
  return (
    <div className="card">
      <div className="flex items-center gap-3 mb-4">
        <div className={`w-10 h-10 bg-gradient-to-r ${color} rounded-lg flex items-center justify-center`}>
          {icon}
        </div>
        <h3 className="text-lg font-bold text-white">{title}</h3>
      </div>
      <div className="space-y-2">
        {skills.map((skill) => (
          <div
            key={skill}
            className="glass text-gray-300 px-3 py-2 rounded-lg text-sm"
          >
            {skill}
          </div>
        ))}
      </div>
    </div>
  );
};
