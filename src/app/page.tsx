import Link from "next/link";
import { ArrowRight, Code, Briefcase, BookOpen, Github, Linkedin, Mail, Sparkles } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-8">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
              <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 space-y-6">
              <div className="inline-flex items-center space-x-2 bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-full px-4 py-2 text-sm text-gray-300">
                <Sparkles size={16} className="text-yellow-400" />
                <span>Disponible para nuevos proyectos</span>
              </div>

              <h1 className="text-5xl md:text-7xl font-bold leading-tight text-white">
                Hola, soy{" "}
                <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent animate-pulse">
                  Adrián Martín Pereira
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Desarrollador Junior especializado en{" "}
                <span className="text-blue-400 font-semibold">desarrollo backend</span>{" "}
                y arquitecturas escalables con tecnologías modernas
              </p>              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
                <Link
                  href="/projects"
                  className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center gap-2 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25"
                >
                  Ver mis proyectos
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
                <Link
                  href="/contact"
                  className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 text-white px-8 py-4 rounded-xl font-semibold hover:bg-gray-700/50 hover:border-gray-600 transition-all duration-300 hover:scale-105"
                >
                  Contáctame
                </Link>
              </div>

              {/* Social Links */}
              <div className="flex justify-center space-x-6 pt-8">
                <SocialLink href="https://github.com/AdrianMP-02" icon={<Github size={24} />} label="GitHub" />
                <SocialLink href="https://www.linkedin.com/in/adrián-martín-pereira-167813222/" icon={<Linkedin size={24} />} label="LinkedIn" />
                <SocialLink href="mailto:adrian.m.p.02022002@gmail.com" icon={<Mail size={24} />} label="Email" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              ¿Qué encontrarás aquí?
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Un espacio donde comparto mi experiencia, proyectos y conocimientos
            </p>
          </div>

            <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Code className="text-blue-400" size={32} />}
              title="Desarrollo Backend"
              description="Especializado en la creación de APIs REST robustas, gestión de bases de datos relacionales y no relacionales, desarrollo de microservicios y arquitecturas escalables. Experiencia con Node.js, PHP, Express, MySQL, MongoDB y herramientas de despliegue modernas como Docker y servicios cloud."
              gradient="from-blue-500/20 to-cyan-500/20"
            />

            <FeatureCard
              icon={<Briefcase className="text-green-400" size={32} />}
              title="Proyectos"
              description="Explora mi portfolio completo de proyectos. Cada proyecto incluye documentación técnica detallada, arquitectura del sistema, tecnologías utilizadas y acceso al código fuente en GitHub para una transparencia total."
              gradient="from-green-500/20 to-emerald-500/20"
            />

            <FeatureCard
              icon={<BookOpen className="text-purple-400" size={32} />}
              title="Blog & Actualizaciones"
              description="Mantente al día con mis últimos proyectos, experimentos con nuevas tecnologías, tutoriales de desarrollo backend, reflexiones sobre mejores prácticas de programación y actualizaciones sobre mi crecimiento profesional en el mundo del desarrollo de software."
              gradient="from-purple-500/20 to-pink-500/20"
            />
            </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 md:p-12 text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              ¿Tienes un proyecto en mente?
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Estoy siempre interesado en nuevos desafíos y oportunidades de colaboración.
              ¡Hablemos sobre tu próximo proyecto!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25"
              >
                Iniciar conversación
              </Link>
              <Link
                href="/blog"
                className="text-gray-300 hover:text-white border border-gray-600 hover:border-gray-500 px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:bg-gray-800/50"
              >
                Ver últimas entradas
              </Link>
            </div>
          </div>
        </div>
      </section>
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
      className="text-gray-400 hover:text-white p-3 rounded-full hover:bg-gray-800/50 transition-all duration-300 hover:scale-110"
      aria-label={label}
    >
      {icon}
    </a>
  );
};

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  gradient: string;
}

const FeatureCard = ({ icon, title, description, gradient }: FeatureCardProps) => {
  return (
    <div className={`group relative p-6 rounded-2xl bg-gradient-to-br ${gradient} border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl`}>
      <div className="space-y-4">
        <div className="w-16 h-16 bg-gray-800/50 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
        <h3 className="text-xl font-bold text-white">
          {title}
        </h3>
        <p className="text-gray-300 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};
