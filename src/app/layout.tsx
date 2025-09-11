import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mi Portfolio Personal",
  description: "Portfolio personal con blog de proyectos y actualizaciones profesionales",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-gray-900 text-white`}
      >
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
