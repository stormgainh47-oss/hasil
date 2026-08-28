import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Star, Quote, CheckCircle2 } from 'lucide-react';

export const ReviewsSection: React.FC = () => {
  const { isArabic } = useLanguage();

  const reviews = [
    {
      initials: 'AH',
      nameEn: 'Ahmad Al-Harbi',
      nameAr: 'أحمد الحربي',
      serviceEn: 'Home Shifting · Jeddah',
      serviceAr: 'نقل عفش منزلي · جدة',
      textEn: 'The team packed our whole flat in Jeddah in a day and everything arrived safely in Riyadh. Genuinely stress-free from start to finish.',
      textAr: 'الفريق قام بتغليف ونقل كامل شقتنا في جدة خلال يوم واحد ووصل كل شيء بأمان إلى الرياض. تجربة مريحة وخالية من التوتر من البداية للنهاية.'
    },
    {
      initials: 'SO',
      nameEn: 'Salem Al-Otaibi',
      nameAr: 'سالم العتيبي',
      serviceEn: 'Office Relocation · Riyadh',
      serviceAr: 'نقل مكاتب · الرياض',
      textEn: 'They moved our office over a weekend without a single day of downtime. Professional, punctual, and well-organised throughout.',
      textAr: 'نقلوا مكتبنا بالكامل خلال عطلة نهاية الأسبوع دون أي يوم توقف للعمل. احترافية والتزام دقيق بالمواعيد وتنظيم ممتاز طوال الوقت.'
    },
    {
      initials: 'NG',
      nameEn: 'Noura Al-Ghamdi',
      nameAr: 'نورة الغامدي',
      serviceEn: 'Furniture Moving · Jeddah',
      serviceAr: 'نقل أثاث · جدة',
      textEn: 'Fragile items, the piano, everything handled with real care right here in Jeddah. A fair price and right on time — we’d book them again without a second thought.',
      textAr: 'القطع الزجاجية والبيانو وكل الأثاث تم التعامل معه بعناية فائقة في جدة. سعر عادل ووصول بالموعد — سنحجز معهم مرة أخرى بالتأكيد.'
    },
    {
      initials: 'FZ',
      nameEn: 'Fahad Al-Zahrani',
      nameAr: 'فهد الزهراني',
      serviceEn: 'Intercity Transport · Mecca',
      serviceAr: 'نقل بين المدن · مكة المكرمة',
      textEn: 'Moved our whole family home from Jeddah to Mecca in one smooth day. The crew was polite, quick, and nothing was so much as scratched.',
      textAr: 'نقلوا منزل عائلتنا بالكامل من جدة إلى مكة المكرمة في يوم واحد سلس. الطاقم خلوق وسريع ولم يتعرض أي شيء لأي خدش.'
    },
    {
      initials: 'RS',
      nameEn: 'Reem Al-Shehri',
      nameAr: 'ريم الشهري',
      serviceEn: 'Home Shifting · Dammam',
      serviceAr: 'نقل منزلي · الدمام',
      textEn: 'From the first call to the last box, everything went exactly as promised. Clear pricing, careful packing, and the furniture placed exactly where we wanted.',
      textAr: 'من أول مكالمة وحتى آخر كرتون، تم كل شيء كما وُعد بالضبط. أسعار واضحة وتغليف دقيق وترتيب الأثاث في المكان الذي طلبناه بالضبط.'
    },
    {
      initials: 'KQ',
      nameEn: 'Khalid Al-Qahtani',
      nameAr: 'خالد القحطاني',
      serviceEn: 'Professional Packing · Yanbu',
      serviceAr: 'تغليف احترافي · ينبع',
      textEn: 'I’ve never seen packing like this. Delicate electronics and glass arrived in perfect condition all the way to Yanbu. Worth every riyal.',
      textAr: 'لم أشاهد تغليفاً بهذه الجودة من قبل. الأجهزة الحساسة والزجاج وصلت بحالة ممتازة حتى ينبع. يستحق كل ريال.'
    }
  ];

  return (
    <section id="reviews" className="py-20 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold mb-3 border border-amber-300">
            <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
            <span>{isArabic ? 'تقييمات وتجارب العملاء' : 'Customer Reviews'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            {isArabic ? 'تجارب عملائنا مع شركة سعد' : 'Moving with Saad, in their words'}
          </h2>
          <p className="mt-4 text-slate-600 text-base sm:text-lg">
            {isArabic 
              ? 'ملاحظات وآراء من عملائنا الكرام بعد عمليات النقل والتغليف في جدة وكافة أنحاء المملكة.' 
              : 'A few notes from happy customers. Sample reviews — swap in your customers\' real words.'}
          </p>
        </div>

        {/* 6 Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {reviews.map((review, idx) => (
            <div 
              key={idx}
              className="bg-white rounded-2xl p-7 border border-slate-200 shadow-sm hover:shadow-md hover:border-slate-300 transition-all flex flex-col justify-between"
            >
              <div>
                {/* Rating Stars & Badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                    {isArabic ? 'تقييم موثق' : 'Sample'}
                  </span>
                </div>

                {/* Quote Text */}
                <p className="text-slate-700 text-sm leading-relaxed mb-6 font-normal italic">
                  "{isArabic ? review.textAr : review.textEn}"
                </p>
              </div>

              {/* Author Info */}
              <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                <div className="w-10 h-10 rounded-full bg-blue-700 text-white font-bold text-sm flex items-center justify-center shrink-0">
                  {review.initials}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 leading-tight">
                    {isArabic ? review.nameAr : review.nameEn}
                  </h4>
                  <p className="text-xs text-slate-500 mt-0.5">
                    {isArabic ? review.serviceAr : review.serviceEn}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
