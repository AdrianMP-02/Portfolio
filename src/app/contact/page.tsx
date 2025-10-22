'use client';

import { useState } from 'react';
import { Mail, MapPin, Send, Github, Linkedin, MessageSquare, Clock, CheckCircle, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';
import AnimationWrapper, { StaggerContainer, StaggerItem } from '@/components/AnimationWrapper';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    website: '', // Honeypot field
    privacyAccepted: false // RGPD consent checkbox
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

    // Validar que las variables de entorno existan
    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const autoReplyTemplateId = process.env.NEXT_PUBLIC_EMAILJS_AUTOREPLY_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      console.error('❌ EmailJS configuration missing:', {
        serviceId: !!serviceId,
        templateId: !!templateId,
        publicKey: !!publicKey,
        autoReplyTemplateId: !!autoReplyTemplateId
      });
      setError('Error de configuración del servicio de email. Por favor, contacta al administrador del sitio.');
      return;
    }

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
        serviceId,
        templateId,
        templateParams,
        publicKey
      );

      if (response.status === 200) {
        // Enviar auto-respuesta al usuario si está configurada
        if (autoReplyTemplateId) {
          try {
            const autoReplyParams = {
              to_name: formData.name,
              from_email: formData.email,
              from_name: 'Adrián Martín Pereira',
              subject: formData.subject,
            };

            await emailjs.send(
              serviceId,
              autoReplyTemplateId,
              autoReplyParams,
              publicKey
            );
          } catch {
            // No fallar el proceso si la auto-respuesta falla
            // El error se ignora silenciosamente
          }
        }

        setIsSubmitted(true);
        localStorage.setItem('lastFormSubmission', Date.now().toString());
        setFormData({ name: '', email: '', subject: '', message: '', website: '', privacyAccepted: false });
      } else {
        throw new Error('Error en el envío');
      }
    } catch (err) {
      console.error('❌ Error al enviar el formulario:', err);
      setError('Error al enviar el mensaje. Por favor, verifica tu conexión e inténtalo de nuevo más tarde.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const target = e.target;
    const value = target.type === 'checkbox' ? (target as HTMLInputElement).checked : target.value;
    const name = target.name;

    setFormData({
      ...formData,
      [name]: value
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 pt-24">
      <div className="container mx-auto px-2 sm:px-4 lg:px-6 py-16">
        <div className="max-w-8xl mx-auto">
          {/* Header */}
          <AnimationWrapper animation="fade-in" className="text-center mb-16 space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-gradient-animate">
              Hablemos
            </h1>
            <AnimationWrapper animation="slide-up" delay={0.2}>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                ¿Tienes una idea genial? ¿Buscas colaborar en un proyecto? ¡Me encantaría escucharte!
              </p>
            </AnimationWrapper>
          </AnimationWrapper>

          {/* Contact Grid */}
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <AnimationWrapper animation="slide-in-left" className="space-y-8">
              <div className="card card-hover">
                <AnimationWrapper animation="scale-in" delay={0.3}>
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mr-4 hover-rotate animate-pulse-custom">
                      <MessageSquare className="text-white" size={32} />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-white">Conectemos</h2>
                      <p className="text-blue-400">Siempre abierto a nuevas oportunidades</p>
                    </div>
                  </div>
                </AnimationWrapper>

                <div className="space-y-6">
                  <AnimationWrapper animation="fade-in" delay={0.5}>
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
                  </AnimationWrapper>

                  <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <StaggerItem index={0}>
                      <ContactMethod
                        icon={<Mail size={20} />}
                        title="Email"
                        detail="adrian.m.p.02022002@gmail.com"
                        link="mailto:adrian.m.p.02022002@gmail.com"
                      />
                    </StaggerItem>
                    <StaggerItem index={1}>
                      <ContactMethod
                        icon={<MapPin size={20} />}
                        title="Ubicación"
                        detail="Valladolid, España"
                        link=""
                      />
                    </StaggerItem>
                    <StaggerItem index={2}>
                      <ContactMethod
                        icon={<Github size={20} />}
                        title="GitHub"
                        detail="/AdrianMP-02"
                        link="https://github.com/AdrianMP-02"
                      />
                    </StaggerItem>
                    <StaggerItem index={3}>
                      <ContactMethod
                        icon={<Linkedin size={20} />}
                        title="LinkedIn"
                        detail="Adrián Martín Pereira"
                        link="https://www.linkedin.com/in/adrián-martín-pereira-167813222/"
                      />
                    </StaggerItem>
                  </StaggerContainer>

                  <AnimationWrapper animation="scale-in" delay={0.8}>
                    <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-xl p-4 hover-scale transition-smooth">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse-custom"></div>
                        <span className="text-green-400 font-semibold">Disponible para trabajar</span>
                      </div>
                      <p className="text-gray-300 text-sm">
                        Actualmente abierto a nuevas oportunidades laborales y proyectos freelance
                      </p>
                    </div>
                  </AnimationWrapper>
                </div>
              </div>

              {/* Quick Response Card */}
              <AnimationWrapper animation="slide-up" delay={0.6}>
                <div className="card card-hover">
                  <div className="flex items-center gap-3 mb-4">
                    <Clock className="text-blue-400 animate-float" size={24} />
                    <h3 className="text-xl font-bold text-white gradient-text">Tiempo de respuesta</h3>
                  </div>
                  <StaggerContainer className="space-y-3 text-gray-300">
                    <StaggerItem index={0}>
                      <div className="flex justify-between items-center hover-scale transition-smooth">
                        <span>Email:</span>
                        <span className="text-blue-400 font-semibold">24-48 horas</span>
                      </div>
                    </StaggerItem>
                    <StaggerItem index={1}>
                      <div className="flex justify-between items-center hover-scale transition-smooth">
                        <span>LinkedIn:</span>
                        <span className="text-blue-400 font-semibold">1-2 días</span>
                      </div>
                    </StaggerItem>
                    <StaggerItem index={2}>
                      <div className="flex justify-between items-center hover-scale transition-smooth">
                        <span>Urgente:</span>
                        <span className="text-yellow-400 font-semibold">Mismo día</span>
                      </div>
                    </StaggerItem>
                  </StaggerContainer>
                </div>
              </AnimationWrapper>
            </AnimationWrapper>

            {/* Contact Form */}
            <AnimationWrapper animation="slide-in-right" className="card card-hover">
              <AnimationWrapper animation="fade-in" delay={0.4} className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-2 gradient-text">Envíame un mensaje</h2>
                <p className="text-gray-400">
                  Completa este formulario y me pondré en contacto contigo lo antes posible
                </p>
              </AnimationWrapper>

              {isSubmitted ? (
                <AnimationWrapper animation="scale-in" className="text-center py-12">
                  <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse-custom">
                    <CheckCircle className="text-green-400" size={40} />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 gradient-text">¡Mensaje enviado!</h3>
                  <p className="text-gray-400 mb-6">
                    Gracias por contactarme. Te responderé en las próximas 24-48 horas.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="btn-secondary hover-lift"
                  >
                    Enviar otro mensaje
                  </button>
                </AnimationWrapper>
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

                  <AnimationWrapper animation="slide-up" delay={0.5}>
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
                  </AnimationWrapper>

                  <AnimationWrapper animation="slide-up" delay={0.6}>
                    <FormField
                      label="Asunto"
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      placeholder="¿De qué te gustaría hablar?"
                    />
                  </AnimationWrapper>

                  <AnimationWrapper animation="slide-up" delay={0.7}>
                    <FormTextArea
                      label="Mensaje"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder="Cuéntame más sobre tu proyecto o idea..."
                      rows={6}
                    />
                  </AnimationWrapper>

                  {/* Información de Primera Capa - RGPD */}
                  <AnimationWrapper animation="fade-in" delay={0.75}>
                    <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-4 text-sm text-gray-300">
                      <p className="font-semibold text-blue-400 mb-2">📋 Información sobre Protección de Datos</p>
                      <ul className="space-y-1 text-xs">
                        <li><strong>Responsable:</strong> Adrián Martín Pereira</li>
                        <li><strong>Finalidad:</strong> Responder a tu consulta o solicitud de contacto</li>
                        <li><strong>Legitimación:</strong> Tu consentimiento al marcar la casilla de aceptación</li>
                        <li><strong>Destinatarios:</strong> No se cederán datos a terceros, salvo obligación legal</li>
                        <li><strong>Derechos:</strong> Acceso, rectificación, supresión, portabilidad, limitación y oposición. Más información en nuestra <a href="/legal/privacidad" className="text-blue-400 hover:underline">Política de Privacidad</a></li>
                      </ul>
                    </div>
                  </AnimationWrapper>

                  {/* Checkbox de Consentimiento - RGPD */}
                  <AnimationWrapper animation="slide-up" delay={0.77}>
                    <div className="flex items-start gap-3">
                      <input
                        type="checkbox"
                        id="privacyAccepted"
                        name="privacyAccepted"
                        checked={formData.privacyAccepted}
                        onChange={handleChange}
                        required
                        className="mt-1 w-4 h-4 text-blue-500 bg-gray-800/50 border-gray-700 rounded focus:ring-blue-500 focus:ring-2 cursor-pointer"
                      />
                      <label htmlFor="privacyAccepted" className="text-sm text-gray-300 cursor-pointer">
                        He leído y acepto la <a href="/legal/privacidad" className="text-blue-400 hover:underline font-semibold">Política de Privacidad</a> y el <a href="/legal/aviso-legal" className="text-blue-400 hover:underline font-semibold">Aviso Legal</a> <span className="text-red-400">*</span>
                      </label>
                    </div>
                  </AnimationWrapper>

                  {error && (
                    <AnimationWrapper animation="scale-in">
                      <div className="bg-red-500/20 border border-red-500/30 rounded-xl p-4 flex items-center gap-3 animate-glow">
                        <AlertCircle className="text-red-400 flex-shrink-0" size={20} />
                        <p className="text-red-400">{error}</p>
                      </div>
                    </AnimationWrapper>
                  )}

                  <AnimationWrapper animation="slide-up" delay={0.8}>
                    <button
                      type="submit"
                      disabled={isSubmitting || !formData.name || !formData.email || !formData.subject || !formData.message || !formData.privacyAccepted}
                      className="w-full btn-primary btn-hover-effect flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          Enviando...
                        </>
                      ) : (
                        <>
                          <Send size={20} className="icon-bounce" />
                          Enviar mensaje
                        </>
                      )}
                    </button>
                  </AnimationWrapper>

                  <AnimationWrapper animation="fade-in" delay={0.9}>
                    <p className="text-gray-500 text-sm text-center">
                      Al enviar este formulario, aceptas que me ponga en contacto contigo para responder a tu consulta.
                    </p>
                  </AnimationWrapper>
                </form>
              )}
            </AnimationWrapper>
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
    <div className="glass p-4 rounded-xl group hover-lift hover-glow transition-smooth">
      <div className="flex items-center gap-3">
        <div className="text-blue-400 icon-bounce">{icon}</div>
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
        className="w-full bg-gray-800/50 border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none form-input-focus transition-smooth"
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
        className="w-full bg-gray-800/50 border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none resize-vertical form-input-focus transition-smooth"
      />
    </div>
  );
};
