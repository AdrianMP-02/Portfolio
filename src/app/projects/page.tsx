'use client';

import Link from 'next/link';
import { Github, Code, Database, Globe, Star } from 'lucide-react';
import AnimationWrapper, { StaggerContainer, StaggerItem } from '@/components/AnimationWrapper';

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
          <AnimationWrapper animation="fade-in" className="text-center mb-16 space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-gradient-animate">
              Mis Proyectos
            </h1>
            <AnimationWrapper animation="slide-up" delay={0.2}>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Una colección de proyectos que he desarrollado, desde mi TFG hasta aplicaciones web modernas
              </p>
            </AnimationWrapper>
          </AnimationWrapper>

          {/* Featured Projects */}
          <AnimationWrapper animation="slide-up" delay={0.3} className="mb-20">
            <div className="flex items-center gap-3 mb-12">
              <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-xl flex items-center justify-center hover-rotate animate-pulse-custom">
                <Star className="text-white" size={24} />
              </div>
              <h2 className="text-3xl font-bold text-white gradient-text">Proyectos Destacados</h2>
            </div>

            <StaggerContainer className="grid lg:grid-cols-2 gap-8">
              {featuredProjects.map((project, index) => (
                <StaggerItem key={project.id} index={index}>
                  <FeaturedProjectCard project={project} />
                </StaggerItem>
              ))}
            </StaggerContainer>
          </AnimationWrapper>

          {/* Other Projects */}
          {otherProjects.length > 0 && (
            <AnimationWrapper animation="slide-up" delay={0.5} className="mb-20">
              <div className="flex items-center gap-3 mb-12">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center hover-rotate animate-pulse-custom">
                  <Code className="text-white" size={24} />
                </div>
                <h2 className="text-3xl font-bold text-white gradient-text">Otros Proyectos</h2>
              </div>

              <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {otherProjects.map((project, index) => (
                  <StaggerItem key={project.id} index={index}>
                    <ProjectCard project={project} />
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </AnimationWrapper>
          )}

          {/* Skills Section */}
          <AnimationWrapper animation="slide-up" delay={0.7} className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4 gradient-text">Tecnologías que utilizo</h2>
              <p className="text-gray-400">Las herramientas y tecnologías con las que trabajo diariamente</p>
            </div>

            <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <StaggerItem index={0}>
                <SkillCategory
                  title="Backend"
                  icon={<Database className="text-white" size={24} />}
                  skills={["PHP", "Node.js", "Express", "MySQL"]}
                  color="from-green-500 to-emerald-500"
                />
              </StaggerItem>
              <StaggerItem index={1}>
                <SkillCategory
                  title="Frontend"
                  icon={<Globe className="text-white" size={24} />}
                  skills={["React", "Next.js", "TypeScript", "Tailwind CSS"]}
                  color="from-blue-500 to-cyan-500"
                />
              </StaggerItem>
              <StaggerItem index={2}>
                <SkillCategory
                  title="CMS"
                  icon={<Code className="text-white" size={24} />}
                  skills={["WordPress", "Elementor", "Custom Themes"]}
                  color="from-purple-500 to-pink-500"
                />
              </StaggerItem>
              <StaggerItem index={3}>
                <SkillCategory
                  title="Herramientas"
                  icon={<Github className="text-white" size={24} />}
                  skills={["Git", "VS Code", "Postman", "Laragon"]}
                  color="from-yellow-500 to-orange-500"
                />
              </StaggerItem>
            </StaggerContainer>
          </AnimationWrapper>

          {/* CTA Section */}
          <AnimationWrapper animation="scale-in" delay={0.9}>
            <div className="text-center">
              <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 md:p-12 space-y-6 card-hover">
                <h2 className="text-3xl font-bold text-white gradient-text">
                  ¿Te gusta lo que ves?
                </h2>
                <p className="text-gray-300 max-w-2xl mx-auto">
                  Estos son solo algunos de mis proyectos. Si tienes una idea interesante o necesitas ayuda
                  con tu próximo proyecto, ¡me encantaría escucharte!
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/contact"
                    className="btn-primary btn-hover-effect"
                  >
                    Hablemos de tu proyecto
                  </Link>
                  <a
                    href="https://github.com/AdrianMP-02"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary flex items-center gap-2 hover-lift"
                  >
                    <Github size={20} className="icon-spin" />
                    Ver más en GitHub
                  </a>
                </div>
              </div>
            </div>
          </AnimationWrapper>
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
    <div className="card card-hover group">
      <div className="relative overflow-hidden rounded-xl mb-6">
        <div className="aspect-video bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center">
          <div className="text-center">
            <Code className="text-gray-500 mx-auto mb-2 animate-float" size={48} />
            <p className="text-gray-500 text-sm">Imagen del proyecto</p>
          </div>
        </div>
        <div className="absolute top-4 right-4">
          <span className={`px-3 py-1 rounded-full text-sm font-medium hover-scale transition-smooth ${project.status === 'En desarrollo' ? 'bg-yellow-500/20 text-yellow-400' :
              project.status === 'En mejora' ? 'bg-blue-500/20 text-blue-400' :
                'bg-green-500/20 text-green-400'
            }`}>
            {project.status}
          </span>
        </div>
      </div>

      <div className="space-y-4">
        <div>
          <h3 className="text-2xl font-bold text-white mb-2 gradient-text">{project.title}</h3>
          <p className="text-gray-300 leading-relaxed">{project.description}</p>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-gray-400 mb-2">CARACTERÍSTICAS DESTACADAS</h4>
          <StaggerContainer className="flex flex-wrap gap-2">
            {project.highlights.map((highlight, index) => (
              <StaggerItem key={highlight} index={index}>
                <span className="bg-blue-500/20 text-blue-400 px-2 py-1 rounded text-sm hover-scale transition-smooth">
                  {highlight}
                </span>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-gray-400 mb-2">TECNOLOGÍAS</h4>
          <StaggerContainer className="flex flex-wrap gap-2">
            {project.technologies.map((tech, index) => (
              <StaggerItem key={tech} index={index}>
                <span className="glass text-gray-300 px-3 py-1 rounded-full text-sm hover-scale transition-smooth">
                  {tech}
                </span>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>

        <div className="flex gap-4 pt-4">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-400 hover:text-white hover-scale transition-smooth"
          >
            <Github size={20} className="icon-spin" />
            <span>Código</span>
          </a>
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-400 hover:text-white hover-scale transition-smooth"
            >
              <Globe size={20} className="icon-spin" />
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
    <div className="card card-hover group">
      <div className="relative overflow-hidden rounded-lg mb-4">
        <div className="aspect-video bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center">
          <Code className="text-gray-500 animate-float" size={32} />
        </div>
        <div className="absolute top-3 right-3">
          <span className={`px-2 py-1 rounded-full text-xs font-medium hover-scale transition-smooth ${project.status === 'En desarrollo' ? 'bg-yellow-500/20 text-yellow-400' :
              project.status === 'En mejora' ? 'bg-blue-500/20 text-blue-400' :
                'bg-green-500/20 text-green-400'
            }`}>
            {project.status}
          </span>
        </div>
      </div>

      <div className="space-y-3">
        <h3 className="text-xl font-bold text-white gradient-text">{project.title}</h3>
        <p className="text-gray-300 text-sm leading-relaxed">{project.description}</p>

        <div className="flex flex-wrap gap-1">
          {project.technologies.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className="glass text-gray-300 px-2 py-1 rounded text-xs hover-scale transition-smooth"
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
            className="flex items-center gap-1 text-gray-400 hover:text-white text-sm hover-scale transition-smooth"
          >
            <Github size={16} className="icon-spin" />
            <span>Código</span>
          </a>
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-gray-400 hover:text-white text-sm hover-scale transition-smooth"
            >
              <Globe size={16} className="icon-spin" />
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
    <div className="card card-hover">
      <div className="flex items-center gap-3 mb-4">
        <div className={`w-10 h-10 bg-gradient-to-r ${color} rounded-lg flex items-center justify-center hover-rotate`}>
          {icon}
        </div>
        <h3 className="text-lg font-bold text-white gradient-text">{title}</h3>
      </div>
      <StaggerContainer className="space-y-2">
        {skills.map((skill, index) => (
          <StaggerItem key={skill} index={index}>
            <div className="glass text-gray-300 px-3 py-2 rounded-lg text-sm hover-scale transition-smooth">
              {skill}
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </div>
  );
};
