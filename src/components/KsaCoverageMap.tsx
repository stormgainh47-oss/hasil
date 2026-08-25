import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { KSA_CITIES, COMPANY_CONTACTS } from '../data/ksaData';
import { 
  MapPin, 
  Truck, 
  Clock, 
  Navigation, 
  ShieldCheck, 
  Phone, 
  MessageSquare,
  Building,
  CheckCircle2
} from 'lucide-react';

export const KsaCoverageMap: React.FC = () => {
  const { isArabic, t } = useLanguage();
  const [selectedCityId, setSelectedCityId] = useState<string>('jeddah');

  const selectedCity = KSA_CITIES.find(c => c.id === selectedCityId) || KSA_CITIES[0];

  return (
    <section id="coverage" className="py-16 bg-[#0A0A0A] border-b border-[#1E1E1E] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#C5A059]/15 text-[#C5A059] text-xs font-bold mb-3 border border-[#C5A059]/30">
            <Navigation className="w-3.5 h-3.5" />
            <span>{isArabic ? 'تغطية شاملة لكافة مدن المملكة' : 'Kingdom-Wide Moving Logistics'}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            {t('coverage.title')}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-neutral-400">
            {t('coverage.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* City Selector List (5 Cols) */}
          <div className="lg:col-span-5 bg-[#121212] rounded-2xl p-5 border border-[#222222] shadow-xl space-y-2 max-h-[580px] overflow-y-auto">
            <div className="text-xs font-bold text-neutral-400 uppercase tracking-wider px-2 mb-2">
              {isArabic ? 'اختر المدينة أو المنطقة لعرض الأحياء المخدومة:' : 'Select City or Region for Serviced Neighborhoods:'}
            </div>

            {KSA_CITIES.map((city) => {
              const isSelected = city.id === selectedCityId;
              return (
                <button
                  key={city.id}
                  onClick={() => setSelectedCityId(city.id)}
                  className={`w-full p-3 rounded-xl text-start transition flex items-center justify-between cursor-pointer border ${
                    isSelected
                      ? 'bg-[#181818] border-[#C5A059] text-white shadow-md ring-1 ring-[#C5A059]'
                      : 'bg-[#141414] hover:bg-[#1A1A1A] border-[#222222] text-neutral-300'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg ${isSelected ? 'bg-[#C5A059] text-[#0A0A0A]' : 'bg-[#1E1E1E] text-neutral-400'}`}>
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs sm:text-sm font-bold text-white">
                        {isArabic ? city.nameAr : city.nameEn}
                      </div>
                      <div className="text-[11px] text-neutral-400">
                        {isArabic ? city.regionAr : city.regionEn}
                      </div>
                    </div>
                  </div>

                  <div className="text-end">
                    <div className="text-xs font-bold text-emerald-400">
                      {city.id === 'jeddah' ? (isArabic ? 'المركز الرئيسي' : 'HQ Hub') : (isArabic ? 'خدمة نشطة' : 'Active 24/7')}
                    </div>
                    <div className="text-[10px] text-[#C5A059] font-medium">
                      {isArabic ? 'معاينة مجانية' : 'Free Survey'}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Selected City Interactive Hub Card (7 Cols) */}
          <div className="lg:col-span-7 bg-[#121212] text-white rounded-2xl overflow-hidden border border-[#222222] shadow-2xl space-y-6">
            
            {/* Visual Route Photo Banner */}
            <div className="relative h-44 w-full overflow-hidden bg-black/50">
              <img 
                src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1200&q=80" 
                alt="Saudi Arabia Relocation Fleet"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover filter brightness-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-[#121212]/50 to-transparent"></div>
              <div className="absolute bottom-4 start-6 end-6 flex items-center justify-between">
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-widest text-[#C5A059] block">
                    {isArabic ? 'جاهزية الأسطول والكوادر 24/7' : 'Fleet & Crew Readiness 24/7'}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black text-white">
                    {isArabic ? `منطقة الخدمة: ${selectedCity.nameAr}` : `Service Hub: ${selectedCity.nameEn}`}
                  </h3>
                </div>
                {selectedCity.isMainHub && (
                  <span className="bg-[#C5A059] text-black text-xs font-extrabold px-2.5 py-1 rounded shadow-md">
                    {isArabic ? 'فرع رئيسي' : 'Primary Hub'}
                  </span>
                )}
              </div>
            </div>

            <div className="p-6 sm:p-8 pt-0 space-y-6">
              {/* Header of Selected City */}
              <div className="flex flex-wrap items-center justify-between gap-3 pb-5 border-b border-[#222222]">
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-xl sm:text-2xl font-black text-white">
                    {isArabic ? selectedCity.nameAr : selectedCity.nameEn}
                  </h3>
                  {selectedCity.isMainHub && (
                    <span className="bg-[#C5A059]/15 text-[#C5A059] text-[10px] font-bold px-2 py-0.5 rounded border border-[#C5A059]/30">
                      {isArabic ? 'فرع رئيسي معتمد' : 'Primary Regional Hub'}
                    </span>
                  )}
                </div>
                <p className="text-xs text-neutral-400 mt-1">
                  {isArabic ? selectedCity.regionAr : selectedCity.regionEn}
                </p>
              </div>

              <a
                href={isArabic ? COMPANY_CONTACTS.whatsappLinkAr : COMPANY_CONTACTS.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs rounded-xl flex items-center gap-1.5 shadow-sm transition"
              >
                <MessageSquare className="w-4 h-4" />
                <span>{isArabic ? 'طلب خدمة في هذه المنطقة' : 'Request Service Here'}</span>
              </a>
            </div>

            {/* Service Highlights Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              <div className="p-3.5 rounded-xl bg-[#0A0A0A] border border-[#222222]">
                <span className="text-[11px] text-neutral-400 font-semibold block">{isArabic ? 'طاقم العمل والنجارين:' : 'Movers & Carpenters:'}</span>
                <span className="text-sm sm:text-base font-extrabold text-white mt-0.5 block">
                  {isArabic ? 'نجارون متخصصون' : 'Master Carpenters'}
                </span>
              </div>

              <div className="p-3.5 rounded-xl bg-[#0A0A0A] border border-[#222222]">
                <span className="text-[11px] text-neutral-400 font-semibold block">{isArabic ? 'نوع الشاحنات المتاحة:' : 'Available Vehicles:'}</span>
                <span className="text-sm sm:text-base font-extrabold text-[#C5A059] mt-0.5 block">
                  {isArabic ? 'دينا مغلقة ومبطنة' : 'Covered Dyna Trucks'}
                </span>
              </div>

              <div className="p-3.5 rounded-xl bg-[#0A0A0A] border border-[#222222] col-span-2 sm:col-span-1">
                <span className="text-[11px] text-neutral-400 font-semibold block">{isArabic ? 'المعاينة والفحص:' : 'On-Site Survey:'}</span>
                <span className="text-sm sm:text-base font-extrabold text-emerald-400 mt-0.5 block">
                  {isArabic ? 'معاينة مجانية فورية' : 'Free Instant Survey'}
                </span>
              </div>
            </div>

            {/* Popular Districts Coverage */}
            {selectedCity.popularDistrictsEn && selectedCity.popularDistrictsEn.length > 0 && (
              <div className="space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-white flex items-center gap-1.5">
                  <Building className="w-4 h-4 text-[#C5A059]" />
                  <span>
                    {isArabic ? `أبرز الأحياء والمناطق المخدومة في ${selectedCity.nameAr}:` : `Key Serviced Districts in ${selectedCity.nameEn}:`}
                  </span>
                </h4>
                <div className="flex flex-wrap gap-2">
                  {(isArabic ? selectedCity.popularDistrictsAr : selectedCity.popularDistrictsEn)?.map((district, idx) => (
                    <span
                      key={idx}
                      className="text-xs font-semibold px-3 py-1 rounded-lg bg-[#181818] text-neutral-300 border border-[#2A2A2A]"
                    >
                      {district}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* High-Protection Standard Box */}
            <div className="p-4 rounded-xl bg-[#141414] border border-[#2A2A2A] text-xs text-neutral-300 space-y-2">
              <div className="font-bold flex items-center gap-1.5 text-white">
                <ShieldCheck className="w-4 h-4 text-[#C5A059]" />
                <span>{isArabic ? 'معايير النقل والأمان لشركة سعد:' : 'Saad Movers Security & Safety Protocol:'}</span>
              </div>
              <p className="text-neutral-400 leading-relaxed">
                {isArabic
                  ? 'جميع الشاحنات المستخدمة مغلقة ومبطنة داخلياً ومجهزة بمثبتات لمنع أي انزلاق للعفش، مع تغليف خماسي حراري لحماية الأثاث والمفروشات والأجهزة الحساسة.'
                  : 'All fleet vehicles are fully enclosed, insulated, and equipped with heavy-duty cargo straps and 5-layer thermal packing protecting furniture and delicate appliances.'}
              </p>
            </div>

              {/* Branch Hotlines */}
              <div className="pt-2 flex flex-wrap items-center justify-between text-xs text-neutral-400 gap-3 border-t border-[#222222]">
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-[#C5A059]" />
                  <span className="font-semibold text-white">{COMPANY_CONTACTS.phoneDisplay}</span>
                  <span className="text-neutral-500">({isArabic ? 'خدمة العملاء المركزية' : '24/7 Dispatch Central'})</span>
                </div>

                <span className="font-semibold text-emerald-400">
                  {isArabic ? '✓ معاينة مجانية داخل جدة' : '✓ Free Survey in Jeddah'}
                </span>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
