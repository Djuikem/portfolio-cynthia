import { PORTFOLIO_DATA } from "@/data/portfolio";

export default function AboutSection() {
  const { personal } = PORTFOLIO_DATA;
  return (
    <section id="about" className="py-20 px-4 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">À propos de moi</h2>
      <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100">
        <p className="text-lg text-slate-600 leading-relaxed mb-6">{personal.bio}</p>
        <div className="grid md:grid-cols-2 gap-6 mt-8 border-t border-slate-100 pt-6">
          <div>
            <h3 className="font-semibold text-slate-800 mb-3">🎓 Formation</h3>
            <ul className="space-y-2 text-sm text-slate-600">
              <li>Master 1 IA & Big Data - ESP Dakar (2025-2026)</li>
              <li>Master Sciences Mathématiques - AIMS Sénégal (2024-2025)</li>
              <li>Licence/Master Informatique - Université de Douala (2018-2022)</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-slate-800 mb-3">🌍 Langues & Contact</h3>
            <p className="text-sm text-slate-600 mb-2">🇫🇷 Français (Natif) | 🇬🇧 Anglais (Courant)</p>
            <p className="text-sm text-slate-600">📧 {personal.email}</p>
            <p className="text-sm text-slate-600">📱 {personal.phone}</p>
          </div>
        </div>
      </div>
    </section>
  );
}