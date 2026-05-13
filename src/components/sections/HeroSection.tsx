// src/components/sections/HeroSection.tsx
import Image from "next/image";
import { ArrowRight, Linkedin } from "lucide-react";
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
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight tracking-tight">
          Je me nomme <br />
          <span className="bg-gradient-to-r from-indigo-600 via-violet-600 to-indigo-600 bg-clip-text text-transparent">{personal.name}</span>
        </h2>

        {/* Rôle / Titre professionnel */}
        <p className="text-lg sm:text-xl text-indigo-700 font-medium">
        Data Scientist & Étudiante en IA • Big Data
        </p>

        <p className="text-lg text-slate-600 max-w-2xl mx-auto md:mx-0 leading-relaxed">
          {personal.bio}
        </p>

        {/* Boutons d'action */}
        <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 pt-2">
        <a 
            href="#projects" 
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-indigo-600 text-white rounded-xl font-medium hover:bg-indigo-700 shadow-lg shadow-indigo-200 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
        >
            Voir mes projets
            <ArrowRight size={18} />
        </a>
        <a 
            href={personal.linkedin} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-white text-slate-700 border border-slate-200 rounded-xl font-medium hover:border-indigo-300 hover:text-indigo-600 hover:shadow-md transition-all duration-300"
        >
            <Linkedin size={18} /> LinkedIn
        </a>
        </div>

        <div className="flex flex-wrap justify-center md:justify-start gap-2 pt-4">
            {["Python", "TensorFlow", "Big Data", "EDA"].map((skill) => (
              <span key={skill} className="px-3 py-1.5 bg-slate-100 text-slate-700 text-xs font-medium rounded-lg border border-slate-200">
                {skill}
              </span>
            ))}
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