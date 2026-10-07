import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { UserCheck, ArrowRight, GraduationCap } from 'lucide-react';
import { Language, FacultyMember } from '../types';
import { translations } from '../data/translations';
import { siteContent } from '../data/siteContent';
import { FacultyModal } from './FacultyModal';

interface FacultyProps {
  lang: Language;
}

export const Faculty: React.FC<FacultyProps> = ({ lang }) => {
  const t = translations[lang];
  const [selectedFaculty, setSelectedFaculty] = useState<FacultyMember | null>(null);

  const educators = siteContent.facultyMembers;

  return (
    <section id="faculty" className="py-20 lg:py-28 bg-[#04172D] text-white relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-[#0B2F5B]/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-3xl mx-auto mb-16 space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0B2F5B] border border-[#F4BD2E]/30 text-xs uppercase tracking-widest font-semibold text-[#FFD96A]">
            <UserCheck className="w-3.5 h-3.5 text-[#F4BD2E]" />
            <span>{t.faculty.tag}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight">
            {t.faculty.heading}
          </h2>

          <p className="text-base sm:text-lg text-gray-300">
            {t.faculty.subheading}
          </p>

          {/* Demo Data Disclaimer Badge */}
          <div className="inline-block mt-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] text-gray-400">
            {t.faculty.demoNotice}
          </div>
        </motion.div>

        {/* 4 Faculty Cards with Framer Motion Stagger */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.12,
                delayChildren: 0.1,
              },
            },
          }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {educators.map((faculty) => {
            const name = lang === 'te' ? faculty.nameTe : faculty.name;
            const designation = lang === 'te' ? faculty.designationTe : faculty.designation;
            const subject = lang === 'te' ? faculty.subjectTe : faculty.subject;

            return (
              <motion.div
                key={faculty.id}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
                  },
                }}
                className="group bg-[#061A33] border border-[#174A8B]/50 hover:border-[#F4BD2E] rounded-3xl overflow-hidden shadow-xl hover:shadow-[0_15px_30px_rgba(244,189,46,0.15)] transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between"
              >
                <div>
                  {/* Photo Container */}
                  <div className="relative aspect-square overflow-hidden bg-[#0B2F5B]">
                    <img
                      src={faculty.photo}
                      alt={name}
                      className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#061A33] via-transparent to-transparent opacity-80" />

                    {/* Demo Profile Badge */}
                    <div className="absolute top-3 right-3 bg-[#061A33]/85 backdrop-blur-md border border-[#F4BD2E]/40 px-2.5 py-0.5 rounded-full text-[10px] uppercase font-bold tracking-wider text-[#FFD96A]">
                      Demo Profile
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-5 space-y-2">
                    <span className="text-xs uppercase tracking-wider font-semibold text-[#F4BD2E] block">
                      {subject}
                    </span>

                    <h3 className="text-lg font-serif font-bold text-white group-hover:text-[#FFD96A] transition-colors leading-snug">
                      {name}
                    </h3>

                    <p className="text-xs text-gray-300 leading-normal">
                      {designation}
                    </p>

                    <div className="pt-2 flex items-center gap-1.5 text-[11px] text-gray-400">
                      <GraduationCap className="w-3.5 h-3.5 text-[#F4BD2E]" />
                      <span>{faculty.qualification}</span>
                    </div>
                  </div>
                </div>

                {/* Card Action */}
                <div className="p-5 pt-0">
                  <button
                    onClick={() => setSelectedFaculty(faculty)}
                    className="w-full py-2.5 px-3 rounded-xl bg-[#0B2F5B]/80 hover:bg-[#F4BD2E] text-gray-200 hover:text-[#061A33] border border-[#174A8B] hover:border-[#F4BD2E] text-xs font-semibold flex items-center justify-center gap-1.5 transition-all shadow-sm cursor-pointer"
                  >
                    <span>{t.faculty.btnViewProfile}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>

      {/* Profile Detail Modal */}
      <FacultyModal
        faculty={selectedFaculty}
        onClose={() => setSelectedFaculty(null)}
        lang={lang}
      />
    </section>
  );
};
