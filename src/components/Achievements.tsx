import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, GraduationCap, Award, Cpu, Sparkles, Play, CheckCircle2 } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';
import { siteContent } from '../data/siteContent';

interface AchievementsProps {
  lang: Language;
  onWatchVideo: (videoId?: string) => void;
}

export const Achievements: React.FC<AchievementsProps> = ({ lang, onWatchVideo }) => {
  const t = translations[lang];
  const items = siteContent.achievements;

  const iconMap: Record<string, React.ElementType> = {
    Trophy,
    GraduationCap,
    Award,
    Cpu,
  };

  return (
    <section id="achievements" className="py-20 lg:py-28 bg-[#04172D] text-white relative overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#F4BD2E]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#174A8B]/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-3xl mx-auto mb-16 space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0B2F5B]/80 border border-[#F4BD2E]/30 text-xs uppercase tracking-widest font-semibold text-[#FFD96A]">
            <Sparkles className="w-3.5 h-3.5 text-[#F4BD2E]" />
            <span>{t.achievementsSection.tag}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight">
            {t.achievementsSection.heading}
          </h2>

          <p className="text-base sm:text-lg text-gray-300">
            {t.achievementsSection.subheading}
          </p>
        </motion.div>

        {/* 4 Feature/Achievement Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {items.map((ach, index) => {
            const Icon = iconMap[ach.iconName] || Trophy;
            const badge = lang === 'te' ? ach.badgeTe : ach.badge;
            const title = lang === 'te' ? ach.titleTe : ach.title;
            const desc = lang === 'te' ? ach.descriptionTe : ach.description;

            return (
              <motion.div
                key={ach.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.7, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="group relative bg-[#061A33] border-2 border-[#174A8B]/60 hover:border-[#F4BD2E]/80 rounded-3xl p-7 sm:p-8 shadow-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between"
              >
                <div>
                  {/* Top Bar with Badge & Stat Counter */}
                  <div className="flex items-center justify-between gap-4 mb-5">
                    <span className="inline-block px-3 py-1 rounded-full bg-[#0B2F5B] border border-[#F4BD2E]/30 text-xs uppercase tracking-wider font-semibold text-[#FFD96A]">
                      {badge}
                    </span>

                    <div className="text-right">
                      <div className="text-2xl sm:text-3xl font-serif font-bold text-[#F4BD2E]">
                        {ach.stat}
                      </div>
                      <div className="text-[11px] text-gray-400 font-sans">
                        {ach.statLabel}
                      </div>
                    </div>
                  </div>

                  {/* Icon & Title */}
                  <div className="flex items-center gap-3.5 mb-3">
                    <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-[#0B2F5B] to-[#174A8B] border border-[#F4BD2E]/40 text-[#F4BD2E] flex items-center justify-center shadow-md shrink-0 group-hover:scale-105 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-serif font-bold text-white group-hover:text-[#FFD96A] transition-colors leading-snug">
                      {title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-gray-300 leading-relaxed mt-2">
                    {desc}
                  </p>
                </div>

                {/* Bottom Action */}
                <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-xs text-emerald-400 font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Verified Institutional Milestone</span>
                  </div>

                  <button
                    onClick={() => onWatchVideo('22A0Ek91tdo')}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/5 hover:bg-[#F4BD2E] text-gray-300 hover:text-[#061A33] text-xs font-semibold transition-all cursor-pointer"
                  >
                    <Play className="w-3 h-3 fill-current" />
                    <span>{t.achievementsSection.watchVideoPrompt}</span>
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
