import React, { createContext, useContext, useState, useEffect } from 'react';
import { Language } from '../types';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  isArabic: boolean;
  t: (key: string, defaultText?: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const DICTIONARY: Record<string, { en: string; ar: string }> = {
  'nav.home': { en: 'Home', ar: 'الرئيسية' },
  'nav.services': { en: 'Services', ar: 'خدماتنا' },
  'nav.quote': { en: 'Instant Quote', ar: 'طلب تسعيرة فورية' },
  'nav.inventory': { en: 'Item Calculator', ar: 'جرد العفش' },
  'nav.ai_advisor': { en: 'AI Move Planner', ar: 'المستشار الذكي' },
  'nav.ksa_coverage': { en: 'KSA Coverage', ar: 'تغطية المملكة' },
  'nav.packing_guide': { en: 'Packing Solutions', ar: 'مواد التغليف' },
  'nav.track': { en: 'Track Move', ar: 'تتبع الشحنة' },
  'nav.contact': { en: 'Contact Us', ar: 'اتصل بنا' },
  'nav.call_now': { en: 'Call 24/7', ar: 'اتصل الآن' },
  'nav.whatsapp': { en: 'WhatsApp Quote', ar: 'واتساب مباشر' },
  'hero.badge': { en: '#1 Rated Movers in Jeddah & Across Saudi Arabia', ar: 'الشركة الرائدة الأولى لنقل العفش في جدة وكافة أنحاء المملكة' },
  'hero.title_1': { en: 'Saad Packers & Movers', ar: 'سعد لنقل وتغليف الأثاث' },
  'hero.title_2': { en: 'Safe Home Shifting & Office Relocation in KSA', ar: 'نقل عفش احترافي للمنازل والشركات بجميع مدن المملكة' },
  'hero.subtitle': { en: 'Master carpenter furniture dismantling, 5-layer shockproof packing, covered Dyna trucks, and seamless transit across Jeddah, Riyadh, Dammam, and every corner of Saudi Arabia.', ar: 'فك وتركيب بأيدي نجارين محترفين، تغليف خماسي فائق الجودة، أسطول دينا مغلق ومجهز، ونقل آمن بدون خدوش داخل جدة وإلى كافة مدن المملكة.' },
  'hero.get_instant_quote': { en: 'Request Instant Custom Quote', ar: 'طلب تسعيرة وعرض سعر فوري' },
  'hero.book_free_survey': { en: 'Book Free Home Inspection', ar: 'طلب معاينة مجانية' },
  'hero.stat_moves': { en: '18,500+ Safe Relocations', ar: '+18,500 عملية نقل ناجحة' },
  'hero.stat_coverage': { en: 'All 13 KSA Regions Covered', ar: 'تغطية 13 منطقة بالمملكة' },
  'hero.stat_satisfaction': { en: '99.4% Customer Rating', ar: '99.4% تقييم رضا العملاء' },
  'hero.stat_carpenter': { en: '100% Certified Carpenters', ar: 'نجارون وفنيون معتمدون' },
  'calculator.title': { en: 'Custom Relocation & Fleet Planner', ar: 'حاسبة خطة النقل وتحديد الشاحنات وعرض السعر' },
  'calculator.subtitle': { en: 'Select your move type, pickup and destination cities in KSA, and required add-ons for an accurate custom quote and free survey.', ar: 'حدد نوع السكن، مدينة الانطلاق والوصول بالمملكة، والخدمات المطلوبة للحصول على خطة نقل مخصصة ومعاينة مجانية بدون التزام.' },
  'calculator.move_type': { en: 'Type of Relocation', ar: 'نوع السكن أو العقار' },
  'calculator.from_city': { en: 'Moving From (Pickup)', ar: 'الانطلاق من مدينة' },
  'calculator.to_city': { en: 'Moving To (Destination)', ar: 'الوصول إلى مدينة' },
  'calculator.floor_level': { en: 'Floor Level & Elevator', ar: 'رقم الدور وحالة المصعد' },
  'calculator.add_ons': { en: 'Professional Service Add-ons', ar: 'الخدمات الإضافية المطلوبة' },
  'calculator.calculate_btn': { en: 'Generate Logistics Plan & Quote', ar: 'تجهيز خطة النقل وطلب عرض السعر' },
  'calculator.est_total': { en: 'Custom Relocation Package', ar: 'خطة النقل والخدمات المخصصة' },
  'calculator.sar': { en: 'Custom Quote', ar: 'تسعيرة مخصصة' },
  'calculator.book_whatsapp': { en: 'Send Details via WhatsApp', ar: 'إرسال التفاصيل وطلب السعر بالواتساب' },
  'calculator.request_survey': { en: 'Book Free Inspection Survey', ar: 'حجز موعد معاينة مجانية' },
  'services.title': { en: 'Comprehensive Relocation & Packing Services', ar: 'خدمات النقل والتغليف المتكاملة' },
  'services.subtitle': { en: 'From single-room apartments to multi-story villas and corporate headquarters in Jeddah and KSA.', ar: 'حلول شاملة تبدأ من الشقق الصغيرة وحتى القصور والفلل والمقرات الإدارية للشركات في جدة وعموم المملكة.' },
  'ai.title': { en: 'AI Relocation & Packing Consultant', ar: 'المستشار الذكي لتخطيط النقل والتغليف' },
  'ai.subtitle': { en: 'Powered by Gemini AI — ask any question or describe your inventory to receive a customized packing plan, truck allocation, and Saudi transit advice.', ar: 'مدعوم بالذكاء الاصطناعي — اكتب استفسارك أو قائمة أغراضك لتحصل على خطة تغليف مخصصة، نوع الشاحنة المقترحة، وإرشادات النقل بالمملكة.' },
  'inventory.title': { en: 'Room-by-Room Furniture & Box Calculator', ar: 'حاسبة جرد العفش وتقدير حمولة الشاحنات' },
  'inventory.subtitle': { en: 'Select your items to calculate total volume (CBM), required packing boxes, and recommended Dyna truck size.', ar: 'اختر الأثاث والأجهزة لحساب الحجم الإجمالي بالمتر المكعب، وعدد الكراتين ومواد التغليف والشاحنات المطلوبة.' },
  'coverage.title': { en: 'Jeddah Hub & Kingdom-Wide Coverage', ar: 'مركزنا الرئيسي بجدة وشبكة تغطية كافة مدن المملكة' },
  'coverage.subtitle': { en: 'Daily scheduled trips and dedicated express fleets connecting all regions of Saudi Arabia.', ar: 'رحلات يومية منتظمة وشاحنات سريعة مجهزة تربط بين كافة المناطق والمدن السعودية.' },
  'packing.title': { en: '5-Layer Superior Packing Methodology', ar: 'معايير التغليف الخماسي الفائق' },
  'packing.subtitle': { en: 'We never compromise on materials. Discover the multi-barrier protection keeping your valuables safe.', ar: 'لا نتهاون في جودة المواد. تعرف على الطبقات العازلة التي تضمن وصول أثاثك وأجهزتك بدون أي خدش أو كسر.' },
  'reviews.title': { en: 'Trusted by Thousands Across Saudi Arabia', ar: 'آراء وتقييمات عملائنا في المملكة' },
  'reviews.subtitle': { en: 'Real feedback from satisfied homeowners, villa owners, and businesses in Jeddah, Riyadh, and Dammam.', ar: 'تجارب حقيقية موثقة من أصحاب الفلل والشقق والشركات في جدة والرياض والدمام.' },
  'faq.title': { en: 'Frequently Asked Questions', ar: 'الأسئلة الشائعة حول نقل العفش' },
  'faq.subtitle': { en: 'Clear answers on pricing, guarantees, carpenters, and interstate transit in Saudi Arabia.', ar: 'إجابات واضحة ومباشرة عن التكاليف، الضمانات، فك وتركيب الأثاث، ومواعيد التوصيل.' },
  'footer.rights': { en: 'All Rights Reserved © 2026 Saad Packers & Movers KSA.', ar: 'جميع الحقوق محفوظة © 2026 شركة سعد لنقل وتغليف الأثاث بالمملكة.' }
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('ar'); // Default to Arabic as primary target is KSA

  useEffect(() => {
    // Set document direction and language attribute
    document.documentElement.lang = language;
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
  }, [language]);

  const t = (key: string, defaultText?: string): string => {
    if (DICTIONARY[key]) {
      return DICTIONARY[key][language] || DICTIONARY[key].en;
    }
    return defaultText || key;
  };

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        isArabic: language === 'ar',
        t,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
