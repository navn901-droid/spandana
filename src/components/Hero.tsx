import React, { useState, useRef } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, Play, Sparkles, Award, ShieldCheck, Compass } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';
import { siteImages } from '../data/siteImages';

interface HeroProps {
  lang: Language;
  onOpenVideo: () => void;
  onNavigate: (id: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ lang, onOpenVideo, onNavigate }) => {
  const t = translations[lang];
  const heroRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const shouldReduceMotion = useReducedMotion();

  // Subtle mouse parallax effect (max 3-5 degrees)
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (shouldReduceMotion) return;
    if (!heroRef.current) return;
    const rect = heroRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: x * 6, y: y * -6 });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  return (
    <section
      id="hero"
      ref={heroRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-[92vh] lg:min-h-screen flex items-center justify-center overflow-hidden bg-[#04172D] pt-24 pb-16 lg:pt-28 lg:pb-20"
    >
      {/* Background with Slow Cinematic Zoom */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <img
          src={siteImages.heroBackground}
          alt="Spandana High School Campus & Students"
          className="w-full h-full object-cover object-center animate-slow-zoom filter brightness-[0.4] contrast-[1.1] scale-105"
          loading="eager"
        />
        {/* Cinematic Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#04172D] via-[#061A33]/92 to-[#0B2F5B]/80" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#04172D] via-transparent to-[#04172D]/90" />
        
        {/* Subtle Ambient Gold Light Mesh */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#F4BD2E]/10 rounded-full blur-3xl pointer-events-none animate-pulse-glow" />
        <div className="absolute bottom-1/3 left-1/5 w-80 h-80 bg-[#174A8B]/30 rounded-full blur-3xl pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Editorial Content with Framer Motion Stagger */}
          <div className="lg:col-span-7 text-left space-y-6 lg:space-y-8">
            
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0B2F5B]/80 border border-[#F4BD2E]/30 backdrop-blur-md shadow-sm"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#F4BD2E] animate-pulse" />
              <span className="text-xs uppercase tracking-widest font-semibold text-[#FFD96A]">
                {t.hero.eyebrow}
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-serif text-white leading-[1.12] tracking-tight font-extrabold"
            >
              <span>{t.hero.titlePart1} </span>
              <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#F4BD2E] via-[#FFD96A] to-[#F4BD2E]">
                {t.hero.titleHighlight}
                <svg
                  className="absolute left-0 -bottom-1 w-full h-2 text-[#F4BD2E]/60 pointer-events-none"
                  viewBox="0 0 100 12"
                  preserveAspectRatio="none"
                >
                  <path d="M0,7 Q50,0 100,7" fill="none" stroke="currentColor" strokeWidth="2.5" />
                </svg>
              </span>
              <br className="hidden sm:inline" />
              <span className="text-gray-100"> {t.hero.titlePart2}</span>
            </motion.h1>

            {/* Supporting Text */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl font-normal leading-relaxed"
            >
              {t.hero.subtitle}
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              <button
                onClick={() => onNavigate('academics')}
                className="group inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold bg-[#F4BD2E] hover:bg-[#FFD96A] text-[#061A33] shadow-[0_4px_20px_rgba(244,189,46,0.35)] transition-all hover:shadow-[0_8px_30px_rgba(244,189,46,0.5)] hover:-translate-y-0.5 cursor-pointer text-sm sm:text-base"
              >
                <span>{t.hero.btnExplore}</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              <button
                onClick={onOpenVideo}
                className="group inline-flex items-center gap-3 px-5 py-3.5 rounded-xl font-semibold text-white bg-[#0B2F5B]/70 hover:bg-[#0B2F5B] border border-[#174A8B] hover:border-[#F4BD2E]/50 backdrop-blur-md transition-all hover:-translate-y-0.5 shadow-sm cursor-pointer text-sm sm:text-base"
              >
                <div className="w-8 h-8 rounded-full bg-[#F4BD2E] text-[#061A33] flex items-center justify-center transition-transform group-hover:scale-110 shadow-[0_0_12px_rgba(244,189,46,0.5)]">
                  <Play className="w-3.5 h-3.5 fill-[#061A33] ml-0.5" />
                </div>
                <span>{t.hero.btnVideo}</span>
              </button>
            </motion.div>

            {/* Trust Badges Bar */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="pt-4 flex flex-wrap items-center gap-6 text-xs text-gray-300 border-t border-white/10"
            >
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#F4BD2E]" />
                <span>Racherla Campus, AP</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-[#F4BD2E]" />
                <span>Empowered Learning</span>
              </div>
              <div className="flex items-center gap-2">
                <Compass className="w-4 h-4 text-[#F4BD2E]" />
                <span>Values for Life</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Hero Visual with Gold Orbital Ring & Floating Badges */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 relative flex items-center justify-center"
          >
            {/* Interactive Tilt Container */}
            <div
              className="relative w-full max-w-md aspect-[4/5] sm:aspect-square lg:aspect-[4/5] transition-transform duration-200 ease-out"
              style={{
                transform: `perspective(1000px) rotateX(${tilt.y}deg) rotateY(${tilt.x}deg)`,
              }}
            >
              {/* Rotating Gold Orbital Ring */}
              <div className="absolute -inset-4 sm:-inset-6 border-2 border-dashed border-[#F4BD2E]/40 rounded-full animate-orbit pointer-events-none" />
              
              {/* Second subtle glowing orbital band */}
              <div className="absolute -inset-2 rounded-[3rem] border border-[#F4BD2E]/25 blur-[1px] pointer-events-none" />

              {/* Main Student Image Card */}
              <div className="relative w-full h-full rounded-[2.5rem] overflow-hidden border-2 border-[#F4BD2E]/50 shadow-[0_20px_50px_rgba(4,23,45,0.7)] bg-[#0B2F5B]">
                <img
                  src={siteImages.heroStudent}
                  alt="Spandana High School Student with Books"
                  className="w-full h-full object-cover object-top transition-transform duration-700 hover:scale-105"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#04172D] via-transparent to-transparent opacity-60" />
                
                {/* Subtle top right badge */}
                <div className="absolute top-4 right-4 bg-[#061A33]/80 backdrop-blur-md border border-[#F4BD2E]/40 rounded-full px-3 py-1 flex items-center gap-1.5 shadow-md">
                  <span className="w-2 h-2 rounded-full bg-[#F4BD2E] animate-ping" />
                  <span className="text-[11px] font-semibold text-[#FFD96A] tracking-wider uppercase">
                    Admissions Open
                  </span>
                </div>
              </div>

              {/* Floating Information Card (Bottom Left) */}
              <div className="absolute -bottom-6 -left-4 sm:-left-8 bg-[#061A33]/95 backdrop-blur-xl border border-[#F4BD2E]/50 rounded-2xl p-4 shadow-[0_12px_32px_rgba(0,0,0,0.45)] max-w-[240px] sm:max-w-[270px] animate-float z-20">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#F4BD2E] to-[#FFD96A] text-[#061A33] flex items-center justify-center font-bold text-lg shrink-0 shadow-sm">
                    25+
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5">
                      <span className="text-white font-bold text-sm font-serif">
                        {t.hero.badgeTitle}
                      </span>
                      <span className="text-[9px] uppercase tracking-wider px-1 py-0.2 rounded bg-white/10 text-gray-300">
                        Demo
                      </span>
                    </div>
                    <p className="text-xs text-gray-300 mt-1 leading-snug">
                      {t.hero.badgeText}
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating Secondary Mini Card (Top Right) */}
              <div className="hidden sm:flex absolute -top-4 -right-4 bg-[#0B2F5B]/90 backdrop-blur-md border border-[#174A8B] text-white rounded-xl px-3.5 py-2 items-center gap-2.5 shadow-lg animate-float-reverse z-20">
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                <span className="text-xs font-medium text-gray-200">
                  Racherla · SSC Board
                </span>
              </div>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};
