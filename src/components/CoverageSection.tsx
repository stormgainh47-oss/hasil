import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { MapPin, Navigation, ArrowRight, ArrowLeft } from 'lucide-react';

export const CoverageSection: React.FC = () => {
  const { isArabic } = useLanguage();

  const cities = [
    { nameEn: 'Jeddah', nameAr: 'جدة (المقر الرئيسي)', hub: true },
    { nameEn: 'Mecca', nameAr: 'مكة المكرمة' },
    { nameEn: 'Medina', nameAr: 'المدينة المنورة' },
    { nameEn: 'Riyadh', nameAr: 'الرياض' },
    { nameEn: 'Dammam', nameAr: 'الدمام' },
    { nameEn: 'Al Khobar', nameAr: 'الخبر' },
    { nameEn: 'Taif', nameAr: 'الطائف' },
    { nameEn: 'Yanbu', nameAr: 'ينبع' },
    { nameEn: 'Abha', nameAr: 'أبها والجنوب' },
    { nameEn: 'All over KSA', nameAr: 'كافة مدن المملكة', highlight: true }
  ];

  return (
    <section id="coverage" className="py-20 bg-slate-900 text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-extrabold uppercase tracking-widest text-blue-400 bg-blue-950/80 px-3.5 py-1.5 rounded-full border border-blue-500/30">
            {isArabic ? 'نطاق التغطية' : 'Coverage'}
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {isArabic ? 'من جدة إلى كافة أنحاء المملكة' : 'From Jeddah to all over the Kingdom'}
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg">
            {isArabic 
              ? 'نقل محلي داخل أحياء جدة ونقل بين المدن لكافة المدن الرئيسية في المملكة العربية السعودية — دائماً في الموعد وبكل حرص.' 
              : 'Local moves across Jeddah and intercity relocations to every major city in Saudi Arabia — always on time, always careful.'}
          </p>
        </div>

        {/* Cities Chips Matrix */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {cities.map((city, idx) => (
            <div 
              key={idx}
              className={`p-4 rounded-2xl border transition-all duration-300 flex items-center gap-3 ${
                city.highlight 
                  ? 'bg-gradient-to-r from-amber-500 to-amber-600 border-amber-400 text-slate-950 font-black shadow-lg shadow-amber-500/20' 
                  : city.hub 
                    ? 'bg-blue-600/30 border-blue-400 text-white font-bold' 
                    : 'bg-slate-800/80 border-slate-700/80 hover:border-slate-500 text-slate-200 font-semibold'
              }`}
            >
              <div className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 ${
                city.highlight ? 'bg-slate-950 text-amber-400' : 'bg-slate-700 text-amber-400'
              }`}>
                <MapPin className="w-4 h-4" />
              </div>
              <div>
                <div className="text-sm">
                  {isArabic ? city.nameAr : city.nameEn}
                </div>
                {city.hub && (
                  <span className="text-[10px] uppercase tracking-wider text-blue-300 block font-normal">
                    {isArabic ? 'مركز الانطلاق الرئيسي' : 'Primary Hub'}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Dispatch Fleet Note Banner */}
        <div className="mt-12 p-6 rounded-2xl bg-slate-800/90 border border-slate-700 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-start">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
              <Navigation className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">
                {isArabic ? 'رحلات يومية منتظمة وشاحنات دينا مغلقة' : 'Daily Scheduled Intercity Dyna Fleet'}
              </h4>
              <p className="text-xs text-slate-300 mt-0.5">
                {isArabic 
                  ? 'شاحنات معزولة ومبطنة تحمي الأثاث من حرارة وغبار الطرق السريعة في المملكة' 
                  : 'Climate-shielded, insulated trucks safeguarding furniture against highway heat and dust'}
              </p>
            </div>
          </div>
          <a
            href="tel:+966575771358"
            className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold rounded-xl shrink-0 transition"
          >
            {isArabic ? 'استفسر عن رحلات اليوم' : 'Check Today’s Route'}
          </a>
        </div>

      </div>
    </section>
  );
};
