import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { COMPANY_CONTACTS } from '../data/ksaData';
import { Phone, Calendar } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';

interface FloatingActionsProps {
  onOpenBooking: () => void;
}

export const FloatingActions: React.FC<FloatingActionsProps> = ({ onOpenBooking }) => {
  const { isArabic } = useLanguage();

  return (
    <aside aria-label={isArabic ? 'إجراءات الاتصال السريع' : 'Quick contact actions'} className="fixed bottom-5 end-5 z-40 flex flex-col gap-3 items-end">
      
      {/* Quick Booking Button */}
      <button
        onClick={onOpenBooking}
        id="floating-survey-btn"
        className="hidden sm:flex items-center gap-2 px-4 py-2.5 bg-blue-700 hover:bg-blue-800 text-white font-bold text-xs rounded-full shadow-2xl transition-transform hover:scale-105 cursor-pointer shadow-blue-700/30 border border-blue-500/40"
      >
        <Calendar className="w-4 h-4 text-white" />
        <span>{isArabic ? 'طلب معاينة مجانية' : 'Book Free Survey'}</span>
      </button>

      {/* Direct Call Button */}
      <a
        href={`tel:${COMPANY_CONTACTS.phoneCall}`}
        id="floating-call-btn"
        aria-label="Direct Phone Call"
        className="w-12 h-12 rounded-full bg-slate-900 hover:bg-slate-800 text-white flex items-center justify-center shadow-xl transition-transform hover:scale-110 border border-slate-700 hover:border-amber-400"
        title={isArabic ? 'اتصال فوري' : 'Direct Call'}
      >
        <Phone className="w-5 h-5 text-emerald-400" />
      </a>

      {/* WhatsApp Button with Official WhatsApp Icon */}
      <a
        href={isArabic ? COMPANY_CONTACTS.whatsappLinkAr : COMPANY_CONTACTS.whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        id="floating-whatsapp-btn"
        aria-label="Chat on WhatsApp"
        className="w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-110 border-2 border-white ring-4 ring-[#25D366]/30 relative group cursor-pointer"
        title={isArabic ? 'محادثة واتساب مباشرة' : 'Chat on WhatsApp'}
      >
        <WhatsAppIcon className="w-7 h-7 fill-white" size={28} />
        
        {/* Active Online Indicator */}
        <span className="absolute -top-1 -end-1 flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-500 border-2 border-white"></span>
        </span>

        {/* Hover Tooltip on Desktop */}
        <span className="hidden lg:group-hover:inline-flex pointer-events-none absolute end-full me-3 px-3 py-1.5 bg-slate-900 text-white text-xs font-semibold rounded-lg shadow-xl whitespace-nowrap border border-slate-700 items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-[#25D366]"></span>
          <span>{isArabic ? 'تواصل عبر واتساب (24/7)' : 'WhatsApp Chat (24/7)'}</span>
        </span>
      </a>

    </aside>
  );
};
