import React, { useState, useEffect, useRef } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Calendar, Users, Trophy, Target } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';

interface StatsProps {
  lang: Language;
}

export const Stats: React.FC<StatsProps> = ({ lang }) => {
  const t = translations[lang];
  const [hasAnimated, setHasAnimated] = useState(false);
  const [counts, setCounts] = useState({ years: 0, students: 0, events: 0, excellence: 0 });
  const sectionRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          if (shouldReduceMotion) {
            setCounts({ years: 25, students: 500, events: 50, excellence: 100 });
            return;
          }

          const duration = 1800; // ms
          const startTime = performance.now();

          const animate = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const easeOut = 1 - Math.pow(1 - progress, 3);

            setCounts({
              years: Math.floor(easeOut * 25),
              students: Math.floor(easeOut * 500),
              events: Math.floor(easeOut * 50),
              excellence: Math.floor(easeOut * 100),
            });

            if (progress < 1) {
              requestAnimationFrame(animate);
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.25 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated, shouldReduceMotion]);

  const statItems = [
    {
      id: 'years',
      value: `${counts.years}+`,
      label: t.stats.years,
      icon: Calendar,
    },
    {
      id: 'students',
      value: `${counts.students}+`,
      label: t.stats.students,
      icon: Users,
    },
    {
      id: 'events',
      value: `${counts.events}+`,
      label: t.stats.events,
      icon: Trophy,
    },
    {
      id: 'excellence',
      value: `${counts.excellence}%`,
      label: t.stats.excellence,
      icon: Target,
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#061A33] border-y border-[#F4BD2E]/20 py-10 sm:py-14 text-white overflow-hidden shadow-inner"
      aria-label="School Statistics & Milestones"
    >
      {/* Background ambient accents */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#0B2F5B]/40 via-transparent to-transparent pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-4 divide-y lg:divide-y-0 lg:divide-x divide-white/10"
        >
          {statItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.id}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
                  },
                }}
                className={`pt-6 lg:pt-0 ${
                  index % 2 === 1 ? 'pl-0 sm:pl-4' : ''
                } lg:px-6 flex flex-col items-center text-center group`}
              >
                <div className="w-10 h-10 rounded-full bg-[#0B2F5B] border border-[#174A8B] flex items-center justify-center text-[#F4BD2E] mb-3 group-hover:scale-110 transition-transform">
                  <Icon className="w-5 h-5" />
                </div>
                <div className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#F4BD2E] to-[#FFD96A] tracking-tight">
                  {item.value}
                </div>
                <div className="text-xs sm:text-sm font-medium text-gray-300 mt-1 max-w-[180px] leading-snug">
                  {item.label}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Small Institutional Note / Disclaimer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-6 pt-4 border-t border-white/5"
        >
          <p className="text-[11px] text-gray-400 font-sans tracking-wide">
            {t.stats.disclaimer}
          </p>
        </motion.div>
      </div>
    </section>
  );
};
