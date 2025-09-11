'use client';

import { useState } from 'react';
import { Mail, MapPin, Send, Github, Linkedin, MessageSquare, Clock, CheckCircle, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    website: '' // Honeypot field
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [formStartTime] = useState(Date.now());

  // Funciones de validación anti-spam
  const validateSpam = (): { isValid: boolean; error?: string } => {
    if (formData.website) {
      return { isValid: false, error: 'Solicitud inválida' };
    }

    const timeTaken = Date.now() - formStartTime;
    if (timeTaken < 5000) {
      return { isValid: false, error: 'Por favor, toma tu tiempo para llenar el formulario' };
    }

    const lastSubmission = localStorage.getItem('lastFormSubmission');
    if (lastSubmission && Date.now() - parseInt(lastSubmission) < 30000) {
      return { isValid: false, error: 'Por favor, espera 30 segundos antes de enviar otro mensaje' };
    }

    const suspiciousPatterns = [
      /https?:\/\/[^\s]+/gi,
      /\b(viagra|casino|loan|crypto|bitcoin)\b/gi,
      /(.)\1{10,}/gi,
    ];

    const fullText = `${formData.name} ${formData.email} ${formData.subject} ${formData.message}`;

    for (const pattern of suspiciousPatterns) {
      if (pattern.test(fullText)) {
        return { isValid: false, error: 'El contenido del mensaje parece sospechoso' };
      }
    }

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(formData.email)) {
      return { isValid: false, error: 'Formato de email inválido' };
    }

    return { isValid: true };
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    const validationResult = validateSpam();
    if (!validationResult.isValid) {
      setError(validationResult.error || 'Error de validación');
      return;
    }

    setIsSubmitting(true);

    try {
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_name: 'Adrián',
        reply_to: formData.email,
      };

      const response = await emailjs.send(
        'service_4s7tkse',
        'template_oqnh6kh',
        templateParams,
        'wI7-qgK51V0zJ-JZz'
      );

      if (response.status === 200) {
        setIsSubmitted(true);
        localStorage.setItem('lastFormSubmission', Date.now().toString());
        setFormData({ name: '', email: '', subject: '', message: '', website: '' });
      } else {
        throw new Error('Error en el envío');
      }
    } catch (err) {
      console.error('Error al enviar el formulario:', err);
      setError('Error al enviar el mensaje. Por favor, inténtalo de nuevo más tarde.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 pt-24">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold gradient-text">
              Hablemos
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              ¿Tienes una idea genial? ¿Buscas colaborar en un proyecto? ¡Me encantaría escucharte!
            </p>
          </div>

          {/* Contact Grid */}
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="card">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mr-4">
                    <MessageSquare className="text-white" size={32} />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-white">Conectemos</h2>
                    <p className="text-blue-400">Siempre abierto a nuevas oportunidades</p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="text-gray-300 space-y-4 text-lg leading-relaxed">
                    <p>
                      Estoy siempre interesado en hablar sobre desarrollo web, nuevas tecnologías,
                      oportunidades de colaboración y proyectos emocionantes.
                    </p>
                    <p>
                      Ya sea que busques un desarrollador para tu equipo, tengas una idea de proyecto,
                      o simplemente quieras charlar sobre programación, ¡no dudes en contactarme!
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <ContactMethod
                      icon={<Mail size={20} />}
                      title="Email"
                      detail="adrian.m.p.02022002@gmail.com"
                      link="mailto:adrian.m.p.02022002@gmail.com"
                    />
                    <ContactMethod
                      icon={<MapPin size={20} />}
                      title="Ubicación"
                      detail="Valladolid, España"
                      link=""
                    />
                    <ContactMethod
                      icon={<Github size={20} />}
                      title="GitHub"
                      detail="/AdrianMP-02"
                      link="https://github.com/AdrianMP-02"
                    />
                    <ContactMethod
                      icon={<Linkedin size={20} />}
                      title="LinkedIn"
                      detail="Adrián Martín Pereira"
                      link="https://www.linkedin.com/in/adrián-martín-pereira-167813222/"
                    />
                  </div>

                  <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-xl p-4">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <span className="text-green-400 font-semibold">Disponible para trabajar</span>
                    </div>
                    <p className="text-gray-300 text-sm">
                      Actualmente abierto a nuevas oportunidades laborales y proyectos freelance
                    </p>
                  </div>
                </div>
              </div>

              {/* Quick Response Card */}
              <div className="card">
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="text-blue-400" size={24} />
                  <h3 className="text-xl font-bold text-white">Tiempo de respuesta</h3>
                </div>
                <div className="space-y-3 text-gray-300">
                  <div className="flex justify-between items-center">
                    <span>Email:</span>
                    <span className="text-blue-400 font-semibold">24-48 horas</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>LinkedIn:</span>
                    <span className="text-blue-400 font-semibold">1-2 días</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Urgente:</span>
                    <span className="text-yellow-400 font-semibold">Mismo día</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="card">
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-2">Envíame un mensaje</h2>
                <p className="text-gray-400">
                  Completa este formulario y me pondré en contacto contigo lo antes posible
                </p>
              </div>

              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="text-green-400" size={40} />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">¡Mensaje enviado!</h3>
                  <p className="text-gray-400 mb-6">
                    Gracias por contactarme. Te responderé en las próximas 24-48 horas.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="btn-secondary"
                  >
                    Enviar otro mensaje
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Honeypot field */}
                  <input
                    type="text"
                    name="website"
                    value={formData.website}
                    onChange={handleChange}
                    style={{ display: 'none' }}
                    tabIndex={-1}
                    autoComplete="off"
                  />

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      label="Nombre"
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Tu nombre completo"
                    />

                    <FormField
                      label="Email"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="tu@email.com"
                    />
                  </div>

                  <FormField
                    label="Asunto"
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="¿De qué te gustaría hablar?"
                  />

                  <FormTextArea
                    label="Mensaje"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Cuéntame más sobre tu proyecto o idea..."
                    rows={6}
                  />

                  {error && (
                    <div className="bg-red-500/20 border border-red-500/30 rounded-xl p-4 flex items-center gap-3">
                      <AlertCircle className="text-red-400 flex-shrink-0" size={20} />
                      <p className="text-red-400">{error}</p>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting || !formData.name || !formData.email || !formData.subject || !formData.message}
                    className="w-full btn-primary flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"></div>
                        Enviando...
                      </>
                    ) : (
                      <>
                        <Send size={20} />
                        Enviar mensaje
                      </>
                    )}
                  </button>

                  <p className="text-gray-500 text-sm text-center">
                    Al enviar este formulario, aceptas que me ponga en contacto contigo para responder a tu consulta.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

interface ContactMethodProps {
  icon: React.ReactNode;
  title: string;
  detail: string;
  link: string;
}

const ContactMethod = ({ icon, title, detail, link }: ContactMethodProps) => {
  const content = (
    <div className="glass p-4 rounded-xl group">
      <div className="flex items-center gap-3">
        <div className="text-blue-400">{icon}</div>
        <div>
          <h4 className="font-semibold text-white">{title}</h4>
          <p className="text-gray-400 text-sm">{detail}</p>
        </div>
      </div>
    </div>
  );

  if (link) {
    return (
      <a href={link} target="_blank" rel="noopener noreferrer">
        {content}
      </a>
    );
  }

  return content;
};

interface FormFieldProps {
  label: string;
  type: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  placeholder?: string;
}

const FormField = ({ label, type, name, value, onChange, required, placeholder }: FormFieldProps) => {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-semibold text-gray-300 mb-2">
        {label} {required && <span className="text-red-400">*</span>}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        placeholder={placeholder}
        className="w-full bg-gray-800/50 border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none"
      />
    </div>
  );
};

interface FormTextAreaProps {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  required?: boolean;
  placeholder?: string;
  rows?: number;
}

const FormTextArea = ({ label, name, value, onChange, required, placeholder, rows = 4 }: FormTextAreaProps) => {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-semibold text-gray-300 mb-2">
        {label} {required && <span className="text-red-400">*</span>}
      </label>
      <textarea
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        placeholder={placeholder}
        rows={rows}
        className="w-full bg-gray-800/50 border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none resize-vertical"
      />
    </div>
  );
};
