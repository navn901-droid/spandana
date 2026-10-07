import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Award, BookOpen, GraduationCap, Briefcase, Heart, Sparkles } from 'lucide-react';
import { FacultyMember, Language } from '../types';
import { translations } from '../data/translations';

interface FacultyModalProps {
  faculty: FacultyMember | null;
  onClose: () => void;
  lang: Language;
}

export const FacultyModal: React.FC<FacultyModalProps> = ({ faculty, onClose, lang }) => {
  const t = translations[lang];

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (faculty) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [faculty, onClose]);

  return (
    <AnimatePresence>
      {faculty && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-faculty-name"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full max-w-3xl bg-[#061A33] border-2 border-[#F4BD2E]/50 rounded-3xl overflow-hidden shadow-2xl text-white max-h-[90vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header Bar */}
            <div className="flex items-center justify-between p-4 sm:p-6 border-b border-white/10 bg-[#04172D]">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#F4BD2E]" />
                <span className="text-xs uppercase tracking-widest text-[#FFD96A] font-semibold">
                  Faculty Dossier · Spandana High School
                </span>
              </div>

              <button
                onClick={onClose}
                className="p-2 rounded-full text-gray-400 hover:text-white hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-[#F4BD2E] cursor-pointer"
                aria-label={t.faculty.modal.closeBtn}
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
              
              {/* Demo Alert Banner */}
              <div className="px-4 py-2.5 rounded-xl bg-[#F4BD2E]/10 border border-[#F4BD2E]/30 flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs text-[#FFD96A]">
                  <Sparkles className="w-4 h-4 text-[#F4BD2E] shrink-0" />
                  <span>{t.faculty.demoNotice}</span>
                </div>
                <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-[#F4BD2E] text-[#061A33]">
                  Demo
                </span>
              </div>

              {/* Profile Overview */}
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
                <div className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-2xl overflow-hidden border-2 border-[#F4BD2E]/60 shrink-0 shadow-lg bg-[#0B2F5B]">
                  <img
                    src={faculty.photo}
                    alt={lang === 'te' ? faculty.nameTe : faculty.name}
                    className="w-full h-full object-cover object-top"
                  />
                </div>

                <div className="text-center sm:text-left space-y-2 flex-1">
                  <h3 id="modal-faculty-name" className="text-2xl sm:text-3xl font-serif font-bold text-white">
                    {lang === 'te' ? faculty.nameTe : faculty.name}
                  </h3>
                  <p className="text-sm font-semibold text-[#F4BD2E]">
                    {lang === 'te' ? faculty.designationTe : faculty.designation}
                  </p>
                  <div className="inline-block px-3 py-1 rounded-full bg-[#0B2F5B] border border-[#174A8B] text-xs text-gray-200">
                    {lang === 'te' ? faculty.subjectTe : faculty.subject}
                  </div>
                </div>
              </div>

              {/* Credentials Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-[#04172D] p-4 rounded-2xl border border-white/10">
                  <div className="flex items-center gap-2 text-xs text-gray-400 mb-1">
                    <GraduationCap className="w-4 h-4 text-[#F4BD2E]" />
                    <span>{t.faculty.modal.qualification}</span>
                  </div>
                  <div className="text-sm font-semibold text-white">
                    {faculty.qualification}
                  </div>
                </div>

                <div className="bg-[#04172D] p-4 rounded-2xl border border-white/10">
                  <div className="flex items-center gap-2 text-xs text-gray-400 mb-1">
                    <Award className="w-4 h-4 text-[#F4BD2E]" />
                    <span>{t.faculty.modal.specialization}</span>
                  </div>
                  <div className="text-sm font-semibold text-white">
                    {faculty.specialization}
                  </div>
                </div>

                <div className="bg-[#04172D] p-4 rounded-2xl border border-white/10">
                  <div className="flex items-center gap-2 text-xs text-gray-400 mb-1">
                    <Briefcase className="w-4 h-4 text-[#F4BD2E]" />
                    <span>{t.faculty.modal.experience}</span>
                  </div>
                  <div className="text-sm font-semibold text-white">
                    {faculty.experience}
                  </div>
                </div>

                <div className="bg-[#04172D] p-4 rounded-2xl border border-white/10">
                  <div className="flex items-center gap-2 text-xs text-gray-400 mb-1">
                    <BookOpen className="w-4 h-4 text-[#F4BD2E]" />
                    <span>{t.faculty.modal.classesHandled}</span>
                  </div>
                  <div className="text-sm font-semibold text-white">
                    {faculty.classesHandled}
                  </div>
                </div>
              </div>

              {/* Teaching Philosophy */}
              <div className="bg-gradient-to-r from-[#0B2F5B]/50 to-[#04172D] p-5 rounded-2xl border border-[#174A8B]/60">
                <div className="flex items-center gap-2 text-xs font-semibold text-[#FFD96A] mb-2 uppercase tracking-wider">
                  <Heart className="w-4 h-4 text-[#F4BD2E]" />
                  <span>{t.faculty.modal.philosophyTitle}</span>
                </div>
                <p className="text-sm text-gray-300 italic leading-relaxed">
                  "{lang === 'te' ? faculty.philosophyTe : faculty.philosophy}"
                </p>
              </div>

            </div>

            {/* Footer */}
            <div className="p-4 sm:p-5 border-t border-white/10 bg-[#04172D] flex items-center justify-end">
              <button
                onClick={onClose}
                className="px-6 py-2.5 rounded-xl font-semibold bg-[#F4BD2E] hover:bg-[#FFD96A] text-[#061A33] text-sm shadow-md transition-colors cursor-pointer"
              >
                {t.faculty.modal.closeBtn}
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
