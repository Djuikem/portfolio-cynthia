// src/app/layout.tsx
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/ui/Navbar";

const inter = Inter({ subsets: ["latin"] });

// 🎯 Metadata pour le SEO
export const metadata: Metadata = {
  title: "Djuikem Cynthia | Data Scientist & IA",
  description: "Portfolio de Cynthia Djuikem - Data Scientist spécialisée en Machine Learning, Big Data et modélisation mathématique.",
  keywords: ["Data Scientist", "Machine Learning", "IA", "Python", "Portfolio", "Cynthia Djuikem"],
  openGraph: {
    title: "Djuikem Cynthia | Data Scientist",
    description: "Portfolio spécialisé en IA et Big Data",
    type: "website",
    locale: "fr_FR",
  },
};

// 📱 Viewport pour le responsive mobile (CRUCIAL)
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: "#2563eb", // Couleur de la barre d'adresse sur mobile
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${inter.className} bg-slate-50 text-slate-900 antialiased`}>
        <Navbar />
        <main className="min-h-screen pt-16"> {/* pt-16 pour compenser la navbar fixe */}
          {children}
        </main>
        <footer className="py-8 text-center text-slate-400 text-sm border-t border-slate-200 bg-white">
          © 2026 Djuikem Cynthia. Tous droits réservés.
        </footer>
      </body>
    </html>
  );
}