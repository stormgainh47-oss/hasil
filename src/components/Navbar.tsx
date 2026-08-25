import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { COMPANY_CONTACTS } from '../data/ksaData';
import { 
  Truck, 
  Phone, 
  MessageSquare, 
  Globe, 
  Menu, 
  X, 
  Search, 
  Calculator, 
  ShieldCheck,
  CheckCircle2,
  MapPin
} from 'lucide-react';

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
    { id: 'services', label: t('nav.services') },
    { id: 'calculator', label: t('nav.quote') },
    { id: 'inventory', label: t('nav.inventory') },
    { id: 'ai-advisor', label: t('nav.ai_advisor') },
    { id: 'coverage', label: t('nav.ksa_coverage') },
    { id: 'packing-guide', label: t('nav.packing_guide') },
    { id: 'faq', label: t('nav.contact') },
  ];

  return (
    <header className="sticky top-0 z-50 transition-all duration-300">
      {/* Top Notification / Emergency Hotline Bar */}
      <div className="bg-[#080808] text-neutral-300 text-xs sm:text-sm py-1.5 px-4 border-b border-[#1E1E1E]">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 font-medium text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              {isArabic ? 'خدمة متوفرة الآن في جدة وجميع مدن المملكة' : 'Active Relocation Service in Jeddah & All KSA'}
            </span>
            <span className="hidden md:inline text-neutral-600">•</span>
            <span className="hidden md:inline-flex items-center gap-1 text-neutral-300">
              <ShieldCheck className="w-3.5 h-3.5 text-[#C5A059]" />
              {isArabic ? COMPANY_CONTACTS.crNumberAr : COMPANY_CONTACTS.crNumber}
            </span>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={onOpenTracker}
              id="track-booking-top-btn"
              className="inline-flex items-center gap-1.5 text-neutral-300 hover:text-[#C5A059] transition-colors underline-offset-2 hover:underline cursor-pointer"
            >
              <Search className="w-3.5 h-3.5 text-[#C5A059]" />
              {t('nav.track')}
            </button>

            <div className="flex items-center gap-1 border-s border-[#262626] ps-3">
              <button
                onClick={() => setLanguage(language === 'ar' ? 'en' : 'ar')}
                id="lang-toggle-btn"
                className="inline-flex items-center gap-1 text-xs px-2.5 py-0.5 rounded bg-[#161616] hover:bg-[#222222] text-[#E0E0E0] border border-[#2A2A2A] transition font-medium cursor-pointer"
                title="Switch Language"
              >
                <Globe className="w-3 h-3 text-[#C5A059]" />
                {language === 'ar' ? 'English' : 'العربية'}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation Header */}
      <div className={`bg-[#0A0A0A]/95 backdrop-blur-md transition-shadow border-b border-[#1E1E1E] ${isScrolled ? 'shadow-xl shadow-black/50 py-2.5' : 'py-3.5'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Logo & Brand Identity */}
          <div 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-[#9B7A38] to-[#C5A059] flex items-center justify-center text-[#0A0A0A] shadow-md shadow-[#C5A059]/20 group-hover:scale-105 transition-transform">
              <Truck className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-xl sm:text-2xl text-white tracking-tight">
                  {isArabic ? 'سعد لنقل العفش' : 'Saad Movers'}
                </span>
                <span className="bg-[#C5A059]/15 text-[#C5A059] text-[10px] font-bold px-1.5 py-0.5 rounded border border-[#C5A059]/30 uppercase">
                  {isArabic ? 'المملكة' : 'KSA'}
                </span>
              </div>
              <p className="text-[11px] text-neutral-400 font-medium">
                {isArabic ? 'جدة • الرياض • الدمام • كافة أنحاء المملكة' : 'Jeddah • Riyadh • Dammam • Nationwide'}
              </p>
            </div>
          </div>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onScrollToSection(item.id)}
                className="text-sm font-semibold text-neutral-300 hover:text-[#C5A059] transition-colors cursor-pointer py-1"
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
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs sm:text-sm font-semibold text-[#E0E0E0] bg-[#161616] hover:bg-[#222222] rounded-lg border border-[#2A2A2A] hover:border-[#C5A059]/40 transition shadow-sm"
            >
              <Phone className="w-4 h-4 text-[#C5A059]" />
              <span>{COMPANY_CONTACTS.phoneDisplay}</span>
            </a>

            <a
              href={isArabic ? COMPANY_CONTACTS.whatsappLinkAr : COMPANY_CONTACTS.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              id="nav-whatsapp-btn"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs sm:text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-500 rounded-lg shadow-sm shadow-emerald-600/20 transition"
            >
              <MessageSquare className="w-4 h-4" />
              <span>{t('nav.whatsapp')}</span>
            </a>

            <button
              onClick={onOpenBooking}
              id="nav-book-inspection-btn"
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs sm:text-sm font-bold text-[#0A0A0A] bg-[#C5A059] hover:bg-[#D4B26F] rounded-lg shadow-sm shadow-[#C5A059]/25 transition cursor-pointer"
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
              className="p-2 rounded-lg text-neutral-300 hover:bg-[#1A1A1A] border border-[#2A2A2A]"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6 text-[#C5A059]" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#111111] border-b border-[#262626] shadow-2xl px-4 pt-3 pb-6 animate-in slide-in-from-top duration-200">
          <div className="flex flex-col gap-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  onScrollToSection(item.id);
                  setMobileMenuOpen(false);
                }}
                className="text-start py-2.5 px-3 rounded-lg text-base font-semibold text-neutral-200 hover:bg-[#1A1A1A] hover:text-[#C5A059] transition"
              >
                {item.label}
              </button>
            ))}

            <button
              onClick={() => {
                onOpenTracker();
                setMobileMenuOpen(false);
              }}
              className="text-start py-2.5 px-3 rounded-lg text-base font-semibold text-[#C5A059] bg-[#C5A059]/10 border border-[#C5A059]/20 flex items-center justify-between"
            >
              <span className="flex items-center gap-2">
                <Search className="w-4 h-4 text-[#C5A059]" />
                {t('nav.track')}
              </span>
              <span className="text-xs bg-[#C5A059] text-[#0A0A0A] px-2 py-0.5 rounded font-bold">Live</span>
            </button>

            <div className="pt-3 border-t border-[#222222] flex flex-col gap-2">
              <button
                onClick={() => {
                  onOpenBooking();
                  setMobileMenuOpen(false);
                }}
                className="w-full py-3 bg-[#C5A059] text-[#0A0A0A] font-bold rounded-xl text-center shadow-md shadow-[#C5A059]/20"
              >
                {isArabic ? 'طلب معاينة مجانية للمنزل / المكتب' : 'Book Free Inspection Survey'}
              </button>

              <div className="grid grid-cols-2 gap-2">
                <a
                  href={`tel:${COMPANY_CONTACTS.phoneCall}`}
                  className="py-2.5 bg-[#1A1A1A] text-[#E0E0E0] font-semibold rounded-lg text-center flex items-center justify-center gap-1.5 text-sm border border-[#2E2E2E]"
                >
                  <Phone className="w-4 h-4 text-[#C5A059]" />
                  {isArabic ? 'اتصال مباشر' : 'Call Now'}
                </a>
                <a
                  href={isArabic ? COMPANY_CONTACTS.whatsappLinkAr : COMPANY_CONTACTS.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2.5 bg-emerald-600 text-white font-semibold rounded-lg text-center flex items-center justify-center gap-1.5 text-sm"
                >
                  <MessageSquare className="w-4 h-4" />
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
