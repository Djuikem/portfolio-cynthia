// src/app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/ui/Navbar"; // Import de la navbar

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio Djuikem Cynthia",
  description: "Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${inter.className} bg-slate-50 text-slate-900`}>
        <Navbar /> {/* Affichage de la Navbar */}
        <main className="min-h-screen">
          {children} {/* Contenu de la page */}
        </main>
        <footer className="py-8 text-center text-slate-400 text-sm">
          © 2026 Djuikem Cynthia. Tous droits réservés.
        </footer>
      </body>
    </html>
  );
}