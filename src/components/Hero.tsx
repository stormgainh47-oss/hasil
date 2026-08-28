import React from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import { COMPANY_CONTACTS } from '../data/ksaData';
import { WORK_IMAGES } from '../assets/images';
import { 
  ShieldCheck, 
  Truck, 
  Package, 
  Clock,
  ArrowRight, 
  ArrowLeft, 
  CheckCircle2, 
  Phone,
  Users
} from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';

interface HeroProps {
  onOpenBooking: () => void;
  onOpenTracker: () => void;
  onScrollToSection: (sectionId: string) => void;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenBooking,
  onOpenTracker,
  onScrollToSection,
}) => {
  const { isArabic } = useLanguage();
  const ArrowIcon = isArabic ? ArrowLeft : ArrowRight;

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-100 text-slate-900 pt-10 pb-16 lg:pt-16 lg:pb-24 border-b border-slate-200">
      {/* Background Subtle Geometric Pattern & Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0F172A08_1px,transparent_1px),linear-gradient(to_bottom,#0F172A08_1px,transparent_1px)] bg-[size:3rem_3rem] pointer-events-none"></div>
      
      {/* Soft Glow Accents */}
      <div className="absolute top-10 start-1/3 -translate-x-1/2 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 end-10 w-96 h-96 bg-amber-400/15 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Trust Pill */}
        <motion.div 
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center sm:justify-start mb-6"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200 text-slate-800 text-xs sm:text-sm font-semibold shadow-sm">
            <span className="flex h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
            <span className="font-bold text-blue-700">
              {isArabic ? 'شركة سعد لنقل الأثاث والعفش' : 'SAAD Packers & Movers'}
            </span>
            <span className="text-slate-300">•</span>
            <span className="text-amber-600 font-bold">
              {isArabic ? '1000+ عملية نقل ناجحة في 2026' : '1000+ Successful Moves in 2026'}
            </span>
            <span className="hidden md:inline text-slate-300">•</span>
            <span className="hidden md:inline text-slate-600">
              {isArabic ? 'جدة وكافة أنحاء المملكة' : 'Jeddah & All Over KSA'}
            </span>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Headline & Value Props (7 cols on lg) */}
          <motion.div 
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-7 space-y-6 text-center sm:text-start"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 leading-tight">
              <span className="block text-slate-900">
                {isArabic 
                  ? 'خدمة النقل والترحيل الموثوقة بجدة' 
                  : "Jeddah's trusted moving & relocation service"}
              </span>
              <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-indigo-600 to-blue-900">
                {isArabic ? '— نقل آمن وبسيط دائماً' : '— Moving made safe & simple'}
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-600 max-w-2xl leading-relaxed font-medium">
              {isArabic 
                ? 'تقوم شركة سعد بنقل المنازل والمكاتب في جميع أنحاء جدة وكافة مدن المملكة العربية السعودية — نقل بيوت كاملة، أثاث، ومعدات مكتبية بواسطة طواقم مدربة وشاحنات مجهزة وأيادٍ حريصة.' 
                : 'Saad Packers & Movers moves homes and offices across Jeddah and all over Saudi Arabia — full-house shifting, furniture, and office equipment, handled by trained crews with the right trucks and careful hands.'}
            </p>

            {/* 4 Trust Feature Pills */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
              <motion.div 
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="bg-white border border-slate-200/90 hover:border-blue-300 hover:shadow-md transition-all rounded-2xl p-3.5 text-start shadow-sm"
              >
                <div className="w-8 h-8 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center mb-2">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <h4 className="text-xs font-bold text-slate-900">{isArabic ? 'مرخص ومؤمن' : 'Licensed & insured'}</h4>
                <p className="text-[11px] text-slate-500 mt-0.5">{isArabic ? 'ضمان وراحة بال' : 'Full peace of mind'}</p>
              </motion.div>

              <motion.div 
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="bg-white border border-slate-200/90 hover:border-amber-300 hover:shadow-md transition-all rounded-2xl p-3.5 text-start shadow-sm"
              >
                <div className="w-8 h-8 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center mb-2">
                  <Clock className="w-4 h-4" />
                </div>
                <h4 className="text-xs font-bold text-slate-900">{isArabic ? 'في الموعد، دائماً' : 'On-time, every time'}</h4>
                <p className="text-[11px] text-slate-500 mt-0.5">{isArabic ? 'التزام دقيق بالوقت' : 'Strict punctuality'}</p>
              </motion.div>

              <motion.div 
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="bg-white border border-slate-200/90 hover:border-emerald-300 hover:shadow-md transition-all rounded-2xl p-3.5 text-start shadow-sm"
              >
                <div className="w-8 h-8 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center mb-2">
                  <Users className="w-4 h-4" />
                </div>
                <h4 className="text-xs font-bold text-slate-900">{isArabic ? 'طاقم عمل مدرب' : 'Trained moving crew'}</h4>
                <p className="text-[11px] text-slate-500 mt-0.5">{isArabic ? 'أيادٍ ماهرة وحريصة' : 'Skilled & careful'}</p>
              </motion.div>

              <motion.div 
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="bg-white border border-slate-200/90 hover:border-indigo-300 hover:shadow-md transition-all rounded-2xl p-3.5 text-start shadow-sm"
              >
                <div className="w-8 h-8 rounded-xl bg-indigo-50 text-indigo-700 flex items-center justify-center mb-2">
                  <Package className="w-4 h-4" />
                </div>
                <h4 className="text-xs font-bold text-slate-900">{isArabic ? 'تغليف احترافي' : 'Professional packing'}</h4>
                <p className="text-[11px] text-slate-500 mt-0.5">{isArabic ? 'كرتون وبابلز متين' : 'Boxes & bubble wrap'}</p>
              </motion.div>
            </div>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3 pt-4">
              <button
                onClick={() => onScrollToSection('free-quote')}
                id="hero-get-free-quote-btn"
                className="px-6 py-3.5 rounded-xl bg-blue-700 hover:bg-blue-800 text-white font-bold text-sm sm:text-base shadow-lg shadow-blue-700/25 transition-all transform hover:-translate-y-0.5 inline-flex items-center gap-2 cursor-pointer"
              >
                <span>{isArabic ? 'طلب تسعيرة مجانية' : 'Get a Free Quote'}</span>
                <ArrowIcon className="w-4 h-4" />
              </button>

              <a
                href={`tel:${COMPANY_CONTACTS.phoneCall}`}
                id="hero-phone-call-btn"
                className="px-5 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm sm:text-base shadow-md transition-all inline-flex items-center gap-2 cursor-pointer"
              >
                <Phone className="w-4 h-4 text-emerald-400" />
                <span>+966 57 577 1358</span>
              </a>

              <a
                href={isArabic ? COMPANY_CONTACTS.whatsappLinkAr : COMPANY_CONTACTS.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                id="hero-whatsapp-btn"
                className="px-5 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-sm sm:text-base shadow-md shadow-[#25D366]/25 transition-all inline-flex items-center gap-2 cursor-pointer transform hover:-translate-y-0.5"
              >
                <WhatsAppIcon className="w-5 h-5 fill-white" size={20} />
                <span>{isArabic ? 'واتساب مباشر' : 'WhatsApp'}</span>
              </a>
            </div>

            {/* Trust Metrics Bar */}
            <div className="pt-6 border-t border-slate-200 grid grid-cols-2 sm:grid-cols-4 gap-4 text-slate-700">
              <div className="bg-white/80 p-3 rounded-xl border border-slate-100 shadow-sm">
                <div className="text-xl sm:text-2xl font-black text-slate-900">1,000+</div>
                <div className="text-xs text-slate-500 font-medium">{isArabic ? 'عملية نقل ناجحة في 2026' : 'Successful Moves in 2026'}</div>
              </div>
              <div className="bg-white/80 p-3 rounded-xl border border-slate-100 shadow-sm">
                <div className="text-xl sm:text-2xl font-black text-amber-600">100%</div>
                <div className="text-xs text-slate-500 font-medium">{isArabic ? 'ضمان سلامة العفش' : 'Damage-Free Guarantee'}</div>
              </div>
              <div className="bg-white/80 p-3 rounded-xl border border-slate-100 shadow-sm">
                <div className="text-xl sm:text-2xl font-black text-blue-700">13</div>
                <div className="text-xs text-slate-500 font-medium">{isArabic ? 'منطقة مغطاة بالمملكة' : 'KSA Provinces'}</div>
              </div>
              <div className="bg-white/80 p-3 rounded-xl border border-slate-100 shadow-sm">
                <div className="text-xl sm:text-2xl font-black text-emerald-600">24/7</div>
                <div className="text-xs text-slate-500 font-medium">{isArabic ? 'خدمة متواصلة' : 'Support & Dispatch'}</div>
              </div>
            </div>
          </motion.div>

          {/* Quick Move Request & Free Survey Card (5 cols on lg) */}
          <motion.div 
            initial={{ opacity: 0, x: isArabic ? -30 : 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 space-y-4"
          >
            {/* Hero Visual Image Banner */}
            <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-lg group bg-slate-100">
              <img 
                src={WORK_IMAGES.hero} 
                alt="Saad Packers Movers Jeddah KSA"
                referrerPolicy="no-referrer"
                className="w-full h-52 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/30 to-transparent"></div>
              <div className="absolute bottom-3 start-4 end-4 flex items-center justify-between">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-amber-300 bg-slate-950/70 px-2.5 py-0.5 rounded-full border border-amber-400/40">
                    {isArabic ? 'أسطول دينا معتمد 24/7' : 'Certified Fleet 24/7'}
                  </span>
                  <h4 className="text-sm font-bold text-white mt-1 drop-shadow-sm">
                    {isArabic ? 'نقل عفش احترافي بجدة مع الفك والتركيب والتغليف' : 'Professional Furniture Moving in Jeddah & KSA'}
                  </h4>
                </div>
                <div className="hidden sm:flex items-center gap-1.5 bg-emerald-600/90 border border-emerald-400 px-2.5 py-1 rounded-xl text-white text-xs font-bold shadow-sm">
                  <ShieldCheck className="w-4 h-4" />
                  <span>{isArabic ? 'ضمان شامل' : 'Zero Damage'}</span>
                </div>
              </div>
            </div>

            <div className="bg-white border border-slate-200/90 rounded-2xl p-6 sm:p-7 shadow-xl relative">
              <div className="flex items-center justify-between pb-4 mb-5 border-b border-slate-100">
                <div className="flex items-center gap-2.5">
                  <div className="p-2.5 rounded-xl bg-blue-50 border border-blue-100 text-blue-700">
                    <Truck className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-extrabold text-slate-900 text-base sm:text-lg">
                      {isArabic ? 'طلب تسعيرة ومعاينة مجانية' : 'Free Survey & Instant Estimate'}
                    </h3>
                    <p className="text-xs text-slate-500 font-medium">
                      {isArabic ? 'خدمة سريعة في جدة وكافة الأحياء' : 'Fast moving dispatch & on-site survey'}
                    </p>
                  </div>
                </div>
                <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold border border-emerald-200">
                  {isArabic ? 'مجاني 100%' : '100% Free'}
                </span>
              </div>

              <div className="space-y-4">
                {/* Quick Feature Checklist */}
                <div className="bg-slate-50 rounded-xl p-4 border border-slate-200/80 space-y-2.5">
                  <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>{isArabic ? 'نجارون متخصصون لفك وتركيب غرف النوم والمطابخ والستائر' : 'Master Carpenters for Bedroom & Kitchen fitting'}</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>{isArabic ? 'تغليف خماسي حراري بابلز وكرتون مقوى مقاوم للحرارة' : '5-Layer Bubble & Carton Thermal Packing'}</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>{isArabic ? 'شاحنات دينا مغلقة ومجهزة بأحجام متنوعة' : 'Fully Covered Insulated Dyna Fleet'}</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
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
                    className="py-3 px-4 bg-[#25D366] hover:bg-[#20ba59] text-white font-bold rounded-xl text-xs sm:text-sm shadow-md shadow-[#25D366]/20 transition cursor-pointer flex items-center justify-center gap-2"
                  >
                    <WhatsAppIcon className="w-4 h-4 fill-white" size={16} />
                    <span>{isArabic ? 'واتساب مباشر' : 'WhatsApp'}</span>
                  </a>

                  <button
                    onClick={() => onScrollToSection('free-quote')}
                    id="hero-instant-book-btn"
                    className="py-3 px-4 bg-blue-700 hover:bg-blue-800 text-white font-bold rounded-xl text-xs sm:text-sm shadow-md shadow-blue-700/25 transition cursor-pointer flex items-center justify-center gap-2"
                  >
                    <CheckCircle2 className="w-4 h-4" />
                    <span>{isArabic ? 'طلب تسعيرة' : 'Get a Quote'}</span>
                  </button>
                </div>

                {/* Direct Call & Support Hotline Strip */}
                <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></div>
                    <span className="text-xs text-slate-700 font-bold">
                      {isArabic ? 'خدمة العملاء متوفرة الآن' : 'Movers on-duty in Jeddah'}
                    </span>
                  </div>
                  <a
                    href={`tel:${COMPANY_CONTACTS.phoneCall}`}
                    className="text-xs font-black text-blue-700 hover:text-blue-800 flex items-center gap-1"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>+966 57 577 1358</span>
                  </a>
                </div>

              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
