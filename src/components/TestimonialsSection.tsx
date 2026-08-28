import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { TESTIMONIALS } from '../data/ksaData';
import { Star, ShieldCheck, MapPin, Quote } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  const { isArabic, t } = useLanguage();

  return (
    <section className="py-16 lg:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-amber-50 text-amber-800 text-xs font-bold mb-3 border border-amber-200">
            <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
            <span>{isArabic ? 'تقييمات وتجارب حقيقية' : 'Reviews'}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
            {isArabic ? 'تجارب عملائنا مع شركة سعد' : 'Moving with Saad, in their words'}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 font-medium">
            {isArabic ? 'انطباعات وآراء من عملائنا الكرام بعد عمليات النقل في جدة والرياض والدمام ومكة وينبع.' : 'A few notes from happy customers. Real reviews from across Jeddah and KSA.'}
          </p>
        </div>

        {/* Testimonials Grid (6 cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {TESTIMONIALS.map((review) => {
            return (
              <div
                key={review.id}
                className="bg-slate-50 rounded-2xl p-6 sm:p-7 border border-slate-200 shadow-sm flex flex-col justify-between relative hover:border-blue-300 hover:shadow-md transition-all"
              >
                <div>
                  {/* Stars & Verified Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-1 text-amber-500">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                    {review.verified && (
                      <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                        <ShieldCheck className="w-3.5 h-3.5" />
                        <span>{isArabic ? 'عميل موثق' : 'Verified Move'}</span>
                      </span>
                    )}
                  </div>

                  {/* Comment */}
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-6 italic font-medium">
                    "{isArabic ? review.commentAr : review.commentEn}"
                  </p>
                </div>

                {/* Author Info */}
                <div className="pt-4 border-t border-slate-200 flex items-center gap-3">
                  {review.avatarUrl ? (
                    <img 
                      src={review.avatarUrl} 
                      alt={isArabic ? review.nameAr : review.nameEn}
                      referrerPolicy="no-referrer"
                      className="w-11 h-11 rounded-full object-cover border border-blue-200 shrink-0"
                    />
                  ) : (
                    <div className="w-11 h-11 rounded-full bg-blue-50 border border-blue-200 text-blue-700 flex items-center justify-center font-black text-sm shrink-0">
                      {isArabic ? review.nameAr.charAt(0) : review.nameEn.charAt(0)}
                    </div>
                  )}
                  <div className="space-y-0.5 min-w-0 flex-1">
                    <div className="font-bold text-sm text-slate-900 truncate">
                      {isArabic ? review.nameAr : review.nameEn}
                    </div>
                    <div className="text-xs font-bold text-blue-700 truncate">
                      {isArabic ? review.serviceTypeAr : review.serviceTypeEn}
                    </div>
                    <div className="text-[11px] text-slate-500 flex items-center gap-1 pt-0.5 font-medium">
                      <MapPin className="w-3 h-3 text-slate-400 shrink-0" />
                      <span className="truncate">{isArabic ? review.locationAr : review.locationEn}</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
