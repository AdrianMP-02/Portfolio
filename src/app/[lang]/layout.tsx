import type { Metadata, Viewport } from "next";
import { Inter, Outfit } from "next/font/google";
import "../globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Analytics as VercelAnalytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { generateJsonLd } from "@/lib/seo";
import { getDictionary } from "@/lib/dictionaries";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
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
  },
  twitter: {
    card: "summary_large_image",
    title: "Adrián Martín Pereira - Desarrollador Web Junior",
    description: "Desarrollador web junior especializado en PHP, MySQL, WordPress y Node.js. Explora mi portfolio y proyectos.",
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

export async function generateStaticParams() {
  return [{ lang: 'es' }, { lang: 'en' }]
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}>) {
  const { lang } = await params;
  const validLang = lang === 'en' ? 'en' : 'es';
  const dict = await getDictionary(validLang);

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
    <html lang={validLang} className="dark" data-scroll-behavior="smooth">
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
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      </head>
      <body
        className={`${inter.variable} ${outfit.variable} antialiased min-h-screen bg-dark-bg text-white selection:bg-primary/30`}
      >
        <VercelAnalytics />
        <SpeedInsights />

        <div className="min-h-screen">
          <Navbar dict={dict.navbar} currentLang={validLang} />
          <main>
            {children}
          </main>
          <Footer dict={dict.footer} />
        </div>
      </body>
    </html>
  );
}
