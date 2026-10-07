import React, { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Palette, Trophy, Users, Award, Shield, Clock, Volume2, HeartHandshake } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';

interface StudentExperienceProps {
  lang: Language;
}

export const StudentExperience: React.FC<StudentExperienceProps> = ({ lang }) => {
  const t = translations[lang];
  const shouldReduceMotion = useReducedMotion();

  // Interactive subtle tilt for each card
  const [tilt1, setTilt1] = useState({ x: 0, y: 0 });
  const [tilt2, setTilt2] = useState({ x: 0, y: 0 });

  const handleMouseMove1 = (e: React.MouseEvent<HTMLDivElement>) => {
    if (shouldReduceMotion) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt1({ x: x * 4, y: y * -4 });
  };

  const handleMouseMove2 = (e: React.MouseEvent<HTMLDivElement>) => {
    if (shouldReduceMotion) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt2({ x: x * 4, y: y * -4 });
  };

  const panel1Icons = [Palette, Trophy, Users, Award];
  const panel2Icons = [HeartHandshake, Clock, Volume2, Shield];

  return (
    <section id="experience" className="py-20 lg:py-28 bg-[#F5F8FC] text-[#10243E] relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-[#F4BD2E]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#0B2F5B]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-3xl mx-auto mb-16 space-y-3"
        >
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-[#174A8B]">
            <span className="w-6 h-[2px] bg-[#F4BD2E]" />
            <span>{t.experience.tag}</span>
            <span className="w-6 h-[2px] bg-[#F4BD2E]" />
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#061A33] tracking-tight">
            {t.experience.heading}
          </h2>

          <p className="text-base sm:text-lg text-[#6D7B8D]">
            {t.experience.subheading}
          </p>
        </motion.div>

        {/* Two Distinctly Styled Panels with Stagger Entrance */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          {/* Panel 1: EXPLORE & GROW (Skills that stay with them) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            onMouseMove={handleMouseMove1}
            onMouseLeave={() => setTilt1({ x: 0, y: 0 })}
            style={{
              transform: `perspective(1000px) rotateX(${tilt1.y}deg) rotateY(${tilt1.x}deg)`,
            }}
            className="transition-transform duration-200 ease-out bg-gradient-to-br from-[#0B2F5B] to-[#061A33] text-white rounded-3xl p-8 sm:p-10 border border-[#F4BD2E]/40 shadow-xl flex flex-col justify-between relative overflow-hidden group"
          >
            <div className="absolute -top-12 -right-12 w-32 h-32 bg-[#F4BD2E]/10 rounded-full blur-2xl pointer-events-none" />

            <div>
              <div className="inline-block px-3 py-1 rounded-full bg-[#174A8B]/70 border border-[#F4BD2E]/30 text-[11px] font-semibold tracking-wider text-[#FFD96A] uppercase mb-4">
                {t.experience.panel1.badge}
              </div>

              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white mb-1">
                {t.experience.panel1.title}
              </h3>
              <p className="text-sm font-medium text-gray-300 mb-8">
                {t.experience.panel1.subtitle}
              </p>

              {/* Items List */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {t.experience.panel1.items.map((item, idx) => {
                  const Icon = panel1Icons[idx % panel1Icons.length];
                  return (
                    <div
                      key={idx}
                      className="bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl p-4 transition-all duration-300 hover:border-[#F4BD2E]/50"
                    >
                      <div className="w-9 h-9 rounded-xl bg-[#F4BD2E] text-[#061A33] flex items-center justify-center font-bold mb-3 shadow-md">
                        <Icon className="w-5 h-5" />
                      </div>
                      <h4 className="font-serif font-bold text-white text-base mb-1">
                        {item.title}
                      </h4>
                      <p className="text-xs text-gray-300 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Bottom accent band */}
            <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-gray-300">
              <span className="font-mono text-[11px] text-[#F4BD2E]">CO-CURRICULAR EXCELLENCE</span>
              <span>Spandana Racherla</span>
            </div>
          </motion.div>

          {/* Panel 2: VALUES FOR LIFE (Growing with purpose) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            onMouseMove={handleMouseMove2}
            onMouseLeave={() => setTilt2({ x: 0, y: 0 })}
            style={{
              transform: `perspective(1000px) rotateX(${tilt2.y}deg) rotateY(${tilt2.x}deg)`,
            }}
            className="transition-transform duration-200 ease-out bg-white rounded-3xl p-8 sm:p-10 border-2 border-[#DCE5EF] hover:border-[#0B2F5B] shadow-xl flex flex-col justify-between relative overflow-hidden group"
          >
            <div className="absolute -top-12 -right-12 w-32 h-32 bg-[#0B2F5B]/5 rounded-full blur-2xl pointer-events-none" />

            <div>
              <div className="inline-block px-3 py-1 rounded-full bg-[#061A33] text-[#F4BD2E] text-[11px] font-semibold tracking-wider uppercase mb-4 shadow-sm">
                {t.experience.panel2.badge}
              </div>

              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#061A33] mb-1">
                {t.experience.panel2.title}
              </h3>
              <p className="text-sm font-medium text-[#6D7B8D] mb-8">
                {t.experience.panel2.subtitle}
              </p>

              {/* Items List */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {t.experience.panel2.items.map((item, idx) => {
                  const Icon = panel2Icons[idx % panel2Icons.length];
                  return (
                    <div
                      key={idx}
                      className="bg-[#F5F8FC] hover:bg-white border border-[#DCE5EF] hover:border-[#174A8B] rounded-2xl p-4 transition-all duration-300 shadow-sm hover:shadow-md"
                    >
                      <div className="w-9 h-9 rounded-xl bg-[#061A33] text-[#F4BD2E] flex items-center justify-center font-bold mb-3 shadow-sm">
                        <Icon className="w-5 h-5" />
                      </div>
                      <h4 className="font-serif font-bold text-[#061A33] text-base mb-1">
                        {item.title}
                      </h4>
                      <p className="text-xs text-[#6D7B8D] leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Bottom accent band */}
            <div className="mt-8 pt-4 border-t border-[#DCE5EF] flex items-center justify-between text-xs text-[#6D7B8D]">
              <span className="font-mono text-[11px] text-[#0B2F5B] font-bold">ETHICAL ANCHORS</span>
              <span>Spandana Racherla</span>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
