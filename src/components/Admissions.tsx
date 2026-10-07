import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, MessageCircle, CheckCircle, AlertCircle, Sparkles, User, Phone, MapPin, School } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';
import { siteContent } from '../data/siteContent';

interface AdmissionsProps {
  lang: Language;
}

interface FormData {
  parentName: string;
  whatsapp: string;
  studentName: string;
  grade: string;
  location: string;
  message: string;
}

interface FormErrors {
  parentName?: string;
  whatsapp?: string;
  grade?: string;
}

export const Admissions: React.FC<AdmissionsProps> = ({ lang }) => {
  const t = translations[lang];

  const [formData, setFormData] = useState<FormData>({
    parentName: '',
    whatsapp: '',
    studentName: '',
    grade: '',
    location: '',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Indian mobile number validation (10 digits starting with 6-9, or +91 followed by 10 digits)
  const validatePhone = (phone: string): boolean => {
    const cleaned = phone.replace(/[\s\-()]/g, '');
    const regex = /^(?:\+91|91)?[6-9]\d{9}$/;
    return regex.test(cleaned);
  };

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.parentName.trim()) {
      newErrors.parentName =
        lang === 'en' ? 'Parent name is required.' : 'తల్లిదండ్రుల పేరు నమోదు చేయండి.';
    }

    if (!formData.whatsapp.trim()) {
      newErrors.whatsapp =
        lang === 'en' ? 'WhatsApp phone number is required.' : 'వాట్సాప్ నంబర్ నమోదు చేయండి.';
    } else if (!validatePhone(formData.whatsapp)) {
      newErrors.whatsapp =
        lang === 'en'
          ? 'Enter a valid 10-digit Indian mobile number.'
          : 'చెల్లుబాటు అయ్యే 10 అంకెల మొబైల్ నంబర్ నమోదు చేయండి.';
    }

    if (!formData.grade) {
      newErrors.grade =
        lang === 'en' ? 'Please select an admission grade.' : 'దయచేసి ఒక తరగతిని ఎంచుకోండి.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate server processing
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 700);
  };

  // WhatsApp Direct Message Generator with URL encoding
  const handleWhatsAppEnquiry = () => {
    const parent = formData.parentName.trim() || 'Parent';
    const student = formData.studentName.trim() ? `\nStudent Name: ${formData.studentName.trim()}` : '';
    const grade = formData.grade ? `\nGrade Seeking: ${formData.grade}` : '';
    const loc = formData.location.trim() ? `\nLocation/Village: ${formData.location.trim()}` : '';
    const notes = formData.message.trim() ? `\nNotes: ${formData.message.trim()}` : '';

    const text = encodeURIComponent(
      `Hello Spandana High School Admissions Team,\n\nI am interested in admission for my child at your Racherla campus.\nParent Name: ${parent}${student}${grade}${loc}${notes}\n\nPlease share the admission procedure and fee structure.`
    );

    const waUrl = `https://wa.me/${siteContent.contact.whatsappNumber}?text=${text}`;
    window.open(waUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="admissions" className="py-20 lg:py-28 bg-[#04172D] text-white relative overflow-hidden">
      {/* Background radial lighting */}
      <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-[#0B2F5B]/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-[#F4BD2E]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-3xl mx-auto mb-14 space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0B2F5B] border border-[#F4BD2E]/30 text-xs uppercase tracking-widest font-semibold text-[#FFD96A]">
            <Sparkles className="w-3.5 h-3.5 text-[#F4BD2E]" />
            <span>{t.admissions.tag}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight">
            {t.admissions.heading}
          </h2>

          <p className="text-base sm:text-lg text-gray-300">
            {t.admissions.subheading}
          </p>
        </motion.div>

        {/* Form Container with Motion */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl mx-auto bg-[#061A33] border-2 border-[#174A8B]/60 hover:border-[#F4BD2E]/60 rounded-3xl p-6 sm:p-10 shadow-2xl transition-colors"
        >
          <AnimatePresence mode="wait">
            {isSubmitted ? (
              /* Submission Success State */
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="text-center py-10 space-y-5"
              >
                <div className="w-16 h-16 rounded-full bg-[#F4BD2E] text-[#061A33] flex items-center justify-center mx-auto shadow-[0_0_25px_rgba(244,189,46,0.6)]">
                  <CheckCircle className="w-9 h-9" />
                </div>

                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white">
                  {t.admissions.form.successTitle}
                </h3>

                <p className="text-sm sm:text-base text-gray-300 max-w-lg mx-auto leading-relaxed">
                  {t.admissions.form.successMessage}
                </p>

                <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                  <button
                    type="button"
                    onClick={handleWhatsAppEnquiry}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold bg-[#25D366] hover:bg-[#20ba59] text-white shadow-lg transition-transform hover:-translate-y-0.5 cursor-pointer text-sm"
                  >
                    <MessageCircle className="w-4 h-4 fill-white" />
                    <span>{t.admissions.form.whatsappBtn}</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        parentName: '',
                        whatsapp: '',
                        studentName: '',
                        grade: '',
                        location: '',
                        message: '',
                      });
                    }}
                    className="w-full sm:w-auto px-6 py-3 rounded-xl font-medium text-gray-300 hover:text-white bg-white/10 hover:bg-white/15 text-sm transition-colors cursor-pointer"
                  >
                    {t.admissions.form.sendAnother}
                  </button>
                </div>
              </motion.div>
            ) : (
              /* Actual Admission Form */
              <motion.form
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit}
                noValidate
                className="space-y-6"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  
                  {/* Parent Name */}
                  <div>
                    <label
                      htmlFor="parentName"
                      className="block text-xs font-semibold uppercase tracking-wider text-gray-300 mb-2 flex items-center gap-1.5"
                    >
                      <User className="w-3.5 h-3.5 text-[#F4BD2E]" />
                      <span>{t.admissions.form.parentName} *</span>
                    </label>
                    <input
                      type="text"
                      id="parentName"
                      value={formData.parentName}
                      onChange={(e) => {
                        setFormData({ ...formData, parentName: e.target.value });
                        if (errors.parentName) setErrors({ ...errors, parentName: undefined });
                      }}
                      placeholder={t.admissions.form.parentNamePlaceholder}
                      className={`w-full px-4 py-3 rounded-xl bg-[#04172D] border ${
                        errors.parentName ? 'border-red-500' : 'border-white/15 focus:border-[#F4BD2E]'
                      } text-white placeholder-gray-500 text-sm focus:outline-none focus:ring-2 focus:ring-[#F4BD2E]/40 transition-all`}
                      required
                    />
                    {errors.parentName && (
                      <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>{errors.parentName}</span>
                      </p>
                    )}
                  </div>

                  {/* WhatsApp Phone */}
                  <div>
                    <label
                      htmlFor="whatsapp"
                      className="block text-xs font-semibold uppercase tracking-wider text-gray-300 mb-2 flex items-center gap-1.5"
                    >
                      <Phone className="w-3.5 h-3.5 text-[#F4BD2E]" />
                      <span>{t.admissions.form.whatsapp} *</span>
                    </label>
                    <input
                      type="tel"
                      id="whatsapp"
                      value={formData.whatsapp}
                      onChange={(e) => {
                        setFormData({ ...formData, whatsapp: e.target.value });
                        if (errors.whatsapp) setErrors({ ...errors, whatsapp: undefined });
                      }}
                      placeholder={t.admissions.form.whatsappPlaceholder}
                      className={`w-full px-4 py-3 rounded-xl bg-[#04172D] border ${
                        errors.whatsapp ? 'border-red-500' : 'border-white/15 focus:border-[#F4BD2E]'
                      } text-white placeholder-gray-500 text-sm focus:outline-none focus:ring-2 focus:ring-[#F4BD2E]/40 transition-all`}
                      required
                    />
                    {errors.whatsapp && (
                      <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>{errors.whatsapp}</span>
                      </p>
                    )}
                  </div>

                  {/* Student Full Name */}
                  <div>
                    <label
                      htmlFor="studentName"
                      className="block text-xs font-semibold uppercase tracking-wider text-gray-300 mb-2 flex items-center gap-1.5"
                    >
                      <User className="w-3.5 h-3.5 text-[#F4BD2E]" />
                      <span>{t.admissions.form.studentName}</span>
                    </label>
                    <input
                      type="text"
                      id="studentName"
                      value={formData.studentName}
                      onChange={(e) => setFormData({ ...formData, studentName: e.target.value })}
                      placeholder={t.admissions.form.studentNamePlaceholder}
                      className="w-full px-4 py-3 rounded-xl bg-[#04172D] border border-white/15 focus:border-[#F4BD2E] text-white placeholder-gray-500 text-sm focus:outline-none focus:ring-2 focus:ring-[#F4BD2E]/40 transition-all"
                    />
                  </div>

                  {/* Admission Grade Seeking */}
                  <div>
                    <label
                      htmlFor="grade"
                      className="block text-xs font-semibold uppercase tracking-wider text-gray-300 mb-2 flex items-center gap-1.5"
                    >
                      <School className="w-3.5 h-3.5 text-[#F4BD2E]" />
                      <span>{t.admissions.form.grade} *</span>
                    </label>
                    <select
                      id="grade"
                      value={formData.grade}
                      onChange={(e) => {
                        setFormData({ ...formData, grade: e.target.value });
                        if (errors.grade) setErrors({ ...errors, grade: undefined });
                      }}
                      className={`w-full px-4 py-3 rounded-xl bg-[#04172D] border ${
                        errors.grade ? 'border-red-500' : 'border-white/15 focus:border-[#F4BD2E]'
                      } text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#F4BD2E]/40 transition-all`}
                      required
                    >
                      <option value="" disabled className="bg-[#04172D] text-gray-400">
                        {t.admissions.form.gradeSelect}
                      </option>
                      {siteContent.gradesList.map((g) => (
                        <option key={g.value} value={g.value} className="bg-[#04172D] text-white">
                          {g.label}
                        </option>
                      ))}
                    </select>
                    {errors.grade && (
                      <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>{errors.grade}</span>
                      </p>
                    )}
                  </div>

                </div>

                {/* Village / Town / Location */}
                <div>
                  <label
                    htmlFor="location"
                    className="block text-xs font-semibold uppercase tracking-wider text-gray-300 mb-2 flex items-center gap-1.5"
                  >
                    <MapPin className="w-3.5 h-3.5 text-[#F4BD2E]" />
                    <span>{t.admissions.form.location}</span>
                  </label>
                  <input
                    type="text"
                    id="location"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    placeholder={t.admissions.form.locationPlaceholder}
                    className="w-full px-4 py-3 rounded-xl bg-[#04172D] border border-white/15 focus:border-[#F4BD2E] text-white placeholder-gray-500 text-sm focus:outline-none focus:ring-2 focus:ring-[#F4BD2E]/40 transition-all"
                  />
                </div>

                {/* Questions / Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs font-semibold uppercase tracking-wider text-gray-300 mb-2"
                  >
                    {t.admissions.form.message}
                  </label>
                  <textarea
                    id="message"
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder={t.admissions.form.messagePlaceholder}
                    className="w-full px-4 py-3 rounded-xl bg-[#04172D] border border-white/15 focus:border-[#F4BD2E] text-white placeholder-gray-500 text-sm focus:outline-none focus:ring-2 focus:ring-[#F4BD2E]/40 transition-all resize-none"
                  />
                </div>

                {/* Action Buttons: Submit + WhatsApp */}
                <div className="pt-2 flex flex-col sm:flex-row gap-4 items-center">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:flex-1 py-3.5 px-6 rounded-xl font-bold bg-[#F4BD2E] hover:bg-[#FFD96A] text-[#061A33] shadow-[0_4px_20px_rgba(244,189,46,0.35)] transition-all hover:shadow-[0_6px_25px_rgba(244,189,46,0.5)] hover:-translate-y-0.5 flex items-center justify-center gap-2 cursor-pointer text-sm"
                  >
                    {isSubmitting ? (
                      <span className="inline-block w-5 h-5 border-2 border-[#061A33] border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <>
                        <span>{t.admissions.form.submitBtn}</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>

                  <button
                    type="button"
                    onClick={handleWhatsAppEnquiry}
                    className="w-full sm:w-auto py-3.5 px-6 rounded-xl font-bold bg-[#25D366] hover:bg-[#20ba59] text-white shadow-md transition-all hover:-translate-y-0.5 flex items-center justify-center gap-2 cursor-pointer text-sm"
                  >
                    <MessageCircle className="w-4 h-4 fill-white" />
                    <span>{t.admissions.form.whatsappBtn}</span>
                  </button>
                </div>

                <p className="text-[11px] text-gray-400 text-center">
                  {t.admissions.form.privacyNote}
                </p>
              </motion.form>
            )}
          </AnimatePresence>

        </motion.div>

      </div>
    </section>
  );
};
