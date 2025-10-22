import Link from 'next/link';
import { Cookie, ArrowLeft } from 'lucide-react';
import AnimationWrapper from '@/components/AnimationWrapper';

export const metadata = {
  title: 'Política de Cookies | Adrián Martín Pereira',
  description: 'Información sobre el uso de cookies en este sitio web',
};

export default function CookiesPolicy() {
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
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-xl flex items-center justify-center">
                <Cookie className="text-white" size={32} />
              </div>
              <div>
                <h1 className="text-4xl font-bold text-white gradient-text">Política de Cookies</h1>
                <p className="text-gray-400 mt-2">Última actualización: {new Date().toLocaleDateString('es-ES')}</p>
              </div>
            </div>
          </AnimationWrapper>

          {/* Content */}
          <div className="card space-y-8 text-gray-300">
            <section>
              <h2 className="text-2xl font-bold text-white mb-4 gradient-text">1. ¿Qué son las cookies?</h2>
              <p>
                Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo (ordenador, tablet o móvil) cuando visitas
                una página web. Las cookies permiten a la web recordar tus acciones y preferencias durante un período de tiempo,
                para que no tengas que volver a configurarlas cada vez que regreses al sitio.
              </p>
            </section>

            <section className="bg-green-500/10 border border-green-500/30 rounded-xl p-6">
              <h2 className="text-2xl font-bold text-white mb-4 gradient-text">✅ Buenas Noticias sobre Privacidad</h2>
              <p className="text-lg mb-4">
                Este sitio web utiliza <strong>únicamente herramientas de análisis privacy-friendly</strong> que NO requieren
                tu consentimiento porque NO utilizan cookies de tracking ni recopilan datos personales identificables.
              </p>
              <p className="text-green-400 font-semibold">
                🎉 No necesitas aceptar ningún banner de cookies para usar este sitio web
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4 gradient-text">2. Herramientas de Análisis Utilizadas</h2>
              <p className="mb-4">Este sitio web utiliza las siguientes herramientas de análisis web:</p>

              <div className="space-y-6">
                {/* Cookies técnicas/necesarias */}
                <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-4">
                  <h3 className="text-xl font-bold text-white mb-3">Cookies Técnicas (Necesarias)</h3>
                  <p className="mb-3">
                    Son esenciales para el funcionamiento básico del sitio web y no pueden ser desactivadas.
                    No almacenan información personal identificable.
                  </p>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b border-gray-700">
                          <th className="text-left py-2 px-2">Cookie</th>
                          <th className="text-left py-2 px-2">Finalidad</th>
                          <th className="text-left py-2 px-2">Duración</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b border-gray-700/50">
                          <td className="py-2 px-2 font-mono text-xs">lastFormSubmission</td>
                          <td className="py-2 px-2">Control anti-spam del formulario de contacto</td>
                          <td className="py-2 px-2">Hasta cerrar navegador</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Herramientas de análisis privacy-friendly */}
                <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-4">
                  <h3 className="text-xl font-bold text-white mb-3">🟢 Herramientas de Análisis (Privacy-Friendly)</h3>
                  <p className="mb-3 text-green-400">
                    Este sitio utiliza herramientas de análisis que <strong>NO requieren consentimiento</strong> porque
                    NO utilizan cookies de tracking ni recopilan datos personales identificables.
                  </p>

                  <div className="space-y-4 mt-4">
                    <div className="bg-gray-800/50 rounded-lg p-3">
                      <h4 className="font-bold text-white mb-2">📊 Vercel Analytics</h4>
                      <ul className="text-sm space-y-1 ml-4">
                        <li>• <strong>Finalidad:</strong> Análisis de tráfico y uso del sitio web</li>
                        <li>• <strong>Cookies:</strong> No utiliza cookies</li>
                        <li>• <strong>Datos personales:</strong> No recopila información personal identificable</li>
                        <li>• <strong>Anonimización IP:</strong> Las direcciones IP son completamente anonimizadas</li>
                        <li>• <strong>Cumplimiento RGPD:</strong> Sí, sin necesidad de consentimiento</li>
                      </ul>
                      <a
                        href="https://vercel.com/docs/analytics/privacy-policy"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:underline text-xs mt-2 inline-block"
                      >
                        📖 Política de Privacidad de Vercel Analytics
                      </a>
                    </div>

                    <div className="bg-gray-800/50 rounded-lg p-3">
                      <h4 className="font-bold text-white mb-2">⚡ Vercel Speed Insights</h4>
                      <ul className="text-sm space-y-1 ml-4">
                        <li>• <strong>Finalidad:</strong> Monitorización del rendimiento y velocidad de carga</li>
                        <li>• <strong>Cookies:</strong> No utiliza cookies</li>
                        <li>• <strong>Datos personales:</strong> No recopila información personal identificable</li>
                        <li>• <strong>Cumplimiento RGPD:</strong> Sí, sin necesidad de consentimiento</li>
                      </ul>
                      <a
                        href="https://vercel.com/docs/speed-insights/privacy-policy"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:underline text-xs mt-2 inline-block"
                      >
                        📖 Política de Privacidad de Speed Insights
                      </a>
                    </div>
                  </div>

                  <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-3 mt-4">
                    <p className="text-sm">
                      ℹ️ <strong>¿Por qué no se necesita consentimiento?</strong> Según el RGPD y la LSSI-CE,
                      las herramientas de análisis que NO utilizan cookies, NO rastrean usuarios entre sitios,
                      y NO recopilan datos personales identificables están exentas del requisito de consentimiento previo.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4 gradient-text">3. ¿Cómo gestionar las cookies?</h2>
              <p className="mb-4">
                Puedes gestionar las cookies de las siguientes formas:
              </p>

              <div className="space-y-4">
                <div className="bg-gray-800/30 border border-gray-700 rounded-lg p-4">
                  <h3 className="font-bold text-white mb-2">🌐 Configuración del Navegador</h3>
                  <p className="mb-3">
                    Aunque este sitio no utiliza cookies de tracking, puedes configurar tu navegador para gestionar
                    las cookies técnicas si lo deseas:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4 text-sm">
                    <li><strong>Chrome:</strong> Configuración → Privacidad y seguridad → Cookies</li>
                    <li><strong>Firefox:</strong> Opciones → Privacidad y seguridad → Cookies y datos del sitio</li>
                    <li><strong>Safari:</strong> Preferencias → Privacidad → Cookies y datos de sitios web</li>
                    <li><strong>Edge:</strong> Configuración → Privacidad → Cookies</li>
                  </ul>
                  <p className="mt-3 text-sm text-gray-400">
                    <strong>Nota:</strong> Bloquear las cookies técnicas puede afectar al funcionamiento básico del sitio web
                    (como recordar tu preferencia de tema claro/oscuro).
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4 gradient-text">4. Base Legal</h2>
              <p>
                La base legal para el uso de cookies es el consentimiento del usuario, conforme al artículo 22.2 de la Ley 34/2002 de Servicios
                de la Sociedad de la Información y Comercio Electrónico (LSSI-CE) y el Reglamento General de Protección de Datos (RGPD).
              </p>
            </section>

            <section className="bg-green-500/10 border border-green-500/30 rounded-xl p-6">
              <h2 className="text-2xl font-bold text-white mb-4 gradient-text">✅ Estado de Cumplimiento</h2>
              <div className="space-y-3">
                <p className="font-semibold text-green-400">Este sitio web cumple completamente con la normativa de cookies:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>✅ Política de Cookies documentada y actualizada</li>
                  <li>✅ Uso exclusivo de herramientas privacy-friendly (Vercel Analytics & Speed Insights)</li>
                  <li>✅ No se utilizan cookies de tracking ni datos personales identificables</li>
                  <li>✅ Banner de consentimiento NO necesario (herramientas exentas según RGPD/LSSI-CE)</li>
                  <li>✅ Total transparencia sobre las herramientas de análisis utilizadas</li>
                </ul>
                <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-3 mt-4">
                  <p className="text-sm">
                    💡 <strong>Ventaja para usuarios:</strong> Puedes utilizar este sitio web sin necesidad de aceptar ningún
                    banner de cookies, manteniendo tu privacidad completamente protegida.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4 gradient-text">5. Actualizaciones</h2>
              <p>
                Esta Política de Cookies puede ser modificada en función de cambios legislativos, técnicos o de servicios.
                Te recomendamos revisar esta política periódicamente.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4 gradient-text">6. Más Información</h2>
              <p className="mb-4">
                Si tienes dudas sobre esta Política de Cookies, puedes contactarnos:
              </p>
              <ul className="space-y-2 ml-4">
                <li><strong>Email:</strong> <a href="mailto:adrian.m.p.02022002@gmail.com" className="text-blue-400 hover:underline">adrian.m.p.02022002@gmail.com</a></li>
                <li><strong>Formulario:</strong> <Link href="/contact" className="text-blue-400 hover:underline">Página de contacto</Link></li>
              </ul>
              <p className="mt-4">
                Para más información sobre protección de datos: <Link href="/legal/privacidad" className="text-blue-400 hover:underline">Política de Privacidad</Link>
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
              href="/legal/privacidad"
              className="btn-secondary hover-lift"
            >
              Ver Política de Privacidad
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
