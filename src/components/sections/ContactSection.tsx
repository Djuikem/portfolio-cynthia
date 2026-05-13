'use client';

import { Mail, Linkedin, Github } from 'lucide-react';
import { PORTFOLIO_DATA } from "@/data/portfolio";

export default function ContactSection() {
  const { personal } = PORTFOLIO_DATA;
  
  return (
    <section id="contact" className="py-20 px-4 bg-white">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-slate-900 mb-6">Me Contacter</h2>
        <p className="text-slate-600 mb-10 max-w-xl mx-auto">
          Ouverte aux opportunités en Data Science, IA et analyse de données. N'hésitez pas à me contacter pour collaborer, discuter de recherche ou échanger sur les technologies émergentes.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a 
            href={`mailto:${personal.email}`} 
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-xl font-medium hover:bg-indigo-700 transition shadow-sm"
          >
            <Mail size={18} /> Envoyer un email
          </a>
          
          <a 
            href={personal.linkedin} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-slate-700 border border-slate-200 rounded-xl font-medium hover:border-indigo-300 hover:text-indigo-600 transition"
          >
            <Linkedin size={18} /> LinkedIn
          </a>
          
          <a 
            href={personal.github} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-slate-700 border border-slate-200 rounded-xl font-medium hover:border-indigo-300 hover:text-indigo-600 transition"
          >
            <Github size={18} /> GitHub
          </a>
        </div>
      </div>
    </section>
  );
}