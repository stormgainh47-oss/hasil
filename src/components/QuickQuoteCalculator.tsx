import React, { useState, useMemo } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { COMPANY_CONTACTS } from '../data/ksaData';
import { 
  Calculator, 
  Truck, 
  Wrench, 
  Package, 
  CheckCircle2, 
  MapPin, 
  ShieldCheck, 
  MessageSquare, 
  Phone,
  Building,
  Home,
  Briefcase
} from 'lucide-react';

interface QuickQuoteCalculatorProps {
  onOpenBookingWithQuote: (quoteData: any) => void;
}

interface MoveTypeOption {
  id: string;
  nameEn: string;
  nameAr: string;
  icon: 'Home' | 'Building' | 'Briefcase' | 'Package';
  truckEn: string;
  truckAr: string;
  estRooms: number;
  crewEn: string;
  crewAr: string;
}

const MOVE_TYPES: MoveTypeOption[] = [
  { id: '1bhk', nameEn: '1 BHK Apartment / Studio', nameAr: 'شقة غرفة وصالة / استوديو', icon: 'Home', truckEn: '1x Dyna (Small)', truckAr: '1 سيارة دينا (حجم صغير)', estRooms: 2, crewEn: '2-3 Movers + Carpenter', crewAr: '2-3 عمال + نجار' },
  { id: '2bhk', nameEn: '2 BHK Apartment', nameAr: 'شقة غرفتين وصالة', icon: 'Home', truckEn: '1x Dyna (Standard 4.5T)', truckAr: '1 سيارة دينا 4.5 طن مغلقة', estRooms: 3, crewEn: '3-4 Movers + Carpenter', crewAr: '3-4 عمال + نجار' },
  { id: '3bhk', nameEn: '3 BHK Apartment', nameAr: 'شقة 3 غرف وصالة', icon: 'Home', truckEn: '1x Large Dyna / 2 Trips', truckAr: '1 دينا كبيرة جامبو أو رحلتين', estRooms: 4, crewEn: '4-5 Movers + 2 Carpenters', crewAr: '4-5 عمال + 2 نجارين' },
  { id: 'villa_small', nameEn: 'Small Villa / Duplex (4-5 Rooms)', nameAr: 'فيلا صغيرة / دوبلكس (4-5 غرف)', icon: 'Building', truckEn: '2x Dyna Trucks', truckAr: '2 سيارة دينا مغلقة', estRooms: 6, crewEn: '5-6 Movers + 2 Carpenters', crewAr: '5-6 عمال + 2 نجارين' },
  { id: 'villa_large', nameEn: 'Large Luxury Villa (6+ Rooms)', nameAr: 'فيلا كبيرة / قصر (6 غرف فأكثر)', icon: 'Building', truckEn: '3x Dyna Trucks / Heavy Trailer', truckAr: '3 سيارات دينا أو تريلا كبيرة', estRooms: 8, crewEn: 'Full Moving Crew + Supervisors', crewAr: 'طاقم متكامل + مشرف موقع' },
  { id: 'office_small', nameEn: 'Small Office (1-5 Workstations)', nameAr: 'مكتب صغير (1-5 محطات عمل)', icon: 'Briefcase', truckEn: '1x Dyna Covered', truckAr: '1 سيارة دينا مغلقة', estRooms: 2, crewEn: 'Dedicated IT & Office Movers', crewAr: 'عمالة متخصصة للأجهزة المكتبية' },
  { id: 'office_corporate', nameEn: 'Corporate Office (10-25 Desks)', nameAr: 'مقر شركة / مكاتب إدارية (10-25 مكتب)', icon: 'Briefcase', truckEn: '2x Large Dyna Trucks', truckAr: '2 سيارة دينا كبيرة', estRooms: 6, crewEn: 'Corporate Transit Logistics Team', crewAr: 'فريق لوجستي لنقل الشركات' },
  { id: 'single_items', nameEn: 'Single Furniture / Heavy Appliances', nameAr: 'قطع أثاث محددة / أجهزة كهربائية', icon: 'Package', truckEn: '1x Dyna Pickup', truckAr: 'دينا بيك أب سريعة', estRooms: 1, crewEn: 'Express Movers', crewAr: 'عمالة نقل سريعة' },
];

export const QuickQuoteCalculator: React.FC<QuickQuoteCalculatorProps> = ({
  onOpenBookingWithQuote,
}) => {
  const { isArabic, t } = useLanguage();

  const [selectedMoveType, setSelectedMoveType] = useState<string>('2bhk');
  const [pickupDistrict, setPickupDistrict] = useState<string>('حي الروضة / جدة');
  const [destDistrict, setDestDistrict] = useState<string>('حي الشاطئ / جدة');
  
  // Floor & Access
  const [floorLevel, setFloorLevel] = useState<string>('ground_or_lift');
  
  // Add-ons
  const [needsCarpenter, setNeedsCarpenter] = useState<boolean>(true);
  const [needsKitchenAssembly, setNeedsKitchenAssembly] = useState<boolean>(true);
  const [needsAcTechnician, setNeedsAcTechnician] = useState<boolean>(false);
  const [acCount, setAcCount] = useState<number>(2);
  const [needsFullPacking, setNeedsFullPacking] = useState<boolean>(true);
  const [needsWoodenCrates, setNeedsWoodenCrates] = useState<boolean>(false);
  const [needsStorage, setNeedsStorage] = useState<boolean>(false);
  const [storageMonths, setStorageMonths] = useState<number>(1);

  // Plan Engine
  const logisticsPlan = useMemo(() => {
    const moveTypeObj = MOVE_TYPES.find(m => m.id === selectedMoveType) || MOVE_TYPES[1];

    return {
      recommendedTruckEn: moveTypeObj.truckEn,
      recommendedTruckAr: moveTypeObj.truckAr,
      crewEn: moveTypeObj.crewEn,
      crewAr: moveTypeObj.crewAr,
      pickupDistrictName: pickupDistrict || (isArabic ? 'جدة' : 'Jeddah'),
      destDistrictName: destDistrict || (isArabic ? 'جدة' : 'Jeddah'),
      moveTypeName: isArabic ? moveTypeObj.nameAr : moveTypeObj.nameEn,
    };
  }, [
    selectedMoveType,
    pickupDistrict,
    destDistrict,
    floorLevel,
    needsCarpenter,
    needsKitchenAssembly,
    needsAcTechnician,
    acCount,
    needsFullPacking,
    needsWoodenCrates,
    needsStorage,
    storageMonths,
    isArabic
  ]);

  // WhatsApp Quote Text Generation (No Prices or Intercity Distance Calculations)
  const generateWhatsAppUrl = () => {
    const text = isArabic 
      ? `السلام عليكم ورحمة الله، أود طلب تسعيرة فورية وتأكيد موعد معاينة مجانية لنقل عفش:
- نوع العقار: ${logisticsPlan.moveTypeName}
- عنوان/حي الانطلاق: ${pickupDistrict}
- عنوان/حي الوصول: ${destDistrict}
- فك وتركيب نجارين محترفين: ${needsCarpenter ? 'نعم' : 'لا'}
- فك وتركيب مطبخ: ${needsKitchenAssembly ? 'نعم' : 'لا'}
- فك وتركيب مكيفات: ${needsAcTechnician ? `${acCount} مكيفات` : 'لا'}
- تغليف احترافي 5 طبقات: ${needsFullPacking ? 'نعم' : 'لا'}
- تخزين أثاث بجدة: ${needsStorage ? `${storageMonths} شهر` : 'لا'}
يرجى إرسال عرض السعر المخصص وتحديد موعد المعاينة المجانية.`
      : `Hello Saad Packers & Movers, I would like to request an instant custom quote and free survey:
- Move Type: ${logisticsPlan.moveTypeName}
- Origin Address/District: ${pickupDistrict}
- Destination Address/District: ${destDistrict}
- Carpenter Assembly: ${needsCarpenter ? 'Yes' : 'No'}
- Kitchen Assembly: ${needsKitchenAssembly ? 'Yes' : 'No'}
- AC Technician: ${needsAcTechnician ? `${acCount} units` : 'No'}
- 5-Layer Packing: ${needsFullPacking ? 'Yes' : 'No'}
- Storage in Jeddah: ${needsStorage ? `${storageMonths} mo` : 'No'}
Please provide the tailored quotation and survey schedule.`;

    return `https://wa.me/${COMPANY_CONTACTS.whatsappNumber}?text=${encodeURIComponent(text)}`;
  };

  const handleBookSurvey = () => {
    onOpenBookingWithQuote({
      moveType: logisticsPlan.moveTypeName,
      fromCity: pickupDistrict,
      toCity: destDistrict,
      itemsSummary: `${logisticsPlan.recommendedTruckAr || logisticsPlan.recommendedTruckEn} - ${needsCarpenter ? 'نجارة ' : ''}${needsFullPacking ? 'تغليف ' : ''}${needsKitchenAssembly ? 'مطبخ ' : ''}`
    });
  };

  return (
    <section id="calculator" className="py-16 bg-[#0D0D0D] border-b border-[#1E1E1E] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#C5A059]/15 text-[#C5A059] text-xs font-bold mb-3 border border-[#C5A059]/30">
            <Calculator className="w-3.5 h-3.5" />
            <span>{isArabic ? 'خطة النقل وتحديد الشاحنات والمسار' : 'Custom Relocation & Fleet Planner'}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            {t('calculator.title')}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-neutral-400">
            {t('calculator.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Controls Form (7 Cols) */}
          <div className="lg:col-span-7 bg-[#121212] rounded-2xl p-6 sm:p-8 shadow-xl border border-[#222222] space-y-6">
            
            {/* Step 1: Move Type Grid */}
            <div>
              <label className="block text-sm font-bold text-white mb-3 flex items-center justify-between">
                <span>{isArabic ? '1. اختر نوع السكن أو الأثاث المراد نقله' : '1. Select Move Type & Property Size'}</span>
                <span className="text-xs text-[#C5A059] font-medium">{isArabic ? 'تخصيص الشاحنة والعمالة' : 'Fleet & Crew Allocation'}</span>
              </label>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {MOVE_TYPES.map((type) => {
                  const isSelected = selectedMoveType === type.id;
                  return (
                    <button
                      key={type.id}
                      type="button"
                      onClick={() => setSelectedMoveType(type.id)}
                      className={`p-3 rounded-xl border text-start transition-all cursor-pointer flex flex-col justify-between ${
                        isSelected
                          ? 'border-[#C5A059] bg-[#C5A059]/15 text-white shadow-sm ring-1 ring-[#C5A059]'
                          : 'border-[#262626] bg-[#161616] hover:border-[#383838] text-neutral-300'
                      }`}
                    >
                      <div>
                        <div className="text-xs font-bold line-clamp-2">
                          {isArabic ? type.nameAr : type.nameEn}
                        </div>
                      </div>
                      <div className="mt-2 text-[11px] font-semibold text-neutral-400 flex items-center justify-between">
                        <span className="text-[#C5A059] text-[10px]">{isArabic ? type.truckAr.slice(0, 16) : type.truckEn.slice(0, 16)}</span>
                        {isSelected && <CheckCircle2 className="w-3.5 h-3.5 text-[#C5A059] shrink-0" />}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Pickup & Destination Neighborhoods / Address */}
            <div className="pt-2 border-t border-[#222222]">
              <label className="block text-sm font-bold text-white mb-3">
                {isArabic ? '2. الحي والعنوان (موقع الانطلاق والوصول)' : '2. Moving Locations (Origin & Destination Districts)'}
              </label>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Pickup District */}
                <div className="space-y-1.5">
                  <span className="text-xs font-semibold text-neutral-300 flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                    {isArabic ? 'حي / عنوان الانطلاق' : 'Origin District / Area'}
                  </span>
                  <input
                    type="text"
                    value={pickupDistrict}
                    onChange={(e) => setPickupDistrict(e.target.value)}
                    placeholder={isArabic ? 'مثال: حي الروضة، حي الشاطئ، جدة' : 'e.g. Al Rawdah, Al Shatie, Jeddah'}
                    className="w-full bg-[#0A0A0A] border border-[#262626] rounded-xl px-3.5 py-2.5 text-sm text-neutral-100 focus:outline-none focus:border-[#C5A059]"
                  />
                </div>

                {/* Destination District */}
                <div className="space-y-1.5">
                  <span className="text-xs font-semibold text-neutral-300 flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-[#C5A059]" />
                    {isArabic ? 'حي / عنوان الوصول' : 'Destination District / Area'}
                  </span>
                  <input
                    type="text"
                    value={destDistrict}
                    onChange={(e) => setDestDistrict(e.target.value)}
                    placeholder={isArabic ? 'مثال: حي الحمراء، أبحر، جدة' : 'e.g. Al Hamra, Obhur, Jeddah'}
                    className="w-full bg-[#0A0A0A] border border-[#262626] rounded-xl px-3.5 py-2.5 text-sm text-neutral-100 focus:outline-none focus:border-[#C5A059]"
                  />
                </div>
              </div>
            </div>

            {/* Step 3: Floor Level & Elevator / Winch Hoist */}
            <div className="pt-2 border-t border-[#222222]">
              <label className="block text-sm font-bold text-white mb-2">
                {isArabic ? '3. حالة الطابق والمصعد (أوناش الرفع)' : '3. Floor Level & Elevator Access'}
              </label>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {[
                  { id: 'ground_or_lift', labelEn: 'Ground / Elevator', labelAr: 'أرضي / يوجد مصعد', subEn: 'Standard Access', subAr: 'وصول مباشر ومصعد' },
                  { id: 'stairs_1_2', labelEn: '1st-2nd Fl (Stairs)', labelAr: 'دور 1-2 (درج فقط)', subEn: 'Staircase Handling', subAr: 'حمل عبر السلالم' },
                  { id: 'stairs_3_plus', labelEn: '3rd+ Fl (Stairs)', labelAr: 'دور 3+ (درج فقط)', subEn: 'Upper Floors Crew', subAr: 'أدوار عليا بالدرج' },
                  { id: 'crane_hoist', labelEn: 'Hydraulic Crane', labelAr: 'ونش هيدروليكي خارجي', subEn: 'High-Rise Balcony', subAr: 'رفع هيدروليكي خارجي' },
                ].map((fl) => (
                  <button
                    key={fl.id}
                    type="button"
                    onClick={() => setFloorLevel(fl.id)}
                    className={`p-2.5 rounded-xl border text-center transition cursor-pointer ${
                      floorLevel === fl.id
                        ? 'border-[#C5A059] bg-[#C5A059]/15 text-white font-bold ring-1 ring-[#C5A059]'
                        : 'border-[#262626] bg-[#161616] hover:bg-[#202020] text-neutral-300'
                    }`}
                  >
                    <div className="text-xs">{isArabic ? fl.labelAr : fl.labelEn}</div>
                    <div className="text-[10px] text-neutral-400 font-medium mt-0.5">{isArabic ? fl.subAr : fl.subEn}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 4: Add-on Services Checkboxes */}
            <div className="pt-2 border-t border-[#222222] space-y-2.5">
              <label className="block text-sm font-bold text-white">
                {isArabic ? '4. اختر الخدمات المهنية المطلوبة' : '4. Select Tailored Moving Services'}
              </label>

              <div className="space-y-2">
                {/* Master Carpenter */}
                <label className="flex items-center justify-between p-3 rounded-xl border border-[#262626] bg-[#141414] hover:bg-[#191919] transition cursor-pointer">
                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      checked={needsCarpenter}
                      onChange={(e) => setNeedsCarpenter(e.target.checked)}
                      className="w-4 h-4 accent-[#C5A059] rounded"
                    />
                    <div>
                      <div className="text-xs sm:text-sm font-bold text-white">
                        {isArabic ? 'نجار محترف لفك وتركيب غرف النوم والستائر' : 'Master Carpenter Bedroom & Curtain Assembly'}
                      </div>
                      <div className="text-[11px] text-neutral-400">
                        {isArabic ? 'فك دقيق مع ترقيم وحفظ المسامير وإعادة التركيب الشامل' : 'Flawless dismantling & rebuild for all brands'}
                      </div>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-emerald-400 shrink-0">
                    {isArabic ? 'فني معتمد' : 'Included'}
                  </span>
                </label>

                {/* Kitchen Assembly */}
                <label className="flex items-center justify-between p-3 rounded-xl border border-[#262626] bg-[#141414] hover:bg-[#191919] transition cursor-pointer">
                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      checked={needsKitchenAssembly}
                      onChange={(e) => setNeedsKitchenAssembly(e.target.checked)}
                      className="w-4 h-4 accent-[#C5A059] rounded"
                    />
                    <div>
                      <div className="text-xs sm:text-sm font-bold text-white">
                        {isArabic ? 'فك وتعديل وتركيب دواليب المطبخ ورخامها' : 'Modular Kitchen Cabinets Dismantling & Fitting'}
                      </div>
                      <div className="text-[11px] text-neutral-400">
                        {isArabic ? 'فنيون متخصصون في تعديل وتركيب المطابخ' : 'Custom fitting & cabinet realignment'}
                      </div>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-[#C5A059] shrink-0">{isArabic ? 'تجهيز كامل' : 'Custom'}</span>
                </label>

                {/* 5-Layer Packing */}
                <label className="flex items-center justify-between p-3 rounded-xl border border-[#262626] bg-[#141414] hover:bg-[#191919] transition cursor-pointer">
                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      checked={needsFullPacking}
                      onChange={(e) => setNeedsFullPacking(e.target.checked)}
                      className="w-4 h-4 accent-[#C5A059] rounded"
                    />
                    <div>
                      <div className="text-xs sm:text-sm font-bold text-white flex items-center gap-1.5">
                        <span>{isArabic ? 'تغليف احترافي خماسي (بابلز + كراتين + نايلون)' : '5-Layer Superior Packing (Bubble + Cartons)'}</span>
                        <span className="text-[10px] bg-[#C5A059]/20 text-[#C5A059] border border-[#C5A059]/30 font-bold px-1.5 py-0.5 rounded">
                          {isArabic ? 'موصى به' : 'Recommended'}
                        </span>
                      </div>
                      <div className="text-[11px] text-neutral-400">
                        {isArabic ? 'حماية تامة من الخدوش وكسور الزجاج وحرارة الطريق' : 'Zero-scratch guarantee for all fragile & wooden items'}
                      </div>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-emerald-400 shrink-0">
                    {isArabic ? 'حماية شاملة' : 'Premium'}
                  </span>
                </label>

                {/* AC Technician */}
                <div className="p-3 rounded-xl border border-[#262626] bg-[#141414] hover:bg-[#191919] transition">
                  <div className="flex items-center justify-between">
                    <label className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={needsAcTechnician}
                        onChange={(e) => setNeedsAcTechnician(e.target.checked)}
                        className="w-4 h-4 accent-[#C5A059] rounded"
                      />
                      <span className="text-xs sm:text-sm font-bold text-white">
                        {isArabic ? 'فني فك وتركيب مكيفات سبليت وشباك' : 'Split / Window AC Uninstallation & Installation'}
                      </span>
                    </label>

                    {needsAcTechnician && (
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-neutral-400">{isArabic ? 'العدد:' : 'Units:'}</span>
                        <select
                          value={acCount}
                          onChange={(e) => setAcCount(Number(e.target.value))}
                          className="bg-[#0A0A0A] text-white border border-[#2A2A2A] rounded px-2 py-0.5 text-xs font-bold"
                        >
                          {[1, 2, 3, 4, 5, 6, 8].map(n => (
                            <option key={`ac-${n}`} value={n}>{n} {isArabic ? 'مكيف' : 'Units'}</option>
                          ))}
                        </select>
                      </div>
                    )}
                  </div>
                </div>

                {/* Storage in Jeddah */}
                <div className="p-3 rounded-xl border border-[#262626] bg-[#141414] hover:bg-[#191919] transition">
                  <div className="flex items-center justify-between">
                    <label className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={needsStorage}
                        onChange={(e) => setNeedsStorage(e.target.checked)}
                        className="w-4 h-4 accent-[#C5A059] rounded"
                      />
                      <span className="text-xs sm:text-sm font-bold text-white">
                        {isArabic ? 'تخزين أثاث بمستودعاتنا المكيفة بجدة' : 'Air-Conditioned Secure Warehousing in Jeddah'}
                      </span>
                    </label>

                    {needsStorage && (
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-neutral-400">{isArabic ? 'المدة:' : 'Months:'}</span>
                        <select
                          value={storageMonths}
                          onChange={(e) => setStorageMonths(Number(e.target.value))}
                          className="bg-[#0A0A0A] text-white border border-[#2A2A2A] rounded px-2 py-0.5 text-xs font-bold"
                        >
                          {[1, 2, 3, 6, 12].map(m => (
                            <option key={`month-${m}`} value={m}>{m} {isArabic ? 'شهر' : 'Months'}</option>
                          ))}
                        </select>
                      </div>
                    )}
                  </div>
                </div>

              </div>
            </div>

          </div>

          {/* Real-time Logistics Plan Summary Card (5 Cols) */}
          <div className="lg:col-span-5 sticky top-24 space-y-4">
            
            {/* Section Photo Visual */}
            <div className="relative rounded-2xl overflow-hidden border border-[#2A2A2A] shadow-xl group">
              <img 
                src="https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=800&q=80" 
                alt="Saad Movers Fleet KSA"
                referrerPolicy="no-referrer"
                className="w-full h-44 object-cover filter brightness-90 group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-transparent"></div>
              <div className="absolute bottom-3 start-4 end-4 flex items-center justify-between">
                <span className="text-xs font-bold text-white bg-black/70 px-2.5 py-1 rounded border border-[#C5A059]/30">
                  {isArabic ? 'شاحنات دينا مغلقة ومجهزة 24/7' : 'Covered Dyna Fleet 24/7'}
                </span>
                <span className="text-xs font-bold text-emerald-400 bg-black/70 px-2 py-1 rounded">
                  {isArabic ? 'معاينة مجانية' : 'Free Survey'}
                </span>
              </div>
            </div>

            <div className="bg-[#121212] text-white rounded-2xl p-6 sm:p-7 shadow-2xl border border-[#262626]">
              
              <div className="flex items-center justify-between pb-4 border-b border-[#222222]">
                <div>
                  <span className="text-xs uppercase tracking-wider text-[#C5A059] font-bold">
                    {isArabic ? 'خطة النقل والخدمات المخصصة' : 'Custom Relocation Plan'}
                  </span>
                  <h3 className="text-lg font-bold text-white mt-0.5">
                    {logisticsPlan.moveTypeName}
                  </h3>
                </div>
                <span className="p-2 rounded-xl bg-[#1C1C1C] border border-[#C5A059]/30 text-[#C5A059]">
                  <Truck className="w-5 h-5" />
                </span>
              </div>

              {/* Highlight Box */}
              <div className="my-5 p-4 rounded-xl bg-[#0A0A0A] border border-[#222222] text-center">
                <div className="text-xs text-neutral-400 font-medium">
                  {isArabic ? 'الخطة اللوجستية المجهزة لنقلك' : 'Tailored Relocation Blueprint'}
                </div>
                <div className="text-2xl sm:text-3xl font-black text-[#C5A059] tracking-tight mt-1">
                  {isArabic ? 'عرض سعر مخصص ومعاينة مجانية' : 'Custom Quote & Free Survey'}
                </div>
                <div className="text-[11px] text-emerald-400 font-medium mt-1">
                  {isArabic ? '✓ يشمل العمالة المدربة، سيارات الدينا المغلقة، والضمان الشامل' : '✓ Includes Trained Crew, Insulated Dyna & Full Guarantee'}
                </div>
              </div>

              {/* Itemized Plan Table */}
              <div className="space-y-2.5 text-xs text-neutral-300 py-3 border-y border-[#222222]">
                <div className="flex justify-between">
                  <span className="text-neutral-400">{isArabic ? 'عنوان الانطلاق والوصول:' : 'Moving Route / Areas:'}</span>
                  <span className="font-semibold text-white">{logisticsPlan.pickupDistrictName} ➔ {logisticsPlan.destDistrictName}</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-neutral-400">{isArabic ? 'الشاحنة المخصصة:' : 'Assigned Fleet:'}</span>
                  <span className="font-bold text-[#C5A059]">
                    {isArabic ? logisticsPlan.recommendedTruckAr : logisticsPlan.recommendedTruckEn}
                  </span>
                </div>

                <div className="flex justify-between">
                  <span className="text-neutral-400">{isArabic ? 'فريق العمل المخصص:' : 'Dedicated Crew:'}</span>
                  <span className="font-semibold text-white">
                    {isArabic ? logisticsPlan.crewAr : logisticsPlan.crewEn}
                  </span>
                </div>

                <div className="flex justify-between">
                  <span className="text-neutral-400">{isArabic ? 'خدمة فك وتركيب نجارين:' : 'Carpenter Service:'}</span>
                  <span className="font-semibold text-emerald-400">{needsCarpenter ? (isArabic ? 'مطلوب (غرف نوم ودواليب)' : 'Yes') : (isArabic ? 'غير مطلوب' : 'No')}</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-neutral-400">{isArabic ? 'تغليف خماسي فائق:' : '5-Layer Packing:'}</span>
                  <span className="font-semibold text-emerald-400">{needsFullPacking ? (isArabic ? 'تغليف شامل معتمد' : 'Yes') : (isArabic ? 'غير مطلوب' : 'No')}</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-neutral-400">{isArabic ? 'المعاينة والفحص الفني:' : 'On-Site Survey:'}</span>
                  <span className="font-bold text-[#C5A059]">{isArabic ? 'مجانية 100% بدون رسوم' : '100% Free'}</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-5 space-y-3">
                <a
                  href={generateWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="calc-whatsapp-confirm-btn"
                  className="w-full py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl text-center shadow-lg transition flex items-center justify-center gap-2 cursor-pointer"
                >
                  <MessageSquare className="w-5 h-5" />
                  <span>{t('calculator.book_whatsapp')}</span>
                </a>

                <button
                  onClick={handleBookSurvey}
                  id="calc-book-survey-btn"
                  className="w-full py-3 bg-[#C5A059] hover:bg-[#D4B26F] text-[#0A0A0A] font-bold rounded-xl text-center shadow-md shadow-[#C5A059]/25 transition flex items-center justify-center gap-2 cursor-pointer"
                >
                  <CheckCircle2 className="w-5 h-5 text-[#0A0A0A]" />
                  <span>{isArabic ? 'طلب معاينة مجانية من المشرف' : 'Book Free On-Site Survey'}</span>
                </button>
              </div>

              <div className="mt-4 text-[11px] text-neutral-400 text-center flex items-center justify-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#C5A059]" />
                <span>{isArabic ? 'معاينة مجانية 100% بدون أي التزام مالي مسبق' : '100% Free Survey with no obligation'}</span>
              </div>
            </div>

            {/* Quick Call Box */}
            <div className="bg-[#121212] rounded-xl p-4 border border-[#222222] flex items-center justify-between">
              <div>
                <div className="text-xs font-bold text-white">{isArabic ? 'تفضل التواصل المباشر هاتفياً؟' : 'Prefer to talk on phone?'}</div>
                <div className="text-xs text-neutral-400">{isArabic ? 'اتصل بمشرف النقل بجدة الآن' : 'Logistics supervisors ready'}</div>
              </div>
              <a
                href={`tel:${COMPANY_CONTACTS.phoneCall}`}
                className="px-3.5 py-2 bg-[#1A1A1A] hover:bg-[#262626] border border-[#2E2E2E] text-white text-xs font-bold rounded-lg transition flex items-center gap-1.5"
              >
                <Phone className="w-3.5 h-3.5 text-[#C5A059]" />
                <span>{COMPANY_CONTACTS.phoneDisplay}</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
