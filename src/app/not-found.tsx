import Link from 'next/link';
import { Home } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:via-black dark:to-gray-900 flex items-center justify-center px-4">
      <div className="text-center space-y-8 max-w-md">
        <div className="space-y-4">
          <h1 className="text-6xl font-bold text-gray-900 dark:text-white">404</h1>
          <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-300">
            Página no encontrada
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Lo siento, la página que buscas no existe o ha sido movida.
          </p>
        </div>

        <div className="space-y-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
          >
            <Home size={20} />
            Ir al inicio
          </Link>
        </div>
      </div>
    </div>
  );
}
