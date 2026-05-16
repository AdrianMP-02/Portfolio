import Link from 'next/link';
import { Home } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-dark-bg flex items-center justify-center px-4">
      <div className="text-center space-y-8 max-w-md">
        <div className="space-y-4">
          <h1 className="text-8xl font-black font-display text-primary">404</h1>
          <h2 className="text-2xl font-bold text-white">
            Página no encontrada
          </h2>
          <p className="text-slate-400">
            Lo siento, la página que buscas no existe o ha sido movida.
          </p>
        </div>

        <Link
          href="/"
          className="inline-flex items-center gap-2 bg-white text-black px-8 py-4 rounded-2xl font-bold transition-all hover:scale-105 border border-white/10"
        >
          <Home size={20} />
          Volver al inicio
        </Link>
      </div>
    </div>
  );
}
