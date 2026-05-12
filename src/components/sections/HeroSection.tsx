import Image from "next/image";
import { PORTFOLIO_DATA } from "@/data/portfolio";

export default function HeroSection() {
  const { personal } = PORTFOLIO_DATA;

  return (
    <section className="relative pt-24 pb-16 sm:pt-32 sm:pb-24 px-4 overflow-hidden">
      {/* Dégradé subtil en arrière-plan */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-background to-background pointer-events-none" />
      
      <div className="relative max-w-5xl mx-auto flex flex-col items-center gap-10 sm:gap-14 text-center">
        
        {/* Photo de profil */}
        <div className="flex-shrink-0 order-1">
          <div className="relative w-40 h-40 sm:w-52 sm:h-52 md:w-64 md:h-64 mx-auto">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary-200 to-secondary-500 opacity-30 blur-xl" />
            <div className="relative rounded-full overflow-hidden border-4 border-white shadow-lg ring-4 ring-primary-100">
              <Image
                src={personal.profileImage}
                alt={`Photo de profil de ${personal.name}`}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 640px) 160px, (max-width: 768px) 208px, 256px"
                style={{ objectPosition: 'center 20%' }}
              />
            </div>
          </div>
        </div>

        {/* Contenu texte */}
        <div className="flex-1 order-2 space-y-5 sm:space-y-7 max-w-3xl">
          <span className="inline-flex items-center gap-2 py-2 px-4 rounded-full bg-primary-100 text-primary-700 text-sm font-semibold">
            <span className="w-2 h-2 rounded-full bg-accent-500 animate-pulse" />
            Disponible pour des collaborations
          </span>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-text-primary leading-tight">
            Bonjour, je suis <br />
            <span className="text-primary-600">
              {personal.name}
            </span>
          </h1>
          
          <p className="text-lg sm:text-xl text-text-secondary leading-relaxed max-w-2xl mx-auto">
            {personal.bio}
          </p>
          
          {/* Boutons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
            <a 
              href="#projects" 
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary-600 text-white rounded-xl font-medium hover:bg-primary-700 shadow-sm hover:shadow-lg active:scale-95 transition-all duration-200"
            >
              Voir mes projets
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a 
              href={personal.linkedin} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-background-card text-text-primary border border-border rounded-xl font-medium hover:bg-primary-50 hover:border-primary-300 hover:text-primary-700 active:scale-95 transition-all duration-200"
            >
              💼 LinkedIn
            </a>
          </div>

          {/* Badges compétences */}
          <div className="flex flex-wrap justify-center gap-2 pt-4">
            {["Python", "Machine Learning", "TensorFlow", "Big Data"].map((skill) => (
              <span key={skill} className="px-3 py-1.5 bg-primary-50 text-primary-700 text-sm font-medium rounded-lg border border-primary-100">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}