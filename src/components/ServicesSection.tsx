import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { SERVICES_CATALOG } from '../data/ksaData';
import { ServiceItem } from '../types';
import { 
  Home, 
  Wrench, 
  Briefcase, 
  Package, 
  Truck, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight, 
  ArrowLeft,
  X,
  Phone,
  MessageSquare
} from 'lucide-react';

interface ServicesSectionProps {
  onOpenBookingForService: (serviceName: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onOpenBookingForService,
}) => {
  const { isArabic, t } = useLanguage();
  const [selectedServiceModal, setSelectedServiceModal] = useState<ServiceItem | null>(null);

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Home': return <Home className="w-6 h-6" />;
      case 'Wrench': return <Wrench className="w-6 h-6" />;
      case 'Briefcase': return <Briefcase className="w-6 h-6" />;
      case 'Package': return <Package className="w-6 h-6" />;
      case 'Truck': return <Truck className="w-6 h-6" />;
      case 'ShieldCheck': return <ShieldCheck className="w-6 h-6" />;
      default: return <Package className="w-6 h-6" />;
    }
  };

  const ArrowIcon = isArabic ? ArrowLeft : ArrowRight;

  return (
    <section id="services" className="py-16 lg:py-24 bg-[#0A0A0A] border-b border-[#1E1E1E] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#C5A059]/15 text-[#C5A059] text-xs font-bold mb-3 border border-[#C5A059]/30">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>{isArabic ? 'خدمات معتمدة ومتكاملة 100%' : 'Certified & Insured Services'}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            {t('services.title')}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-neutral-400">
            {t('services.subtitle')}
          </p>
        </div>

        {/* Services Grid (6 Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {SERVICES_CATALOG.map((service) => {
            return (
              <div
                key={service.id}
                className="bg-[#121212] hover:bg-[#161616] rounded-2xl border border-[#222222] hover:border-[#C5A059]/50 hover:shadow-2xl hover:shadow-black/60 transition-all duration-300 flex flex-col justify-between group overflow-hidden"
              >
                <div>
                  {/* Service Card Top Image Banner */}
                  <div className="relative h-44 w-full overflow-hidden bg-neutral-900">
                    {service.imageUrl && (
                      <img 
                        src={service.imageUrl} 
                        alt={isArabic ? service.titleAr : service.titleEn}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 filter brightness-90 group-hover:brightness-100"
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-[#121212]/30 to-transparent"></div>
                    
                    {/* Top Floating Badge & Icon */}
                    <div className="absolute top-3 start-3 end-3 flex items-center justify-between">
                      <div className="w-10 h-10 rounded-xl bg-[#0A0A0A]/85 backdrop-blur-md border border-[#C5A059]/40 text-[#C5A059] flex items-center justify-center shadow-lg">
                        {getServiceIcon(service.iconName)}
                      </div>
                      {service.badgeEn && (
                        <span className="text-[10px] sm:text-[11px] font-bold px-2.5 py-1 rounded-full bg-[#0A0A0A]/90 backdrop-blur-md text-[#C5A059] border border-[#C5A059]/40 shadow-lg">
                          {isArabic ? service.badgeAr : service.badgeEn}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6">
                    {/* Title & Short Description */}
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-2.5 group-hover:text-[#C5A059] transition-colors">
                      {isArabic ? service.titleAr : service.titleEn}
                    </h3>
                    <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed mb-5">
                      {isArabic ? service.shortDescAr : service.shortDescEn}
                    </p>

                    {/* Key Highlights Checklist */}
                    <ul className="space-y-2 mb-2 text-xs text-neutral-300">
                      {(isArabic ? service.featuresAr : service.featuresEn).slice(0, 3).map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card Action Buttons */}
                <div className="p-6 pt-0 border-t border-[#222222]/80 mt-2 flex items-center justify-between gap-2">
                  <button
                    onClick={() => setSelectedServiceModal(service)}
                    className="text-xs font-bold text-[#C5A059] hover:text-[#D4B26F] inline-flex items-center gap-1 cursor-pointer pt-3"
                  >
                    <span>{isArabic ? 'تفاصيل الخدمة' : 'View Full Details'}</span>
                    <ArrowIcon className="w-3.5 h-3.5" />
                  </button>

                  <button
                    onClick={() => onOpenBookingForService(isArabic ? service.titleAr : service.titleEn)}
                    className="mt-3 px-3.5 py-1.5 bg-[#C5A059] hover:bg-[#D4B26F] text-[#0A0A0A] font-bold text-xs rounded-lg shadow-sm transition cursor-pointer"
                  >
                    {isArabic ? 'حجز الخدمة' : 'Book Service'}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Service Detail Modal */}
      {selectedServiceModal && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200">
          <div className="bg-[#121212] text-[#E0E0E0] rounded-2xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-[#2A2A2A] relative max-h-[90vh] overflow-y-auto">
            
            <button
              onClick={() => setSelectedServiceModal(null)}
              className="absolute top-5 end-5 z-10 p-2 rounded-lg text-neutral-300 hover:text-white bg-[#0A0A0A]/70 hover:bg-[#1E1E1E] transition cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {selectedServiceModal.imageUrl && (
              <div className="relative -mx-6 -mt-6 sm:-mx-8 sm:-mt-8 mb-6 h-52 overflow-hidden rounded-t-2xl">
                <img 
                  src={selectedServiceModal.imageUrl} 
                  alt={isArabic ? selectedServiceModal.titleAr : selectedServiceModal.titleEn}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover filter brightness-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-[#121212]/40 to-transparent"></div>
                <div className="absolute bottom-4 start-6 end-6 flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-[#0A0A0A]/90 border border-[#C5A059]/40 text-[#C5A059] flex items-center justify-center shadow-lg">
                    {getServiceIcon(selectedServiceModal.iconName)}
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white">
                      {isArabic ? selectedServiceModal.titleAr : selectedServiceModal.titleEn}
                    </h3>
                    <span className="text-xs text-[#C5A059] font-semibold bg-black/60 px-2 py-0.5 rounded">
                      {isArabic ? selectedServiceModal.badgeAr : selectedServiceModal.badgeEn}
                    </span>
                  </div>
                </div>
              </div>
            )}

            {!selectedServiceModal.imageUrl && (
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-[#1C1C1C] border border-[#2A2A2A] text-[#C5A059] flex items-center justify-center">
                  {getServiceIcon(selectedServiceModal.iconName)}
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white">
                    {isArabic ? selectedServiceModal.titleAr : selectedServiceModal.titleEn}
                  </h3>
                  <span className="text-xs text-[#C5A059] font-semibold">
                    {isArabic ? selectedServiceModal.badgeAr : selectedServiceModal.badgeEn}
                  </span>
                </div>
              </div>
            )}

            <p className="text-sm sm:text-base text-neutral-300 leading-relaxed mb-6">
              {isArabic ? selectedServiceModal.fullDescAr : selectedServiceModal.fullDescEn}
            </p>

            <div className="bg-[#0A0A0A] rounded-xl p-5 border border-[#222222] mb-6">
              <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-3">
                {isArabic ? 'ماذا تشمل هذه الخدمة من شركة سعد؟' : 'Included in this service:'}
              </h4>
              <ul className="space-y-2.5 text-xs sm:text-sm text-neutral-300">
                {(isArabic ? selectedServiceModal.featuresAr : selectedServiceModal.featuresEn).map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-wrap items-center justify-end gap-3 pt-2">
              <button
                onClick={() => setSelectedServiceModal(null)}
                className="px-4 py-2.5 border border-[#333333] rounded-xl text-xs sm:text-sm font-semibold text-neutral-300 hover:bg-[#1E1E1E] transition cursor-pointer"
              >
                {isArabic ? 'إغلاق' : 'Close'}
              </button>
              
              <button
                onClick={() => {
                  const s = selectedServiceModal;
                  setSelectedServiceModal(null);
                  onOpenBookingForService(isArabic ? s.titleAr : s.titleEn);
                }}
                className="px-6 py-2.5 bg-[#C5A059] hover:bg-[#D4B26F] text-[#0A0A0A] font-bold rounded-xl text-xs sm:text-sm shadow-md shadow-[#C5A059]/25 transition cursor-pointer"
              >
                {isArabic ? 'طلب عرض سعر مباشر' : 'Request Instant Quote'}
              </button>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};
