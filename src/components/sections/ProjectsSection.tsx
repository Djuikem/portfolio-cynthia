'use client';

import { Github, FileText } from 'lucide-react';
import { PORTFOLIO_DATA } from "@/data/portfolio";

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 px-4 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Projets Académiques & Recherche</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PORTFOLIO_DATA.projects.map((project, index) => (
            <article key={index} className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col h-full">
              <h3 className="text-xl font-bold text-slate-900 mb-3">{project.title}</h3>
              <p className="text-slate-600 text-sm mb-5 leading-relaxed flex-grow">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech, i) => (
                  <span key={i} className="px-2.5 py-1 bg-indigo-50 text-indigo-700 text-xs font-medium rounded-md border border-indigo-100">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-3 mt-auto">
                {project.github && project.github !== "#" && (
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-slate-800 text-white text-sm rounded-lg hover:bg-slate-900 transition"
                  >
                    <Github size={16} /> Code
                  </a>
                )}
                {project.pdf && project.pdf !== "#" && (
                  <a 
                    href={project.pdf} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-indigo-600 text-white text-sm rounded-lg hover:bg-indigo-700 transition"
                  >
                    <FileText size={16} /> Rapport
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}