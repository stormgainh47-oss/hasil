import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { COMPANY_CONTACTS } from '../data/ksaData';
import { 
  Truck, 
  Phone, 
  Mail, 
  MapPin, 
  ShieldCheck, 
  CheckCircle2, 
  Clock,
  ExternalLink
} from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';

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
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          
          {/* Brand & Corporate Overview (4 Cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-700 flex items-center justify-center text-white shadow-md shadow-blue-700/30">
                <Truck className="w-5 h-5" />
              </div>
              <span className="font-black text-xl text-white tracking-tight">
                {isArabic ? 'شركة سعد لنقل وتغليف الأثاث' : 'SAAD Packers & Movers'}
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-medium">
              {isArabic 
                ? 'شريكك الموثوق لنقل العفش المنزلي، نقل الأثاث، ترحيل المكاتب، والتغليف الاحترافي — في جدة وكافة أنحاء المملكة العربية السعودية.' 
                : 'Your trusted partner for home shifting, furniture moving, office relocation, and professional packing — across Jeddah and all over Saudi Arabia.'}
            </p>

            <div className="p-4 rounded-xl bg-slate-800/90 border border-slate-700 space-y-2 text-xs font-medium">
              <div className="flex items-center gap-2 text-emerald-400 font-bold">
                <ShieldCheck className="w-4 h-4" />
                <span>{isArabic ? COMPANY_CONTACTS.crNumberAr : COMPANY_CONTACTS.crNumber}</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <Clock className="w-4 h-4 text-amber-400" />
                <span>{isArabic ? COMPANY_CONTACTS.workingHoursAr : COMPANY_CONTACTS.workingHoursEn}</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <Mail className="w-4 h-4 text-blue-400" />
                <a href={`mailto:${COMPANY_CONTACTS.email}`} className="hover:underline text-slate-200">
                  {COMPANY_CONTACTS.email}
                </a>
              </div>
            </div>
          </div>

          {/* Quick Nav Links (2 Cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400">
              {isArabic ? 'روابط الموقع' : 'Quick links'}
            </h4>
            <ul className="space-y-2 text-xs font-medium">
              <li>
                <button onClick={() => onScrollToSection('services')} className="hover:text-white transition cursor-pointer text-slate-400">
                  {isArabic ? 'خدماتنا' : 'Services'}
                </button>
              </li>
              <li>
                <button onClick={() => onScrollToSection('why-us')} className="hover:text-white transition cursor-pointer text-slate-400">
                  {isArabic ? 'لماذا نحن' : 'Why Us'}
                </button>
              </li>
              <li>
                <button onClick={() => onScrollToSection('how-it-works')} className="hover:text-white transition cursor-pointer text-slate-400">
                  {isArabic ? 'كيف نعمل' : 'How It Works'}
                </button>
              </li>
              <li>
                <button onClick={() => onScrollToSection('coverage')} className="hover:text-white transition cursor-pointer text-slate-400">
                  {isArabic ? 'نطاق التغطية' : 'Coverage'}
                </button>
              </li>
              <li>
                <button onClick={() => onScrollToSection('reviews')} className="hover:text-white transition cursor-pointer text-slate-400">
                  {isArabic ? 'آراء العملاء' : 'Reviews'}
                </button>
              </li>
              <li>
                <button onClick={() => onScrollToSection('free-quote')} className="text-amber-400 font-bold hover:underline cursor-pointer">
                  {isArabic ? 'طلب تسعيرة مجانية' : 'Get a Free Quote'}
                </button>
              </li>
            </ul>
          </div>

          {/* Services List (3 Cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-blue-400">
              {isArabic ? 'خدماتنا المعتمدة' : 'Our Services'}
            </h4>
            <ul className="space-y-2 text-xs text-slate-400 font-medium">
              <li>{isArabic ? '• نقل عفش منزلي وسكني' : '• Home Shifting'}</li>
              <li>{isArabic ? '• نقل الأثاث والترحيل (محلياً وفي كافة أنحاء المملكة)' : '• Furniture Moving & Relocation (Local & KSA)'}</li>
              <li>{isArabic ? '• نقل المكاتب والشركات' : '• Office Relocation'}</li>
              <li>{isArabic ? '• نقل الأثاث والعفش الثقيل' : '• Furniture Moving'}</li>
              <li>{isArabic ? '• التغليف الاحترافي الشامل' : '• Professional Packing'}</li>
              <li>{isArabic ? '• التحميل والتنزيل بالعمالة' : '• Loading & Unloading'}</li>
              <li>{isArabic ? '• نقل العفش بين مدن المملكة' : '• Intercity Transport'}</li>
              <li>{isArabic ? '• فك وتركيب الدواليب والمطابخ' : '• Wardrobe Uninstall & Refix'}</li>
            </ul>
          </div>

          {/* 24/7 Hotline & Direct Contact (3 Cols) */}
          <div className="lg:col-span-3 space-y-3.5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-blue-400">
              {isArabic ? 'خدمة العملاء والحجز الفوري' : '24/7 Dispatch & Hotline'}
            </h4>

            <a
              href={`tel:${COMPANY_CONTACTS.phoneCall}`}
              className="p-3.5 rounded-xl bg-slate-800/80 border border-slate-700 flex items-center gap-3 hover:border-blue-500 transition group"
            >
              <div className="p-2 rounded-lg bg-blue-600 text-white group-hover:scale-105 transition-transform">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <div className="text-[11px] text-blue-300 font-medium">{isArabic ? 'الرقم الموحد المباشر' : 'Toll-Free Hotline'}</div>
                <div className="text-sm font-black text-white">{COMPANY_CONTACTS.phoneDisplay}</div>
              </div>
            </a>

            <a
              href={isArabic ? COMPANY_CONTACTS.whatsappLinkAr : COMPANY_CONTACTS.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3.5 rounded-xl bg-slate-800/80 border border-slate-700 flex items-center gap-3 hover:border-[#25D366] transition group"
            >
              <div className="p-2 rounded-lg bg-[#25D366] text-white group-hover:scale-105 transition-transform shadow-md shadow-[#25D366]/20">
                <WhatsAppIcon className="w-5 h-5 fill-white" size={20} />
              </div>
              <div>
                <div className="text-[11px] text-emerald-400 font-medium">{isArabic ? 'خدمة الواتساب الفورية' : 'WhatsApp Support'}</div>
                <div className="text-sm font-black text-white">{isArabic ? 'تواصل معنا الآن' : 'Chat Instantly'}</div>
              </div>
            </a>

            <button
              onClick={onOpenBooking}
              className="w-full py-2.5 bg-blue-600/20 hover:bg-blue-600/30 text-blue-300 text-xs font-bold rounded-xl border border-blue-500/30 transition cursor-pointer"
            >
              {isArabic ? 'طلب معاينة مجانية لمنزلك' : 'Book Free Home Survey'}
            </button>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-400 font-medium">
          <div>
            {isArabic 
              ? '© 2026 شركة سعد لنقل وتغليف الأثاث. جميع الحقوق محفوظة. نقل المنازل والمكاتب في كافة أنحاء المملكة بأمان واحترافية.' 
              : '© 2026 Saad Packers & Movers. All rights reserved. Moving homes & offices across Saudi Arabia, the safe way.'}
          </div>

          <div className="flex items-center gap-4">
            <span className="text-slate-500">
              {isArabic ? 'جدة • الرياض • الدمام • مكة المكرمة • المدينة المنورة • ينبع' : 'Jeddah • Riyadh • Dammam • Mecca • Medina • Yanbu'}
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
};
