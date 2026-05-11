// src/components/sections/ProjectsSection.tsx
import { PORTFOLIO_DATA } from "@/data/portfolio";

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 px-4 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Projets Académiques & Recherche</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PORTFOLIO_DATA.projects.map((project, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition flex flex-col h-full">
              <h3 className="text-xl font-bold text-slate-900 mb-2">{project.title}</h3>
              <p className="text-slate-600 text-sm mb-4 leading-relaxed flex-grow">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-5">
                {project.tech.map((t, i) => (
                  <span key={i} className="px-2 py-1 bg-blue-50 text-blue-700 text-xs rounded-md font-medium">
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex gap-3 mt-auto">
                {project.github && project.github !== "#" && (
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-3 py-2 bg-slate-800 text-white text-sm rounded-md hover:bg-slate-700 transition"
                  >
                    🐙 Code
                  </a>
                )}
                {project.pdf && project.pdf !== "#" && (
                  <a 
                    href={project.pdf} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-3 py-2 bg-blue-600 text-white text-sm rounded-md hover:bg-blue-700 transition"
                  >
                    📄 Rapport
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}