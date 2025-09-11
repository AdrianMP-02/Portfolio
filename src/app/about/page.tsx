import AboutContent from '@/components/AboutContent';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Acerca de mí",
  description: "Conoce a Adrián Martín Pereira, desarrollador web junior de Valladolid, España. Becario en MadisonMK especializado en PHP, MySQL, WordPress con Elementor y Node.js.",
  openGraph: {
    title: "Acerca de Adrián Martín Pereira",
    description: "Desarrollador web junior en MadisonMK, especializado en PHP, MySQL y WordPress. Conoce mi experiencia y tecnologías.",
  },
};

export default function About() {
  return <AboutContent />;
}
