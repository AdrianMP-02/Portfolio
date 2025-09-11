'use client';

import Link from "next/link";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      <main className="pt-20 pb-16">
        <section className="px-6 py-20">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
              Hola, soy Adrián Martín Pereira
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Desarrollador Web Junior especializado en{" "}
              <span className="text-blue-400 font-semibold">PHP, MySQL y WordPress</span>{" "}
              con experiencia en Node.js y desarrollo de aplicaciones web modernas
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8 mb-8">
              <Link
                href="/projects"
                className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center gap-2 hover:shadow-2xl hover:shadow-blue-500/25"
              >
                Ver mis proyectos
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              <Link
                href="/contact"
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 text-white px-8 py-4 rounded-xl font-semibold hover:bg-gray-700/50 hover:border-gray-600 transition-all duration-300"
              >
                Contáctame
              </Link>
            </div>

            {/* Social Links */}
            <div className="flex justify-center space-x-6">
              <SocialLink href="https://github.com/AdrianMP-02" icon={<Github size={24} />} label="GitHub" />
              <SocialLink href="https://www.linkedin.com/in/adrián-martín-pereira-167813222/" icon={<Linkedin size={24} />} label="LinkedIn" />
              <SocialLink href="mailto:adrian.m.p.02022002@gmail.com" icon={<Mail size={24} />} label="Email" />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

interface SocialLinkProps {
  href: string;
  icon: React.ReactNode;
  label: string;
}

const SocialLink = ({ href, icon, label }: SocialLinkProps) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-400 hover:text-white p-3 rounded-full hover:bg-gray-800/50 transition-all duration-300 hover:scale-110 hover:-translate-y-1"
      aria-label={label}
    >
      {icon}
    </a>
  );
};
