'use client';

import { GraduationCap, Globe, Mail, Phone } from 'lucide-react';
import { PORTFOLIO_DATA } from "@/data/portfolio";

export default function AboutSection() {
  const { personal } = PORTFOLIO_DATA;
  
  return (
    <section id="about" className="py-20 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">À propos de moi</h2>
        <div className="bg-slate-50 p-6 sm:p-8 rounded-2xl border border-slate-100 shadow-sm">
          <p className="text-lg text-slate-600 leading-relaxed mb-8">{personal.bio}</p>
          
          <div className="grid md:grid-cols-2 gap-8 pt-6 border-t border-slate-200">
            {/* 🎓 Formation */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <GraduationCap className="text-indigo-600" size={20} />
                <h3 className="font-semibold text-slate-800 text-lg">Formation</h3>
              </div>
              <ul className="space-y-3 text-sm text-slate-600">
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-indigo-500 flex-shrink-0" />
                  Master 1 IA & Big Data - ESP Dakar (2025-2026)
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-indigo-500 flex-shrink-0" />
                  Master Sciences Mathématiques - AIMS Sénégal (2024-2025)
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-indigo-500 flex-shrink-0" />
                  Master Informatique - Université de Douala (2018-2022)
                </li>
              </ul>
            </div>

            {/* 🌍 Langues & Contact */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Globe className="text-indigo-600" size={20} />
                <h3 className="font-semibold text-slate-800 text-lg">Langues & Contact</h3>
              </div>
              <div className="space-y-4 text-sm text-slate-600">
                
                {/* Drapeaux SVG fiables (pas de dépendance externe) */}
                <div className="flex flex-wrap gap-3">
                  {/* 🇫🇷 France */}
                  <div className="flex items-center gap-2 px-3 py-2 bg-white rounded-lg border border-slate-200 shadow-sm">
                    <svg viewBox="0 0 900 600" className="w-8 h-5 rounded overflow-hidden border border-slate-200">
                      <rect width="300" height="600" fill="#002395"/>
                      <rect x="300" width="300" height="600" fill="#FFFFFF"/>
                      <rect x="600" width="300" height="600" fill="#ED2939"/>
                    </svg>
                    <span className="font-medium text-slate-700">Français (Natif)</span>
                  </div>

                  {/* 🇬🇧 Royaume-Uni */}
                  <div className="flex items-center gap-2 px-3 py-2 bg-white rounded-lg border border-slate-200 shadow-sm">
                    <svg viewBox="0 0 60 30" className="w-8 h-5 rounded overflow-hidden border border-slate-200">
                      <rect width="60" height="30" fill="#012169"/>
                      <path d="M0,0 L60,30 M60,0 L0,30" stroke="#FFF" strokeWidth="4"/>
                      <path d="M30,0 V30 M0,15 H60" stroke="#FFF" strokeWidth="8"/>
                      <path d="M30,0 V30 M0,15 H60" stroke="#C8102E" strokeWidth="4"/>
                    </svg>
                    <span className="font-medium text-slate-700">Anglais (Courant)</span>
                  </div>
                </div>
                
                {/* Email */}
                <div className="flex items-center gap-2">
                  <Mail size={16} className="text-slate-400 flex-shrink-0" />
                  <a href={`mailto:${personal.email}`} className="hover:text-indigo-600 transition break-all">
                    {personal.email}
                  </a>
                </div>
                
                {/* Téléphone */}
                <div className="flex items-center gap-2">
                  <Phone size={16} className="text-slate-400 flex-shrink-0" />
                  <span>{personal.phone}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}