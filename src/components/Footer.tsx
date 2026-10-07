import React from 'react';
import { ArrowUp, Youtube, Instagram, MapPin, Phone, Mail } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';
import { siteContent } from '../data/siteContent';

interface FooterProps {
  lang: Language;
  onNavigate: (id: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ lang, onNavigate }) => {
  const t = translations[lang];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#04172D] text-gray-300 border-t border-[#F4BD2E]/20 relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-[#F4BD2E] to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-white/10">
          
          {/* Column 1: School Identity */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#0B2F5B] to-[#061A33] border border-[#F4BD2E]/60 flex items-center justify-center text-[#F4BD2E] font-bold text-xl shadow-md">
                S
              </div>
              <div>
                <h3 className="text-white font-serif font-bold text-lg tracking-wider">
                  SPANDANA HIGH SCHOOL
                </h3>
                <p className="text-xs text-[#6D7B8D]">
                  Racherla · Prakasam District · AP
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-gray-400 leading-relaxed max-w-sm">
              {t.footer.aboutText}
            </p>

            <div className="text-xs text-gray-400 space-y-1.5 pt-1">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#F4BD2E] shrink-0 mt-0.5" />
                <span>Racherla, Prakasam Dist, Andhra Pradesh — 523368</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#F4BD2E] shrink-0" />
                <span>{siteContent.contact.phoneDisplay}</span>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-semibold text-[#FFD96A] uppercase tracking-wider font-mono">
              {t.footer.quickLinks}
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="hover:text-[#F4BD2E] transition-colors cursor-pointer text-left"
                >
                  {t.nav.about}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('academics')}
                  className="hover:text-[#F4BD2E] transition-colors cursor-pointer text-left"
                >
                  {t.nav.academics}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('campus')}
                  className="hover:text-[#F4BD2E] transition-colors cursor-pointer text-left"
                >
                  {t.nav.campus}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('experience')}
                  className="hover:text-[#F4BD2E] transition-colors cursor-pointer text-left"
                >
                  {t.nav.activities}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('faculty')}
                  className="hover:text-[#F4BD2E] transition-colors cursor-pointer text-left"
                >
                  {t.nav.faculty}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('admissions')}
                  className="hover:text-[#F4BD2E] transition-colors cursor-pointer text-left"
                >
                  {t.nav.admissions}
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Academic Levels */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-semibold text-[#FFD96A] uppercase tracking-wider font-mono">
              {t.footer.programs}
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-gray-400">
              <li>
                <button
                  onClick={() => onNavigate('academics')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Primary School (Grades 1 – 5)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('academics')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Middle School (Grades 6 – 8)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('academics')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  High School & SSC Board (Grades 9 – 10)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('experience')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Sports & Cultural Activities
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('video')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Campus Video Showcase
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Official Social Channels */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-semibold text-[#FFD96A] uppercase tracking-wider font-mono">
              {t.footer.connect}
            </h4>
            <div className="flex flex-col gap-2">
              <a
                href={siteContent.contact.youtubeChannelUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 p-2 rounded-xl bg-white/5 hover:bg-red-600/80 hover:text-white text-xs transition-colors"
              >
                <Youtube className="w-4 h-4 text-red-500" />
                <span>YouTube</span>
              </a>

              <a
                href={siteContent.contact.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 p-2 rounded-xl bg-white/5 hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 hover:text-white text-xs transition-all"
              >
                <Instagram className="w-4 h-4 text-[#F4BD2E]" />
                <span>Instagram</span>
              </a>
            </div>

            <div className="pt-2">
              <button
                onClick={() => onNavigate('admissions')}
                className="w-full py-2 px-3 rounded-xl bg-[#F4BD2E] hover:bg-[#FFD96A] text-[#061A33] text-xs font-bold transition-all shadow-sm cursor-pointer"
              >
                {t.nav.applyNow}
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <div>
            <p>© {new Date().getFullYear()} {t.footer.rights}</p>
            <p className="text-[11px] text-[#6D7B8D] mt-0.5">
              {t.footer.prototypeNotice}
            </p>
          </div>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white transition-colors cursor-pointer"
            aria-label={t.footer.backToTop}
          >
            <span>{t.footer.backToTop}</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#F4BD2E]" />
          </button>
        </div>
      </div>
    </footer>
  );
};
