'use client';

import { User, Calendar, Award, MapPin, Mail } from 'lucide-react';

export default function AboutContent() {
  const skills = {
    backend: ['PHP', 'Node.js', 'Express', 'API REST', 'MySQL', 'WordPress'],
    frontend: ['HTML5', 'CSS3', 'JavaScript', 'Elementor', 'React', 'Next.js'],
    tools: ['Git', 'VS Code', 'Postman', 'Laragon', 'phpMyAdmin', 'WordPress'],
    database: ['MySQL', 'phpMyAdmin', 'Database Design']
  };

  const experience = [
    {
      title: "Becario Desarrollador",
      company: "MadisonMK",
      period: "Mayo 2025 - Presente",
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
          <div className="text-center mb-16 space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold gradient-text">
              Acerca de mí
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Conoce mi trayectoria, experiencia y la pasión que me impulsa en el desarrollo de software
            </p>
          </div>

          {/* Hero Section */}
          <div className="grid lg:grid-cols-2 gap-12 mb-20">
            {/* Profile Info */}
            <div className="space-y-8">
              <div className="card">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mr-4">
                    <User className="text-white" size={32} />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-white">Adrián Martín Pereira</h2>
                    <p className="text-blue-400">Desarrollador Web Junior</p>
                  </div>
                </div>

                <div className="text-gray-300 space-y-4 text-lg leading-relaxed">
                  <p>
                    ¡Hola! Soy Adrián, un desarrollador web junior apasionado por la tecnología y el desarrollo de
                    aplicaciones web. Actualmente trabajo como becario en MadisonMK, donde me especializo en
                    desarrollo con PHP, MySQL y WordPress con Elementor.
                  </p>
                  <p>
                    Durante mi formación en Desarrollo de Aplicaciones Web, realicé mi TFG con Node.js y API REST,
                    lo que me ha dado una base sólida tanto en backend como en frontend. Disfruto creando soluciones
                    web funcionales y optimizando el rendimiento de las aplicaciones.
                  </p>
                  <p>
                    Cuando no estoy programando, me gusta explorar nuevas tecnologías web, mejorar mis conocimientos
                    en desarrollo fullstack y documentar mi aprendizaje en proyectos personales.
                  </p>
                </div>

                <div className="flex items-center gap-4 mt-6 pt-6 border-t border-gray-700">
                  <div className="flex items-center gap-2 text-gray-400">
                    <MapPin size={16} />
                    <span>Valladolid, España</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-400">
                    <Mail size={16} />
                    <span>adrian.m.p.02022002@gmail.com</span>
                  </div>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  { number: "< 1", label: "Años aprendiendo" },
                  { number: "3+", label: "Proyectos completados" },
                  { number: "5+", label: "Tecnologías backend" },
                  { number: "100%", label: "Dedicación al aprendizaje" }
                ].map((stat) => (
                  <div key={stat.label}>
                    <StatCard number={stat.number} label={stat.label} />
                  </div>
                ))}
              </div>
            </div>

            {/* Skills Section */}
            <div className="space-y-6">
              {[
                { title: "Backend", skills: skills.backend, color: "from-blue-500 to-cyan-500" },
                { title: "Bases de Datos", skills: skills.database, color: "from-green-500 to-emerald-500" },
                { title: "Frontend", skills: skills.frontend, color: "from-purple-500 to-pink-500" },
                { title: "Herramientas", skills: skills.tools, color: "from-yellow-500 to-orange-500" }
              ].map((category) => (
                <div key={category.title}>
                  <SkillCategory {...category} />
                </div>
              ))}
            </div>
          </div>

          {/* Experience Timeline */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4 flex items-center justify-center gap-3">
                <div>
                  <Calendar className="text-blue-400" size={32} />
                </div>
                Experiencia Profesional
              </h2>
              <p className="text-gray-400">Mi trayectoria en el desarrollo de software</p>
            </div>

            <div className="space-y-8">
              {experience.map((exp, index) => (
                <div key={exp.title}>
                  <ExperienceCard experience={exp} index={index} />
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 md:p-12 space-y-6">
              <h2 className="text-3xl font-bold text-white">
                ¿Trabajamos juntos?
              </h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Estoy siempre interesado en nuevos proyectos desafiantes y oportunidades de colaboración.
                ¡Hablemos sobre cómo puedo ayudarte!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="btn-primary"
                >
                  Contáctame
                </a>
              </div>
            </div>
          </div>
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
    <div className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-sm border border-gray-700/50 rounded-xl p-4 text-center">
      <div className="text-2xl font-bold text-white mb-1">
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
    <div className="card">
      <h3 className={`text-lg font-bold mb-4 bg-gradient-to-r ${color} bg-clip-text text-transparent`}>
        {title}
      </h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className="glass text-gray-300 px-3 py-1 rounded-full text-sm"
          >
            {skill}
          </span>
        ))}
      </div>
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
        <div className={`flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-r ${experience.color} flex items-center justify-center shadow-lg`}>
          <Award className="text-white" size={24} />
        </div>

        {/* Content */}
        <div className="flex-1 card">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
            <h3 className="text-xl font-bold text-white">{experience.title}</h3>
            <span className={`text-sm px-3 py-1 rounded-full bg-gradient-to-r ${experience.color} text-white font-medium`}>
              {experience.period}
            </span>
          </div>
          <p className="text-blue-400 font-medium mb-3">
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
