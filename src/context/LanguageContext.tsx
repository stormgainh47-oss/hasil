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
  'nav.why_us': { en: 'Why Us', ar: 'لماذا نحن' },
  'nav.how_it_works': { en: 'How It Works', ar: 'كيف نعمل' },
  'nav.quote': { en: 'Get a Free Quote', ar: 'طلب تسعيرة مجانية' },
  'nav.inventory': { en: 'Item Calculator', ar: 'جرد العفش' },
  'nav.ai_advisor': { en: 'AI Move Planner', ar: 'المستشار الذكي' },
  'nav.coverage': { en: 'Coverage', ar: 'التغطية' },
  'nav.ksa_coverage': { en: 'Coverage', ar: 'تغطية المملكة' },
  'nav.packing_guide': { en: 'Packing Solutions', ar: 'مواد التغليف' },
  'nav.reviews': { en: 'Reviews', ar: 'التقييمات' },
  'nav.track': { en: 'Track Move', ar: 'تتبع الشحنة' },
  'nav.contact': { en: 'Contact', ar: 'اتصل بنا' },
  'nav.call_now': { en: '+966 57 577 1358', ar: '+966 57 577 1358' },
  'nav.whatsapp': { en: 'WhatsApp', ar: 'واتساب' },
  'hero.badge': { en: "Jeddah's trusted moving & relocation service", ar: 'خدمة نقل وترحيل موثوقة في جدة وعموم المملكة' },
  'hero.title_1': { en: 'SAAD Packers & Movers', ar: 'سعد لنقل وتغليف الأثاث' },
  'hero.title_2': { en: 'Moving made safe & simple.', ar: 'نقل عفش آمن وبسيط.' },
  'hero.subtitle': { en: 'Saad Packers & Movers moves homes and offices across Jeddah and all over Saudi Arabia — full-house shifting, furniture, and office equipment, handled by trained crews with the right trucks and careful hands.', ar: 'تنقل شركة سعد لنقل وتغليف الأثاث المنازل والمكاتب في كافة أنحاء جدة وعموم المملكة العربية السعودية — نقل منازل بالكامل، أثاث ومعدات مكتبية، بأيدي طواقم عمل مدربة وشاحنات مجهزة وعناية فائقة.' },
  'hero.get_instant_quote': { en: 'Get a Free Quote', ar: 'احصل على عرض سعر مجاني' },
  'hero.book_free_survey': { en: 'Book Free Inspection', ar: 'طلب معاينة مجانية' },
  'hero.pill_1': { en: 'Licensed & insured', ar: 'مرخص ومؤمن بالكامل' },
  'hero.pill_2': { en: 'On-time, every time', ar: 'دقة والتزام بالمواعيد' },
  'hero.pill_3': { en: 'Trained moving crew', ar: 'طاقم عمل مدرب ومحترف' },
  'hero.pill_4': { en: 'Professional packing', ar: 'تغليف احترافي متكامل' },
  'services.title': { en: 'Our Services', ar: 'خدماتنا' },
  'services.heading': { en: 'Everything you need for a smooth move', ar: 'كل ما تحتاجه لنقل سلس ومريح' },
  'services.subtitle': { en: 'From a single sofa to a full office, we pack, load, transport, and unpack — all under one roof.', ar: 'من نقل قطعة أثاث واحدة وحتى مكاتب وشركات كاملة، نقوم بالتغليف والتحميل والنقل والتركيب — كل ذلك تحت سقف واحد.' },
  'services.banner_text': { en: 'Saad Packers & Movers crew carefully wrapping furniture before a move', ar: 'طاقم شركة سعد يقوم بتغليف وحماية الأثاث بعناية فائقة قبل النقل' },
  'why.title': { en: 'Why choose us', ar: 'لماذا تختارنا' },
  'why.subtitle': { en: 'The team you can trust with everything you own', ar: 'الفريق الذي يمكنك الوثوق به في نقل كافة مقتنياتك' },
  'why.intro': { en: "We treat every box like our own. Here's what you can count on with every Saad move:", ar: 'نتعامل مع كل صندوق وكأنه ملكنا. إليك ما يمكنك الاعتماد عليه مع كل عملية نقل مع سعد:' },
  'how.title': { en: 'How it works', ar: 'كيف نعمل' },
  'how.subtitle': { en: 'Moving in four simple steps', ar: 'النقل في أربع خطوات بسيطة' },
  'how.intro': { en: 'A straightforward process designed to keep you calm from first call to final box.', ar: 'عملية منظمة ومباشرة صُممت لراحتك وطمأنينتك من أول اتصال وحتى آخر صندوق.' },
  'onthejob.title': { en: 'On the job', ar: 'أعمالنا الميدانية' },
  'onthejob.subtitle': { en: 'From living rooms to office floors — we move it all', ar: 'من غرف المعيشة والمنازل إلى طوابق ومقرات الشركات — ننقل كل شيء' },
  'coverage.title': { en: 'Coverage', ar: 'نطاق التغطية' },
  'coverage.heading': { en: 'From Jeddah to all over the Kingdom', ar: 'من جدة إلى كافة أنحاء المملكة' },
  'coverage.subtitle': { en: 'Local moves across Jeddah and intercity relocations to every major city in Saudi Arabia — always on time, always careful.', ar: 'نقل محلي داخل أحياء جدة ونقل بين المدن لكافة المدن الرئيسية في المملكة العربية السعودية — دائماً في الموعد وبكل حرص.' },
  'reviews.title': { en: 'Reviews', ar: 'آراء وتقييمات العملاء' },
  'reviews.heading': { en: 'Moving with Saad, in their words', ar: 'تجارب عملائنا مع شركة سعد' },
  'reviews.subtitle': { en: 'A few notes from happy customers. Real reviews from across Jeddah and KSA.', ar: 'انطباعات وآراء من عملائنا الكرام بعد عمليات النقل في جدة والرياض والدمام ومكة وينبع.' },
  'quote_form.title': { en: 'Free quote', ar: 'عرض سعر مجاني' },
  'quote_form.heading': { en: 'Get your free, no-obligation quote', ar: 'احصل على عرض سعر مجاني بدون أي التزام' },
  'quote_form.subtitle': { en: "Tell us about your move anywhere in Saudi Arabia and we'll send a clear, upfront estimate — usually within a few hours. No pressure, no hidden costs.", ar: 'أخبرنا عن تفاصيل نقلك في أي مكان بالمملكة وسنرسل لك تقديراً واضحاً ومسبقاً — عادة خلال ساعات قليلة. بدون أي ضغوط أو تكاليف خفية.' },
  'footer.rights': { en: '© 2026 Saad Packers & Movers. All rights reserved. Moving homes & offices across Saudi Arabia, the safe way.', ar: '© 2026 شركة سعد لنقل وتغليف الأثاث. جميع الحقوق محفوظة. نقل المنازل والمكاتب في كافة أنحاء المملكة بالطريقة الآمنة.' }
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
