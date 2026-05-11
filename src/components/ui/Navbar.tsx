// src/components/ui/Navbar.tsx
import { PORTFOLIO_DATA } from "@/data/portfolio";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-slate-200 z-50">
      <div className="max-w-5xl mx-auto px-4 py-4 flex justify-between items-center">
        <a href="#" className="font-bold text-xl text-slate-900">
          {PORTFOLIO_DATA.personal.name}
        </a>
        <div className="flex gap-6 text-sm font-medium text-slate-600">
          <a href="#about" className="hover:text-blue-600 transition">À propos</a>
          <a href="#projects" className="hover:text-blue-600 transition">Projets</a>
          <a href="#contact" className="hover:text-blue-600 transition">Contact</a>
        </div>
      </div>
    </nav>
  );
}