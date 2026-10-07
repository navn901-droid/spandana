import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, MessageCircle, Youtube, Instagram, ExternalLink, Navigation } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';
import { siteContent } from '../data/siteContent';

interface ContactProps {
  lang: Language;
}

export const Contact: React.FC<ContactProps> = ({ lang }) => {
  const t = translations[lang];

  return (
    <section id="contact" className="py-20 lg:py-28 bg-[#F5F8FC] text-[#10243E] relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#0B2F5B]/5 rounded-full blur-3xl pointer-events-none" />

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
            <span>{t.contact.tag}</span>
            <span className="w-6 h-[2px] bg-[#F4BD2E]" />
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#061A33] tracking-tight">
            {t.contact.heading}
          </h2>

          <p className="text-base sm:text-lg text-[#6D7B8D]">
            {t.contact.subheading}
          </p>
        </motion.div>

        {/* 2-Column Layout: Contact Cards + Interactive Map with Framer Motion */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Contact Cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 space-y-4 flex flex-col justify-between"
          >
            {/* Address Card */}
            <div className="bg-white rounded-2xl p-5 border border-[#DCE5EF] shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-[#061A33] text-[#F4BD2E] flex items-center justify-center shrink-0 shadow-sm">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-[#061A33] text-base">
                    {t.contact.addressTitle}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#6D7B8D] mt-1 leading-relaxed">
                    {t.contact.addressText}
                  </p>
                </div>
              </div>
            </div>

            {/* Phone Card */}
            <div className="bg-white rounded-2xl p-5 border border-[#DCE5EF] shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-[#0B2F5B] text-[#F4BD2E] flex items-center justify-center shrink-0 shadow-sm">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <h3 className="font-serif font-bold text-[#061A33] text-base">
                    {t.contact.phoneTitle}
                  </h3>
                  <a
                    href={`tel:${siteContent.contact.phoneTel}`}
                    className="text-xs sm:text-sm font-semibold text-[#174A8B] hover:text-[#0B2F5B] mt-1 block"
                  >
                    {t.contact.phoneText}
                  </a>
                </div>
              </div>
            </div>

            {/* WhatsApp Card */}
            <div className="bg-white rounded-2xl p-5 border border-[#DCE5EF] shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-[#25D366] text-white flex items-center justify-center shrink-0 shadow-sm">
                  <MessageCircle className="w-5 h-5 fill-white" />
                </div>
                <div className="flex-1">
                  <h3 className="font-serif font-bold text-[#061A33] text-base">
                    {t.contact.whatsappTitle}
                  </h3>
                  <p className="text-xs text-[#6D7B8D] mt-0.5 mb-2">
                    {t.contact.whatsappText}
                  </p>
                  <a
                    href={`https://wa.me/${siteContent.contact.whatsappNumber}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#25D366] hover:underline"
                  >
                    <span>Chat on WhatsApp</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>

            {/* Official Social Links Banner */}
            <div className="bg-[#061A33] text-white rounded-2xl p-5 border border-[#174A8B]/40 shadow-sm">
              <span className="text-xs uppercase tracking-wider font-semibold text-[#FFD96A] block mb-3">
                Verified Social Channels
              </span>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={siteContent.contact.youtubeChannelUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 px-3.5 py-2.5 rounded-xl bg-red-600/90 hover:bg-red-600 text-white text-xs font-semibold shadow-sm transition-colors"
                >
                  <Youtube className="w-4 h-4" />
                  <span>YouTube Channel</span>
                </a>

                <a
                  href={siteContent.contact.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 px-3.5 py-2.5 rounded-xl bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] hover:opacity-90 text-white text-xs font-semibold shadow-sm transition-opacity"
                >
                  <Instagram className="w-4 h-4" />
                  <span>Instagram</span>
                </a>
              </div>
            </div>

          </motion.div>

          {/* Right Column: Google Maps Embed & Directions */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 flex flex-col"
          >
            <div className="bg-white rounded-3xl overflow-hidden border border-[#DCE5EF] shadow-lg flex-1 flex flex-col">
              
              {/* Map Top Bar */}
              <div className="p-4 bg-[#061A33] text-white flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Navigation className="w-4 h-4 text-[#F4BD2E]" />
                  <span className="text-xs font-semibold tracking-wide">
                    Spandana High School, Racherla, AP 523368
                  </span>
                </div>
                <a
                  href={siteContent.contact.googleMapsDirectLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs text-[#FFD96A] hover:underline"
                >
                  <span>{t.contact.mapDirections}</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              {/* Map Iframe */}
              <div className="relative w-full h-[320px] sm:h-[380px] bg-gray-100">
                <iframe
                  src={siteContent.contact.googleMapsEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Spandana High School Racherla Location"
                  className="w-full h-full"
                />
              </div>

              {/* Map Footer Note */}
              <div className="p-3.5 bg-gray-50 border-t border-[#DCE5EF] text-center text-xs text-[#6D7B8D]">
                {t.contact.mapNote}
              </div>

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
