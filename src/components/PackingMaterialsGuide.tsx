import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { PACKING_MATERIALS } from '../data/ksaData';
import { WORK_IMAGES } from '../assets/images';
import { 
  Package, 
  Shield, 
  Layers, 
  Box, 
  Feather, 
  Hammer, 
  CheckCircle2, 
  Sparkles,
  ArrowRight,
  ArrowLeft
} from 'lucide-react';

export const PackingMaterialsGuide: React.FC<{ onOpenBooking: () => void }> = ({ onOpenBooking }) => {
  const { isArabic, t } = useLanguage();

  const getMaterialIcon = (iconName: string) => {
    switch (iconName) {
      case 'Shield': return <Shield className="w-6 h-6 text-[#C5A059]" />;
      case 'Box': return <Box className="w-6 h-6 text-[#C5A059]" />;
      case 'Layers': return <Layers className="w-6 h-6 text-emerald-400" />;
      case 'Feather': return <Feather className="w-6 h-6 text-amber-300" />;
      case 'Hammer': return <Hammer className="w-6 h-6 text-rose-400" />;
      default: return <Package className="w-6 h-6 text-[#C5A059]" />;
    }
  };

  const ArrowIcon = isArabic ? ArrowLeft : ArrowRight;

  return (
    <section id="packing-guide" className="py-16 lg:py-24 bg-[#0D0D0D] border-b border-[#1E1E1E] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#C5A059]/15 text-[#C5A059] text-xs font-bold mb-3 border border-[#C5A059]/30">
            <Package className="w-3.5 h-3.5" />
            <span>{isArabic ? 'معايير التغليف الاحترافي الفائق' : 'Military-Grade Packing Materials'}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            {t('packing.title')}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-neutral-400">
            {t('packing.subtitle')}
          </p>
        </div>

        {/* 5-Layer Visual Timeline / Breakdown */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {PACKING_MATERIALS.map((mat) => {
            return (
              <div
                key={mat.id}
                className="bg-[#121212] hover:bg-[#161616] rounded-2xl overflow-hidden border border-[#222222] hover:border-[#C5A059]/40 hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {mat.imageUrl && (
                    <div className="relative h-44 w-full overflow-hidden bg-black/40">
                      <img 
                        src={mat.imageUrl} 
                        alt={isArabic ? mat.nameAr : mat.nameEn}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover filter brightness-85 group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-transparent"></div>
                      <span className="absolute top-3 end-3 text-[11px] font-bold px-2.5 py-1 rounded-full bg-black/80 text-[#C5A059] border border-[#C5A059]/40 shadow-sm backdrop-blur-xs">
                        {isArabic ? mat.badgeAr : mat.badgeEn}
                      </span>
                    </div>
                  )}

                  <div className="p-6 pb-2">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-xl bg-[#1A1A1A] border border-[#282828] flex items-center justify-center shadow-xs text-[#C5A059] shrink-0">
                        {getMaterialIcon(mat.icon)}
                      </div>
                      <h3 className="text-base sm:text-lg font-bold text-white">
                        {isArabic ? mat.nameAr : mat.nameEn}
                      </h3>
                    </div>

                    <p className="text-xs sm:text-sm text-neutral-400 mb-4 leading-relaxed">
                      {isArabic ? mat.purposeAr : mat.purposeEn}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <div className="pt-3 border-t border-[#222222]">
                    <div className="text-[11px] font-semibold text-neutral-400 flex items-start gap-1.5">
                      <span className="text-[#C5A059] font-bold">{isArabic ? 'المواصفة الفنية:' : 'Specs:'}</span>
                      <span>{isArabic ? mat.specificationAr : mat.specificationEn}</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}

          {/* 6th Card: Climate Guarantee */}
          <div className="bg-[#141414] text-white rounded-2xl overflow-hidden flex flex-col justify-between border border-[#C5A059]/40 ring-1 ring-[#C5A059]/20 shadow-xl group">
            <div className="relative h-44 w-full overflow-hidden bg-black/40">
              <img 
                src={WORK_IMAGES.intercityTransport} 
                alt="Saudi Climate Transportation"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover filter brightness-85 group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-transparent to-transparent"></div>
              <span className="absolute top-3 end-3 text-[11px] font-bold px-2.5 py-1 rounded-full bg-black/80 text-emerald-400 border border-emerald-500/40 shadow-sm backdrop-blur-xs">
                {isArabic ? 'حماية مناخية 100%' : 'Climate Shield'}
              </span>
            </div>

            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-xl bg-[#1F1A10] border border-[#C5A059]/30 flex items-center justify-center shrink-0">
                    <Sparkles className="w-5 h-5 text-[#C5A059]" />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-white">
                    {isArabic ? 'حماية خاصة لطبيعة مناخ السعودية' : 'Saudi Climate Adapted Shield'}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed mt-2">
                  {isArabic
                    ? 'رطوبة وحرارة ساحل جدة وغبار الطرق السريعة المؤدية للرياض والقصيم والشرقية تتطلب عزلاً محكماً من 5 طبقات يمنع دخول أي ذرات أتربة لمفروشاتك وأجهزتك الحساسة.'
                    : 'Engineered specifically for coastal humidity in Jeddah and highway sandstorms across Riyadh, Dammam, and Qassim routes with multi-barrier dust and thermal shielding.'}
                </p>
              </div>

              <button
                onClick={onOpenBooking}
                className="mt-6 w-full py-2.5 bg-[#C5A059] hover:bg-[#D4B26F] text-[#0A0A0A] font-bold rounded-xl text-xs sm:text-sm transition flex items-center justify-center gap-1.5 cursor-pointer shadow-md shadow-[#C5A059]/25"
              >
                <span>{isArabic ? 'طلب باقة التغليف الشاملة' : 'Request Full Packing Package'}</span>
                <ArrowIcon className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
