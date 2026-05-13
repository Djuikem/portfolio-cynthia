'use client';

import { useState, useEffect, useRef } from 'react';
import { Code2, Database, Brain, ChartBar, GitBranch, Terminal, Sparkles, Lightbulb } from 'lucide-react';

// Mapping des couleurs pour les barres de progression (évite les erreurs CSS variables)
const PROGRESS_COLORS: Record<string, string> = {
  indigo: 'linear-gradient(90deg, #4f46e5, #6366f1)',
  violet: 'linear-gradient(90deg, #7c3aed, #8b5cf6)',
  blue: 'linear-gradient(90deg, #2563eb, #3b82f6)',
  emerald: 'linear-gradient(90deg, #059669, #10b981)',
  slate: 'linear-gradient(90deg, #475569, #64748b)',
};

// Catégories de compétences
const SKILL_CATEGORIES = [
  {
    id: "languages",
    title: "Langages",
    icon: <Code2 size={18} />,
    color: "indigo",
    skills: [
      { name: "Python", level: 95 },
      { name: "SQL", level: 85 },
      { name: "R", level: 70 },
      { name: "JavaScript", level: 60 }
    ]
  },
  {
    id: "ml-ai",
    title: "ML & IA",
    icon: <Brain size={18} />,
    color: "violet",
    skills: [
      { name: "TensorFlow/Keras", level: 90 },
      { name: "Scikit-learn", level: 92 },
      { name: "PyTorch", level: 75 },
      { name: "NLP", level: 80 }
    ]
  },
  {
    id: "data",
    title: "Data Engineering",
    icon: <Database size={18} />,
    color: "blue",
    skills: [
      { name: "Pandas/NumPy", level: 95 },
      { name: "Spark", level: 70 },
      { name: "ETL Pipelines", level: 80 },
      { name: "Data Cleaning", level: 98 }
    ]
  },
  {
    id: "viz-stats",
    title: "Viz & Stats",
    icon: <ChartBar size={18} />,
    color: "emerald",
    skills: [
      { name: "Matplotlib/Seaborn", level: 90 },
      { name: "Statistiques Inférentielles", level: 88 },
      { name: "Tests d'Hypothèses", level: 85 },
      { name: "A/B Testing", level: 75 }
    ]
  },
  {
    id: "tools",
    title: "Outils & DevOps",
    icon: <Terminal size={18} />,
    color: "slate",
    skills: [
      { name: "Git/GitHub", level: 90 },
      { name: "Docker", level: 65 },
      { name: "Linux", level: 80 },
      { name: "VS Code / Jupyter", level: 95 }
    ]
  }
];

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState("languages");
  const [visibleSkills, setVisibleSkills] = useState<Set<string>>(new Set());
  const sectionRef = useRef<HTMLElement>(null);

  // Animation d'apparition au scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let delay = 0;
          const timer = setInterval(() => {
            setVisibleSkills(prev => {
              const newSet = new Set(prev);
              const allSkills = SKILL_CATEGORIES.flatMap(cat => cat.skills.map(s => `${cat.id}-${s.name}`));
              const nextSkill = allSkills.find(s => !newSet.has(s));
              if (nextSkill) {
                newSet.add(nextSkill);
                return newSet;
              }
              clearInterval(timer);
              return prev;
            });
            delay += 100;
          }, 80);
          observer.disconnect();
        }
      },
      { threshold: 0.2, rootMargin: '100px' }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Classes utilitaires pour les couleurs
  const getColorClasses = (color: string, type: 'bg' | 'text' | 'border') => {
    const map: Record<string, Record<string, string>> = {
      indigo: { bg: 'bg-indigo-50', text: 'text-indigo-700', border: 'border-indigo-200' },
      violet: { bg: 'bg-violet-50', text: 'text-violet-700', border: 'border-violet-200' },
      blue: { bg: 'bg-blue-50', text: 'text-blue-700', border: 'border-blue-200' },
      emerald: { bg: 'bg-emerald-50', text: 'text-emerald-700', border: 'border-emerald-200' },
      slate: { bg: 'bg-slate-50', text: 'text-slate-700', border: 'border-slate-200' },
    };
    return map[color]?.[type] || map.slate[type];
  };

  const activeCat = SKILL_CATEGORIES.find(c => c.id === activeCategory)!;

  return (
    <section 
      id="skills" 
      ref={sectionRef}
      className="relative py-24 sm:py-32 px-4 overflow-hidden bg-slate-50"
    >
      {/* Arrière-plan décoratif */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-100 rounded-full blur-3xl opacity-20" />
      </div>

      <div className="relative max-w-6xl mx-auto">
        
        {/* En-tête */}
        <div className="text-center mb-16 sm:mb-20">
          <span className="inline-flex items-center gap-2 py-2 px-4 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-sm font-semibold mb-4">
            <Sparkles size={14} />
            Compétences
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Expertise Technique
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            Un ensemble de compétences acquises au fil de mes formations et projets, 
            toujours en évolution pour rester à la pointe de l'innovation Data.
          </p>
        </div>

        {/* Onglets */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {SKILL_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl font-medium text-sm transition-all duration-300 ${
                activeCategory === cat.id
                  ? `${getColorClasses(cat.color, 'bg')} ${getColorClasses(cat.color, 'text')} border ${getColorClasses(cat.color, 'border')} shadow-sm`
                  : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50 hover:text-slate-800'
              }`}
            >
              {cat.icon}
              {cat.title}
            </button>
          ))}
        </div>

        {/* Grille des compétences */}
        <div className="grid md:grid-cols-2 gap-6">
          {activeCat.skills.map((skill, index) => {
            const skillId = `${activeCat.id}-${skill.name}`;
            const isVisible = visibleSkills.has(skillId);
            
            return (
              <div
                key={skill.name}
                className={`bg-white p-5 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all duration-500 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
                style={{ transitionDelay: `${index * 80}ms` }}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="font-semibold text-slate-800">{skill.name}</span>
                  <span className={`text-sm font-medium ${getColorClasses(activeCat.color, 'text')}`}>
                    {skill.level}%
                  </span>
                </div>
                
                {/* Barre de progression corrigée */}
                <div className="h-2.5 bg-slate-100 rounded-full overflow-hidden">
                  <div 
                    className="h-full rounded-full transition-all duration-1000 ease-out"
                    style={{ 
                      width: isVisible ? `${skill.level}%` : '0%',
                      background: PROGRESS_COLORS[activeCat.color] || PROGRESS_COLORS.indigo
                    }}
                  />
                </div>
                
                <div className="flex justify-between mt-2 text-xs text-slate-400">
                  <span>Débutant</span>
                  <span>Expert</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Note contextuelle */}
        <div className="mt-12 text-center">
          <p className="text-sm text-slate-500 italic flex items-start gap-2">
            <Lightbulb size={14} className="text-amber-500 flex-shrink-0 mt-0.5" />
            <span>
                Les niveaux reflètent mon expérience pratique sur des projets concrets. 
                Je suis en apprentissage continu et toujours ouverte à découvrir de nouvelles technologies !
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}