'use client';

import Link from 'next/link';
import { Github, Linkedin, Mail, Heart, ArrowUp } from 'lucide-react';
import AnimationWrapper, { StaggerContainer, StaggerItem } from './AnimationWrapper';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-t from-black to-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <AnimationWrapper animation="slide-in-left" className="lg:col-span-1">
            <h3 className="text-2xl font-bold text-gradient-animate mb-4">
              Mi Portfolio
            </h3>
            <AnimationWrapper animation="fade-in" delay={0.2}>
              <p className="text-gray-400 mb-6 max-w-md leading-relaxed">
                Desarrollador Web Junior especializado en PHP, MySQL, WordPress con Elementor.
                Becario en MadisonMK, siempre aprendiendo y creciendo profesionalmente.
              </p>
            </AnimationWrapper>

            {/* Social Links */}
            <StaggerContainer className="flex items-center space-x-4 md:space-x-6 ml-25">
              <StaggerItem index={0}>
                <SocialButton
                  href="https://github.com/AdrianMP-02"
                  icon={<Github size={24} />}
                  label="GitHub"
                  hoverColor="hover:text-gray-300"
                />
              </StaggerItem>
              <StaggerItem index={1}>
                <SocialButton
                  href="https://www.linkedin.com/in/adrián-martín-pereira-167813222/"
                  icon={<Linkedin size={24} />}
                  label="LinkedIn"
                  hoverColor="hover:text-blue-400"
                />
              </StaggerItem>
              <StaggerItem index={2}>
                <SocialButton
                  href="mailto:adrian.m.p.02022002@gmail.com"
                  icon={<Mail size={24} />}
                  label="Email"
                  hoverColor="hover:text-purple-400"
                />
              </StaggerItem>
            </StaggerContainer>
          </AnimationWrapper>

          {/* Quick Links */}
          <AnimationWrapper animation="slide-up" delay={0.3}>
            <h3 className="text-lg font-semibold text-white mb-4">Navegación</h3>
            <StaggerContainer>
              <ul className="space-y-3">
                {['about', 'projects', 'blog', 'contact'].map((item, index) => (
                  <StaggerItem key={item} index={index}>
                    <li>
                      <FooterLink href={`/${item}`} text={item.charAt(0).toUpperCase() + item.slice(1)} />
                    </li>
                  </StaggerItem>
                ))}
              </ul>
            </StaggerContainer>
          </AnimationWrapper>

          {/* Legal Links */}
          <AnimationWrapper animation="slide-up" delay={0.35}>
            <h3 className="text-lg font-semibold text-white mb-4">Legal</h3>
            <StaggerContainer>
              <ul className="space-y-3">
                <StaggerItem index={0}>
                  <li>
                    <FooterLink href="/legal/aviso-legal" text="Aviso Legal" />
                  </li>
                </StaggerItem>
                <StaggerItem index={1}>
                  <li>
                    <FooterLink href="/legal/privacidad" text="Privacidad" />
                  </li>
                </StaggerItem>
                <StaggerItem index={2}>
                  <li>
                    <FooterLink href="/legal/cookies" text="Cookies" />
                  </li>
                </StaggerItem>
              </ul>
            </StaggerContainer>
          </AnimationWrapper>

          {/* Contact Info */}
          <AnimationWrapper animation="slide-in-right" delay={0.4}>
            <h3 className="text-lg font-semibold text-white mb-4">Contacto</h3>
            <div className="space-y-3 text-gray-400">
              <AnimationWrapper animation="fade-in" delay={0.5}>
                <p className="flex items-center gap-2 hover-scale transition-smooth">
                  <Mail size={16} className="animate-float" />
                  <a href="mailto:adrian.m.p.02022002@gmail.com" className="hover:text-white transition-smooth">
                    adrian.m.p.02022002@gmail.com
                  </a>
                </p>
              </AnimationWrapper>
              <AnimationWrapper animation="fade-in" delay={0.6}>
                <p className="text-sm">
                  Disponible para freelance y colaboraciones
                </p>
              </AnimationWrapper>
              <AnimationWrapper animation="scale-in" delay={0.7}>
                <div className="status-active hover-scale">
                  Abierto a oportunidades
                </div>
              </AnimationWrapper>
            </div>
          </AnimationWrapper>
        </div>

        {/* Bottom Section */}
        <AnimationWrapper animation="slide-up" delay={0.8}>
          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm flex items-center gap-1">
              © 2025 Mi Portfolio. Hecho con
              <span className="inline-block animate-pulse-custom">
                <Heart size={14} className="text-red-500" />
              </span>
              usando Next.js
            </p>

            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 text-gray-400 hover:text-white group hover-lift transition-smooth"
            >
              <span className="text-sm">Volver arriba</span>
              <div className="icon-bounce">
                <ArrowUp size={16} />
              </div>
            </button>
          </div>
        </AnimationWrapper>
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

const SocialButton = ({ href, icon, label }: SocialButtonProps) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`text-gray-400 hover:text-white p-4 rounded-full glass hover-lift hover-glow transition-smooth icon-spin w-16 h-16 flex items-center justify-center`}
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
      className="text-gray-400 hover:text-white inline-block hover-scale transition-smooth"
    >
      <span>
        {text}
      </span>
    </Link>
  );
};

export default Footer;
