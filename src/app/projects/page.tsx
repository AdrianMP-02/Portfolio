import Link from 'next/link';
import { ExternalLink, Github, Calendar } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "E-commerce Modern",
      description: "Plataforma de comercio electrónico completa con React, Next.js y Stripe. Incluye carrito de compras, autenticación y panel de administración.",
      image: "/api/placeholder/600/400",
      technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Stripe", "Prisma"],
      github: "https://github.com/usuario/ecommerce",
      demo: "https://ecommerce-demo.vercel.app",
      date: "2024",
      status: "Completado",
      featured: true
    },
    {
      id: 2,
      title: "Dashboard Analytics",
      description: "Dashboard interactivo para análisis de datos con gráficos dinámicos, filtros avanzados y exportación de reportes.",
      image: "/api/placeholder/600/400",
      technologies: ["React", "D3.js", "Chart.js", "Node.js", "MongoDB"],
      github: "https://github.com/usuario/dashboard",
      demo: "https://dashboard-demo.vercel.app",
      date: "2024",
      status: "Completado",
      featured: true
    },
    {
      id: 3,
      title: "API RESTful",
      description: "API robusta para gestión de usuarios con autenticación JWT, documentación Swagger y testing completo.",
      image: "/api/placeholder/600/400",
      technologies: ["Node.js", "Express", "MongoDB", "JWT", "Swagger"],
      github: "https://github.com/usuario/api",
      demo: null,
      date: "2023",
      status: "Completado",
      featured: false
    },
    {
      id: 4,
      title: "App Móvil React Native",
      description: "Aplicación móvil cross-platform para gestión de tareas con sincronización en tiempo real.",
      image: "/api/placeholder/600/400",
      technologies: ["React Native", "Expo", "Firebase", "Redux"],
      github: "https://github.com/usuario/mobile-app",
      demo: null,
      date: "2023",
      status: "En desarrollo",
      featured: false
    }
  ];

  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 pt-24">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            Mis Proyectos
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Una colección de proyectos que demuestran mis habilidades en desarrollo web,
            desde aplicaciones full-stack hasta APIs y herramientas especializadas
          </p>
        </div>

        {/* Featured Projects */}
        <section className="mb-20">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 flex items-center gap-2">
            <span className="w-2 h-8 bg-gradient-to-b from-blue-400 to-purple-500 rounded-full"></span>
            Proyectos Destacados
          </h2>

          <div className="grid lg:grid-cols-2 gap-8">
            {featuredProjects.map((project, index) => (
              <FeaturedProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </section>

        {/* Other Projects */}
        <section>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 flex items-center gap-2">
            <span className="w-2 h-8 bg-gradient-to-b from-green-400 to-cyan-500 rounded-full"></span>
            Otros Proyectos
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {otherProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="mt-20 text-center">
          <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 md:p-12 space-y-6">
            <h2 className="text-3xl font-bold text-white">
              ¿Interesado en colaborar?
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Siempre estoy buscando nuevos desafíos y oportunidades para crear algo increíble.
              ¡Hablemos sobre tu próximo proyecto!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25"
              >
                Iniciar conversación
              </Link>
              <a
                href="https://github.com/usuario"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-300 hover:text-white border border-gray-600 hover:border-gray-500 px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:bg-gray-800/50"
              >
                <Github size={20} />
                Ver en GitHub
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  github: string;
  demo: string | null;
  date: string;
  status: string;
  featured: boolean;
}

interface ProjectCardProps {
  project: Project;
  index?: number;
}

const FeaturedProjectCard = ({ project, index }: ProjectCardProps) => {
  return (
    <div className={`group relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-2xl overflow-hidden hover:border-gray-600 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl ${index === 0 ? 'hover:shadow-blue-500/20' : 'hover:shadow-purple-500/20'}`}>
      {/* Image */}
      <div className="relative h-48 bg-gradient-to-br from-gray-700 to-gray-800 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10"></div>
        <div className="absolute top-4 right-4 z-20">
          <StatusBadge status={project.status} />
        </div>
        {/* Placeholder for project image */}
        <div className="w-full h-full flex items-center justify-center text-gray-500 text-sm">
          Imagen del proyecto
        </div>
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        <div className="flex items-start justify-between">
          <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
            {project.title}
          </h3>
          <div className="flex items-center gap-1 text-gray-400 text-sm">
            <Calendar size={14} />
            {project.date}
          </div>
        </div>

        <p className="text-gray-300 leading-relaxed">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2">
          {project.technologies.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="bg-gray-700/50 text-gray-300 px-3 py-1 rounded-full text-sm border border-gray-600"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="text-gray-400 text-sm px-3 py-1">
              +{project.technologies.length - 4} más
            </span>
          )}
        </div>

        {/* Actions */}
        <div className="flex gap-3 pt-2">
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300 hover:scale-105"
            >
              <ExternalLink size={16} />
              Ver Demo
            </a>
          )}
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-gray-700 text-white px-4 py-2 rounded-lg font-medium hover:bg-gray-600 transition-all duration-300"
          >
            <Github size={16} />
            Código
          </a>
        </div>
      </div>
    </div>
  );
};

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div className="group bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 hover:border-gray-600/50 transition-all duration-300 hover:scale-105 hover:shadow-xl">
      <div className="space-y-4">
        <div className="flex items-start justify-between">
          <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors">
            {project.title}
          </h3>
          <StatusBadge status={project.status} />
        </div>

        <p className="text-gray-300 text-sm leading-relaxed">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-1">
          {project.technologies.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className="bg-gray-700/30 text-gray-400 px-2 py-1 rounded text-xs border border-gray-600/30"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="text-gray-500 text-xs px-2 py-1">
              +{project.technologies.length - 3}
            </span>
          )}
        </div>

        {/* Actions */}
        <div className="flex justify-between items-center pt-2">
          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <Calendar size={14} />
            {project.date}
          </div>
          <div className="flex gap-2">
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 transition-colors p-1"
                title="Ver demo"
              >
                <ExternalLink size={16} />
              </a>
            )}
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors p-1"
              title="Ver código"
            >
              <Github size={16} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const StatusBadge = ({ status }: { status: string }) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completado':
        return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'En desarrollo':
        return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      default:
        return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

  return (
    <span className={`px-2 py-1 rounded-full text-xs border ${getStatusColor(status)}`}>
      {status}
    </span>
  );
};
