/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Language } from './types';
import { ScrollProgress } from './components/ScrollProgress';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Stats } from './components/Stats';
import { About } from './components/About';
import { Achievements } from './components/Achievements';
import { Academics } from './components/Academics';
import { CampusLife } from './components/CampusLife';
import { StudentExperience } from './components/StudentExperience';
import { Faculty } from './components/Faculty';
import { SchoolVideo } from './components/SchoolVideo';
import { VideoModal } from './components/VideoModal';
import { Admissions } from './components/Admissions';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';
import { SectionReveal } from './components/SectionReveal';
import { SectionDivider } from './components/SectionDivider';
import { siteContent } from './data/siteContent';

export default function App() {
  const [lang, setLang] = useState<Language>('en');
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [videoModalConfig, setVideoModalConfig] = useState<{
    isOpen: boolean;
    videoId: string;
    videoTitle: string;
  }>({
    isOpen: false,
    videoId: siteContent.contact.featuredVideoId,
    videoTitle: siteContent.contact.featuredVideoTitle,
  });

  // Smooth Navigation Handler
  const handleNavigate = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -75;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const handleOpenVideo = (
    videoId = siteContent.contact.featuredVideoId,
    videoTitle = siteContent.contact.featuredVideoTitle
  ) => {
    setVideoModalConfig({
      isOpen: true,
      videoId,
      videoTitle,
    });
  };

  // Section Observer for Active Navigation Highlighting
  useEffect(() => {
    const sections = [
      'hero',
      'about',
      'achievements',
      'academics',
      'campus',
      'experience',
      'faculty',
      'video',
      'admissions',
      'contact',
    ];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-20% 0px -65% 0px',
        threshold: 0,
      }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`min-h-screen bg-[#F5F8FC] text-[#10243E] ${
        lang === 'te' ? 'font-telugu' : 'font-sans'
      }`}
    >
      {/* 1. Thin Gold Scroll Progress Indicator */}
      <ScrollProgress />

      {/* 2. Sticky Dark Translucent Header */}
      <Header
        lang={lang}
        onLanguageChange={setLang}
        activeSection={activeSection}
      />

      <main>
        {/* 3. Cinematic Hero Section */}
        <Hero
          lang={lang}
          onOpenVideo={() => handleOpenVideo()}
          onNavigate={handleNavigate}
        />

        {/* 4. Trust / Animated Statistics Bar */}
        <SectionReveal yOffset={25} duration={0.6}>
          <Stats lang={lang} />
        </SectionReveal>

        {/* Divider 1: Stats (Navy) -> About (Soft Light) */}
        <SectionDivider
          variant="layered"
          fromColor="#061A33"
          toColor="#F5F8FC"
          height={56}
        />

        {/* 5. Editorial About Section */}
        <SectionReveal yOffset={35} duration={0.75} delay={0.05}>
          <About lang={lang} onNavigate={handleNavigate} />
        </SectionReveal>

        {/* Divider 2: About (Soft Light) -> Achievements (Dark Navy) */}
        <SectionDivider
          variant="curve"
          fromColor="#F5F8FC"
          toColor="#04172D"
          height={56}
        />

        {/* 6. Achievements & 35-Year Landmarks Showcase */}
        <SectionReveal yOffset={40} duration={0.8} delay={0.05}>
          <Achievements
            lang={lang}
            onWatchVideo={(id) => handleOpenVideo(id)}
          />
        </SectionReveal>

        {/* 7. Academics: Programs built for every stage */}
        <SectionReveal yOffset={40} duration={0.8} delay={0.05}>
          <Academics
            lang={lang}
            onNavigateToAdmissions={() => handleNavigate('admissions')}
          />
        </SectionReveal>

        {/* 8. Campus Life: Immersive Masonry Gallery */}
        <SectionReveal yOffset={40} duration={0.8} delay={0.05}>
          <CampusLife lang={lang} />
        </SectionReveal>

        {/* Divider 3: Campus Life (Deep Navy) -> Student Experience (Soft Light) */}
        <SectionDivider
          variant="wave"
          fromColor="#061A33"
          toColor="#F5F8FC"
          height={56}
        />

        {/* 9. Student Experience: Interactive Two-Panel Section */}
        <SectionReveal yOffset={35} duration={0.75} delay={0.05}>
          <StudentExperience lang={lang} />
        </SectionReveal>

        {/* Divider 4: Student Experience (Soft Light) -> Faculty (Dark Navy) */}
        <SectionDivider
          variant="geometric"
          fromColor="#F5F8FC"
          toColor="#04172D"
          height={56}
        />

        {/* 10. Faculty: Meet the Educators (with Demo Profiles & Detailed Modal) */}
        <SectionReveal yOffset={40} duration={0.8} delay={0.05}>
          <Faculty lang={lang} />
        </SectionReveal>

        {/* 11. School Life in Action: Cinematic Video Section (Features 22A0Ek91tdo) */}
        <SectionReveal yOffset={35} duration={0.75} delay={0.05}>
          <SchoolVideo lang={lang} />
        </SectionReveal>

        {/* 12. Admissions: Conversion Section & Enquiry Form */}
        <SectionReveal yOffset={40} duration={0.8} delay={0.05}>
          <Admissions lang={lang} />
        </SectionReveal>

        {/* Divider 5: Admissions (Dark Navy) -> Contact (Soft Light) */}
        <SectionDivider
          variant="layered"
          fromColor="#04172D"
          toColor="#F5F8FC"
          height={56}
        />

        {/* 13. Contact & Interactive Location Map */}
        <SectionReveal yOffset={35} duration={0.75} delay={0.05}>
          <Contact lang={lang} />
        </SectionReveal>

        {/* Divider 6: Contact (Soft Light) -> Footer (Dark Navy) */}
        <SectionDivider
          variant="curve"
          fromColor="#F5F8FC"
          toColor="#04172D"
          height={56}
        />
      </main>

      {/* 14. Premium Dark Footer */}
      <Footer lang={lang} onNavigate={handleNavigate} />

      {/* 15. Floating WhatsApp Quick Action Button */}
      <WhatsAppButton lang={lang} />

      {/* 16. Shared Dynamic Video Showcase Modal */}
      <VideoModal
        isOpen={videoModalConfig.isOpen}
        onClose={() =>
          setVideoModalConfig((prev) => ({ ...prev, isOpen: false }))
        }
        videoId={videoModalConfig.videoId}
        videoTitle={videoModalConfig.videoTitle}
      />
    </motion.div>
  );
}
