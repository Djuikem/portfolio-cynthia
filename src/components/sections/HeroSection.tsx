// src/components/sections/HeroSection.tsx
import Image from "next/image";
import { PORTFOLIO_DATA } from "@/data/portfolio";

export default function HeroSection() {
  const { personal } = PORTFOLIO_DATA;

  return (
    <section className="pt-32 pb-20 px-4 max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center gap-10 text-center md:text-left">
      {/* Texte */}
      <div className="flex-1 space-y-6">
        <span className="inline-block py-1 px-3 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold">
          Bienvenue sur mon portfolio
        </span>
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight">
          Je me nomme <br />
          <span className="text-blue-600">{personal.name}</span>
        </h1>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto md:mx-0 leading-relaxed">
          {personal.bio}
        </p>
        <div className="flex flex-wrap justify-center md:justify-start gap-4 pt-2">
          <a 
            href="#projects" 
            className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition shadow-sm"
          >
            Voir mes projets
          </a>
          <a 
            href={personal.linkedin} 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-6 py-3 bg-white text-slate-700 border border-slate-300 rounded-lg font-medium hover:bg-slate-50 transition"
          >
            💼 LinkedIn
          </a>
        </div>
      </div>

      {/* Photo de profil */}
      <div className="flex-shrink-0">
        <div className="relative w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-blue-100 shadow-xl ring-4 ring-white">
          <Image
            src={personal.profileImage}
            alt={`Photo de profil de ${personal.name}`}
            fill
            className="object-cover"
            priority // Charge l'image en priorité car elle est au-dessus de la ligne de flottaison
            sizes="(max-width: 768px) 100vw, 50vw"
            style={{ objectPosition: 'center 25%' }}
          />
        </div>
      </div>
    </section>
  );
}