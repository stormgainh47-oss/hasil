import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { COMPANY_CONTACTS } from '../data/ksaData';
import { 
  Truck, 
  Phone, 
  MessageSquare, 
  Mail, 
  MapPin, 
  ShieldCheck, 
  CheckCircle2, 
  Clock,
  ExternalLink
} from 'lucide-react';

interface FooterProps {
  onOpenBooking: () => void;
  onOpenTracker: () => void;
  onScrollToSection: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenBooking,
  onOpenTracker,
  onScrollToSection,
}) => {
  const { isArabic, t } = useLanguage();

  return (
    <footer className="bg-[#080808] text-neutral-300 pt-16 pb-12 border-t border-[#1C1C1C]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#1C1C1C]">
          
          {/* Brand & Corporate Overview (4 Cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#C5A059] flex items-center justify-center text-[#0A0A0A] shadow-md">
                <Truck className="w-5 h-5" />
              </div>
              <span className="font-extrabold text-xl text-white tracking-tight">
                {isArabic ? COMPANY_CONTACTS.nameAr : COMPANY_CONTACTS.nameEn}
              </span>
            </div>

            <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
              {isArabic ? COMPANY_CONTACTS.taglineAr : COMPANY_CONTACTS.taglineEn}
            </p>

            <div className="p-3.5 rounded-xl bg-[#121212] border border-[#222222] space-y-1.5 text-xs">
              <div className="flex items-center gap-2 text-emerald-400 font-semibold">
                <ShieldCheck className="w-4 h-4" />
                <span>{isArabic ? COMPANY_CONTACTS.crNumberAr : COMPANY_CONTACTS.crNumber}</span>
              </div>
              <div className="flex items-center gap-2 text-neutral-400">
                <Clock className="w-4 h-4 text-[#C5A059]" />
                <span>{isArabic ? COMPANY_CONTACTS.workingHoursAr : COMPANY_CONTACTS.workingHoursEn}</span>
              </div>
            </div>
          </div>

          {/* Quick Nav Links (2 Cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#C5A059]">
              {isArabic ? 'روابط سريعة' : 'Quick Navigation'}
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => onScrollToSection('services')} className="hover:text-[#C5A059] transition cursor-pointer">
                  {t('nav.services')}
                </button>
              </li>
              <li>
                <button onClick={() => onScrollToSection('calculator')} className="hover:text-[#C5A059] transition cursor-pointer">
                  {t('nav.quote')}
                </button>
              </li>
              <li>
                <button onClick={() => onScrollToSection('inventory')} className="hover:text-[#C5A059] transition cursor-pointer">
                  {t('nav.inventory')}
                </button>
              </li>
              <li>
                <button onClick={() => onScrollToSection('ai-advisor')} className="hover:text-[#C5A059] transition cursor-pointer">
                  {t('nav.ai_advisor')}
                </button>
              </li>
              <li>
                <button onClick={() => onScrollToSection('coverage')} className="hover:text-[#C5A059] transition cursor-pointer">
                  {t('nav.ksa_coverage')}
                </button>
              </li>
              <li>
                <button onClick={() => onScrollToSection('packing-guide')} className="hover:text-[#C5A059] transition cursor-pointer">
                  {t('nav.packing_guide')}
                </button>
              </li>
              <li>
                <button onClick={onOpenTracker} className="text-[#C5A059] font-bold hover:underline cursor-pointer">
                  {t('nav.track')}
                </button>
              </li>
            </ul>
          </div>

          {/* Branch Offices in KSA (3 Cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#C5A059]">
              {isArabic ? 'فروعنا ومستودعاتنا بالمملكة' : 'KSA Branches & Hubs'}
            </h4>
            <div className="space-y-3 text-xs text-neutral-400">
              <div>
                <span className="font-bold text-white block">
                  {isArabic ? 'المركز الرئيسي - جدة:' : 'Headquarters - Jeddah:'}
                </span>
                <p>{isArabic ? COMPANY_CONTACTS.headquartersAddressAr : COMPANY_CONTACTS.headquartersAddressEn}</p>
              </div>

              <div>
                <span className="font-bold text-white block">
                  {isArabic ? 'فرع الرياض والمنطقة الوسطى:' : 'Riyadh Branch (Central KSA):'}
                </span>
                <p>{isArabic ? COMPANY_CONTACTS.riyadhBranchAr : COMPANY_CONTACTS.riyadhBranchEn}</p>
              </div>

              <div>
                <span className="font-bold text-white block">
                  {isArabic ? 'فرع الدمام والمنطقة الشرقية:' : 'Dammam & Eastern Province Hub:'}
                </span>
                <p>{isArabic ? COMPANY_CONTACTS.dammamBranchAr : COMPANY_CONTACTS.dammamBranchEn}</p>
              </div>
            </div>
          </div>

          {/* 24/7 Hotline & Direct Contact (3 Cols) */}
          <div className="lg:col-span-3 space-y-3.5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#C5A059]">
              {isArabic ? 'خدمة العملاء والحجز الفوري' : '24/7 Dispatch & Hotline'}
            </h4>

            <a
              href={`tel:${COMPANY_CONTACTS.phoneCall}`}
              className="p-3.5 rounded-xl bg-[#121212] border border-[#282828] flex items-center gap-3 hover:border-[#C5A059]/50 transition group"
            >
              <div className="p-2 rounded-lg bg-[#C5A059] text-[#0A0A0A] group-hover:scale-105 transition-transform">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <div className="text-[11px] text-[#C5A059] font-medium">{isArabic ? 'الرقم الموحد المباشر' : 'Toll-Free Hotline'}</div>
                <div className="text-sm font-black text-white">{COMPANY_CONTACTS.phoneDisplay}</div>
              </div>
            </a>

            <a
              href={isArabic ? COMPANY_CONTACTS.whatsappLinkAr : COMPANY_CONTACTS.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3.5 rounded-xl bg-[#121212] border border-[#282828] flex items-center gap-3 hover:border-emerald-500/50 transition group"
            >
              <div className="p-2 rounded-lg bg-emerald-600 text-white group-hover:scale-105 transition-transform">
                <MessageSquare className="w-5 h-5" />
              </div>
              <div>
                <div className="text-[11px] text-emerald-400 font-medium">{isArabic ? 'خدمة الواتساب الفورية' : 'WhatsApp Support'}</div>
                <div className="text-sm font-black text-white">{isArabic ? 'تواصل معنا الآن' : 'Chat Instantly'}</div>
              </div>
            </a>

            <button
              onClick={onOpenBooking}
              className="w-full py-2.5 bg-[#C5A059]/15 hover:bg-[#C5A059]/25 text-[#C5A059] text-xs font-bold rounded-xl border border-[#C5A059]/30 transition cursor-pointer"
            >
              {isArabic ? 'طلب معاينة مجانية لمنزلك' : 'Book Free Home Survey'}
            </button>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-wrap items-center justify-between gap-4 text-xs text-neutral-500">
          <div>
            {t('footer.rights')}
          </div>

          <div className="flex items-center gap-4">
            <span>{isArabic ? 'نقل أثاث منزلي • نقل مكاتب • فك وتركيب نجارين • تغليف خماسي • شاحنات دينا مغلقة' : 'Home Shifting • Office Relocation • Carpenter Services • 5-Layer Packing • Closed Dyna Fleet'}</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
