import { PORTFOLIO_DATA } from "@/data/portfolio";

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 px-4 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Compétences Techniques</h2>
      <div className="flex flex-wrap justify-center gap-3">
        {PORTFOLIO_DATA.skills.map((skill, index) => (
          <span key={index} className="px-4 py-2 bg-white border border-slate-200 rounded-lg text-slate-700 font-medium shadow-sm hover:border-blue-400 hover:text-blue-600 transition cursor-default">
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}