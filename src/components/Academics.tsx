import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Check, Sparkles, BookOpen, GraduationCap, X } from 'lucide-react';
import { Language, AcademicProgram } from '../types';
import { translations } from '../data/translations';
import { siteContent } from '../data/siteContent';

interface AcademicsProps {
  lang: Language;
  onNavigateToAdmissions: () => void;
}

export const Academics: React.FC<AcademicsProps> = ({
  lang,
  onNavigateToAdmissions,
}) => {
  const t = translations[lang];
  const [selectedProgram, setSelectedProgram] = useState<AcademicProgram | null>(null);

  const programs = siteContent.academicPrograms;

  return (
    <section id="academics" className="py-20 lg:py-28 bg-[#04172D] text-white relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#0B2F5B]/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#F4BD2E]/10 rounded-full blur-3xl pointer-events-none" />

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
            <BookOpen className="w-3.5 h-3.5 text-[#F4BD2E]" />
            <span>{t.academics.tag}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight">
            {t.academics.heading}
          </h2>

          <p className="text-base sm:text-lg text-gray-300">
            {t.academics.subheading}
          </p>
        </motion.div>

        {/* 3 Premium Academic Cards with Framer Motion Stagger */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.15,
                delayChildren: 0.1,
              },
            },
          }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {programs.map((program) => {
            const title = lang === 'te' ? program.titleTe : program.title;
            const category = lang === 'te' ? program.categoryTe : program.category;
            const description = lang === 'te' ? program.descriptionTe : program.description;
            const features = lang === 'te' ? program.featuresTe : program.features;

            return (
              <motion.div
                key={program.id}
                variants={{
                  hidden: { opacity: 0, y: 35 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
                  },
                }}
                className="group relative bg-[#061A33] border border-[#174A8B]/60 hover:border-[#F4BD2E]/80 rounded-3xl overflow-hidden shadow-xl hover:shadow-[0_20px_40px_rgba(244,189,46,0.15)] transition-all duration-500 hover:-translate-y-2 flex flex-col justify-between"
              >
                {/* Image Container with Zoom effect */}
                <div className="relative h-60 overflow-hidden">
                  <img
                    src={program.image}
                    alt={title}
                    className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#061A33] via-[#061A33]/40 to-transparent" />

                  {/* Stage Grade Tag */}
                  <div className="absolute top-4 left-4 bg-[#061A33]/85 backdrop-blur-md border border-[#F4BD2E]/40 px-3 py-1 rounded-full text-xs font-semibold text-[#FFD96A] shadow-sm">
                    {program.grades}
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                  <div className="space-y-3">
                    <span className="text-xs uppercase tracking-widest font-semibold text-[#F4BD2E]">
                      {category}
                    </span>

                    <h3 className="text-2xl font-serif font-bold text-white group-hover:text-[#FFD96A] transition-colors">
                      {title}
                    </h3>

                    <p className="text-sm text-gray-300 leading-relaxed">
                      {description}
                    </p>

                    {/* Key features bullet points */}
                    <ul className="space-y-2 pt-2 border-t border-white/10" aria-label={`${title} key features`}>
                      {features.slice(0, 3).map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-gray-300">
                          <Check className="w-3.5 h-3.5 text-[#F4BD2E] shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Action CTA */}
                  <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between">
                    <button
                      onClick={() => setSelectedProgram(program)}
                      className="inline-flex items-center gap-2 text-xs font-semibold text-[#F4BD2E] group-hover:text-[#FFD96A] hover:underline cursor-pointer"
                    >
                      <span>{t.academics.ctaDetails}</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                    </button>

                    <span className="w-8 h-8 rounded-full bg-[#0B2F5B] text-[#F4BD2E] border border-[#174A8B] flex items-center justify-center transition-colors group-hover:bg-[#F4BD2E] group-hover:text-[#061A33]">
                      <GraduationCap className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>

      {/* Curriculum Details Modal */}
      <AnimatePresence>
        {selectedProgram && (
          <div
            role="dialog"
            aria-modal="true"
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm"
            onClick={() => setSelectedProgram(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-full max-w-2xl bg-[#061A33] border border-[#F4BD2E]/40 rounded-3xl p-6 sm:p-8 shadow-2xl text-left"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedProgram(null)}
                className="absolute top-5 right-5 p-2 rounded-full text-gray-400 hover:text-white hover:bg-white/10 cursor-pointer"
                aria-label={t.academics.modalClose}
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#0B2F5B] border border-[#F4BD2E]/50 flex items-center justify-center text-[#F4BD2E]">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-wider text-[#F4BD2E] font-semibold">
                    {lang === 'te' ? selectedProgram.categoryTe : selectedProgram.category} ({selectedProgram.grades})
                  </span>
                  <h3 className="text-2xl font-serif font-bold text-white">
                    {lang === 'te' ? selectedProgram.titleTe : selectedProgram.title}
                  </h3>
                </div>
              </div>

              <p className="text-sm sm:text-base text-gray-300 leading-relaxed mb-6">
                {lang === 'te' ? selectedProgram.descriptionTe : selectedProgram.description}
              </p>

              <div className="bg-[#04172D] p-5 rounded-2xl border border-white/10 mb-6">
                <h4 className="text-sm font-semibold text-[#FFD96A] mb-3 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#F4BD2E]" />
                  <span>{lang === 'en' ? 'Core Curriculum & Methodologies' : 'బోధనా ప్రణాళిక & ప్రత్యేకతలు'}</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {(lang === 'te' ? selectedProgram.featuresTe : selectedProgram.features).map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-gray-200">
                      <Check className="w-4 h-4 text-[#F4BD2E] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between pt-2">
                <button
                  onClick={() => setSelectedProgram(null)}
                  className="px-4 py-2 rounded-xl text-xs font-medium text-gray-300 hover:text-white bg-white/5 hover:bg-white/10 cursor-pointer"
                >
                  {t.academics.modalClose}
                </button>

                <button
                  onClick={() => {
                    setSelectedProgram(null);
                    onNavigateToAdmissions();
                  }}
                  className="px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold bg-[#F4BD2E] hover:bg-[#FFD96A] text-[#061A33] shadow-md flex items-center gap-1.5 cursor-pointer"
                >
                  <span>{t.admissions.form.submitBtn}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
