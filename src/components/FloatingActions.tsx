import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { COMPANY_CONTACTS } from '../data/ksaData';
import { Phone, MessageSquare, Calendar } from 'lucide-react';

interface FloatingActionsProps {
  onOpenBooking: () => void;
}

export const FloatingActions: React.FC<FloatingActionsProps> = ({ onOpenBooking }) => {
  const { isArabic } = useLanguage();

  return (
    <aside aria-label={isArabic ? 'إجراءات الاتصال السريع' : 'Quick contact actions'} className="fixed bottom-5 end-5 z-40 flex flex-col gap-2.5 items-end">
      
      {/* Quick Booking Button */}
      <button
        onClick={onOpenBooking}
        id="floating-survey-btn"
        className="hidden sm:flex items-center gap-2 px-4 py-2.5 bg-[#C5A059] hover:bg-[#D4B26F] text-[#0A0A0A] font-bold text-xs rounded-full shadow-2xl border border-[#C5A059] transition-transform hover:scale-105 cursor-pointer shadow-[#C5A059]/25"
      >
        <Calendar className="w-4 h-4 text-[#0A0A0A]" />
        <span>{isArabic ? 'طلب معاينة مجانية' : 'Book Free Survey'}</span>
      </button>

      {/* Direct Call Button */}
      <a
        href={`tel:${COMPANY_CONTACTS.phoneCall}`}
        id="floating-call-btn"
        aria-label="Direct Phone Call"
        className="w-12 h-12 rounded-full bg-[#181818] hover:bg-[#222222] text-[#C5A059] flex items-center justify-center shadow-2xl transition-transform hover:scale-110 border-2 border-[#C5A059]"
        title={isArabic ? 'اتصال فوري' : 'Direct Call'}
      >
        <Phone className="w-5 h-5" />
      </a>

      {/* WhatsApp Button */}
      <a
        href={isArabic ? COMPANY_CONTACTS.whatsappLinkAr : COMPANY_CONTACTS.whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        id="floating-whatsapp-btn"
        aria-label="Chat on WhatsApp"
        className="w-13 h-13 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white flex items-center justify-center shadow-2xl transition-transform hover:scale-110 border-2 border-[#1E1E1E] relative group"
        title={isArabic ? 'محادثة واتساب مباشرة' : 'Chat on WhatsApp'}
      >
        <MessageSquare className="w-6 h-6" />
        <span className="absolute -top-1 -end-1 w-3.5 h-3.5 bg-[#C5A059] rounded-full border-2 border-[#0A0A0A] animate-pulse"></span>
      </a>

    </aside>
  );
};
