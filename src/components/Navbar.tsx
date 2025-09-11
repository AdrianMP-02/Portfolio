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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link
            href="/"
            className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent hover:from-blue-300 hover:to-purple-400 transition-all duration-300"
          >
            Adrián M.P.
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <NavLink
                key={item.href}
                href={item.href}
                icon={item.icon}
                text={item.text}
                isActive={isActive(item.href)}
              />
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white p-2 rounded-lg hover:bg-gray-800/50 transition-all duration-300"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden border-t border-gray-800">
            <div className="py-4 space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-lg font-medium transition-all duration-300 ${isActive(item.href)
                    ? 'bg-gradient-to-r from-blue-500/10 to-purple-500/10 text-blue-400 border border-blue-500/20'
                    : 'text-gray-300 hover:text-white hover:bg-gray-800/50'
                    }`}
                >
                  <span className="transition-transform duration-300">
                    {item.icon}
                  </span>
                  <span>{item.text}</span>
                </Link>
              ))}
            </div>
          </div>
        )}
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
    <Link
      href={href}
      className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 group ${isActive
        ? 'bg-gradient-to-r from-blue-500/10 to-purple-500/10 text-blue-400 border border-blue-500/20'
        : 'text-gray-300 hover:text-white hover:bg-gray-800/50'
        }`}
    >
      <span className="group-hover:scale-110 transition-transform duration-300">
        {icon}
      </span>
      <span>{text}</span>
    </Link>
  );
};

export default Navbar;
