'use client';

import { useState, useEffect } from 'react';
import { Menu, X, Linkedin, Github, Mail } from 'lucide-react';
import { PORTFOLIO_DATA } from "@/data/portfolio";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { personal } = PORTFOLIO_DATA;

  // Détecte le scroll pour changer le style de la navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Ferme le menu mobile quand on clique sur un lien
  const closeMenu = () => setIsMenuOpen(false);

  const navLinks = [
    { href: "#about", label: "À propos" },
    { href: "#projects", label: "Projets" },
    { href: "#skills", label: "Compétences" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm border-b border-slate-100"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* 🔹 Logo / Nom */}
          <a 
            href="#" 
            className="flex items-center gap-2 group"
            onClick={closeMenu}
          >
            <span className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent group-hover:opacity-90 transition-opacity">
              Djuikem Tamogou Cynthia Gaelle
            </span>
            <span className="hidden sm:inline text-slate-400 text-sm">•</span>
            <span className="hidden sm:inline text-slate-500 text-sm font-medium group-hover:text-indigo-600 transition-colors">
              Data Scientist
            </span>
          </a>

          {/* 🔹 Desktop Menu */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative px-4 py-2 text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors group"
              >
                {link.label}
                {/* Animated underline */}
                <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-indigo-600 transition-all duration-300 group-hover:w-3/4 group-hover:left-1/4" />
              </a>
            ))}
            
            {/* Divider */}
            <span className="w-px h-6 bg-slate-200 mx-2" />
            
            {/* Social icons */}
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-all duration-200"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-all duration-200"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
            <a
              href={`mailto:${personal.email}`}
              className="p-2 text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-all duration-200"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
          </div>

          {/* 🔹 Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-slate-600 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={isMenuOpen}
          >
            <div className="relative w-6 h-6">
              <Menu
                className={`absolute inset-0 transition-all duration-300 ${
                  isMenuOpen ? "opacity-0 rotate-90 scale-75" : "opacity-100 rotate-0 scale-100"
                }`}
              />
              <X
                className={`absolute inset-0 transition-all duration-300 ${
                  isMenuOpen ? "opacity-100 rotate-0 scale-100" : "opacity-0 -rotate-90 scale-75"
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* 🔹 Mobile Menu Dropdown */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-4 pb-4 pt-2 bg-white/95 backdrop-blur-md border-t border-slate-100 shadow-lg">
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="px-4 py-3 text-slate-600 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg font-medium transition-colors"
              >
                {link.label}
              </a>
            ))}
            
            {/* Divider */}
            <div className="my-2 border-t border-slate-100" />
            
            {/* Social links mobile */}
            <div className="flex items-center gap-2 px-2 pb-2">
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
                className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-slate-50 text-slate-700 rounded-lg hover:bg-indigo-50 hover:text-indigo-600 transition-colors text-sm font-medium"
              >
                <Linkedin size={16} /> LinkedIn
              </a>
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
                className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-slate-50 text-slate-700 rounded-lg hover:bg-indigo-50 hover:text-indigo-600 transition-colors text-sm font-medium"
              >
                <Github size={16} /> GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}