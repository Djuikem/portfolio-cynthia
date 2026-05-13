import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/ui/Navbar";

// 🎨 Configuration de la police Inter (Moderne et lisible)
const inter = Inter({
  subsets: ["latin"],
  display: "swap", // Améliore la performance de chargement
  variable: "--font-inter", // Variable CSS pour utiliser la police partout
});

// 🔍 SEO & Metadata (Pour Google, LinkedIn, WhatsApp)
export const meta: Metadata = {
  title: "Djuikem Tamogou Cynthia Gaelle | Data Scientist & IA",
  description: "Portfolio de Djuikem Tamogou Cynthia Gaelle. Data Scientist spécialisée en Machine Learning, Big Data et modélisation mathématique. Projets en Python, TensorFlow et analyse de données.",
  keywords: [
    "Data Scientist",
    "Cynthia Djuikem",
    "Machine Learning",
    "Big Data",
    "Python",
    "Deep Learning",
    "IA",
    "Portfolio",
    "AIMS Sénégal",
    "ESP Dakar"
  ],
  authors: [{ name: "Djuikem Tamogou Cynthia Gaelle" }],
  creator: "Djuikem Tamogou Cynthia Gaelle",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Djuikem Tamogou Cynthia Gaelle | Data Scientist & IA",
    description: "Découvrez mes projets en Intelligence Artificielle, Data Science et modélisation mathématique.",
    url: "https://portfolio-cynthia-sepia.vercel.app", // ️ Remplace par ton URL définitive si tu en changes
    siteName: "Portfolio Djuikem Tamogou Cynthia Gaelle",
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Djuikem Tamogou Cynthia Gaelle | Data Scientist",
    description: "Portfolio spécialisé en IA et Big Data",
  },
};

//  Thème Mobile (Couleur de la barre d'adresse Android/Safari)
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#4f46e5", // Indigo-600 : Couleur de ta marque
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className={`${inter.variable} font-sans bg-slate-50 text-slate-900 antialiased`}>
        
        {/* 🧭 Navigation Fixe en haut */}
        <Navbar />

        {/* 📄 Contenu principal */}
        <main className="flex flex-col min-h-screen pt-20">
          {children}
        </main>

        {/* 🦶 Footer Professionnel */}
        <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              
              {/* Colonne 1 : Identité */}
              <div className="md:col-span-1">
                <h3 className="text-xl font-bold text-white mb-2">Djuikem Tamogou Cynthia Gaelle</h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Data Scientist passionnée par l'innovation. 
                  Transformer les données en décisions stratégiques.
                </p>
              </div>

              {/* Colonne 2 : Navigation Rapide */}
              <div className="flex flex-col gap-2">
                <h4 className="text-white font-semibold mb-1">Navigation</h4>
                <a href="#about" className="text-sm hover:text-indigo-400 transition-colors">À propos</a>
                <a href="#projects" className="text-sm hover:text-indigo-400 transition-colors">Projets</a>
                <a href="#skills" className="text-sm hover:text-indigo-400 transition-colors">Compétences</a>
                <a href="#contact" className="text-sm hover:text-indigo-400 transition-colors">Contact</a>
              </div>

              {/* Colonne 3 : Contact & Réseaux */}
              <div className="flex flex-col gap-2">
                <h4 className="text-white font-semibold mb-1">Me suivre</h4>
                <div className="flex gap-4 mt-1">
                  <a 
                    href="https://github.com/Djuikem" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-slate-400 hover:text-white transition-colors"
                    aria-label="GitHub"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                  </a>
                  <a 
                    href="https://linkedin.com/in/cynthia-djuikem" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-slate-400 hover:text-white transition-colors"
                    aria-label="LinkedIn"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                  </a>
                  <a 
                    href="mailto:djuikem.t.c.gaelle@aims-senegal.org" 
                    className="text-slate-400 hover:text-white transition-colors"
                    aria-label="Email"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Copyright */}
            <div className="pt-8 border-t border-slate-800 text-center text-sm text-slate-500">
              <p>
                © {new Date().getFullYear()} Djuikem Tamogou Cynthia Gaelle. Tous droits réservés.
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}