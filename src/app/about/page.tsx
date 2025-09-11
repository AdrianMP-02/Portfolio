import { User, Calendar, Award, Download, MapPin, Mail } from 'lucide-react';

export default function About() {
  const skills = {
    backend: ['Node.js', 'Express', 'Python', 'FastAPI', 'PostgreSQL', 'MongoDB', 'API REST', 'GraphQL'],
    frontend: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3'],
    tools: ['Git', 'Docker', 'VS Code', 'Postman', 'Jest', 'Linux', 'Nginx'],
    database: ['PostgreSQL', 'MongoDB', 'Redis', 'MySQL', 'Prisma', 'Mongoose']
  };

  const experience = [
    {
      title: "Desarrollador Backend Junior",
      company: "Empresa Actual",
      period: "2024 - Presente",
      description: "Desarrollo de APIs REST con Node.js y Express, gestión de bases de datos PostgreSQL, implementación de autenticación y autorización, y optimización de consultas para mejorar el rendimiento.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Desarrollador Full Stack Trainee",
      company: "Empresa de Prácticas",
      period: "2023 - 2024",
      description: "Aprendizaje de desarrollo backend y frontend, creación de APIs REST, trabajo con bases de datos relacionales y desarrollo de interfaces de usuario básicas con React.",
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Estudiante Autodidacta",
      company: "Formación Personal",
      period: "2022 - 2023",
      description: "Aprendizaje intensivo de tecnologías backend, realización de proyectos personales con Node.js, Python y bases de datos. Enfoque en arquitecturas de software y mejores prácticas.",
      color: "from-purple-500 to-pink-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 pt-24">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-white">
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
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mr-4">
                    <User className="text-white" size={32} />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-white">Adrián Martín Pereira</h2>
                    <p className="text-blue-400">Desarrollador Backend Junior</p>
                  </div>
                </div>

                <div className="text-gray-300 space-y-4 text-lg leading-relaxed">
                  <p>
                    ¡Hola! Soy Adrián, un desarrollador backend junior apasionado por la tecnología y el desarrollo de
                    sistemas robustos. Me encanta trabajar en la lógica del negocio, diseñar APIs y crear arquitecturas
                    escalables que soporten aplicaciones de alta calidad.
                  </p>
                  <p>
                    Me especializo en tecnologías backend como Node.js, PHP, bases de datos relacionales y
                    no relacionales, y estoy en constante aprendizaje sobre patrones de diseño, microservicios y
                    DevOps. Disfruto resolviendo problemas complejos de rendimiento y escalabilidad.
                  </p>
                  <p>
                    Cuando no estoy programando, me gusta estudiar nuevas arquitecturas de software, explorar
                    tecnologías de bases de datos y documentar mis aprendizajes sobre desarrollo backend en mi blog.
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
                <StatCard number="< 1" label="Años aprendiendo" />
                <StatCard number="3+" label="Proyectos completados" />
                <StatCard number="5+" label="Tecnologías backend" />
                <StatCard number="100%" label="Dedicación al aprendizaje" />
              </div>
            </div>

            {/* Skills Section */}
            <div className="space-y-6">
              <SkillCategory title="Backend" skills={skills.backend} color="from-blue-500 to-cyan-500" />
              <SkillCategory title="Bases de Datos" skills={skills.database} color="from-green-500 to-emerald-500" />
              <SkillCategory title="Frontend" skills={skills.frontend} color="from-purple-500 to-pink-500" />
              <SkillCategory title="Herramientas" skills={skills.tools} color="from-yellow-500 to-orange-500" />
            </div>
          </div>

          {/* Experience Timeline */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4 flex items-center justify-center gap-3">
                <Calendar className="text-blue-400" size={32} />
                Experiencia Profesional
              </h2>
              <p className="text-gray-400">Mi trayectoria en el desarrollo de software</p>
            </div>

            <div className="space-y-8">
              {experience.map((exp, index) => (
                <ExperienceCard key={index} experience={exp} index={index} />
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
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25"
                >
                  Contáctame
                </a>
                <a
                  href="/CV.pdf"
                  download
                  className="flex items-center gap-2 text-gray-300 hover:text-white border border-gray-600 hover:border-gray-500 px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:bg-gray-800/50"
                >
                  <Download size={20} />
                  Descargar CV
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
    <div className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-sm border border-gray-700/50 rounded-xl p-4 text-center hover:border-gray-600/50 transition-all duration-300">
      <div className="text-2xl font-bold text-white mb-1">{number}</div>
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
    <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 hover:border-gray-600 transition-all duration-300">
      <h3 className={`text-lg font-bold mb-4 bg-gradient-to-r ${color} bg-clip-text text-transparent`}>
        {title}
      </h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className="bg-gray-700/50 text-gray-300 px-3 py-1 rounded-full text-sm border border-gray-600 hover:border-gray-500 hover:bg-gray-600/50 transition-all duration-300"
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
        <div className="flex-1 bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 hover:border-gray-600 transition-all duration-300 hover:scale-[1.02]">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
            <h3 className="text-xl font-bold text-white">{experience.title}</h3>
            <span className={`text-sm px-3 py-1 rounded-full bg-gradient-to-r ${experience.color} text-white font-medium`}>
              {experience.period}
            </span>
          </div>
          <p className="text-blue-400 font-medium mb-3">{experience.company}</p>
          <p className="text-gray-300 leading-relaxed">{experience.description}</p>
        </div>
      </div>
    </div>
  );
};
