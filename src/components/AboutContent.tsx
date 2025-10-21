'use client';

import { User, Calendar, Award, MapPin, Mail } from 'lucide-react';
import AnimationWrapper, { StaggerContainer, StaggerItem } from './AnimationWrapper';

export default function AboutContent() {
  const skills = {
    backend: ['PHP', 'Node.js', 'Express', 'API REST', 'MySQL', 'WordPress'],
    frontend: ['HTML5', 'CSS3', 'JavaScript', 'Elementor', 'React', 'Next.js'],
    tools: ['Git', 'VS Code', 'Postman', 'Laragon', 'phpMyAdmin', 'WordPress'],
    database: ['MySQL', 'phpMyAdmin', 'Database Design']
  };

  const experience = [
    {
      title: "Desarrollador Web Junior",
      company: "MadisonMK",
      period: "Octubre 2025 - Presente",
      description: "Ascendido a Desarrollador Junior tras demostrar capacidad y compromiso. Desarrollo de soluciones web con PHP y MySQL, gestión de proyectos WordPress con Elementor, optimización de bases de datos y mejora continua del rendimiento de aplicaciones.",
      color: "from-indigo-500 to-blue-500"
    },
    {
      title: "Becario Desarrollador",
      company: "MadisonMK",
      period: "Mayo 2025 - Octubre 2025",
      description: "Desarrollo con PHP, gestión de bases de datos MySQL, creación y mantenimiento de sitios web con WordPress y Elementor, optimización de consultas y mejoras de rendimiento.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Desarrollador en Prácticas",
      company: "MadisonMK",
      period: "Febrero - Mayo 2025",
      description: "Aprendizaje de desarrollo web con PHP y MySQL, introducción a WordPress y Elementor, trabajo en equipo y primeras experiencias en desarrollo profesional.",
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Estudiante FP - DAW",
      company: "IES Juana I de Castilla",
      period: "2023 - 2025",
      description: "Formación en Desarrollo de Aplicaciones Web. Proyecto final (TFG) desarrollado con Node.js y API REST con MySQL. Aprendizaje de fundamentos de programación y desarrollo web.",
      color: "from-purple-500 to-pink-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 pt-24">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <AnimationWrapper animation="fade-in" className="text-center mb-16 space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-gradient-animate">
              Acerca de mí
            </h1>
            <AnimationWrapper animation="slide-up" delay={0.2}>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Conoce mi trayectoria, experiencia y la pasión que me impulsa en el desarrollo de software
              </p>
            </AnimationWrapper>
          </AnimationWrapper>

          {/* Hero Section */}
          <div className="grid lg:grid-cols-2 gap-12 mb-10">
            {/* Profile Info */}
            <AnimationWrapper animation="slide-in-left" className="space-y-7">
              <div className="card card-hover">
                <AnimationWrapper animation="scale-in" delay={0.3}>
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mr-4 hover-rotate animate-pulse-custom">
                      <User className="text-white" size={32} />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-white">Adrián Martín Pereira</h2>
                      <p className="text-blue-400">Desarrollador Web Junior</p>
                    </div>
                  </div>
                </AnimationWrapper>

                <AnimationWrapper animation="fade-in" delay={0.5}>
                  <div className="text-gray-300 space-y-4 text-lg leading-relaxed">
                    <p>
                      ¡Hola! Soy Adrián, un desarrollador web junior apasionado por la tecnología y el desarrollo de
                      aplicaciones web. Actualmente trabajo como Desarrollador Junior en MadisonMK, donde me especializo en
                      desarrollo con PHP, MySQL y WordPress con Elementor.
                    </p>
                    <p>
                      Comencé mi trayectoria como becario y, tras demostrar mi capacidad y compromiso, fui ascendido a
                      Desarrollador Junior en octubre de 2025. Durante mi formación en Desarrollo de Aplicaciones Web,
                      realicé mi TFG con Node.js y API REST, lo que me ha dado una base sólida tanto en backend como en frontend.
                    </p>
                    <p>
                      Disfruto creando soluciones web funcionales, optimizando el rendimiento de las aplicaciones y
                      explorando nuevas tecnologías para mejorar continuamente mis habilidades.
                    </p>
                  </div>
                </AnimationWrapper>

                <AnimationWrapper animation="slide-up" delay={0.7}>
                  <div className="flex items-center gap-4 mt-6 pt-6 border-t border-gray-700">
                    <div className="flex items-center gap-2 text-gray-400 hover-scale transition-smooth">
                      <MapPin size={16} className="animate-float" />
                      <span>Valladolid, España</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-400 hover-scale transition-smooth">
                      <Mail size={16} className="animate-float" />
                      <span>adrian.m.p.02022002@gmail.com</span>
                    </div>
                  </div>
                </AnimationWrapper>
              </div>

            </AnimationWrapper>

            {/* Skills Section */}
            <AnimationWrapper animation="slide-in-right" className="space-y-6 mt-10">
              {[
                { title: "Backend", skills: skills.backend, color: "from-blue-500 to-cyan-500" },
                { title: "Bases de Datos", skills: skills.database, color: "from-green-500 to-emerald-500" },
                { title: "Frontend", skills: skills.frontend, color: "from-purple-500 to-pink-500" },
                { title: "Herramientas", skills: skills.tools, color: "from-yellow-500 to-orange-500" }
              ].map((category, index) => (
                <AnimationWrapper key={category.title} animation="scale-in" delay={0.3 + index * 0.1}>
                  <SkillCategory {...category} />
                </AnimationWrapper>
              ))}
            </AnimationWrapper>
          </div>

          <div className="flex sm:flex-col flex-col gap-6 mb-10">
            {/* Quick Stats */}
            <StaggerContainer className="grid grid-cols-4 gap-4">
              {[
                { number: "< 1", label: "Años de experiencia" },
                { number: "3+", label: "Proyectos completados" },
                { number: "5+", label: "Tecnologías backend" },
                { number: "100%", label: "Dedicación al aprendizaje" }
              ].map((stat, index) => (
                <StaggerItem key={stat.label} index={index}>
                  <StatCard number={stat.number} label={stat.label} />
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>

          {/* Experience Timeline */}
          <AnimationWrapper animation="slide-up" delay={0.8} className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4 flex items-center justify-center gap-3">
                <div className="animate-float">
                  <Calendar className="text-blue-400" size={32} />
                </div>
                Experiencia Profesional
              </h2>
              <p className="text-gray-400">Mi trayectoria en el desarrollo de software</p>
            </div>

            <StaggerContainer className="space-y-8">
              {experience.map((exp, index) => (
                <StaggerItem key={exp.title} index={index}>
                  <ExperienceCard experience={exp} index={index} />
                </StaggerItem>
              ))}
            </StaggerContainer>
          </AnimationWrapper>

          {/* CTA Section */}
          <AnimationWrapper animation="scale-in" delay={1.0}>
            <div className="text-center">
              <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 md:p-12 space-y-6 card-hover">
                <h2 className="text-3xl font-bold text-white gradient-text">
                  ¿Trabajamos juntos?
                </h2>
                <p className="text-gray-300 max-w-2xl mx-auto">
                  Estoy siempre interesado en nuevos proyectos desafiantes y oportunidades de colaboración.
                  ¡Hablemos sobre cómo puedo ayudarte!
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="/contact"
                    className="btn-primary btn-hover-effect"
                  >
                    Contáctame
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

interface StatCardProps {
  number: string;
  label: string;
}

const StatCard = ({ number, label }: StatCardProps) => {
  return (
    <div className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-sm border border-gray-700/50 rounded-xl p-4 text-center card-hover">
      <div className="text-2xl font-bold text-white mb-1 gradient-text">
        {number}
      </div>
      <div className="text-gray-400 text-sm">{label}</div>
    </div>
  );
};

interface SkillCategoryProps {
  title: string;
  skills: string[];
  color: string;
}

const SkillCategory = ({ title, skills, color }: SkillCategoryProps) => {
  return (
    <div className="card card-hover">
      <h3 className={`text-lg font-bold mb-4 bg-gradient-to-r ${color} bg-clip-text text-transparent`}>
        {title}
      </h3>
      <StaggerContainer className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <StaggerItem key={skill} index={index}>
            <span className="glass text-gray-300 px-3 py-1 rounded-full text-sm hover-scale transition-smooth">
              {skill}
            </span>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </div>
  );
};

interface ExperienceCardProps {
  experience: {
    title: string;
    company: string;
    period: string;
    description: string;
    color: string;
  };
  index: number;
}

const ExperienceCard = ({ experience }: ExperienceCardProps) => {
  return (
    <div className="relative">
      {/* Timeline line */}
      <div className="absolute left-8 top-16 bottom-0 w-0.5 bg-gradient-to-b from-gray-600 to-transparent"></div>

      <div className="flex gap-6">
        {/* Timeline dot */}
        <div className={`flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-r ${experience.color} flex items-center justify-center shadow-lg hover-rotate animate-pulse-custom`}>
          <Award className="text-white" size={24} />
        </div>

        {/* Content */}
        <div className="flex-1 card card-hover">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
            <h3 className="text-xl font-bold text-white gradient-text">{experience.title}</h3>
            <span className={`text-sm px-3 py-1 rounded-full bg-gradient-to-r ${experience.color} text-white font-medium hover-scale transition-smooth`}>
              {experience.period}
            </span>
          </div>
          <p className="text-blue-400 font-medium mb-3 hover-glow transition-smooth">
            {experience.company}
          </p>
          <p className="text-gray-300 leading-relaxed">
            {experience.description}
          </p>
        </div>
      </div>
    </div>
  );
};
