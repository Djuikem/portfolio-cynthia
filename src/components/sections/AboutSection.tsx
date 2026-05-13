'use client';

import { useState, useEffect, useRef } from 'react';
import { GraduationCap, Globe, Mail, Phone, MapPin, Calendar, Award, BookOpen, Target } from 'lucide-react';
import { PORTFOLIO_DATA } from "@/data/portfolio";

export default function AboutSection() {
  const { personal } = PORTFOLIO_DATA;
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  // Animation d'apparition au scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: '50px' }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Données de formation (à personnaliser selon ton CV)
  const education = [
    {
      degree: "Master en Intelligence Artificielle & Big Data",
      school: "ESP Dakar",
      period: "2025 - 2027",
      icon: <BookOpen size={18} />,
      color: "indigo"
    },
    {
      degree: "Master en Sciences Mathématiques",
      school: "AIMS Sénégal",
      period: "2024 - 2025",
      icon: <Award size={18} />,
      color: "violet"
    },
    {
      degree: "Licence & Master 1 en Informatique",
      school: "Université de Douala",
      period: "2018 - 2022",
      icon: <GraduationCap size={18} />,
      color: "blue"
    }
  ];

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className="relative py-24 sm:py-32 px-4 overflow-hidden bg-white"
    >
      {/* 🎨 Arrière-plan décoratif subtil */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-50 rounded-full blur-3xl opacity-40" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-violet-50 rounded-full blur-3xl opacity-40" />
      </div>

      <div className="relative max-w-6xl mx-auto">
        
        {/* 📌 En-tête de section */}
        <div className={`text-center mb-16 sm:mb-20 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="inline-flex items-center gap-2 py-2 px-4 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-sm font-semibold mb-4">
            <GraduationCap size={14} />
            À propos
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Mon Parcours & Ma Vision
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            De la modélisation mathématique à l'Intelligence Artificielle, je combine rigueur scientifique et innovation technologique.
          </p>
        </div>

        {/* 📐 Grille principale : Bio + Infos */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          
          {/* 📝 Bio & Présentation */}
          <div className={`space-y-6 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            <div className="bg-slate-50 p-6 sm:p-8 rounded-2xl border border-slate-100 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 rounded-lg bg-indigo-100 flex items-center justify-center">
                  <Globe size={16} className="text-indigo-600" />
                </span>
                Qui suis-je ?
              </h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                {personal.bio}
              </p>
              <p className="text-slate-600 leading-relaxed">
                Passionnée par la <strong className="text-slate-800">Data Science</strong> et l'IA, 
                je m'efforce de créer des solutions qui ont un impact réel — que ce soit dans la santé, 
                l'environnement ou l'éducation.
              </p>
            </div>

            {/* 🎯 Objectifs professionnels */}
            <div className="bg-gradient-to-br from-indigo-50 to-violet-50 p-6 rounded-2xl border border-indigo-100">
              {/* <h4 className="font-semibold text-slate-800 mb-3">🎯 Objectifs</h4> */}
              <h4 className="font-semibold text-slate-800 mb-3 flex items-center gap-2">
                <Target size={18} className="text-indigo-600" />
                Objectifs
               </h4>
              <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-indigo-500 flex-shrink-0" />
                  Contribuer à des projets d'IA à impact social
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-indigo-500 flex-shrink-0" />
                  Explorer l'intersection entre mathématiques et Machine Learning
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-indigo-500 flex-shrink-0" />
                  Partager mes apprentissages avec la communauté Data
                </li>
              </ul>
            </div>
          </div>

          {/* 📋 Infos pratiques : Formation, Langues, Contact */}
          <div className={`space-y-6 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            
            {/* 🎓 Formation */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                <GraduationCap size={18} className="text-indigo-600" />
                Formation
              </h3>
              <div className="space-y-4">
                {education.map((item, index) => (
                  <div 
                    key={index}
                    className={`flex gap-3 p-3 rounded-xl transition-all duration-300 hover:bg-slate-50 ${
                      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                    }`}
                    style={{ transitionDelay: `${300 + index * 100}ms` }}
                  >
                    <div className={`w-10 h-10 rounded-lg bg-${item.color}-50 flex items-center justify-center flex-shrink-0`}>
                      {item.icon}
                    </div>
                    <div>
                      <p className="font-medium text-slate-800">{item.degree}</p>
                      <p className="text-sm text-slate-500">{item.school}</p>
                      <p className="text-xs text-slate-400 flex items-center gap-1 mt-1">
                        <Calendar size={12} /> {item.period}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 🌍 Langues & Contact */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                <Globe size={18} className="text-indigo-600" />
                Langues & Contact
              </h3>
              
              {/* Langues avec drapeaux SVG */}
              <div className="flex flex-wrap gap-3 mb-6">
                <div className="flex items-center gap-2 px-3 py-2 bg-slate-50 rounded-lg border border-slate-200">
                  <svg viewBox="0 0 900 600" className="w-6 h-4 rounded overflow-hidden border border-slate-200">
                    <rect width="300" height="600" fill="#002395"/>
                    <rect x="300" width="300" height="600" fill="#FFFFFF"/>
                    <rect x="600" width="300" height="600" fill="#ED2939"/>
                  </svg>
                  <span className="text-sm font-medium text-slate-700">Français (Natif)</span>
                </div>
                <div className="flex items-center gap-2 px-3 py-2 bg-slate-50 rounded-lg border border-slate-200">
                  <svg viewBox="0 0 60 30" className="w-6 h-4 rounded overflow-hidden border border-slate-200">
                    <rect width="60" height="30" fill="#012169"/>
                    <path d="M0,0 L60,30 M60,0 L0,30" stroke="#FFF" strokeWidth="4"/>
                    <path d="M30,0 V30 M0,15 H60" stroke="#FFF" strokeWidth="8"/>
                    <path d="M30,0 V30 M0,15 H60" stroke="#C8102E" strokeWidth="4"/>
                  </svg>
                  <span className="text-sm font-medium text-slate-700">Anglais (Courant)</span>
                </div>
              </div>

              {/* Coordonnées */}
              <div className="space-y-3">
                <a 
                  href={`mailto:${personal.email}`}
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-indigo-50 transition-colors group"
                >
                  <Mail size={18} className="text-slate-400 group-hover:text-indigo-600 transition-colors" />
                  <span className="text-sm text-slate-600 group-hover:text-indigo-700 transition-colors break-all">
                    {personal.email}
                  </span>
                </a>
                <div className="flex items-center gap-3 p-3 rounded-lg">
                  <Phone size={18} className="text-slate-400" />
                  <span className="text-sm text-slate-600">{personal.phone}</span>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg">
                  <MapPin size={18} className="text-slate-400" />
                  <span className="text-sm text-slate-600">Dakar, Sénégal 🇸🇳</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}