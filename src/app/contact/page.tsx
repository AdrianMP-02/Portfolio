'use client';

import { useState } from 'react';
import { Mail, MapPin, Send, Github, Linkedin, MessageSquare, User, Clock, CheckCircle } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simular envío de formulario
    await new Promise(resolve => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSubmitted(true);

    // Resetear después de 3 segundos
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 pt-24">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16 space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            Contacto
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            ¿Tienes una idea interesante? ¿Quieres colaborar en un proyecto?
            ¡Me encantaría escuchar de ti! Hablemos y hagamos realidad algo increíble juntos.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-8">
            {/* Contact Cards */}
            <div className="space-y-6">
              <ContactCard
                icon={<Mail className="text-blue-400" size={24} />}
                title="Email"
                info="adrian.m.p.02022002@gmail.com"
                description="Respondo usualmente en 24 horas"
                action={() => window.open('mailto:adrian.m.p.02022002@gmail.com')}
              />

              <ContactCard
                icon={<MapPin className="text-purple-400" size={24} />}
                title="Ubicación"
                info="Valladolid, España"
                description="Disponible para proyectos remotos"
              />
            </div>

            {/* Social Links */}
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6">
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <MessageSquare className="text-blue-400" size={20} />
                Conecta conmigo
              </h3>
              <div className="space-y-3">
                <SocialLink
                  icon={<Github size={20} />}
                  label="GitHub"
                  href="https://github.com/AdrianMP-02"
                  description="Ve mis proyectos y contribuciones"
                />
                <SocialLink
                  icon={<Linkedin size={20} />}
                  label="LinkedIn"
                  href="https://www.linkedin.com/in/adrián-martín-pereira-167813222/"
                  description="Conecta profesionalmente"
                />
              </div>
            </div>

            {/* Availability */}
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6">
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <Clock className="text-yellow-400" size={20} />
                Disponibilidad
              </h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Estado actual:</span>
                  <span className="bg-green-500/20 text-green-400 px-2 py-1 rounded-full text-sm border border-green-500/30">
                    ● Disponible
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Tiempo de respuesta:</span>
                  <span className="text-gray-400">24-48 horas</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Proyectos nuevos:</span>
                  <span className="text-green-400">Aceptando</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                <Send className="text-blue-400" size={24} />
                Envíame un mensaje
              </h2>

              {isSubmitted ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle className="text-green-400" size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-white">¡Mensaje enviado!</h3>
                  <p className="text-gray-400">
                    Gracias por contactarme. Te responderé pronto.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Nombre completo
                      </label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full bg-gray-700/50 border border-gray-600 rounded-xl pl-10 pr-4 py-3 text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none transition-colors"
                          placeholder="Tu nombre"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Email
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full bg-gray-700/50 border border-gray-600 rounded-xl pl-10 pr-4 py-3 text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none transition-colors"
                          placeholder="tu@email.com"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Asunto
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full bg-gray-700/50 border border-gray-600 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none transition-colors"
                      placeholder="¿En qué puedo ayudarte?"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Mensaje
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full bg-gray-700/50 border border-gray-600 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none transition-colors resize-none"
                      placeholder="Cuéntame sobre tu proyecto, idea o cualquier cosa en la que pueda ayudarte..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Enviando...
                      </>
                    ) : (
                      <>
                        <Send size={18} />
                        Enviar mensaje
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

            {/* FAQ */}
            <div className="mt-8 bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-white mb-6">Preguntas frecuentes</h3>
              <div className="space-y-4">
                <FAQItem
                  question="¿Cuánto tiempo toma un proyecto típico?"
                  answer="Depende de la complejidad, pero la mayoría de proyectos web toman entre 2-8 semanas desde el concepto hasta el lanzamiento."
                />
                <FAQItem
                  question="¿Trabajas con equipos remotos?"
                  answer="¡Absolutamente! Tengo experiencia trabajando con equipos distribuidos y uso herramientas como Slack, Zoom y GitHub para colaborar efectivamente."
                />
                <FAQItem
                  question="¿Qué tecnologías usas principalmente?"
                  answer="Me especializo en React, Next.js, TypeScript, Node.js y bases de datos modernas. Siempre elijo la mejor tecnología para cada proyecto específico."
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

interface ContactCardProps {
  icon: React.ReactNode;
  title: string;
  info: string;
  description: string;
  action?: () => void;
}

const ContactCard = ({ icon, title, info, description, action }: ContactCardProps) => {
  return (
    <div
      className={`bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 hover:border-gray-600 transition-all duration-300 ${action ? 'cursor-pointer hover:scale-105' : ''}`}
      onClick={action}
    >
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0">
          {icon}
        </div>
        <div>
          <h3 className="text-lg font-bold text-white mb-1">{title}</h3>
          <p className="text-gray-300 font-semibold">{info}</p>
          <p className="text-gray-400 text-sm mt-1">{description}</p>
        </div>
      </div>
    </div>
  );
};

interface SocialLinkProps {
  icon: React.ReactNode;
  label: string;
  href: string;
  description: string;
}

const SocialLink = ({ icon, label, href, description }: SocialLinkProps) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-start gap-3 p-3 rounded-xl hover:bg-gray-700/50 transition-colors group"
    >
      <div className="text-gray-400 group-hover:text-white transition-colors">
        {icon}
      </div>
      <div>
        <div className="text-white font-semibold group-hover:text-blue-400 transition-colors">
          {label}
        </div>
        <div className="text-gray-400 text-sm">{description}</div>
      </div>
    </a>
  );
};

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem = ({ question, answer }: FAQItemProps) => {
  return (
    <div className="border-b border-gray-700 pb-4">
      <h4 className="text-white font-semibold mb-2">{question}</h4>
      <p className="text-gray-400 text-sm leading-relaxed">{answer}</p>
    </div>
  );
};
