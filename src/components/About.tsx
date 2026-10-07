import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Heart, Sparkles, Shield, CheckCircle2, ArrowRight } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';
import { siteImages } from '../data/siteImages';

interface AboutProps {
  lang: Language;
  onNavigate: (id: string) => void;
}

export const About: React.FC<AboutProps> = ({ lang, onNavigate }) => {
  const t = translations[lang];

  const features = [
    {
      icon: BookOpen,
      title: t.about.feature1Title,
      desc: t.about.feature1Desc,
      border: 'border-[#174A8B]/30',
    },
    {
      icon: Heart,
      title: t.about.feature2Title,
      desc: t.about.feature2Desc,
      border: 'border-[#F4BD2E]/40',
    },
    {
      icon: Sparkles,
      title: t.about.feature3Title,
      desc: t.about.feature3Desc,
      border: 'border-[#174A8B]/30',
    },
    {
      icon: Shield,
      title: t.about.feature4Title,
      desc: t.about.feature4Desc,
      border: 'border-[#F4BD2E]/40',
    },
  ];

  return (
    <section id="about" className="py-20 lg:py-28 bg-[#F5F8FC] text-[#10243E] relative overflow-hidden">
      {/* Subtle background graphics */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#174A8B]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#F4BD2E]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Editorial Multi-layer Image Composition */}
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-6 relative"
          >
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              
              {/* Gold frame backing element */}
              <div className="absolute -top-4 -left-4 w-full h-full border-2 border-[#F4BD2E]/40 rounded-3xl -z-10 transform -rotate-1 hidden sm:block" />
              
              {/* Primary Large Image */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-[#DCE5EF] bg-white aspect-[4/3] sm:aspect-[14/11]">
                <img
                  src={siteImages.aboutMain}
                  alt="Students engaged in classroom learning at Spandana High School"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#061A33]/70 via-transparent to-transparent opacity-60" />
                
                {/* Image caption badge */}
                <div className="absolute bottom-4 left-4 right-4 bg-[#061A33]/90 backdrop-blur-md border border-[#F4BD2E]/30 rounded-2xl p-3.5 text-white">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-xs uppercase tracking-wider text-[#FFD96A] font-semibold">
                        Campus Life & Academics
                      </div>
                      <div className="text-sm font-serif font-bold text-gray-100">
                        Racherla, Prakasam District
                      </div>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-[#F4BD2E] text-[#061A33] flex items-center justify-center font-bold text-xs">
                      AP
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Small Accent Block */}
              <motion.div
                initial={{ opacity: 0, scale: 0.85, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="absolute -bottom-6 -right-4 sm:-right-6 bg-white border border-[#DCE5EF] shadow-xl rounded-2xl p-4 max-w-[210px] hidden sm:block"
              >
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-[#0B2F5B] text-[#F4BD2E] flex items-center justify-center">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-[#061A33] font-serif">
                      Child-Centric
                    </div>
                    <div className="text-[11px] text-[#6D7B8D]">
                      Individual Attention
                    </div>
                  </div>
                </div>
              </motion.div>

            </div>
          </motion.div>

          {/* Right Column: Editorial Typography & 4 Asymmetric Blocks */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Tag */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-[#174A8B]"
            >
              <span className="w-6 h-[2px] bg-[#F4BD2E]" />
              <span>{t.about.tag}</span>
            </motion.div>

            {/* Headline */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#061A33] leading-tight"
            >
              {t.about.heading}
            </motion.h2>

            {/* Story Paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-base sm:text-lg text-[#6D7B8D] leading-relaxed"
            >
              {t.about.description}
            </motion.p>

            {/* 4 Feature Information Blocks with Stagger Reveal */}
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
                    delayChildren: 0.25,
                  },
                },
              }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2"
            >
              {features.map((feat, index) => {
                const Icon = feat.icon;
                return (
                  <motion.div
                    key={index}
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: {
                        opacity: 1,
                        y: 0,
                        transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
                      },
                    }}
                    className={`bg-white rounded-2xl p-4 sm:p-5 border ${feat.border} shadow-sm hover:shadow-md transition-all hover:-translate-y-1 relative group`}
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-9 h-9 rounded-xl bg-[#061A33] text-[#F4BD2E] flex items-center justify-center group-hover:bg-[#F4BD2E] group-hover:text-[#061A33] transition-colors shadow-sm">
                        <Icon className="w-4 h-4" />
                      </div>
                      <h3 className="font-serif font-bold text-[#061A33] text-base group-hover:text-[#174A8B] transition-colors">
                        {feat.title}
                      </h3>
                    </div>
                    <p className="text-xs sm:text-sm text-[#6D7B8D] leading-relaxed">
                      {feat.desc}
                    </p>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* Explore Academics Link */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="pt-2"
            >
              <button
                onClick={() => onNavigate('academics')}
                className="inline-flex items-center gap-2 text-sm font-bold text-[#0B2F5B] hover:text-[#174A8B] group cursor-pointer"
              >
                <span>{t.academics.tag}</span>
                <ArrowRight className="w-4 h-4 text-[#F4BD2E] transition-transform group-hover:translate-x-1" />
              </button>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
};
