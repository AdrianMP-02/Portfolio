'use client';

import Link from 'next/link';
import { Github, Linkedin, Mail, Heart, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-t from-black to-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-4">
              Mi Portfolio
            </h3>
            <p className="text-gray-400 mb-6 max-w-md leading-relaxed">
              Desarrollador Backend Junior especializado en APIs, bases de datos y arquitecturas escalables.
              Siempre aprendiendo y mejorando.
            </p>

            {/* Social Links */}
            <div className="flex space-x-4">
              <SocialButton
                href="https://github.com/AdrianMP-02"
                icon={<Github size={20} />}
                label="GitHub"
                hoverColor="hover:text-gray-300"
              />
              <SocialButton
                href="https://www.linkedin.com/in/adrián-martín-pereira-167813222/"
                icon={<Linkedin size={20} />}
                label="LinkedIn"
                hoverColor="hover:text-blue-400"
              />
              <SocialButton
                href="mailto:adrian.m.p.02022002@gmail.com"
                icon={<Mail size={20} />}
                label="Email"
                hoverColor="hover:text-purple-400"
              />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Navegación</h3>
            <ul className="space-y-3">
              <FooterLink href="/about" text="Acerca de" />
              <FooterLink href="/projects" text="Proyectos" />
              <FooterLink href="/blog" text="Blog" />
              <FooterLink href="/contact" text="Contacto" />
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contacto</h3>
            <div className="space-y-3 text-gray-400">
              <p className="flex items-center gap-2">
                <Mail size={16} />
                <a href="mailto:adrian.m.p.02022002@gmail.com" className="hover:text-white transition-colors">
                  adrian.m.p.02022002@gmail.com
                </a>
              </p>
              <p className="text-sm">
                Disponible para freelance y colaboraciones
              </p>
              <div className="inline-flex items-center gap-1 bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                Abierto a oportunidades
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm flex items-center gap-1">
            © 2025 Mi Portfolio. Hecho con
            <Heart size={14} className="text-red-500 animate-pulse" />
            usando Next.js
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-gray-400 hover:text-white transition-all duration-300 group"
          >
            <span className="text-sm">Volver arriba</span>
            <ArrowUp size={16} className="group-hover:-translate-y-1 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </footer>
  );
};

interface SocialButtonProps {
  href: string;
  icon: React.ReactNode;
  label: string;
  hoverColor: string;
}

const SocialButton = ({ href, icon, label, hoverColor }: SocialButtonProps) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`text-gray-400 ${hoverColor} p-3 rounded-lg hover:bg-gray-800/50 transition-all duration-300 hover:scale-110`}
      aria-label={label}
    >
      {icon}
    </a>
  );
};

interface FooterLinkProps {
  href: string;
  text: string;
}

const FooterLink = ({ href, text }: FooterLinkProps) => {
  return (
    <li>
      <Link
        href={href}
        className="text-gray-400 hover:text-white transition-colors duration-300 hover:translate-x-1 transform inline-block"
      >
        {text}
      </Link>
    </li>
  );
};

export default Footer;
