import Link from 'next/link';
import { Shield, ArrowLeft } from 'lucide-react';
import AnimationWrapper from '@/components/AnimationWrapper';

export const metadata = {
  title: 'Política de Privacidad | Adrián Martín Pereira',
  description: 'Política de privacidad y protección de datos personales',
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 pt-24">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <AnimationWrapper animation="fade-in" className="mb-12">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 mb-6 transition-smooth"
            >
              <ArrowLeft size={20} />
              Volver al inicio
            </Link>

            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
                <Shield className="text-white" size={32} />
              </div>
              <div>
                <h1 className="text-4xl font-bold text-white gradient-text">Política de Privacidad</h1>
                <p className="text-gray-400 mt-2">Última actualización: {new Date().toLocaleDateString('es-ES')}</p>
              </div>
            </div>
          </AnimationWrapper>

          {/* Content */}
          <div className="card space-y-8 text-gray-300">
            <section>
              <h2 className="text-2xl font-bold text-white mb-4 gradient-text">1. Responsable del Tratamiento</h2>
              <ul className="space-y-2 ml-4">
                <li><strong>Identidad:</strong> Adrián Martín Pereira</li>
                <li><strong>Email:</strong> adrian.m.p.02022002@gmail.com</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4 gradient-text">2. Finalidad del Tratamiento</h2>
              <p className="mb-4">
                Los datos personales que nos facilites a través del formulario de contacto serán tratados con las siguientes finalidades:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Responder a tus consultas, solicitudes o peticiones de información</li>
                <li>Gestionar el envío de la información que nos solicites</li>
                <li>Mantener una comunicación profesional contigo</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4 gradient-text">3. Legitimación</h2>
              <p>
                La base legal para el tratamiento de tus datos es el <strong>consentimiento explícito</strong> que otorgas al marcar la casilla de aceptación del formulario de contacto y pulsar el botón de envío.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4 gradient-text">4. Datos Recopilados</h2>
              <p className="mb-4">A través del formulario de contacto, recopilamos los siguientes datos personales:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Nombre:</strong> Para poder dirigirnos a ti de forma personalizada</li>
                <li><strong>Correo electrónico:</strong> Para poder responder a tu consulta</li>
                <li><strong>Asunto y mensaje:</strong> Para conocer el motivo de tu contacto y poder responderte adecuadamente</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4 gradient-text">5. Destinatarios</h2>
              <p>
                Tus datos personales <strong>no serán cedidos a terceros</strong>, salvo obligación legal.
                Utilizamos el servicio de EmailJS para el envío de emails, que actúa como encargado del tratamiento bajo sus propias políticas de privacidad.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4 gradient-text">6. Conservación de Datos</h2>
              <p>
                Tus datos personales serán conservados únicamente durante el tiempo necesario para atender tu consulta y, posteriormente,
                serán eliminados salvo que su conservación sea necesaria para el cumplimiento de obligaciones legales o para la
                formulación, ejercicio o defensa de reclamaciones.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4 gradient-text">7. Derechos del Usuario</h2>
              <p className="mb-4">
                En cumplimiento del Reglamento General de Protección de Datos (RGPD), tienes derecho a:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Acceso:</strong> Obtener confirmación sobre si estamos tratando tus datos personales y acceder a ellos</li>
                <li><strong>Rectificación:</strong> Solicitar la corrección de datos inexactos o incompletos</li>
                <li><strong>Supresión:</strong> Solicitar la eliminación de tus datos cuando ya no sean necesarios</li>
                <li><strong>Oposición:</strong> Oponerte al tratamiento de tus datos</li>
                <li><strong>Limitación:</strong> Solicitar la limitación del tratamiento de tus datos</li>
                <li><strong>Portabilidad:</strong> Recibir tus datos en un formato estructurado y de uso común</li>
                <li><strong>Revocación del consentimiento:</strong> Retirar tu consentimiento en cualquier momento</li>
              </ul>
              <p className="mt-4">
                Para ejercer estos derechos, puedes contactarnos en: <a href="mailto:adrian.m.p.02022002@gmail.com" className="text-blue-400 hover:underline">adrian.m.p.02022002@gmail.com</a>
              </p>
              <p className="mt-4">
                También tienes derecho a presentar una reclamación ante la Agencia Española de Protección de Datos (AEPD): <a href="https://www.aepd.es" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">www.aepd.es</a>
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4 gradient-text">8. Medidas de Seguridad</h2>
              <p>
                Hemos adoptado medidas técnicas y organizativas apropiadas para garantizar un nivel de seguridad adecuado al riesgo,
                incluyendo el cifrado de las comunicaciones mediante protocolo HTTPS y el uso de servicios de terceros que cumplen con
                el RGPD.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4 gradient-text">9. Cookies</h2>
              <p>
                Este sitio web utiliza cookies. Para más información sobre el uso de cookies, consulta nuestra{' '}
                <Link href="/legal/cookies" className="text-blue-400 hover:underline">Política de Cookies</Link>.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4 gradient-text">10. Actualizaciones</h2>
              <p>
                Podemos actualizar esta Política de Privacidad ocasionalmente. Te notificaremos cualquier cambio publicando la nueva
                política en esta página con una fecha de &quot;Última actualización&quot; revisada.
              </p>
            </section>
          </div>

          {/* Footer Navigation */}
          <AnimationWrapper animation="slide-up" delay={0.3} className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/legal/aviso-legal"
              className="btn-secondary hover-lift"
            >
              Ver Aviso Legal
            </Link>
            <Link
              href="/legal/cookies"
              className="btn-secondary hover-lift"
            >
              Ver Política de Cookies
            </Link>
            <Link
              href="/contact"
              className="btn-primary btn-hover-effect"
            >
              Contactar
            </Link>
          </AnimationWrapper>
        </div>
      </div>
    </div>
  );
}
