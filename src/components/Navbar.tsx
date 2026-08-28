import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { COMPANY_CONTACTS } from '../data/ksaData';
import { 
  Truck, 
  Phone, 
  Globe, 
  Menu, 
  X, 
  Search, 
  Calculator, 
  ShieldCheck,
  CheckCircle2,
  MapPin
} from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';

interface NavbarProps {
  onOpenBooking: () => void;
  onOpenTracker: () => void;
  onScrollToSection: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenBooking,
  onOpenTracker,
  onScrollToSection,
}) => {
  const { language, setLanguage, isArabic, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'services', label: isArabic ? 'خدماتنا' : 'Services' },
    { id: 'why-us', label: isArabic ? 'لماذا نحن' : 'Why Us' },
    { id: 'how-it-works', label: isArabic ? 'كيف نعمل' : 'How It Works' },
    { id: 'coverage', label: isArabic ? 'التغطية' : 'Coverage' },
    { id: 'reviews', label: isArabic ? 'التقييمات' : 'Reviews' },
  ];

  return (
    <header className="sticky top-0 z-50 transition-all duration-300">
      {/* Top Notification / Emergency Hotline Bar */}
      <div className="bg-slate-900 text-slate-200 text-xs sm:text-sm py-1.5 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 font-medium text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              {isArabic ? 'خدمة متوفرة الآن في جدة وجميع مدن المملكة' : 'Active Relocation Service in Jeddah & All KSA'}
            </span>
            <span className="hidden md:inline text-slate-600">•</span>
            <span className="hidden md:inline-flex items-center gap-1 text-slate-300">
              <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
              {isArabic ? COMPANY_CONTACTS.crNumberAr : COMPANY_CONTACTS.crNumber}
            </span>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={onOpenTracker}
              id="track-booking-top-btn"
              className="inline-flex items-center gap-1.5 text-slate-300 hover:text-amber-400 transition-colors underline-offset-2 hover:underline cursor-pointer font-medium"
            >
              <Search className="w-3.5 h-3.5 text-amber-400" />
              {t('nav.track')}
            </button>

            <div className="flex items-center gap-1 border-s border-slate-700 ps-3">
              <button
                onClick={() => setLanguage(language === 'ar' ? 'en' : 'ar')}
                id="lang-toggle-btn"
                className="inline-flex items-center gap-1 text-xs px-2.5 py-0.5 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition font-semibold cursor-pointer shadow-sm"
                title="Switch Language"
              >
                <Globe className="w-3 h-3 text-amber-400" />
                {language === 'ar' ? 'English' : 'العربية'}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation Header */}
      <div className={`bg-white/95 backdrop-blur-md transition-all border-b border-slate-200/90 ${isScrolled ? 'shadow-lg shadow-slate-900/5 py-2.5' : 'py-3.5'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Logo & Brand Identity */}
          <div 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-blue-700 to-indigo-600 flex items-center justify-center text-white shadow-md shadow-blue-500/25 group-hover:scale-105 transition-transform">
              <Truck className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-xl sm:text-2xl text-slate-900 tracking-tight">
                  {isArabic ? 'شركة سعد لنقل الأثاث' : 'SAAD Packers & Movers'}
                </span>
                <span className="bg-amber-100 text-amber-800 text-[10px] font-bold px-1.5 py-0.5 rounded border border-amber-300 uppercase">
                  {isArabic ? 'جدة والمملكة' : 'KSA'}
                </span>
              </div>
              <p className="text-[11px] text-slate-500 font-medium">
                {isArabic ? 'نقل منازل ومكاتب • تغليف احترافي • فك وتركيب' : 'Home Shifting • Office Relocation • Packing'}
              </p>
            </div>
          </div>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onScrollToSection(item.id)}
                className="text-sm font-bold text-slate-600 hover:text-blue-600 transition-colors cursor-pointer py-1"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-2.5">
            <a
              href={`tel:${COMPANY_CONTACTS.phoneCall}`}
              id="nav-call-btn"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs sm:text-sm font-bold text-slate-800 bg-slate-100 hover:bg-slate-200 rounded-xl border border-slate-300 transition shadow-sm"
            >
              <Phone className="w-4 h-4 text-blue-600" />
              <span>{COMPANY_CONTACTS.phoneDisplay}</span>
            </a>

            <a
              href={isArabic ? COMPANY_CONTACTS.whatsappLinkAr : COMPANY_CONTACTS.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              id="nav-whatsapp-btn"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs sm:text-sm font-bold text-white bg-[#25D366] hover:bg-[#20ba59] rounded-xl shadow-md shadow-[#25D366]/25 transition"
            >
              <WhatsAppIcon className="w-4 h-4 fill-white" size={16} />
              <span>{t('nav.whatsapp')}</span>
            </a>

            <button
              onClick={onOpenBooking}
              id="nav-book-inspection-btn"
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 rounded-xl shadow-md shadow-amber-500/25 transition cursor-pointer"
            >
              <CheckCircle2 className="w-4 h-4" />
              <span>{isArabic ? 'طلب معاينة' : 'Book Survey'}</span>
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              id="mobile-menu-btn"
              className="p-2 rounded-xl text-slate-700 hover:bg-slate-100 border border-slate-200"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6 text-blue-700" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 shadow-2xl px-4 pt-3 pb-6 animate-in slide-in-from-top duration-200">
          <div className="flex flex-col gap-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  onScrollToSection(item.id);
                  setMobileMenuOpen(false);
                }}
                className="text-start py-2.5 px-3 rounded-xl text-base font-bold text-slate-700 hover:bg-slate-100 hover:text-blue-600 transition"
              >
                {item.label}
              </button>
            ))}

            <button
              onClick={() => {
                onOpenTracker();
                setMobileMenuOpen(false);
              }}
              className="text-start py-2.5 px-3 rounded-xl text-base font-bold text-amber-700 bg-amber-50 border border-amber-200 flex items-center justify-between"
            >
              <span className="flex items-center gap-2">
                <Search className="w-4 h-4 text-amber-600" />
                {t('nav.track')}
              </span>
              <span className="text-xs bg-amber-500 text-white px-2 py-0.5 rounded-full font-bold">Live</span>
            </button>

            <div className="pt-3 border-t border-slate-200 flex flex-col gap-2">
              <button
                onClick={() => {
                  onOpenBooking();
                  setMobileMenuOpen(false);
                }}
                className="w-full py-3 bg-amber-500 hover:bg-amber-600 text-white font-bold rounded-xl text-center shadow-md shadow-amber-500/20"
              >
                {isArabic ? 'طلب معاينة مجانية للمنزل / المكتب' : 'Book Free Inspection Survey'}
              </button>

              <div className="grid grid-cols-2 gap-2">
                <a
                  href={`tel:${COMPANY_CONTACTS.phoneCall}`}
                  className="py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold rounded-xl text-center flex items-center justify-center gap-1.5 text-sm border border-slate-300"
                >
                  <Phone className="w-4 h-4 text-blue-600" />
                  {isArabic ? 'اتصال مباشر' : 'Call Now'}
                </a>
                <a
                  href={isArabic ? COMPANY_CONTACTS.whatsappLinkAr : COMPANY_CONTACTS.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2.5 bg-[#25D366] hover:bg-[#20ba59] text-white font-bold rounded-xl text-center flex items-center justify-center gap-1.5 text-sm shadow-md"
                >
                  <WhatsAppIcon className="w-4 h-4 fill-white" size={16} />
                  {isArabic ? 'واتساب' : 'WhatsApp'}
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
