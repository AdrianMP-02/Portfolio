'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, User, Briefcase, BookOpen, Mail, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { href: '/', icon: <Home size={18} />, text: 'Inicio' },
    { href: '/about', icon: <User size={18} />, text: 'Acerca de' },
    { href: '/projects', icon: <Briefcase size={18} />, text: 'Proyectos' },
    { href: '/blog', icon: <BookOpen size={18} />, text: 'Blog' },
    { href: '/contact', icon: <Mail size={18} />, text: 'Contacto' },
  ];

  const isActive = (href: string) => pathname === href;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-gray-800/50 navbar-slide-down">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="animate-slide-in-left">
            <Link
              href="/"
              className="text-xl font-bold text-gradient-animate hover-scale"
            >
              Adrián M.P.
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item, index) => (
              <div key={item.href} className={`animate-slide-down animate-delay-${(index + 1) * 100}`}>
                <NavLink
                  href={item.href}
                  icon={item.icon}
                  text={item.text}
                  isActive={isActive(item.href)}
                />
              </div>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden animate-slide-in-right">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white p-2 rounded-lg glass hover-scale transition-smooth"
            >
              {isOpen ? (
                <X size={24} className="animate-rotate-in" />
              ) : (
                <Menu size={24} className="animate-scale-in" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden overflow-hidden border-t border-gray-800 transition-all duration-300 ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}>
          <div className="py-4 space-y-2">
            {navItems.map((item, index) => (
              <div
                key={item.href}
                className={`transform transition-all duration-300 ${isOpen
                    ? 'translate-x-0 opacity-100'
                    : 'translate-x-4 opacity-0'
                  }`}
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                <Link
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-lg font-medium transition-smooth hover-lift ${isActive(item.href)
                      ? 'glass text-blue-400 border border-blue-500/20 animate-glow'
                      : 'text-gray-300 hover:text-white hover:glass'
                    }`}
                >
                  <span className="icon-bounce">{item.icon}</span>
                  <span>{item.text}</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

interface NavLinkProps {
  href: string;
  icon: React.ReactNode;
  text: string;
  isActive: boolean;
}

const NavLink = ({ href, icon, text, isActive }: NavLinkProps) => {
  return (
    <div className="relative">
      <Link
        href={href}
        className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium group transition-smooth hover-lift ${isActive
            ? 'glass text-blue-400 border border-blue-500/20 animate-glow'
            : 'text-gray-300 hover:text-white hover:glass hover-scale'
          }`}
      >
        <span className="icon-bounce">{icon}</span>
        <span>{text}</span>
        {/* Efecto de hover underline */}
        <div className={`absolute bottom-0 left-1/2 h-0.5 bg-blue-400 rounded-full transition-all duration-300 ${isActive
            ? 'w-8 transform -translate-x-1/2'
            : 'w-0 group-hover:w-6 transform -translate-x-1/2'
          }`} />
      </Link>
    </div>
  );
};

export default Navbar;
