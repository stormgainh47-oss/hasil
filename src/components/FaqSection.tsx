import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { FAQ_ITEMS } from '../data/ksaData';
import { HelpCircle, ChevronDown, ChevronUp, MessageSquare } from 'lucide-react';
import { COMPANY_CONTACTS } from '../data/ksaData';

export const FaqSection: React.FC = () => {
  const { isArabic, t } = useLanguage();
  const [openFaq, setOpenFaq] = useState<string | null>(FAQ_ITEMS[0].id);

  const toggleFaq = (id: string) => {
    setOpenFaq(prev => prev === id ? null : id);
  };

  return (
    <section id="faq" className="py-16 lg:py-24 bg-[#0A0A0A] border-b border-[#1E1E1E] scroll-mt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#C5A059]/15 text-[#C5A059] text-xs font-bold mb-3 border border-[#C5A059]/30">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>{isArabic ? 'إجابات مباشرة وشفافة' : 'Clear Answers'}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            {t('faq.title')}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-neutral-400">
            {t('faq.subtitle')}
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-3.5">
          {FAQ_ITEMS.map((faq) => {
            const isOpen = openFaq === faq.id;
            return (
              <div
                key={faq.id}
                className="border border-[#222222] rounded-2xl overflow-hidden transition-all bg-[#121212] hover:bg-[#161616]"
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full p-5 text-start font-bold text-sm sm:text-base text-white flex items-center justify-between gap-4 cursor-pointer"
                >
                  <span>{isArabic ? faq.questionAr : faq.questionEn}</span>
                  <span className="p-1 rounded-full bg-[#1E1E1E] border border-[#2A2A2A] text-[#C5A059] shrink-0">
                    {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </span>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-2 text-xs sm:text-sm text-neutral-300 leading-relaxed border-t border-[#222222] bg-[#0D0D0D]">
                    {isArabic ? faq.answerAr : faq.answerEn}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Direct Question CTA */}
        <div className="mt-12 p-6 rounded-2xl bg-[#141414] border border-[#C5A059]/30 text-white flex flex-wrap items-center justify-between gap-4 shadow-xl">
          <div>
            <h4 className="font-bold text-base text-white">
              {isArabic ? 'لديك استفسار خاص عن أثاثك أو موقعك؟' : 'Have a custom question about your items?'}
            </h4>
            <p className="text-xs text-neutral-400 mt-1">
              {isArabic ? 'مشرفو النقل والتسعير بجدة متاحون للرد الفوري على الواتساب' : 'Our Jeddah logistics team responds within minutes'}
            </p>
          </div>

          <a
            href={isArabic ? COMPANY_CONTACTS.whatsappLinkAr : COMPANY_CONTACTS.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm rounded-xl flex items-center gap-2 shadow-sm transition"
          >
            <MessageSquare className="w-4 h-4" />
            <span>{isArabic ? 'محادثة واتساب فورية' : 'Chat on WhatsApp'}</span>
          </a>
        </div>

      </div>
    </section>
  );
};
