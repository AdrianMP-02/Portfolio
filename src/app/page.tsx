'use client';

import Link from "next/link";
import { ArrowRight, Github, Linkedin, Mail, Code, Database, Globe } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 pt-24">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold gradient-text">
              Hola, soy Adrián Martín Pereira
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Desarrollador Web Junior especializado en{" "}
              <span className="text-blue-400 font-semibold">PHP, MySQL y WordPress</span>{" "}
              con experiencia en Node.js y desarrollo de aplicaciones web modernas
            </p>
          </div>

          {/* Hero Section */}
          <div className="grid lg:grid-cols-2 gap-12 mb-20">
            {/* Profile Card */}
            <div className="space-y-8">
              <div className="card">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mr-4">
                    <Code className="text-white" size={32} />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-white">Desarrollador Web</h2>
                    <p className="text-blue-400">Frontend & Backend</p>
                  </div>
                </div>

                <div className="text-gray-300 space-y-4 text-lg leading-relaxed">
                  <p>
                    Becario en MadisonMK con experiencia en desarrollo web moderno. Me especializo en crear
                    soluciones funcionales y optimizadas usando las últimas tecnologías.
                  </p>
                  <p>
                    Apasionado por el aprendizaje continuo y la implementación de mejores prácticas en cada proyecto.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-6">
                  <Link
                    href="/projects"
                    className="btn-primary flex items-center gap-2"
                  >
                    Ver mis proyectos
                    <ArrowRight size={20} />
                  </Link>
                  <Link
                    href="/contact"
                    className="btn-secondary"
                  >
                    Contáctame
                  </Link>
                </div>
              </div>
            </div>

            {/* Technologies Section */}
            <div className="space-y-8">
              {/* Backend */}
              <div className="card">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mr-3">
                    <Database className="text-white" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-white">Backend</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {['PHP', 'Node.js', 'MySQL', 'API REST'].map((tech) => (
                    <span
                      key={tech}
                      className="glass text-gray-300 px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Frontend */}
              <div className="card">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mr-3">
                    <Globe className="text-white" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-white">Frontend</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {['React', 'Next.js', 'TypeScript', 'Tailwind CSS'].map((tech) => (
                    <span
                      key={tech}
                      className="glass text-gray-300 px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Social Links Section */}
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-8">
              Conectemos
            </h3>
            <div className="flex justify-center space-x-6">
              <SocialLink href="https://github.com/AdrianMP-02" icon={<Github size={24} />} label="GitHub" />
              <SocialLink href="https://www.linkedin.com/in/adrián-martín-pereira-167813222/" icon={<Linkedin size={24} />} label="LinkedIn" />
              <SocialLink href="mailto:adrian.m.p.02022002@gmail.com" icon={<Mail size={24} />} label="Email" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

interface SocialLinkProps {
  href: string;
  icon: React.ReactNode;
  label: string;
}

const SocialLink = ({ href, icon, label }: SocialLinkProps) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-400 hover:text-white p-3 rounded-full glass"
      aria-label={label}
    >
      {icon}
    </a>
  );
};
