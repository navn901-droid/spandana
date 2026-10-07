import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Globe, PhoneCall } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';
import { siteContent } from '../data/siteContent';

interface HeaderProps {
  lang: Language;
  onLanguageChange: (lang: Language) => void;
  activeSection: string;
}

export const Header: React.FC<HeaderProps> = ({
  lang,
  onLanguageChange,
  activeSection,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const t = translations[lang];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileMenuOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const navLinks = [
    { id: 'about', label: t.nav.about },
    { id: 'achievements', label: t.nav.achievements },
    { id: 'academics', label: t.nav.academics },
    { id: 'campus', label: t.nav.campus },
    { id: 'experience', label: t.nav.activities },
    { id: 'faculty', label: t.nav.faculty },
    { id: 'video', label: lang === 'en' ? 'Video' : 'వీడియో' },
    { id: 'admissions', label: t.nav.admissions },
    { id: 'contact', label: t.nav.contact },
  ];

  const handleNavClick = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -75;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#061A33]/92 backdrop-blur-md border-b border-[#DCE5EF]/15 py-3 shadow-[0_4px_24px_rgba(4,23,45,0.4)]'
            : 'bg-gradient-to-b from-[#04172D]/90 via-[#061A33]/50 to-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo Branding */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center gap-3.5 group text-left focus:outline-none focus:ring-2 focus:ring-[#F4BD2E]/50 rounded-lg p-1"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#0B2F5B] to-[#061A33] border border-[#F4BD2E]/60 flex items-center justify-center text-[#F4BD2E] font-bold text-xl shadow-[0_0_15px_rgba(244,189,46,0.3)] transition-transform group-hover:scale-105">
              <span>S</span>
            </div>
            <div>
              <div className="font-serif text-white font-bold tracking-wider text-base sm:text-lg leading-tight flex items-center gap-1.5">
                <span>SPANDANA</span>
                <span className="text-[#F4BD2E] text-xs font-sans uppercase tracking-widest font-semibold px-1.5 py-0.5 rounded bg-[#F4BD2E]/10 border border-[#F4BD2E]/30">
                  HIGH SCHOOL
                </span>
              </div>
              <div className="text-[#6D7B8D] text-xs tracking-wider font-sans group-hover:text-gray-300 transition-colors">
                Racherla | Prakasam District
              </div>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`relative px-3 py-1.5 text-sm font-medium transition-colors cursor-pointer rounded-md ${
                    isActive
                      ? 'text-[#F4BD2E]'
                      : 'text-gray-200 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-[#F4BD2E] rounded-full shadow-[0_0_6px_rgba(244,189,46,0.8)]" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right Action: Language Switcher + Apply Now CTA */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Bilingual Switcher */}
            <div className="flex items-center bg-[#0B2F5B]/70 border border-[#174A8B]/60 p-0.5 rounded-full backdrop-blur-sm text-xs">
              <button
                type="button"
                onClick={() => onLanguageChange('en')}
                aria-pressed={lang === 'en'}
                className={`px-2.5 py-1 rounded-full font-medium transition-all ${
                  lang === 'en'
                    ? 'bg-[#F4BD2E] text-[#061A33] font-bold shadow-sm'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                EN
              </button>
              <button
                type="button"
                onClick={() => onLanguageChange('te')}
                aria-pressed={lang === 'te'}
                className={`px-2.5 py-1 rounded-full font-medium transition-all font-telugu ${
                  lang === 'te'
                    ? 'bg-[#F4BD2E] text-[#061A33] font-bold shadow-sm'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                తెలుగు
              </button>
            </div>

            {/* Apply Now Button */}
            <button
              onClick={() => handleNavClick('admissions')}
              className="group relative inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-semibold bg-[#F4BD2E] hover:bg-[#FFD96A] text-[#061A33] shadow-[0_4px_16px_rgba(244,189,46,0.35)] transition-all hover:shadow-[0_6px_20px_rgba(244,189,46,0.5)] hover:-translate-y-0.5 cursor-pointer"
            >
              <span>{t.nav.applyNow}</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </div>

          {/* Mobile Navigation Toggle */}
          <div className="flex items-center gap-2 lg:hidden">
            {/* Mobile Language Pill */}
            <button
              type="button"
              onClick={() => onLanguageChange(lang === 'en' ? 'te' : 'en')}
              className="sm:hidden flex items-center gap-1 px-2 py-1 text-xs font-semibold rounded-md bg-[#0B2F5B] text-[#F4BD2E] border border-[#F4BD2E]/40"
              aria-label="Switch Language"
            >
              <Globe className="w-3.5 h-3.5" />
              <span>{lang === 'en' ? 'తెలుగు' : 'EN'}</span>
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-gray-200 hover:text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-[#F4BD2E]"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 lg:hidden flex flex-col justify-end bg-black/60 backdrop-blur-sm animate-fadeIn"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            className="w-full max-h-[85vh] overflow-y-auto bg-[#061A33] border-t border-[#F4BD2E]/30 rounded-t-3xl p-6 shadow-2xl flex flex-col gap-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-3 border-b border-[#DCE5EF]/15">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-[#F4BD2E] text-[#061A33] flex items-center justify-center font-bold text-base">
                  S
                </div>
                <div>
                  <div className="text-white font-serif font-bold text-sm tracking-wide">
                    SPANDANA HIGH SCHOOL
                  </div>
                  <div className="text-xs text-[#6D7B8D]">Racherla, Prakasam Dist</div>
                </div>
              </div>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-1.5 rounded-lg text-gray-400 hover:text-white hover:bg-white/10"
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Language Switch in Drawer */}
            <div className="flex items-center justify-between py-2 px-3 rounded-xl bg-[#0B2F5B]/50 border border-[#174A8B]/40">
              <span className="text-xs text-gray-300 flex items-center gap-1.5">
                <Globe className="w-4 h-4 text-[#F4BD2E]" />
                Select Language / భాష:
              </span>
              <div className="flex gap-1.5">
                <button
                  type="button"
                  onClick={() => onLanguageChange('en')}
                  className={`px-3 py-1 rounded-md text-xs font-semibold ${
                    lang === 'en'
                      ? 'bg-[#F4BD2E] text-[#061A33]'
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  English
                </button>
                <button
                  type="button"
                  onClick={() => onLanguageChange('te')}
                  className={`px-3 py-1 rounded-md text-xs font-semibold font-telugu ${
                    lang === 'te'
                      ? 'bg-[#F4BD2E] text-[#061A33]'
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  తెలుగు
                </button>
              </div>
            </div>

            {/* Links list */}
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`text-left px-3.5 py-2.5 rounded-xl font-medium text-base transition-colors ${
                    activeSection === link.id
                      ? 'bg-[#0B2F5B] text-[#F4BD2E] font-semibold'
                      : 'text-gray-200 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </div>

            {/* Drawer CTAs */}
            <div className="pt-2 flex flex-col gap-2.5">
              <button
                onClick={() => handleNavClick('admissions')}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl font-semibold bg-[#F4BD2E] hover:bg-[#FFD96A] text-[#061A33] shadow-md"
              >
                <span>{t.nav.applyNow}</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
              <a
                href={`tel:${siteContent.contact.phoneTel}`}
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs font-medium text-gray-300 bg-[#0B2F5B]/40 hover:bg-[#0B2F5B] border border-[#174A8B]/40 transition-colors"
              >
                <PhoneCall className="w-3.5 h-3.5 text-[#F4BD2E]" />
                <span>Call Admissions: {siteContent.contact.phoneDisplay}</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
