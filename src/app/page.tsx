'use client';

import Link from "next/link";
import { ArrowRight, Github, Linkedin, Mail, Code, Database, Globe } from "lucide-react";
import AnimationWrapper, { StaggerContainer, StaggerItem } from "@/components/AnimationWrapper";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 pt-24">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <AnimationWrapper animation="fade-in" className="text-center mb-16 space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold text-gradient-animate animate-float">
              Hola, soy Adrián Martín Pereira
            </h1>
            <AnimationWrapper animation="slide-up" delay={0.2}>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Desarrollador Web Junior especializado en{" "}
                <span className="text-blue-400 font-semibold hover-glow">PHP, MySQL y WordPress</span>{" "}
                con experiencia en Node.js y desarrollo de aplicaciones web modernas
              </p>
            </AnimationWrapper>
          </AnimationWrapper>

          {/* Hero Section */}
          <div className="grid lg:grid-cols-2 gap-12 mb-20">
            {/* Profile Card */}
            <AnimationWrapper animation="slide-in-left" className="space-y-8">
              <div className="card card-hover">
                <AnimationWrapper animation="scale-in" delay={0.3}>
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mr-4 hover-rotate animate-pulse-custom">
                      <Code className="text-white" size={32} />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-white">Desarrollador Web</h2>
                      <p className="text-blue-400">Frontend & Backend</p>
                    </div>
                  </div>
                </AnimationWrapper>

                <AnimationWrapper animation="fade-in" delay={0.5}>
                  <div className="text-gray-300 space-y-4 text-lg leading-relaxed">
                    <p>
                      Becario en MadisonMK con experiencia en desarrollo web moderno. Me especializo en crear
                      soluciones funcionales y optimizadas usando las últimas tecnologías.
                    </p>
                    <p>
                      Apasionado por el aprendizaje continuo y la implementación de mejores prácticas en cada proyecto.
                    </p>
                  </div>
                </AnimationWrapper>

                <AnimationWrapper animation="slide-up" delay={0.7}>
                  <div className="flex flex-col sm:flex-row gap-4 pt-6">
                    <Link
                      href="/projects"
                      className="btn-primary btn-hover-effect"
                    >
                      Ver mis proyectos
                      <ArrowRight size={20} className="ml-2 icon-bounce" />
                    </Link>
                    <Link
                      href="/contact"
                      className="btn-secondary hover-lift"
                    >
                      Contáctame
                    </Link>
                  </div>
                </AnimationWrapper>
              </div>
            </AnimationWrapper>

            {/* Technologies Section */}
            <AnimationWrapper animation="slide-in-right" className="space-y-8">
              {/* Backend */}
              <AnimationWrapper animation="scale-in" delay={0.4}>
                <div className="card card-hover">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mr-3 hover-rotate">
                      <Database className="text-white animate-float" size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-white">Backend</h3>
                  </div>
                  <StaggerContainer className="flex flex-wrap gap-2">
                    {['PHP', 'Node.js', 'MySQL', 'API REST'].map((tech, index) => (
                      <StaggerItem key={tech} index={index}>
                        <span className="glass text-gray-300 px-3 py-1 rounded-full text-sm hover-scale transition-smooth">
                          {tech}
                        </span>
                      </StaggerItem>
                    ))}
                  </StaggerContainer>
                </div>
              </AnimationWrapper>

              {/* Frontend */}
              <AnimationWrapper animation="scale-in" delay={0.6}>
                <div className="card card-hover">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mr-3 hover-rotate">
                      <Globe className="text-white animate-float" size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-white">Frontend</h3>
                  </div>
                  <StaggerContainer className="flex flex-wrap gap-2">
                    {['React', 'Next.js', 'TypeScript', 'Tailwind CSS'].map((tech, index) => (
                      <StaggerItem key={tech} index={index}>
                        <span className="glass text-gray-300 px-3 py-1 rounded-full text-sm hover-scale transition-smooth">
                          {tech}
                        </span>
                      </StaggerItem>
                    ))}
                  </StaggerContainer>
                </div>
              </AnimationWrapper>
            </AnimationWrapper>
          </div>

          {/* Social Links Section */}
          <AnimationWrapper animation="slide-up" delay={0.8}>
            <div className="text-center">
              <h3 className="text-2xl font-bold text-white mb-8 gradient-text">
                Conectemos
              </h3>
              <StaggerContainer className="flex justify-center space-x-6">
                <StaggerItem index={0}>
                  <SocialLink
                    href="https://github.com/AdrianMP-02"
                    icon={<Github size={24} />}
                    label="GitHub"
                  />
                </StaggerItem>
                <StaggerItem index={1}>
                  <SocialLink
                    href="https://www.linkedin.com/in/adrián-martín-pereira-167813222/"
                    icon={<Linkedin size={24} />}
                    label="LinkedIn"
                  />
                </StaggerItem>
                <StaggerItem index={2}>
                  <SocialLink
                    href="mailto:adrian.m.p.02022002@gmail.com"
                    icon={<Mail size={24} />}
                    label="Email"
                  />
                </StaggerItem>
              </StaggerContainer>
            </div>
          </AnimationWrapper>
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
      className="text-gray-400 hover:text-white p-3 rounded-full glass hover-lift hover-glow transition-smooth icon-spin"
      aria-label={label}
    >
      {icon}
    </a>
  );
};
