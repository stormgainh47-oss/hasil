import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { FileText, PackageCheck, Truck, Home, ArrowRight, ArrowLeft } from 'lucide-react';

interface HowItWorksSectionProps {
  onOpenQuote: () => void;
}

export const HowItWorksSection: React.FC<HowItWorksSectionProps> = ({ onOpenQuote }) => {
  const { isArabic } = useLanguage();
  const ArrowIcon = isArabic ? ArrowLeft : ArrowRight;

  const steps = [
    {
      stepNumber: '1',
      icon: FileText,
      titleEn: 'Request a free quote',
      titleAr: 'طلب عرض سعر مجاني',
      descEn: 'Share your move date, locations, and items — get a clear estimate fast, with no obligation.',
      descAr: 'حدد موعد النقل، المواقع، والأغراض — واحصل على تسعيرة دقيقة وسريعة بدون أي التزام.'
    },
    {
      stepNumber: '2',
      icon: PackageCheck,
      titleEn: 'We plan & pack',
      titleAr: 'التخطيط والتغليف الاحترافي',
      descEn: 'We survey your goods, prepare professional materials, and pack everything with care.',
      descAr: 'نقوم بمعاينة الأثاث، تجهيز أفضل مواد التغليف المقواة، وتغليف كافة المقتنيات بعناية.'
    },
    {
      stepNumber: '3',
      icon: Truck,
      titleEn: 'We move it safely',
      titleAr: 'النقل الآمن بالشاحنات',
      descEn: 'Trucks, ramps, straps, and a trained crew transport your belongings with precision.',
      descAr: 'شاحنات مبطنة، رافعات، أحزمة تثبيت، وطاقم عمل مدرب ينقل أثاثك بدقة واحترافية.'
    },
    {
      stepNumber: '4',
      icon: Home,
      titleEn: 'Settle in',
      titleAr: 'الاستقرار في منزلك الجديد',
      descEn: 'We unpack, place your furniture, and remove the waste so you can relax from day one.',
      descAr: 'نقوم بفك التغليف، تركيب الأثاث، إزالة المخلفات لتستمتع براحة تامة من اليوم الأول.'
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-slate-50 border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-extrabold uppercase tracking-widest text-blue-700 bg-blue-100 px-3.5 py-1.5 rounded-full border border-blue-200">
            {isArabic ? 'كيف نعمل' : 'How it works'}
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            {isArabic ? 'النقل في أربع خطوات بسيطة' : 'Moving in four simple steps'}
          </h2>
          <p className="mt-4 text-slate-600 text-base sm:text-lg">
            {isArabic 
              ? 'عملية منظمة ومباشرة صُممت لراحتك وطمأنينتك من أول اتصال وحتى آخر صندوق.' 
              : 'A straightforward process designed to keep you calm from first call to final box.'}
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {steps.map((item, index) => {
            const Icon = item.icon;
            return (
              <div 
                key={index} 
                className="bg-white rounded-2xl p-7 border border-slate-200 shadow-sm hover:shadow-md hover:border-blue-300 transition-all flex flex-col justify-between relative"
              >
                <div>
                  {/* Step Number Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-11 h-11 rounded-2xl bg-blue-700 text-white font-extrabold text-lg flex items-center justify-center shadow-md shadow-blue-700/20">
                      {item.stepNumber}
                    </div>
                    <div className="w-10 h-10 rounded-xl bg-slate-100 text-slate-600 flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 mb-2.5">
                    {isArabic ? item.titleAr : item.titleEn}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {isArabic ? item.descAr : item.descEn}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Action CTA */}
        <div className="mt-12 text-center">
          <button
            onClick={onOpenQuote}
            className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-blue-700 hover:bg-blue-800 text-white text-base font-bold rounded-xl shadow-lg shadow-blue-700/20 transition-all cursor-pointer"
          >
            <span>{isArabic ? 'ابدأ خطوتك الأولى — اطلب عرض سعر' : 'Start Step 1 — Request a Free Quote'}</span>
            <ArrowIcon className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
