import React, { useState, useMemo } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { INVENTORY_CATEGORIES, COMPANY_CONTACTS } from '../data/ksaData';
import { WORK_IMAGES } from '../assets/images';
import { 
  Package, 
  Truck, 
  Plus, 
  Minus, 
  Trash2, 
  Check, 
  Sparkles, 
  Layers, 
  Sofa, 
  Bed, 
  Utensils, 
  Tv, 
  MessageSquare,
  ArrowRight,
  ArrowLeft
} from 'lucide-react';

interface InventoryCalculatorProps {
  onOpenBookingWithInventory: (inventorySummary: string) => void;
}

export const InventoryCalculator: React.FC<InventoryCalculatorProps> = ({
  onOpenBookingWithInventory,
}) => {
  const { isArabic, t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<string>('living_room');
  
  // Map of itemId -> count
  const [quantities, setQuantities] = useState<Record<string, number>>({
    'sofa_3_seater': 1,
    'sofa_2_seater': 1,
    'coffee_table': 1,
    'tv_55': 1,
    'king_bed_set': 1,
    'wardrobe_6_door': 1,
    'nightstand': 2,
    'large_fridge': 1,
    'washing_machine': 1,
    'clothes_box': 6,
    'kitchenware_box': 4,
  });

  const handleUpdateQty = (itemId: string, delta: number) => {
    setQuantities(prev => {
      const current = prev[itemId] || 0;
      const next = Math.max(0, current + delta);
      if (next === 0) {
        const copy = { ...prev };
        delete copy[itemId];
        return copy;
      }
      return { ...prev, [itemId]: next };
    });
  };

  const handleClearAll = () => {
    setQuantities({});
  };

  // Metrics Calculation
  const metrics = useMemo(() => {
    let totalCbm = 0;
    let totalItemsCount = 0;
    let requiresDisassemblyCount = 0;
    let fragileCount = 0;

    const allItems = INVENTORY_CATEGORIES.flatMap(c => c.items);

    Object.entries(quantities).forEach(([itemId, val]) => {
      const qty = Number(val) || 0;
      const item = allItems.find(i => i.id === itemId);
      if (item && qty > 0) {
        totalCbm += item.volumeCbm * qty;
        totalItemsCount += qty;
        if (item.requiresDisassembly) {
          requiresDisassemblyCount += qty;
        }
        if (item.defaultPackingType === 'fragile') {
          fragileCount += qty;
        }
      }
    });

    // Estimation formulas
    // 1 standard Dyna is approx 12-14 CBM usable capacity
    const dynaTrucksNeeded = Math.max(1, Math.ceil(totalCbm / 13));
    const estimatedCartons = Math.max(5, Math.ceil(totalCbm * 2.2));
    const estimatedBubbleRolls = Math.max(1, Math.ceil(totalCbm * 0.45));
    const estimatedTapeRolls = Math.max(2, Math.ceil(totalCbm * 0.8));

    return {
      totalCbm: parseFloat(totalCbm.toFixed(1)),
      totalItemsCount,
      requiresDisassemblyCount,
      fragileCount,
      dynaTrucksNeeded,
      estimatedCartons,
      estimatedBubbleRolls,
      estimatedTapeRolls,
    };
  }, [quantities]);

  const generateInventoryText = () => {
    const allItems = INVENTORY_CATEGORIES.flatMap(c => c.items);
    const selectedList = Object.entries(quantities)
      .filter(([_, qty]) => Number(qty) > 0)
      .map(([id, qty]) => {
        const item = allItems.find(i => i.id === id);
        return `${qty}x ${isArabic ? item?.nameAr : item?.nameEn}`;
      })
      .join(', ');

    return `Total Volume: ${metrics.totalCbm} CBM | Trucks: ${metrics.dynaTrucksNeeded} Dyna | Items: ${selectedList}`;
  };

  const handleWhatsAppShare = () => {
    const allItems = INVENTORY_CATEGORIES.flatMap(c => c.items);
    const itemListString = Object.entries(quantities)
      .filter(([_, qty]) => Number(qty) > 0)
      .map(([id, qty]) => {
        const item = allItems.find(i => i.id === id);
        return `• ${isArabic ? item?.nameAr : item?.nameEn}: (${qty})`;
      })
      .join('\n');

    const message = isArabic
      ? `السلام عليكم، هذا جرد الأثاث الخاص بي لطلب تسعيرة نقل وتغليف من شركة سعد:
الحجم الإجمالي: ${metrics.totalCbm} متر مكعب
السيارات المقترحة: ${metrics.dynaTrucksNeeded} دينا
كراتين التغليف المقدرة: ${metrics.estimatedCartons} كرتون
قطع تحتاج فك وتركيب نجار: ${metrics.requiresDisassemblyCount}

قائمة المنقولات:
${itemListString}

يرجى تزويدي بأفضل عرض سعر شامل النقل والفك والتركيب.`
      : `Hello Saad Movers, here is my item inventory for a relocation quote:
Total Volume: ${metrics.totalCbm} CBM
Truck Recommendation: ${metrics.dynaTrucksNeeded} Dyna
Estimated Cartons: ${metrics.estimatedCartons}
Disassembly items: ${metrics.requiresDisassemblyCount}

Item Breakdown:
${itemListString}

Please provide me with a customized moving quote.`;

    const url = `https://wa.me/${COMPANY_CONTACTS.whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Sofa': return <Sofa className="w-4 h-4" />;
      case 'Bed': return <Bed className="w-4 h-4" />;
      case 'Utensils': return <Utensils className="w-4 h-4" />;
      case 'Tv': return <Tv className="w-4 h-4" />;
      default: return <Package className="w-4 h-4" />;
    }
  };

  const ArrowIcon = isArabic ? ArrowLeft : ArrowRight;

  return (
    <section id="inventory" className="py-16 bg-[#0D0D0D] border-b border-[#1E1E1E] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#C5A059]/15 text-[#C5A059] text-xs font-bold mb-3 border border-[#C5A059]/30">
            <Package className="w-3.5 h-3.5" />
            <span>{isArabic ? 'حاسبة جرد الأثاث الذكية' : 'Smart CBM & Truck Load Estimator'}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            {t('inventory.title')}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-neutral-400">
            {t('inventory.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Item Selector Grid (8 Cols) */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* Category Tabs */}
            <div className="flex flex-wrap gap-2 p-1.5 bg-[#141414] rounded-2xl border border-[#222222]">
              {INVENTORY_CATEGORIES.map((cat) => {
                const isActive = activeCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className={`flex-1 min-w-[130px] py-2.5 px-3 rounded-xl text-xs sm:text-sm font-bold transition flex items-center justify-center gap-2 cursor-pointer ${
                      isActive
                        ? 'bg-[#C5A059] text-[#0A0A0A] shadow-md shadow-[#C5A059]/20 font-extrabold'
                        : 'text-neutral-400 hover:text-white hover:bg-[#1E1E1E]'
                    }`}
                  >
                    {getCategoryIcon(cat.icon)}
                    <span>{isArabic ? cat.nameAr : cat.nameEn}</span>
                  </button>
                );
              })}
            </div>

            {/* Items in Active Category */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {INVENTORY_CATEGORIES.find(c => c.id === activeCategory)?.items.map((item) => {
                const qty = quantities[item.id] || 0;
                return (
                  <div
                    key={item.id}
                    className={`p-4 rounded-xl border transition flex items-center justify-between ${
                      qty > 0
                        ? 'bg-[#181818] border-[#C5A059]/50 shadow-md ring-1 ring-[#C5A059]/20'
                        : 'bg-[#121212] border-[#222222] hover:border-[#333333]'
                    }`}
                  >
                    <div className="space-y-1 pe-2">
                      <div className="text-xs sm:text-sm font-bold text-white">
                        {isArabic ? item.nameAr : item.nameEn}
                      </div>
                      <div className="flex items-center gap-2 text-[11px] text-neutral-400">
                        <span className="text-[#C5A059] font-medium">{item.volumeCbm} CBM</span>
                        {item.requiresDisassembly && (
                          <span className="text-[#C5A059] bg-[#C5A059]/15 px-1.5 py-0.5 rounded font-medium border border-[#C5A059]/30">
                            {isArabic ? 'فك نجار' : 'Carpenter'}
                          </span>
                        )}
                        {item.defaultPackingType === 'fragile' && (
                          <span className="text-rose-400 bg-rose-950/40 px-1.5 py-0.5 rounded font-medium border border-rose-800/40">
                            {isArabic ? 'زجاج/حساس' : 'Fragile'}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Counter Buttons */}
                    <div className="flex items-center gap-2 shrink-0">
                      <button
                        type="button"
                        onClick={() => handleUpdateQty(item.id, -1)}
                        disabled={qty === 0}
                        className={`w-7 h-7 rounded-lg flex items-center justify-center font-bold text-xs transition ${
                          qty === 0
                            ? 'bg-[#1A1A1A] text-neutral-600 cursor-not-allowed'
                            : 'bg-[#222222] hover:bg-[#2C2C2C] text-white cursor-pointer'
                        }`}
                      >
                        <Minus className="w-3.5 h-3.5" />
                      </button>

                      <span className="w-6 text-center text-xs font-bold text-white">
                        {qty}
                      </span>

                      <button
                        type="button"
                        onClick={() => handleUpdateQty(item.id, 1)}
                        className="w-7 h-7 rounded-lg bg-[#C5A059] hover:bg-[#D4B26F] text-[#0A0A0A] flex items-center justify-center font-bold text-xs transition cursor-pointer shadow-sm"
                      >
                        <Plus className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Clear All & Quick Summary */}
            <div className="flex items-center justify-between pt-2">
              <button
                onClick={handleClearAll}
                className="text-xs text-neutral-400 hover:text-rose-400 font-semibold flex items-center gap-1 transition cursor-pointer"
              >
                <Trash2 className="w-3.5 h-3.5" />
                <span>{isArabic ? 'تفريغ القائمة بالكامل' : 'Clear all items'}</span>
              </button>

              <span className="text-xs text-neutral-300 font-semibold">
                {isArabic ? `إجمالي القطع المختارة: ${metrics.totalItemsCount} قطعة` : `Total items selected: ${metrics.totalItemsCount}`}
              </span>
            </div>

          </div>

          {/* Real-time Load & Material Summary Card (4 Cols) */}
          <div className="lg:col-span-4 bg-[#121212] text-white rounded-2xl p-6 sm:p-7 shadow-2xl border border-[#262626] sticky top-24 space-y-5">
            
            {/* Visual Photo Card */}
            <div className="relative -mx-6 -mt-6 sm:-mx-7 sm:-mt-7 mb-3 h-36 overflow-hidden rounded-t-2xl">
              <img 
                src={WORK_IMAGES.fragilePacking} 
                alt="Saad Movers Packing & Inventory"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover filter brightness-80 hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-transparent"></div>
              <div className="absolute bottom-2 start-4 end-4 flex items-center justify-between">
                <span className="text-[11px] font-bold text-[#C5A059] bg-black/80 px-2 py-0.5 rounded border border-[#C5A059]/30">
                  {isArabic ? 'تغليف وجرد احترافي' : 'Professional Packing'}
                </span>
              </div>
            </div>

            <div className="flex items-center justify-between pb-4 border-b border-[#222222]">
              <div>
                <h3 className="font-bold text-base text-white">
                  {isArabic ? 'تقدير الحمولة والمواد' : 'Load & Supply Estimate'}
                </h3>
                <p className="text-xs text-neutral-400">
                  {isArabic ? 'حساب دقيق لمتطلبات النقل' : 'Real-time logistics breakdown'}
                </p>
              </div>
              <div className="p-2 rounded-xl bg-[#1C1C1C] border border-[#C5A059]/30 text-[#C5A059]">
                <Truck className="w-5 h-5" />
              </div>
            </div>

            {/* CBM Meter Gauge */}
            <div className="p-4 rounded-xl bg-[#0A0A0A] border border-[#222222] space-y-2">
              <div className="flex justify-between items-center text-xs">
                <span className="text-neutral-400">{isArabic ? 'إجمالي الحجم المكعب:' : 'Total Volume (CBM):'}</span>
                <span className="text-base font-black text-[#C5A059]">{metrics.totalCbm} CBM</span>
              </div>
              <div className="w-full bg-[#202020] h-2 rounded-full overflow-hidden">
                <div 
                  className="bg-gradient-to-r from-[#C5A059] to-[#E6CA85] h-full transition-all duration-500"
                  style={{ width: `${Math.min(100, (metrics.totalCbm / 30) * 100)}%` }}
                ></div>
              </div>
              <div className="flex justify-between text-[10px] text-neutral-500">
                <span>0 CBM</span>
                <span>15 CBM (1 Dyna)</span>
                <span>30+ CBM (Trailer)</span>
              </div>
            </div>

            {/* Required Logistics Assets */}
            <div className="space-y-3 text-xs">
              <div className="flex items-center justify-between p-2.5 rounded-lg bg-[#181818] border border-[#262626]">
                <div className="flex items-center gap-2">
                  <Truck className="w-4 h-4 text-emerald-400" />
                  <span className="text-neutral-300">{isArabic ? 'شاحنات دينا مغلقة مطلوبة:' : 'Covered Dyna Trucks:'}</span>
                </div>
                <span className="font-bold text-white">{metrics.dynaTrucksNeeded} {isArabic ? 'دينا' : 'Truck(s)'}</span>
              </div>

              <div className="flex items-center justify-between p-2.5 rounded-lg bg-[#181818] border border-[#262626]">
                <div className="flex items-center gap-2">
                  <Package className="w-4 h-4 text-[#C5A059]" />
                  <span className="text-neutral-300">{isArabic ? 'كراتين 5 طبقات مقواة:' : '5-Ply Heavy Cartons:'}</span>
                </div>
                <span className="font-bold text-white">~{metrics.estimatedCartons} {isArabic ? 'كرتون' : 'Boxes'}</span>
              </div>

              <div className="flex items-center justify-between p-2.5 rounded-lg bg-[#181818] border border-[#262626]">
                <div className="flex items-center gap-2">
                  <Layers className="w-4 h-4 text-amber-400" />
                  <span className="text-neutral-300">{isArabic ? 'رولات بابلز هوائي سميك:' : 'Heavy Bubble Rolls:'}</span>
                </div>
                <span className="font-bold text-white">~{metrics.estimatedBubbleRolls} {isArabic ? 'رول' : 'Rolls'}</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="pt-2 space-y-2.5">
              <button
                onClick={handleWhatsAppShare}
                id="inventory-whatsapp-btn"
                className="w-full py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl text-xs sm:text-sm shadow-md transition flex items-center justify-center gap-2 cursor-pointer"
              >
                <MessageSquare className="w-4 h-4" />
                <span>{isArabic ? 'إرسال الجرد عبر الواتساب للتسعير' : 'Send Inventory via WhatsApp'}</span>
              </button>

              <button
                onClick={() => onOpenBookingWithInventory(generateInventoryText())}
                id="inventory-book-survey-btn"
                className="w-full py-3 bg-[#C5A059] hover:bg-[#D4B26F] text-[#0A0A0A] font-bold rounded-xl text-xs sm:text-sm shadow-md shadow-[#C5A059]/25 transition flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>{isArabic ? 'طلب موعد معاينة بناءً على الجرد' : 'Book Survey with this Inventory'}</span>
                <ArrowIcon className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
