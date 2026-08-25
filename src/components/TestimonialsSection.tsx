import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { TESTIMONIALS } from '../data/ksaData';
import { Star, ShieldCheck, MapPin, Quote } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  const { isArabic, t } = useLanguage();

  return (
    <section className="py-16 lg:py-24 bg-[#0D0D0D] border-b border-[#1E1E1E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#C5A059]/15 text-[#C5A059] text-xs font-bold mb-3 border border-[#C5A059]/30">
            <Star className="w-3.5 h-3.5 fill-[#C5A059] text-[#C5A059]" />
            <span>{isArabic ? 'تقييم 4.9/5 من أكثر من 18,500 عميل' : 'Rated 4.9/5 Across Saudi Arabia'}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            {t('reviews.title')}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-neutral-400">
            {t('reviews.subtitle')}
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {TESTIMONIALS.map((review) => {
            return (
              <div
                key={review.id}
                className="bg-[#121212] rounded-2xl p-6 sm:p-7 border border-[#222222] shadow-xl flex flex-col justify-between relative hover:border-[#C5A059]/40 transition-all"
              >
                <div>
                  {/* Stars & Verified Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-1 text-[#C5A059]">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                    {review.verified && (
                      <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-400 bg-emerald-950/40 px-2 py-0.5 rounded-full border border-emerald-800/60">
                        <ShieldCheck className="w-3.5 h-3.5" />
                        <span>{isArabic ? 'عميل موثق' : 'Verified Move'}</span>
                      </span>
                    )}
                  </div>

                  {/* Comment */}
                  <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed mb-6 italic">
                    "{isArabic ? review.commentAr : review.commentEn}"
                  </p>
                </div>

                {/* Author Info */}
                <div className="pt-4 border-t border-[#222222] flex items-center gap-3">
                  {review.avatarUrl ? (
                    <img 
                      src={review.avatarUrl} 
                      alt={isArabic ? review.nameAr : review.nameEn}
                      referrerPolicy="no-referrer"
                      className="w-11 h-11 rounded-full object-cover border border-[#C5A059]/40 shrink-0"
                    />
                  ) : (
                    <div className="w-11 h-11 rounded-full bg-[#1F1A10] border border-[#C5A059]/30 text-[#C5A059] flex items-center justify-center font-bold text-sm shrink-0">
                      {isArabic ? review.nameAr.charAt(0) : review.nameEn.charAt(0)}
                    </div>
                  )}
                  <div className="space-y-0.5 min-w-0 flex-1">
                    <div className="font-bold text-sm text-white truncate">
                      {isArabic ? review.nameAr : review.nameEn}
                    </div>
                    <div className="text-xs font-semibold text-[#C5A059] truncate">
                      {isArabic ? review.serviceTypeAr : review.serviceTypeEn}
                    </div>
                    <div className="text-[11px] text-neutral-400 flex items-center gap-1 pt-0.5">
                      <MapPin className="w-3 h-3 text-[#C5A059] shrink-0" />
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
