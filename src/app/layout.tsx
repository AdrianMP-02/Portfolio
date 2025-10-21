import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Analytics from "@/components/Analytics";
import { generateJsonLd } from "@/lib/seo";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://portfolio-adrian.vercel.app'),
  title: {
    default: "Adrián Martín Pereira - Desarrollador Web Junior",
    template: "%s | Adrián Martín Pereira"
  },
  description: "Portfolio profesional de Adrián Martín Pereira, desarrollador web junior especializado en PHP, MySQL, WordPress con Elementor y Node.js. Becario en MadisonMK.",
  keywords: ["desarrollador web", "PHP", "MySQL", "WordPress", "Elementor", "Node.js", "API REST", "desarrollador junior", "portfolio", "MadisonMK"],
  authors: [{ name: "Adrián Martín Pereira" }],
  creator: "Adrián Martín Pereira",
  publisher: "Adrián Martín Pereira",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://portfolio-adrian.vercel.app",
    siteName: "Adrián Martín Pereira - Portfolio",
    title: "Adrián Martín Pereira - Desarrollador Web Junior",
    description: "Portfolio profesional de Adrián Martín Pereira, desarrollador web junior especializado en PHP, MySQL, WordPress y Node.js. Becario en MadisonMK.",
    // TODO: Crear imagen og-image.jpg de 1200x630px
    // images: [
    //   {
    //     url: "/og-image.jpg",
    //     width: 1200,
    //     height: 630,
    //     alt: "Adrián Martín Pereira - Desarrollador Backend Junior",
    //   },
    // ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Adrián Martín Pereira - Desarrollador Web Junior",
    description: "Desarrollador web junior especializado en PHP, MySQL, WordPress y Node.js. Explora mi portfolio y proyectos.",
    // TODO: Usar la misma imagen og-image.jpg cuando se cree
    // images: ["/og-image.jpg"],
  },
  verification: {
    google: "google-site-verification-code", // Añadir después
  },
  alternates: {
    canonical: "https://portfolio-adrian.vercel.app",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const personJsonLd = generateJsonLd({
    type: 'Person',
    name: 'Adrián Martín Pereira',
    description: 'Desarrollador Web Junior especializado en PHP, MySQL, WordPress con Elementor y Node.js',
    url: 'https://portfolio-adrian.vercel.app',
  });

  const websiteJsonLd = generateJsonLd({
    type: 'WebSite',
    name: 'Adrián Martín Pereira Portfolio',
    description: 'Portfolio profesional de Adrián Martín Pereira, desarrollador web junior especializado en tecnologías modernas',
    url: 'https://portfolio-adrian.vercel.app',
  });

  return (
    <html lang="es" className="dark" data-scroll-behavior="smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#3b82f6" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Adrian Portfolio" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-gray-900 text-white`}
      >
        <Analytics />
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
          <Navbar />
          <main>
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
