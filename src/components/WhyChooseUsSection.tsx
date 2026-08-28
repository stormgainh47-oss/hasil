import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ShieldCheck, Clock, Users, DollarSign } from 'lucide-react';

export const WhyChooseUsSection: React.FC = () => {
  const { isArabic } = useLanguage();

  const reasons = [
    {
      icon: Users,
      titleEn: 'Trained & careful crew',
      titleAr: 'طاقم عمل مدرب وحريص',
      descEn: 'Professional movers who pack, lift, and handle every item with genuine care.',
      descAr: 'عمالة محترفة تقوم بالتغليف والرفع والتعامل مع كل قطعة بعناية فائقة وحرص حقيقي.'
    },
    {
      icon: Clock,
      titleEn: 'On-time, every time',
      titleAr: 'في الموعد، في كل مرة',
      descEn: 'Clear schedules and punctual pickups, so your move always stays on track.',
      descAr: 'مواعيد دقيقة وانطلاق بالوقت المحدد لضمان سير عملية نقلك بكل سلاسة ودون تأخير.'
    },
    {
      icon: DollarSign,
      titleEn: 'Transparent pricing',
      titleAr: 'أسعار واضحة وشفافة',
      descEn: 'A clear, upfront estimate with no hidden charges appearing on moving day.',
      descAr: 'عرض سعر واضح ومسبق بدون أي تكاليف أو رسوم خفية تظهر في يوم النقل.'
    },
    {
      icon: ShieldCheck,
      titleEn: 'Fully insured moves',
      titleAr: 'نقل مؤمن ومضمون بالكامل',
      descEn: 'Your belongings are covered from doorstep to doorstep for real peace of mind.',
      descAr: 'مقتنياتك محمية ومغطاة من الباب إلى الباب لتستمتع براحة بال حقيقية.'
    }
  ];

  return (
    <section id="why-us" className="py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:20px_20px] opacity-40"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-extrabold uppercase tracking-widest text-amber-400 bg-amber-950/80 px-3.5 py-1.5 rounded-full border border-amber-500/30">
            {isArabic ? 'لماذا تختارنا' : 'Why choose us'}
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {isArabic ? 'الفريق الذي يمكنك الوثوق به في كل ما تملك' : 'The team you can trust with everything you own'}
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg">
            {isArabic 
              ? 'نتعامل مع كل صندوق وكأنه ملكنا. إليك ما يمكنك الاعتماد عليه مع كل عملية نقل مع شركة سعد:' 
              : "We treat every box like our own. Here's what you can count on with every Saad move:"}
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((item, index) => {
            const Icon = item.icon;
            return (
              <div 
                key={index}
                className="bg-slate-800/80 border border-slate-700/80 hover:border-amber-400/60 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center mb-5">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">
                    {isArabic ? item.titleAr : item.titleEn}
                  </h3>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    {isArabic ? item.descAr : item.descEn}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
