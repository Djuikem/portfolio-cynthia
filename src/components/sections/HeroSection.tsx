'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { ArrowRight, Linkedin, Sparkles } from 'lucide-react';
import { PORTFOLIO_DATA } from "@/data/portfolio";

// Type pour les particules
interface Particle {
  id: number;
  top: string;
  left: string;
  delay: string;
  duration: string;
}

export default function HeroSection() {
  const { personal } = PORTFOLIO_DATA;
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });
  const [particles, setParticles] = useState<Particle[]>([]);

  // Initialisation côté client uniquement (évite l'erreur d'hydration)
  useEffect(() => {
    setIsVisible(true);
    
    // Génère les particules avec des valeurs aléatoires (client-side only)
    setParticles(
      [...Array(6)].map((_, i) => ({
        id: i,
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        delay: `${i * 0.5}s`,
        duration: `${3 + Math.random() * 2}s`,
      }))
    );
    
    // Effet de suivi de souris (desktop uniquement)
    const handleMouseMove = (e: MouseEvent) => {
      if (window.innerWidth >= 768) {
        setMousePosition({
          x: (e.clientX / window.innerWidth) * 100,
          y: (e.clientY / window.innerHeight) * 100,
        });
      }
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-16 sm:pt-24 sm:pb-20 px-4">
      
      {/* 🎨 Arrière-plan dynamique avec dégradés animés */}
      <div className="absolute inset-0 -z-20">
        {/* Dégradé de base */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-violet-50" />
        
        {/* Orbes lumineux animés */}
        <div 
          className="absolute top-1/4 left-1/4 w-72 h-72 sm:w-96 sm:h-96 bg-indigo-200 rounded-full blur-3xl opacity-30 animate-pulse"
          style={{ animationDuration: '4s' }}
        />
        <div 
          className="absolute bottom-1/4 right-1/4 w-72 h-72 sm:w-96 sm:h-96 bg-violet-200 rounded-full blur-3xl opacity-30 animate-pulse"
          style={{ animationDuration: '5s', animationDelay: '1s' }}
        />
        
        {/* Dégradé dynamique qui suit la souris (desktop) */}
        <div 
          className="hidden md:block absolute inset-0 opacity-40 transition-opacity duration-500"
          style={{
            background: `radial-gradient(600px circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(99, 102, 241, 0.15), transparent 40%)`,
          }}
        />
      </div>

      {/* ✨ Particules décoratives (points flottants) — Rendu conditionnel */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute w-1.5 h-1.5 bg-indigo-300 rounded-full opacity-40 animate-float"
            style={{
              top: particle.top,
              left: particle.left,
              animationDelay: particle.delay,
              animationDuration: particle.duration,
            }}
          />
        ))}
      </div>

      {/* Contenu principal */}
      <div className="relative max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 sm:gap-16 text-center md:text-left">
        
        {/* 📝 Contenu texte — Animation d'apparition */}
        <div 
          className={`flex-1 space-y-6 sm:space-y-8 max-w-2xl transition-all duration-700 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '100ms' }}
        >
          
          {/* Badge "Disponible" avec icône Sparkles */}
          <div className="inline-flex items-center justify-center gap-2 py-2.5 px-5 rounded-full bg-gradient-to-r from-indigo-50 to-violet-50 border border-indigo-100 text-indigo-700 text-sm font-semibold shadow-sm mx-auto md:mx-0">
            <Sparkles size={14} className="text-amber-500" />
            {/* <span className="hidden sm:inline">✨</span> */}
            Ouverte aux collaborations Data & IA
          </div>
          
          {/* Titre principal avec effet typographique */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight tracking-tight">
            <span className="block">Salut, je suis</span>
            <span className="block mt-1 bg-gradient-to-r from-indigo-600 via-violet-600 to-indigo-700 bg-clip-text text-transparent animate-gradient">
               Djuikem Tamogou Cynthia Gaelle
            </span>
          </h1>
          
          {/* Rôle professionnel */}
          <p className="text-lg sm:text-xl text-indigo-700 font-medium">
            Data Scientist • Machine Learning • Big Data
          </p>
          
          {/* Bio avec mise en valeur des mots-clés */}
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Spécialisée en{' '}
            <strong className="text-slate-800 font-semibold">Machine Learning</strong>,{' '}
            <strong className="text-slate-800 font-semibold">analyse de données</strong>{' '}
            et modélisation mathématique. Je transforme des données complexes en{' '}
            <span className="text-indigo-600 font-medium">insights actionnables</span>.
          </p>
          
          {/* Boutons d'action avec effets hover avancés */}
          <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 pt-4">
            <a 
              href="#projects" 
              className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 bg-indigo-600 text-white rounded-2xl font-semibold overflow-hidden shadow-lg shadow-indigo-200/50 hover:shadow-xl hover:shadow-indigo-300/60 transition-all duration-300 hover:-translate-y-1"
            >
              {/* Effet de brillance au hover */}
              <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700" />
              
              <span className="relative">Voir mes projets</span>
              <ArrowRight size={18} className="relative group-hover:translate-x-1 transition-transform duration-300" />
            </a>
            
            <a 
              href={personal.linkedin} 
              target="_blank" 
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-slate-700 border border-slate-200 rounded-2xl font-semibold hover:border-indigo-300 hover:text-indigo-600 hover:bg-indigo-50/50 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
            >
              <Linkedin size={18} className="group-hover:scale-110 transition-transform duration-300" />
              LinkedIn
            </a>
          </div>

          {/* Badges de compétences avec animation staggered */}
          <div className="flex flex-wrap justify-center md:justify-start gap-2.5 pt-6">
            {["Python", "TensorFlow", "Big Data", "EDA", "SQL"].map((skill, index) => (
              <span 
                key={skill}
                className={`px-4 py-2 bg-white/80 backdrop-blur-sm text-slate-700 text-xs font-medium rounded-xl border border-slate-200 shadow-sm hover:border-indigo-300 hover:text-indigo-600 hover:bg-indigo-50/80 transition-all duration-200 cursor-default transform hover:-translate-y-0.5 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
                style={{ transitionDelay: `${300 + index * 100}ms` }}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* 🖼️ Photo de profil — Cadre sophistiqué avec effets */}
        <div 
          className={`flex-shrink-0 mx-auto md:mx-0 transition-all duration-700 ease-out ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
          style={{ transitionDelay: '300ms' }}
        >
          <div className="relative">
            {/* Effet de glow animé derrière la photo */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-indigo-400 via-violet-400 to-indigo-600 opacity-30 blur-2xl animate-pulse-slow" />
            
            {/* Cadre principal avec double bordure et ombres */}
            <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72">
              {/* Bordure extérieure décorative */}
              <div className="absolute inset-0 rounded-full border-2 border-dashed border-indigo-200 animate-spin-slow" style={{ animationDuration: '20s' }} />
              
              {/* Conteneur de l'image avec ombres et anneau */}
              <div className="absolute inset-2 rounded-full overflow-hidden border-4 border-white shadow-2xl ring-4 ring-indigo-100/50 bg-slate-100">
                <Image
                  src={personal.profileImage}
                  alt={`Photo de profil de ${personal.name}`}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                  priority
                  sizes="(max-width: 768px) 192px, (max-width: 1024px) 256px, 288px"
                  style={{ objectPosition: 'center 25%' }}
                />
              </div>
              
              {/* Badge "Data Scientist" flottant */}
              <div className="absolute -bottom-2 -right-2 sm:-bottom-4 sm:-right-4 px-3 py-1.5 bg-white rounded-full shadow-lg border border-slate-100 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-xs font-medium text-slate-600 hidden sm:inline">Disponible</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 📱 Indicateur de scroll (mobile) */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 md:hidden animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-slate-300 flex items-start justify-center p-1">
          <div className="w-1.5 h-3 bg-slate-400 rounded-full animate-scroll-indicator" />
        </div>
      </div>
    </section>
  );
}