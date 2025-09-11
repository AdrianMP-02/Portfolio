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
            <h3 className="text-2xl font-bold gradient-text mb-4">
              Mi Portfolio
            </h3>
            <p className="text-gray-400 mb-6 max-w-md leading-relaxed">
              Desarrollador Web Junior especializado en PHP, MySQL, WordPress con Elementor.
              Becario en MadisonMK, siempre aprendiendo y creciendo profesionalmente.
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
              {['about', 'projects', 'blog', 'contact'].map((item) => (
                <li key={item}>
                  <FooterLink href={`/${item}`} text={item.charAt(0).toUpperCase() + item.slice(1)} />
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contacto</h3>
            <div className="space-y-3 text-gray-400">
              <p className="flex items-center gap-2">
                <Mail size={16} />
                <a href="mailto:adrian.m.p.02022002@gmail.com" className="hover:text-white">
                  adrian.m.p.02022002@gmail.com
                </a>
              </p>
              <p className="text-sm">
                Disponible para freelance y colaboraciones
              </p>
              <div className="status-active">
                Abierto a oportunidades
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm flex items-center gap-1">
            © 2025 Mi Portfolio. Hecho con
            <span className="inline-block">
              <Heart size={14} className="text-red-500" />
            </span>
            usando Next.js
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-gray-400 hover:text-white group"
          >
            <span className="text-sm">Volver arriba</span>
            <div>
              <ArrowUp size={16} />
            </div>
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
      className={`text-gray-400 ${hoverColor} p-3 rounded-lg glass`}
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
    <Link
      href={href}
      className="text-gray-400 hover:text-white inline-block"
    >
      <span>
        {text}
      </span>
    </Link>
  );
};

export default Footer;
