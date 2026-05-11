import { PORTFOLIO_DATA } from "@/data/portfolio";

export default function ContactSection() {
  const { personal } = PORTFOLIO_DATA;
  return (
    <section id="contact" className="py-20 px-4 bg-slate-50">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-slate-900 mb-6">Me Contacter</h2>
        <p className="text-slate-600 mb-8 max-w-xl mx-auto">
          Ouverte aux opportunités en Data Science, IA et analyse de données. N'hésitez pas à me contacter pour collaborer, discuter de recherche ou échanger sur les technologies émergentes.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a href={`mailto:${personal.email}`} className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition shadow-sm">
            📧 Envoyer un email
          </a>
          <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-white border border-slate-300 text-slate-700 rounded-lg font-medium hover:bg-slate-50 transition">
            💼 LinkedIn
          </a>
          <a href={personal.github} target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-white border border-slate-300 text-slate-700 rounded-lg font-medium hover:bg-slate-50 transition">
            🐙 GitHub
          </a>
        </div>
      </div>
    </section>
  );
}