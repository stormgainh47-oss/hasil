import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { COMPANY_CONTACTS } from '../data/ksaData';
import { 
  ShieldCheck, 
  Truck, 
  Wrench, 
  Package, 
  ArrowRight, 
  ArrowLeft, 
  CheckCircle2, 
  MessageSquare, 
  Phone, 
  Sparkles,
  Calculator
} from 'lucide-react';

interface HeroProps {
  onOpenBooking: () => void;
  onScrollToCalculator: () => void;
  onScrollToAiAdvisor: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenBooking,
  onScrollToCalculator,
  onScrollToAiAdvisor,
}) => {
  const { isArabic, t } = useLanguage();

  const ArrowIcon = isArabic ? ArrowLeft : ArrowRight;

  return (
    <section className="relative overflow-hidden bg-[#0A0A0A] text-[#E0E0E0] pt-10 pb-16 lg:pt-16 lg:pb-24 border-b border-[#1E1E1E]">
      {/* Background Subtle Geometric Pattern & Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#26262615_1px,transparent_1px),linear-gradient(to_bottom,#26262615_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none opacity-40"></div>
      
      {/* Soft Glow Accents */}
      <div className="absolute top-1/4 start-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#C5A059]/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 end-10 w-80 h-80 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Trust Pill */}
        <div className="flex justify-center sm:justify-start mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#141414] border border-[#C5A059]/30 text-neutral-300 text-xs sm:text-sm font-medium shadow-inner">
            <span className="flex h-2 w-2 rounded-full bg-emerald-400"></span>
            <span className="font-semibold text-[#C5A059]">{t('hero.badge')}</span>
            <span className="hidden sm:inline text-neutral-600">•</span>
            <span className="hidden sm:inline text-neutral-400">
              {isArabic ? 'جدة والمنطقة الغربية والوسطى والشرقية' : 'Jeddah, Western, Central & Eastern KSA'}
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Headline & Value Props (7 cols on lg) */}
          <div className="lg:col-span-7 space-y-6 text-center sm:text-start">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
              <span className="block text-[#C5A059] drop-shadow-sm">
                {t('hero.title_1')}
              </span>
              <span className="block mt-2 text-neutral-100 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
                {t('hero.title_2')}
              </span>
            </h1>

            <p className="text-base sm:text-lg text-neutral-300 max-w-2xl leading-relaxed">
              {t('hero.subtitle')}
            </p>

            {/* Quick Feature Pillars */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
              <div className="bg-[#121212] border border-[#222222] hover:border-[#C5A059]/40 transition-colors rounded-xl p-3 text-start">
                <Wrench className="w-5 h-5 text-[#C5A059] mb-1.5" />
                <h4 className="text-xs font-bold text-white">{isArabic ? 'نجارون متخصصون' : 'Master Carpenters'}</h4>
                <p className="text-[11px] text-neutral-400">{isArabic ? 'فك وتركيب غرف ومطابخ' : 'IKEA & custom bedroom sets'}</p>
              </div>

              <div className="bg-[#121212] border border-[#222222] hover:border-[#C5A059]/40 transition-colors rounded-xl p-3 text-start">
                <Package className="w-5 h-5 text-[#C5A059] mb-1.5" />
                <h4 className="text-xs font-bold text-white">{isArabic ? 'تغليف 5 طبقات' : '5-Layer Packing'}</h4>
                <p className="text-[11px] text-neutral-400">{isArabic ? 'بابلز وكرتون مقوى' : 'Heavy bubble & cartons'}</p>
              </div>

              <div className="bg-[#121212] border border-[#222222] hover:border-[#C5A059]/40 transition-colors rounded-xl p-3 text-start">
                <Truck className="w-5 h-5 text-emerald-400 mb-1.5" />
                <h4 className="text-xs font-bold text-white">{isArabic ? 'دينا مغلقة ومبطنة' : 'Covered Dyna Fleet'}</h4>
                <p className="text-[11px] text-neutral-400">{isArabic ? 'حماية من الغبار والحرارة' : 'Insulated & dust-proof'}</p>
              </div>

              <div className="bg-[#121212] border border-[#222222] hover:border-[#C5A059]/40 transition-colors rounded-xl p-3 text-start">
                <ShieldCheck className="w-5 h-5 text-[#C5A059] mb-1.5" />
                <h4 className="text-xs font-bold text-white">{isArabic ? 'ضمان الأمان 100%' : '100% Zero-Damage'}</h4>
                <p className="text-[11px] text-neutral-400">{isArabic ? 'عقد رسمي وترقيم كراتين' : 'Certified safety pledge'}</p>
              </div>
            </div>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3 pt-4">
              <a
                href={isArabic ? COMPANY_CONTACTS.whatsappLinkAr : COMPANY_CONTACTS.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                id="hero-whatsapp-primary-btn"
                className="px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm sm:text-base shadow-lg shadow-emerald-600/30 transition-all transform hover:-translate-y-0.5 inline-flex items-center gap-2.5 cursor-pointer"
              >
                <MessageSquare className="w-5 h-5 fill-current" />
                <span>{isArabic ? 'تواصل عبر واتساب فوراً' : 'Chat on WhatsApp Now'}</span>
                <span className="bg-emerald-700/80 text-[11px] px-2 py-0.5 rounded-full font-semibold border border-emerald-400/40">
                  {isArabic ? 'رد فوري 24/7' : 'Instant Reply'}
                </span>
              </a>

              <button
                onClick={onOpenBooking}
                id="hero-book-survey-btn"
                className="px-5 py-3.5 rounded-xl bg-[#161616] hover:bg-[#222222] text-[#E0E0E0] font-semibold text-sm sm:text-base border border-[#2A2A2A] hover:border-[#C5A059]/40 shadow-md transition-all inline-flex items-center gap-2 cursor-pointer"
              >
                <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                <span>{t('hero.book_free_survey')}</span>
              </button>

              <button
                onClick={onScrollToCalculator}
                id="hero-calc-quote-btn"
                className="px-5 py-3.5 rounded-xl bg-[#C5A059]/15 hover:bg-[#C5A059]/25 text-[#C5A059] border border-[#C5A059]/40 font-bold text-sm sm:text-base shadow-md transition-all inline-flex items-center gap-2 cursor-pointer"
              >
                <Calculator className="w-5 h-5 text-[#C5A059]" />
                <span>{t('hero.get_instant_quote')}</span>
                <ArrowIcon className="w-4 h-4" />
              </button>
            </div>

            {/* Trust Metrics Bar */}
            <div className="pt-6 border-t border-[#222222] grid grid-cols-2 sm:grid-cols-4 gap-4 text-neutral-300">
              <div>
                <div className="text-xl sm:text-2xl font-black text-white">+18,500</div>
                <div className="text-xs text-neutral-400">{isArabic ? 'عملية نقل ناجحة' : 'Successful Moves'}</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-black text-[#C5A059]">100%</div>
                <div className="text-xs text-neutral-400">{isArabic ? 'ضمان سلامة العفش' : 'Damage-Free Guarantee'}</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-black text-white">13</div>
                <div className="text-xs text-neutral-400">{isArabic ? 'منطقة مغطاة بالمملكة' : 'KSA Provinces Served'}</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-black text-white">24/7</div>
                <div className="text-xs text-neutral-400">{isArabic ? 'خدمة متواصلة وسريعة' : 'Emergency & Daily Ops'}</div>
              </div>
            </div>
          </div>

            {/* Quick Move Request & Free Survey Card (5 cols on lg) */}
            <div className="lg:col-span-5 space-y-4">
              {/* Hero Visual Image Banner */}
              <div className="relative rounded-2xl overflow-hidden border border-[#2A2A2A] shadow-xl group">
                <img 
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80" 
                  alt="Saad Packers Movers Jeddah KSA"
                  referrerPolicy="no-referrer"
                  className="w-full h-48 sm:h-52 object-cover transition-transform duration-500 group-hover:scale-105 filter brightness-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/40 to-transparent"></div>
                <div className="absolute bottom-3 start-4 end-4 flex items-center justify-between">
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#C5A059] bg-black/60 px-2 py-0.5 rounded border border-[#C5A059]/30">
                      {isArabic ? 'أسطول دينا معتمد 24/7' : 'Certified Fleet 24/7'}
                    </span>
                    <h4 className="text-sm font-bold text-white mt-1">
                      {isArabic ? 'نقل عفش احترافي بجدة مع الفك والتركيب والتغليف' : 'Professional Furniture Moving in Jeddah'}
                    </h4>
                  </div>
                  <div className="hidden sm:flex items-center gap-1.5 bg-emerald-950/80 border border-emerald-500/30 px-2.5 py-1 rounded-lg text-emerald-400 text-xs font-semibold">
                    <ShieldCheck className="w-4 h-4" />
                    <span>{isArabic ? 'ضمان شامل' : 'Zero Damage'}</span>
                  </div>
                </div>
              </div>

              <div className="bg-[#121212]/95 border border-[#262626] rounded-2xl p-6 sm:p-7 shadow-2xl backdrop-blur-xl relative">
                <div className="flex items-center justify-between pb-4 mb-5 border-b border-[#222222]">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2 rounded-lg bg-[#C5A059]/15 border border-[#C5A059]/30 text-[#C5A059]">
                      <Truck className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-bold text-white text-base sm:text-lg">
                        {isArabic ? 'طلب تسعيرة ومعاينة مجانية فورية' : 'Instant Survey & Custom Quote'}
                      </h3>
                      <p className="text-xs text-neutral-400">
                        {isArabic ? 'خدمة سريعة في جدة وكافة الأحياء' : 'Fast moving dispatch & on-site survey'}
                      </p>
                    </div>
                  </div>
                  <span className="px-2.5 py-1 rounded bg-[#C5A059]/15 text-[#C5A059] text-xs font-semibold border border-[#C5A059]/30">
                    {isArabic ? 'معاينة مجانية' : 'Free Survey'}
                  </span>
                </div>

                <div className="space-y-4">
                  {/* Quick Feature Checklist */}
                  <div className="bg-[#0A0A0A] rounded-xl p-4 border border-[#222222] space-y-2.5">
                    <div className="flex items-center gap-2 text-xs text-neutral-200">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>{isArabic ? 'نجارون متخصصون لفك وتركيب غرف النوم والمطابخ والستائر' : 'Master Carpenters for Bedroom & Kitchen fitting'}</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-neutral-200">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>{isArabic ? 'تغليف خماسي حراري بابلز وكرتون مقوى مقاوم للحرارة' : '5-Layer Bubble & Carton Thermal Packing'}</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-neutral-200">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>{isArabic ? 'شاحنات دينا مغلقة ومجهزة بأحجام متنوعة وأوناش رفع' : 'Fully Covered Insulated Dyna Fleet & Hoist Winches'}</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-neutral-200">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>{isArabic ? 'عقد رسمي وضمان شامل لسلامة جميع المنقولات' : 'Official Written Contract & 100% Safety Pledge'}</span>
                    </div>
                  </div>

                  {/* Primary CTA Buttons */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                    <a
                      href={isArabic ? COMPANY_CONTACTS.whatsappLinkAr : COMPANY_CONTACTS.whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      id="hero-card-whatsapp-btn"
                      className="py-3 px-4 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl text-xs sm:text-sm shadow-lg shadow-emerald-600/25 transition cursor-pointer flex items-center justify-center gap-2"
                    >
                      <MessageSquare className="w-4 h-4 fill-current" />
                      <span>{isArabic ? 'طلب تسعيرة واتساب' : 'WhatsApp Quote'}</span>
                    </a>

                    <button
                      onClick={onOpenBooking}
                      id="hero-instant-book-btn"
                      className="py-3 px-4 bg-gradient-to-r from-[#B38F46] to-[#C5A059] hover:from-[#9B7A38] hover:to-[#B38F46] text-[#0A0A0A] font-bold rounded-xl text-xs sm:text-sm shadow-md shadow-[#C5A059]/25 transition cursor-pointer flex items-center justify-center gap-2"
                    >
                      <CheckCircle2 className="w-4 h-4" />
                      <span>{isArabic ? 'حجز موعد معاينة' : 'Book Survey'}</span>
                    </button>
                  </div>

                  {/* Direct Call & Support Hotline Strip */}
                  <div className="flex items-center justify-between p-3 rounded-xl bg-[#0A0A0A] border border-[#222222]">
                    <div className="flex items-center gap-2">
                      <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></div>
                      <span className="text-xs text-neutral-300 font-medium">
                        {isArabic ? 'مندوبو النقل متاحون الآن' : 'Movers on-duty in Jeddah'}
                      </span>
                    </div>
                    <a
                      href={`tel:${COMPANY_CONTACTS.phoneCall}`}
                      className="text-xs font-bold text-[#C5A059] hover:underline flex items-center gap-1"
                    >
                      <Phone className="w-3.5 h-3.5" />
                      <span>{COMPANY_CONTACTS.phoneDisplay}</span>
                    </a>
                  </div>

                  {/* AI Assistant Quick Pill */}
                  <div 
                    onClick={onScrollToAiAdvisor}
                    className="p-2.5 rounded-xl bg-[#161616] border border-[#2A2A2A] hover:border-[#C5A059]/40 hover:bg-[#1E1E1E] transition cursor-pointer flex items-center gap-2.5"
                  >
                    <Sparkles className="w-4 h-4 text-[#C5A059] shrink-0" />
                    <span className="text-xs text-neutral-300 hover:text-white">
                      {isArabic ? 'استشر مستشار الذكاء الاصطناعي لتخطيط الأثاث والتغليف' : 'Try our AI Relocation & Packing Advisor'}
                    </span>
                  </div>
                </div>
              </div>
            </div>

        </div>
      </div>
    </section>
  );
};
