'use client';

import React, { JSX } from 'react';
import { useState, useEffect } from 'react';
import { Github, FileText, ExternalLink, Code2, Database, Brain, ChartBar } from 'lucide-react';
import { PORTFOLIO_DATA } from "@/data/portfolio";

// Icônes dynamiques selon la techno
const getTechIcon = (tech: string) => {
  const icons: Record<string, JSX.Element> = {
    Python: <Code2 size={12} />,
    TensorFlow: <Brain size={12} />,
    "Machine Learning": <Brain size={12} />,
    "Big Data": <Database size={12} />,
    EDA: <ChartBar size={12} />,
    SQL: <Database size={12} />,
  };
  return icons[tech] || null;
};

export default function ProjectsSection() {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);

  // Animation d'apparition staggered au scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute('data-index'));
            setVisibleCards((prev) => [...prev, index].sort((a, b) => a - b));
          }
        });
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    document.querySelectorAll('[data-project-card]').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" className="relative py-24 sm:py-32 px-4 overflow-hidden">
      
      {/* 🎨 Arrière-plan décoratif subtil */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-indigo-50/30 to-white" />
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-96 h-96 bg-indigo-100 rounded-full blur-3xl opacity-20" />
        <div className="absolute bottom-20 right-1/4 w-72 h-72 bg-violet-100 rounded-full blur-3xl opacity-20" />
      </div>

      <div className="relative max-w-6xl mx-auto">
        
        {/* 📌 En-tête de section */}
        <div className="text-center mb-16 sm:mb-20">
          {/* <span className="inline-flex items-center gap-2 py-2 px-4 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-sm font-semibold mb-4">
            <Code2 size={14} />
            Projets & Recherche
          </span> */}
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Projets Académiques & Recherche
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            Découvrez mes travaux en Intelligence Artificielle, Machine Learning et modélisation mathématique.
          </p>
        </div>

        {/* 📐 Grille responsive de projets */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {PORTFOLIO_DATA.projects.map((project, index) => {
            const isVisible = visibleCards.includes(index);
            
            return (
              <article
                key={index}
                data-index={index}
                data-project-card
                className={`group relative bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl hover:border-indigo-200 transition-all duration-500 flex flex-col h-full overflow-hidden transform ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {/* ✨ Effet de brillance au hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-transparent to-violet-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                
                {/* 🏷️ Badge de catégorie (optionnel) */}
                {/* <div className="absolute top-4 right-4 z-10">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-medium text-slate-600 border border-slate-200 shadow-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                    Recherche
                  </span>
                </div> */}

                {/* 🖼️ Zone visuelle décorative en haut de carte */}
                <div className="h-2 bg-gradient-to-r from-indigo-500 via-violet-500 to-indigo-600" />

                <div className="p-6 sm:p-7 flex flex-col flex-grow">
                  
                  {/* 🔤 Titre du projet */}
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-3 group-hover:text-indigo-600 transition-colors leading-tight">
                    {project.title}
                  </h3>
                  
                  {/* 📝 Description */}
                  <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-grow">
                    {project.description}
                  </p>
                  
                  {/* 🏷️ Badges de technologies avec icônes */}
                  <div className="flex flex-wrap gap-2 mb-7">
                    {project.tech.map((tech, i) => (
                      <span 
                        key={i}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-slate-50 text-slate-700 text-xs font-medium rounded-lg border border-slate-200 hover:bg-indigo-50 hover:text-indigo-700 hover:border-indigo-200 transition-colors duration-200 cursor-default"
                      >
                        {getTechIcon(tech)}
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* 🔗 Boutons d'action */}
                  <div className="flex gap-3 mt-auto pt-4 border-t border-slate-100">
                    {project.github && project.github !== "#" && (
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="group/btn flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-slate-800 text-white text-sm font-medium rounded-xl hover:bg-slate-900 hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5"
                      >
                        <Github size={14} className="group-hover/btn:scale-110 transition-transform duration-200" />
                        Code
                        <ExternalLink size={12} className="opacity-60 group-hover/btn:opacity-100 transition-opacity" />
                      </a>
                    )}
                    {project.pdf && project.pdf !== "#" && (
                      <a 
                        href={project.pdf} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="group/btn flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-gradient-to-r from-indigo-600 to-violet-600 text-white text-sm font-medium rounded-xl hover:from-indigo-700 hover:to-violet-700 hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5"
                      >
                        <FileText size={14} className="group-hover/btn:scale-110 transition-transform duration-200" />
                        Rapport
                        <ExternalLink size={12} className="opacity-60 group-hover/btn:opacity-100 transition-opacity" />
                      </a>
                    )}
                  </div>
                </div>

                {/* ✨ Ligne décorative animée en bas */}
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-indigo-500 via-violet-500 to-indigo-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </article>
            );
          })}
        </div>

        {/* 📱 Call-to-action mobile (optionnel) */}
        <div className="text-center mt-12 md:hidden">
          <a 
            href={PORTFOLIO_DATA.personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 text-white rounded-xl font-medium hover:bg-slate-800 transition"
          >
            <Github size={18} />
            Voir plus sur GitHub
          </a>
        </div>
      </div>
    </section>
  );
}