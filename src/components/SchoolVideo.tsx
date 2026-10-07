import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, Youtube, ExternalLink, Sparkles, CheckCircle2, Video } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';
import { siteImages } from '../data/siteImages';
import { siteContent } from '../data/siteContent';
import { VideoModal } from './VideoModal';

interface SchoolVideoProps {
  lang: Language;
  onOpenVideoWithId?: (id: string, title: string) => void;
}

export const SchoolVideo: React.FC<SchoolVideoProps> = ({ lang }) => {
  const t = translations[lang];
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(siteContent.videoPlaylist[0]);

  const handleVideoSelect = (video: (typeof siteContent.videoPlaylist)[0]) => {
    setSelectedVideo(video);
    setModalOpen(true);
  };

  const currentTitle = lang === 'te' ? selectedVideo.titleTe : selectedVideo.title;

  return (
    <section id="video" className="py-20 lg:py-28 bg-[#061A33] text-white relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#0B2F5B]/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-3xl mx-auto mb-10 space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0B2F5B] border border-[#F4BD2E]/30 text-xs uppercase tracking-widest font-semibold text-[#FFD96A]">
            <Youtube className="w-3.5 h-3.5 text-red-500" />
            <span>{t.video.tag}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight">
            {t.video.heading}
          </h2>

          <p className="text-base sm:text-lg text-gray-300">
            {t.video.subheading}
          </p>
        </motion.div>

        {/* Video Playlist Selector Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-10">
          {siteContent.videoPlaylist.map((v) => {
            const isCurrent = selectedVideo.id === v.id;
            const title = lang === 'te' ? v.titleTe : v.title;
            const category = lang === 'te' ? v.categoryTe : v.category;

            return (
              <button
                key={v.id}
                onClick={() => setSelectedVideo(v)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all flex items-center gap-2 cursor-pointer ${
                  isCurrent
                    ? 'bg-[#F4BD2E] text-[#061A33] shadow-[0_0_15px_rgba(244,189,46,0.4)]'
                    : 'bg-[#04172D] text-gray-300 hover:text-white hover:bg-[#0B2F5B] border border-white/10'
                }`}
              >
                <Video className={`w-3.5 h-3.5 ${isCurrent ? 'text-[#061A33]' : 'text-[#F4BD2E]'}`} />
                <span>{category}</span>
              </button>
            );
          })}
        </div>

        {/* Cinematic Video Showcase Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="relative max-w-4xl mx-auto rounded-3xl overflow-hidden border-2 border-[#174A8B]/60 hover:border-[#F4BD2E] shadow-[0_20px_50px_rgba(0,0,0,0.6)] transition-all duration-500 group"
        >
          {/* Thumbnail Image */}
          <div className="relative aspect-video w-full overflow-hidden bg-[#04172D]">
            <img
              src={siteImages.videoThumbnail}
              alt={currentTitle}
              className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105 filter brightness-[0.7]"
              loading="lazy"
            />

            {/* Dark Vignette Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#04172D] via-[#04172D]/35 to-black/40" />

            {/* Pulsing Play Button */}
            <button
              onClick={() => setModalOpen(true)}
              className="absolute inset-0 flex items-center justify-center cursor-pointer group/btn"
              aria-label={`Play: ${currentTitle}`}
            >
              <div className="relative flex items-center justify-center">
                {/* Outer animated ripple */}
                <span className="absolute w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-[#F4BD2E]/20 animate-ping pointer-events-none" />
                <span className="absolute w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-[#F4BD2E]/30 animate-pulse pointer-events-none" />

                {/* Main Play Circle */}
                <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-[#F4BD2E] to-[#FFD96A] text-[#061A33] flex items-center justify-center shadow-[0_0_25px_rgba(244,189,46,0.8)] transition-transform duration-300 group-hover/btn:scale-110">
                  <Play className="w-7 h-7 sm:w-8 sm:h-8 fill-[#061A33] ml-1" />
                </div>
              </div>
            </button>

            {/* Video Label Overlay */}
            <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4 pointer-events-none">
              <div className="space-y-1 max-w-xl">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-red-600/90 text-[10px] font-bold tracking-wider uppercase text-white">
                  <Youtube className="w-3 h-3" />
                  {selectedVideo.category}
                </span>
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-white drop-shadow-md">
                  {currentTitle}
                </h3>
                <p className="text-xs text-gray-300">
                  Spandana High School, Racherla, Prakasam District (35+ Years of Excellence)
                </p>
              </div>

              <div className="pointer-events-auto shrink-0 flex items-center gap-2">
                <button
                  onClick={() => setModalOpen(true)}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold bg-[#F4BD2E] text-[#061A33] shadow-md transition-all hover:bg-[#FFD96A] cursor-pointer"
                >
                  <Play className="w-3.5 h-3.5 fill-current" />
                  <span>Play Video</span>
                </button>

                <a
                  href={siteContent.contact.youtubeChannelUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold bg-white/10 hover:bg-white/20 text-white border border-white/20 backdrop-blur-md transition-all shadow-sm"
                >
                  <span>Channel</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

          </div>

        </motion.div>

      </div>

      {/* Video Modal Player */}
      <VideoModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        videoId={selectedVideo.id}
        videoTitle={currentTitle}
      />
    </section>
  );
};
