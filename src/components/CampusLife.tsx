import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Camera, Sparkles, X, Maximize2, Tag } from 'lucide-react';
import { Language, CampusItem } from '../types';
import { translations } from '../data/translations';
import { siteContent } from '../data/siteContent';

interface CampusLifeProps {
  lang: Language;
}

export const CampusLife: React.FC<CampusLifeProps> = ({ lang }) => {
  const t = translations[lang];
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [activePhoto, setActivePhoto] = useState<CampusItem | null>(null);

  const categories = [
    { id: 'all', label: t.campus.categories.all },
    { id: 'learning', label: t.campus.categories.learning },
    { id: 'sports', label: t.campus.categories.sports },
    { id: 'celebrations', label: t.campus.categories.celebrations },
    { id: 'creative', label: t.campus.categories.creative },
  ];

  const items = siteContent.campusItems;

  const filteredItems =
    activeCategory === 'all'
      ? items
      : items.filter((item) => item.category === activeCategory);

  return (
    <section id="campus" className="py-20 lg:py-28 bg-[#061A33] text-white relative overflow-hidden">
      {/* Background radial accent */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#174A8B]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12"
        >
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0B2F5B] border border-[#F4BD2E]/30 text-xs uppercase tracking-widest font-semibold text-[#FFD96A]">
              <Camera className="w-3.5 h-3.5 text-[#F4BD2E]" />
              <span>{t.campus.tag}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight">
              {t.campus.heading}
            </h2>
            <p className="text-base text-gray-300">
              {t.campus.subheading}
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-[#F4BD2E] text-[#061A33] shadow-[0_0_12px_rgba(244,189,46,0.4)]'
                    : 'bg-[#0B2F5B]/80 text-gray-300 hover:text-white hover:bg-[#174A8B] border border-[#174A8B]/60'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Editorial Masonry Grid (Asymmetrical Layout with Stagger Animation) */}
        <motion.div
          layout
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
          className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[280px]"
        >
          {filteredItems.map((item, index) => {
            let colSpan = 'md:col-span-6';
            if (index === 0) colSpan = 'md:col-span-7 md:row-span-1';
            else if (index === 1) colSpan = 'md:col-span-5 md:row-span-2';
            else if (index === 2) colSpan = 'md:col-span-7 md:row-span-1';
            else if (index === 3) colSpan = 'md:col-span-6 md:row-span-1';
            else if (index === 4) colSpan = 'md:col-span-6 md:row-span-1';

            const title = lang === 'te' ? item.titleTe : item.title;
            const category = lang === 'te' ? item.categoryTe : item.category;
            const description = lang === 'te' ? item.descriptionTe : item.description;

            return (
              <motion.div
                key={item.id}
                layout
                variants={{
                  hidden: { opacity: 0, scale: 0.95, y: 25 },
                  visible: {
                    opacity: 1,
                    scale: 1,
                    y: 0,
                    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
                  },
                }}
                onClick={() => setActivePhoto(item)}
                className={`group relative rounded-3xl overflow-hidden cursor-pointer border border-[#174A8B]/40 hover:border-[#F4BD2E] shadow-xl transition-all duration-500 hover:shadow-[0_15px_35px_rgba(0,0,0,0.6)] ${colSpan}`}
              >
                <img
                  src={item.image}
                  alt={title}
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />

                {/* Dark Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#04172D] via-[#04172D]/40 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

                {/* Top Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#061A33]/85 backdrop-blur-md text-[11px] font-semibold text-[#FFD96A] border border-[#F4BD2E]/30 uppercase tracking-wider">
                    <Tag className="w-3 h-3 text-[#F4BD2E]" />
                    {category}
                  </span>
                </div>

                {/* Expand Icon */}
                <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/40 backdrop-blur-md text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:scale-110">
                  <Maximize2 className="w-4 h-4 text-[#F4BD2E]" />
                </div>

                {/* Bottom Title & Details */}
                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-1 group-hover:translate-y-0 transition-transform">
                  <h3 className="text-xl sm:text-2xl font-serif font-bold text-white group-hover:text-[#FFD96A] transition-colors leading-snug">
                    {title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-300 mt-1 line-clamp-2 leading-relaxed opacity-90">
                    {description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Gallery helper note */}
        <p className="text-center text-xs text-gray-400 mt-8">
          {t.campus.viewGallery}
        </p>

      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {activePhoto && (
          <div
            role="dialog"
            aria-modal="true"
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md"
            onClick={() => setActivePhoto(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="relative max-w-4xl w-full bg-[#061A33] border border-[#F4BD2E]/50 rounded-3xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setActivePhoto(null)}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/60 text-white hover:bg-black/90 focus:outline-none cursor-pointer"
                aria-label="Close photo preview"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="relative aspect-video max-h-[65vh]">
                <img
                  src={activePhoto.image}
                  alt={lang === 'te' ? activePhoto.titleTe : activePhoto.title}
                  className="w-full h-full object-cover object-center"
                />
              </div>

              <div className="p-6 bg-[#04172D] text-white">
                <span className="text-xs uppercase tracking-widest text-[#F4BD2E] font-semibold">
                  {lang === 'te' ? activePhoto.categoryTe : activePhoto.category} · Spandana High School, Racherla
                </span>
                <h3 className="text-2xl font-serif font-bold text-white mt-1">
                  {lang === 'te' ? activePhoto.titleTe : activePhoto.title}
                </h3>
                <p className="text-sm text-gray-300 mt-2">
                  {lang === 'te' ? activePhoto.descriptionTe : activePhoto.description}
                </p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
