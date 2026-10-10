import Link from 'next/link';
import { Home } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-dark-bg flex items-center justify-center px-6">
      <div className="text-center space-y-8 max-w-md">
        <div className="space-y-4">
          <h1 className="text-8xl font-black font-display uppercase text-primary glitch">404</h1>
          <h2 className="font-mono uppercase text-sm tracking-[0.2em] text-heading border-y border-line py-3">
            Página no encontrada
          </h2>
          <p className="font-mono uppercase text-xs tracking-widest text-muted-light">
            Lo siento, la página que buscas no existe o ha sido movida.
          </p>
        </div>

        <Link href="/" className="btn-cyber btn-cyber-primary">
          <Home size={20} />
          Volver al inicio
        </Link>
      </div>
    </div>
  );
}
