import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { siteContent } from '../data/siteContent';
import { Language } from '../types';

interface WhatsAppButtonProps {
  lang: Language;
}

export const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({ lang }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  const messageText = encodeURIComponent(
    lang === 'te'
      ? 'నమస్కారం! రాచర్ల స్పందన హైస్కూల్ అడ్మిషన్ల వివరాలు తెలుసుకోవాలనుకుంటున్నాను.'
      : 'Hello! I would like to enquire about admissions at Spandana High School, Racherla.'
  );

  const whatsappUrl = `https://wa.me/${siteContent.contact.whatsappNumber}?text=${messageText}`;

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center gap-3">
      {/* Tooltip on hover/click */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 bg-[#061A33] border border-[#F4BD2E]/50 text-white text-xs px-3.5 py-2 rounded-2xl shadow-xl animate-fadeIn">
          <span>{lang === 'te' ? 'వాట్సాప్‌లో మాట్లాడండి' : 'Chat with Admissions on WhatsApp'}</span>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-gray-400 hover:text-white"
            aria-label="Close tooltip"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Main Floating Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setShowTooltip(true)}
        aria-label="Enquire on WhatsApp"
        className="relative group w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white flex items-center justify-center shadow-[0_8px_25px_rgba(37,211,102,0.5)] transition-transform hover:scale-105"
      >
        {/* Pulsing ring */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366]/40 animate-ping pointer-events-none" />
        <MessageCircle className="w-7 h-7 fill-white" />
      </a>
    </div>
  );
};
