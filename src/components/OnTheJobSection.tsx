import React from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import { WORK_IMAGES } from '../assets/images';
import { CheckCircle2 } from 'lucide-react';

export const OnTheJobSection: React.FC = () => {
  const { isArabic } = useLanguage();

  const showcase = [
    {
      titleEn: 'Dabbab & Dyna local transport',
      titleAr: 'دباب ودينا للنقل والتوصيل المحلي',
      descEn: 'Available 24/7 for fast single-item or full room shifting across all Jeddah neighborhoods.',
      descAr: 'متوفر 24/7 لنقل الأثاث الفردي والغرف والكراتين في كافة أحياء جدة بسرعة وأمان.',
      image: WORK_IMAGES.dabbabDynaLocal,
      badgeEn: '24/7 Local Moving',
      badgeAr: 'نقل محلي 24/7'
    },
    {
      titleEn: 'Careful home shifting',
      titleAr: 'نقل منازل حريص وآمن',
      descEn: 'From high-rise apartments in Jeddah to spacious villas across the Kingdom.',
      descAr: 'من شقق الأبراج السكنية في جدة إلى الفلل والقصور في كافة مدن المملكة.',
      image: WORK_IMAGES.residentialHomeShifting,
      badgeEn: 'Residential Care',
      badgeAr: 'عناية سكنية فائقة'
    },
    {
      titleEn: 'Smooth office relocation',
      titleAr: 'نقل مكاتب وشركات سلس',
      descEn: 'Weekend and overnight corporate transitions with zero business interruption.',
      descAr: 'نقل مقار إدارية ومحطات عمل بدون أي تعطيل لسير العمل اليومي.',
      image: WORK_IMAGES.officeRelocation,
      badgeEn: 'Zero Downtime',
      badgeAr: 'بدون تعطيل للعمل'
    },
    {
      titleEn: 'Professional packing',
      titleAr: 'تغليف احترافي متكامل',
      descEn: '5-layer shockproof materials ensuring delicate glass, TVs, and art stay flawless.',
      descAr: 'مواد تغليف متعددة الطبقات لحماية الزجاجيات، الشاشات، والتحف من أي كسر.',
      image: WORK_IMAGES.fragilePacking,
      badgeEn: 'Zero Damage',
      badgeAr: 'حماية 100%'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <span className="text-xs font-extrabold uppercase tracking-widest text-slate-600 bg-slate-100 px-3.5 py-1.5 rounded-full border border-slate-200">
            {isArabic ? 'أعمالنا الميدانية' : 'On the job'}
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            {isArabic ? 'من غرف المعيشة إلى طوابق الشركات — ننقل كل شيء' : 'From living rooms to office floors — we move it all'}
          </h2>
          <p className="mt-3 text-slate-600 text-base">
            {isArabic 
              ? 'شاهد كيف يتعامل طاقمنا المحترف وأسطول الدباب والدينا مع كل عملية نقل بأعلى معايير الدقة والحرص.' 
              : 'See how our trained moving crews, Dabbab & Dyna fleet execute every project with utmost precision and care.'}
          </p>
        </motion.div>

        {/* 4 Showcase Visual Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {showcase.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="group rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col bg-white"
            >
              <div className="relative h-60 overflow-hidden bg-slate-100">
                <img 
                  src={item.image} 
                  alt={isArabic ? item.titleAr : item.titleEn}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3.5 start-3.5">
                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-slate-900/90 text-white backdrop-blur-sm border border-slate-700">
                    {isArabic ? item.badgeAr : item.badgeEn}
                  </span>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2 flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                    <span>{isArabic ? item.titleAr : item.titleEn}</span>
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {isArabic ? item.descAr : item.descEn}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
