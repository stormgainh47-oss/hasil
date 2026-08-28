import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { SERVICES_CATALOG } from '../data/ksaData';
import { WORK_IMAGES } from '../assets/images';
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
    <section id="services" className="py-16 lg:py-24 bg-white border-b border-slate-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold mb-3 border border-blue-200">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>{isArabic ? 'خدمات احترافية متكاملة' : 'Our Services'}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
            {isArabic ? 'كل ما تحتاجه لنقل سلس ومريح' : 'Everything you need for a smooth move'}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 font-medium max-w-2xl mx-auto">
            {isArabic ? 'من قطعة أثاث واحدة وحتى مكاتب وشركات كاملة، نقوم بالتغليف والتحميل والنقل والتركيب — كل ذلك تحت سقف واحد.' : 'From a single sofa to a full office, we pack, load, transport, and unpack — all under one roof.'}
          </p>
        </div>

        {/* Feature Visual Crew Banner */}
        <div className="mb-14 rounded-2xl overflow-hidden border border-slate-200 shadow-md bg-slate-900 relative">
          <div className="h-64 sm:h-72 w-full relative">
            <img 
              src={WORK_IMAGES.furnitureWrapping} 
              alt="Saad Packers & Movers crew carefully wrapping furniture before a move"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover opacity-85"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent"></div>
            <div className="absolute bottom-4 start-4 sm:start-6 end-4 sm:end-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-amber-400 shrink-0 animate-ping"></div>
                <p className="text-sm sm:text-base font-bold text-white tracking-wide drop-shadow-md">
                  {isArabic ? 'طاقم شركة سعد يقوم بتغليف وحماية الأثاث بعناية فائقة قبل النقل' : 'Saad Packers & Movers crew carefully wrapping furniture before a move'}
                </p>
              </div>
              <button
                onClick={() => onOpenBookingForService('General Relocation')}
                className="self-start sm:self-auto px-4 py-2 bg-amber-500 hover:bg-amber-600 text-white font-bold text-xs sm:text-sm rounded-xl shadow-md transition cursor-pointer"
              >
                {isArabic ? 'احصل على عرض سعر' : 'Get a quote'}
              </button>
            </div>
          </div>
        </div>

        {/* Services Grid (7 Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {SERVICES_CATALOG.map((service) => {
            return (
              <div
                key={service.id}
                className="bg-white hover:bg-slate-50/70 rounded-2xl border border-slate-200 hover:border-blue-500/50 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group overflow-hidden shadow-sm"
              >
                <div>
                  {/* Service Card Top Image Banner */}
                  <div className="relative h-48 w-full overflow-hidden bg-slate-100">
                    {service.imageUrl && (
                      <img 
                        src={service.imageUrl} 
                        alt={isArabic ? service.titleAr : service.titleEn}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent"></div>
                    
                    {/* Top Floating Badge & Icon */}
                    <div className="absolute top-3 start-3 end-3 flex items-center justify-between">
                      <div className="w-10 h-10 rounded-xl bg-white/95 backdrop-blur-md border border-slate-200 text-blue-700 flex items-center justify-center shadow-md">
                        {getServiceIcon(service.iconName)}
                      </div>
                      {service.badgeEn && (
                        <span className="text-[10px] sm:text-[11px] font-bold px-3 py-1 rounded-full bg-slate-900/85 backdrop-blur-md text-amber-300 border border-slate-700 shadow-md">
                          {isArabic ? service.badgeAr : service.badgeEn}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6">
                    {/* Title & Short Description */}
                    <h3 className="text-lg sm:text-xl font-black text-slate-900 mb-2.5 group-hover:text-blue-700 transition-colors">
                      {isArabic ? service.titleAr : service.titleEn}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed mb-5">
                      {isArabic ? service.shortDescAr : service.shortDescEn}
                    </p>

                    {/* Key Highlights Checklist */}
                    <ul className="space-y-2 mb-2 text-xs text-slate-700">
                      {(isArabic ? service.featuresAr : service.featuresEn).slice(0, 3).map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card Action Buttons */}
                <div className="p-6 pt-3 border-t border-slate-100 mt-2 flex items-center justify-between gap-2">
                  <button
                    onClick={() => setSelectedServiceModal(service)}
                    className="text-xs font-bold text-blue-700 hover:text-blue-800 inline-flex items-center gap-1 cursor-pointer"
                  >
                    <span>{isArabic ? 'تفاصيل الخدمة' : 'View Full Details'}</span>
                    <ArrowIcon className="w-3.5 h-3.5" />
                  </button>

                  <button
                    onClick={() => onOpenBookingForService(isArabic ? service.titleAr : service.titleEn)}
                    className="px-3.5 py-1.5 bg-blue-700 hover:bg-blue-800 text-white font-bold text-xs rounded-xl shadow-sm transition cursor-pointer"
                  >
                    {isArabic ? 'احصل على عرض سعر' : 'Get a quote'}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Service Detail Modal */}
      {selectedServiceModal && (
        <div className="fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200">
          <div className="bg-white text-slate-900 rounded-2xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-slate-200 relative max-h-[90vh] overflow-y-auto">
            
            <button
              onClick={() => setSelectedServiceModal(null)}
              className="absolute top-5 end-5 z-10 p-2 rounded-full text-slate-600 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 transition cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {selectedServiceModal.imageUrl && (
              <div className="relative -mx-6 -mt-6 sm:-mx-8 sm:-mt-8 mb-6 h-56 overflow-hidden rounded-t-2xl">
                <img 
                  src={selectedServiceModal.imageUrl} 
                  alt={isArabic ? selectedServiceModal.titleAr : selectedServiceModal.titleEn}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 start-6 end-6 flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-white text-blue-700 flex items-center justify-center shadow-lg">
                    {getServiceIcon(selectedServiceModal.iconName)}
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-black text-white">
                      {isArabic ? selectedServiceModal.titleAr : selectedServiceModal.titleEn}
                    </h3>
                    <span className="text-xs text-amber-300 font-bold bg-slate-900/80 px-2.5 py-0.5 rounded-full border border-slate-700">
                      {isArabic ? selectedServiceModal.badgeAr : selectedServiceModal.badgeEn}
                    </span>
                  </div>
                </div>
              </div>
            )}

            {!selectedServiceModal.imageUrl && (
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 text-blue-700 flex items-center justify-center">
                  {getServiceIcon(selectedServiceModal.iconName)}
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-black text-slate-900">
                    {isArabic ? selectedServiceModal.titleAr : selectedServiceModal.titleEn}
                  </h3>
                  <span className="text-xs text-blue-700 font-bold">
                    {isArabic ? selectedServiceModal.badgeAr : selectedServiceModal.badgeEn}
                  </span>
                </div>
              </div>
            )}

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6 font-medium">
              {isArabic ? selectedServiceModal.fullDescAr : selectedServiceModal.fullDescEn}
            </p>

            <div className="bg-slate-50 rounded-xl p-5 border border-slate-200 mb-6">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-3">
                {isArabic ? 'ماذا تشمل هذه الخدمة من شركة سعد؟' : 'Included in this service:'}
              </h4>
              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700 font-medium">
                {(isArabic ? selectedServiceModal.featuresAr : selectedServiceModal.featuresEn).map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-wrap items-center justify-end gap-3 pt-2">
              <button
                onClick={() => setSelectedServiceModal(null)}
                className="px-4 py-2.5 border border-slate-300 rounded-xl text-xs sm:text-sm font-bold text-slate-700 hover:bg-slate-100 transition cursor-pointer"
              >
                {isArabic ? 'إغلاق' : 'Close'}
              </button>
              
              <button
                onClick={() => {
                  const s = selectedServiceModal;
                  setSelectedServiceModal(null);
                  onOpenBookingForService(isArabic ? s.titleAr : s.titleEn);
                }}
                className="px-6 py-2.5 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-bold rounded-xl text-xs sm:text-sm shadow-md shadow-amber-500/20 transition cursor-pointer"
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
