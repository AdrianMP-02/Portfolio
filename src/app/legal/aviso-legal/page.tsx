import Link from 'next/link';
import { FileText, ArrowLeft } from 'lucide-react';
import AnimationWrapper from '@/components/AnimationWrapper';

export const metadata = {
  title: 'Aviso Legal | Adrián Martín Pereira',
  description: 'Aviso legal y condiciones de uso del sitio web',
};

export default function LegalNotice() {
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
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
                <FileText className="text-white" size={32} />
              </div>
              <div>
                <h1 className="text-4xl font-bold text-white gradient-text">Aviso Legal</h1>
                <p className="text-gray-400 mt-2">Última actualización: {new Date().toLocaleDateString('es-ES')}</p>
              </div>
            </div>
          </AnimationWrapper>

          {/* Content */}
          <div className="card space-y-8 text-gray-300">
            <section>
              <h2 className="text-2xl font-bold text-white mb-4 gradient-text">1. Datos Identificativos</h2>
              <p className="mb-4">
                En cumplimiento de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y de Comercio Electrónico (LSSI-CE),
                se informa de los siguientes datos:
              </p>
              <ul className="space-y-2 ml-4">
                <li><strong>Titular:</strong> Adrián Martín Pereira</li>
                <li><strong>Email de contacto:</strong> <a href="mailto:adrian.m.p.02022002@gmail.com" className="text-blue-400 hover:underline">adrian.m.p.02022002@gmail.com</a></li>
                <li><strong>Sitio web:</strong> adrianmartinportfolio.vercel.app</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4 gradient-text">2. Objeto</h2>
              <p>
                El presente aviso legal regula el uso y utilización del sitio web adrianmartinportfolio.vercel.app, del que es titular Adrián Martín Pereira.
              </p>
              <p className="mt-4">
                La navegación por el sitio web atribuye la condición de usuario del mismo e implica la aceptación plena y sin reservas de todas
                y cada una de las disposiciones incluidas en este Aviso Legal.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4 gradient-text">3. Condiciones de Uso</h2>
              <p className="mb-4">El uso del sitio web implica la aceptación de las siguientes condiciones:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>El usuario se compromete a utilizar el sitio web y sus contenidos de forma lícita</li>
                <li>Queda prohibido el uso del sitio web con fines ilegales o que puedan perjudicar a terceros</li>
                <li>El usuario se compromete a no transmitir, difundir o poner a disposición de terceros cualquier tipo de material que contenga virus informáticos</li>
                <li>El usuario no podrá realizar ingeniería inversa, descompilar o desensamblar el sitio web</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4 gradient-text">4. Propiedad Intelectual e Industrial</h2>
              <p className="mb-4">
                Todos los contenidos del sitio web (textos, imágenes, diseño gráfico, código fuente, logotipos, marcas, etc.) son propiedad de
                Adrián Martín Pereira o de terceros que han autorizado su uso, y están protegidos por derechos de propiedad intelectual e industrial.
              </p>
              <p className="mb-4">
                Queda expresamente prohibida la reproducción, distribución, comunicación pública, transformación o cualquier otra forma de explotación
                de los contenidos sin la autorización expresa y por escrito del titular.
              </p>
              <p>
                El incumplimiento de estas restricciones puede constituir una infracción sancionable por la legislación vigente.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4 gradient-text">5. Responsabilidad y Garantías</h2>
              <p className="mb-4">
                El titular no se hace responsable de:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>La continuidad y disponibilidad de los contenidos</li>
                <li>La ausencia de errores en dichos contenidos ni la corrección de cualquier defecto</li>
                <li>La ausencia de virus y/o demás componentes dañinos</li>
                <li>Los daños o perjuicios que cause cualquier persona que vulnere los sistemas de seguridad</li>
                <li>Los contenidos de páginas web a las que el usuario pueda acceder mediante enlaces desde este sitio web</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4 gradient-text">6. Enlaces Externos</h2>
              <p>
                El sitio web puede contener enlaces a sitios web de terceros. Adrián Martín Pereira no tiene control sobre estos sitios
                y no se hace responsable de su contenido, funcionamiento o políticas de privacidad.
              </p>
              <p className="mt-4">
                La inclusión de estos enlaces no implica aprobación ni recomendación de los contenidos enlazados.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4 gradient-text">7. Protección de Datos</h2>
              <p>
                Adrián Martín Pereira cumple con el Reglamento General de Protección de Datos (RGPD) y demás normativa aplicable en materia de
                protección de datos personales.
              </p>
              <p className="mt-4">
                Para más información sobre el tratamiento de datos personales, consulta nuestra{' '}
                <Link href="/legal/privacidad" className="text-blue-400 hover:underline">Política de Privacidad</Link>.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4 gradient-text">8. Modificaciones</h2>
              <p>
                Adrián Martín Pereira se reserva el derecho de efectuar sin previo aviso las modificaciones que considere oportunas en su sitio web,
                pudiendo cambiar, suprimir o añadir tanto los contenidos y servicios que presta como la forma en la que estos aparezcan presentados o localizados.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4 gradient-text">9. Legislación Aplicable y Jurisdicción</h2>
              <p className="mb-4">
                Las presentes condiciones se rigen por la legislación española vigente.
              </p>
              <p>
                Para la resolución de cualquier controversia derivada de la utilización del sitio web, las partes se someten a los Juzgados y
                Tribunales del domicilio del titular.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4 gradient-text">10. Contacto</h2>
              <p>
                Para cualquier duda o consulta sobre este Aviso Legal, puedes contactar con nosotros a través de:
              </p>
              <ul className="space-y-2 ml-4 mt-4">
                <li><strong>Email:</strong> <a href="mailto:adrian.m.p.02022002@gmail.com" className="text-blue-400 hover:underline">adrian.m.p.02022002@gmail.com</a></li>
                <li><strong>Formulario de contacto:</strong> <Link href="/contact" className="text-blue-400 hover:underline">Ir al formulario</Link></li>
              </ul>
            </section>
          </div>

          {/* Footer Navigation */}
          <AnimationWrapper animation="slide-up" delay={0.3} className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/legal/privacidad"
              className="btn-secondary hover-lift"
            >
              Ver Política de Privacidad
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
