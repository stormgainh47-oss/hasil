import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { COMPANY_CONTACTS } from '../data/ksaData';
import { 
  Sparkles, 
  Send, 
  Loader2, 
  Truck, 
  Package, 
  Wrench, 
  ShieldCheck, 
  Clock, 
  CheckCircle2, 
  MessageSquare,
  Lightbulb,
  AlertCircle
} from 'lucide-react';

interface AiMovingAdvisorProps {
  onOpenBookingWithAiAdvice?: (summary: string) => void;
}

export const AiMovingAdvisor: React.FC<AiMovingAdvisorProps> = ({
  onOpenBookingWithAiAdvice,
}) => {
  const { language, isArabic, t } = useLanguage();
  
  const [prompt, setPrompt] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [result, setResult] = useState<any | null>(null);
  const [error, setError] = useState<string | null>(null);

  const samplePrompts = isArabic
    ? [
        'نقل شقة 3 غرف من حي الروضة بجدة إلى حي الملقا بالرياض مع غرف نوم إيطالية وشاشة 75 بوصة',
        'كيفية حماية وتغليف أطقم الصيني والكريستال والتحف الزجاجية الحساسة أثناء النقل لمسافات طويلة',
        'نقل مكتب شركة 15 موظف مع خوادم شبكة وأجهزة كمبيوتر وطاولات اجتماعات في جدة',
        'ما هي المتطلبات والشاحنات اللازمة لنقل فيلا دوبلكس دورين مع 4 مكيفات سبليت ومطبخ تفصيل'
      ]
    : [
        'Moving 3BHK apartment from Jeddah (Al Rawdah) to Riyadh (Al Malqa) with Italian bedroom and 75-inch OLED TV',
        'How to safely pack crystal china sets, chandeliers, and fragile glass decor for long transit across KSA',
        'Corporate office relocation with 15 workstations, server rack, and executive suite in Jeddah',
        'Relocation requirements and truck allocation for a 2-story duplex villa with 4 split ACs and modular kitchen'
      ];

  const handleAskAdvisor = async (customPrompt?: string) => {
    const userQuery = customPrompt || prompt;
    if (!userQuery.trim()) return;

    setLoading(true);
    setError(null);
    if (customPrompt) {
      setPrompt(customPrompt);
    }

    try {
      const response = await fetch('/api/gemini/moving-advisor', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          userPrompt: userQuery,
          language: language,
          moveDetails: {
            source: 'Saad Packers & Movers Web Portal',
            timestamp: new Date().toISOString(),
          }
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to generate relocation advice');
      }

      const data = await response.json();
      setResult(data);
    } catch (err: any) {
      console.error(err);
      setError(
        isArabic
          ? 'تعذر الاتصال بالمستشار الذكي مؤقتاً. يمكنك التواصل مباشرة مع مشرف النقل عبر الواتساب.'
          : 'Could not connect to the AI advisor. You can chat directly with our moving supervisor on WhatsApp.'
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="ai-advisor" className="py-16 bg-[#0A0A0A] text-white border-b border-[#1E1E1E] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#C5A059]/15 text-[#C5A059] text-xs font-bold mb-3 border border-[#C5A059]/30 shadow-inner">
            <Sparkles className="w-4 h-4 text-[#C5A059] animate-pulse" />
            <span>{isArabic ? 'مستشار الذكاء الاصطناعي لنقل العفش' : 'AI Logistics & Moving Consultant'}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            {t('ai.title')}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-neutral-400">
            {t('ai.subtitle')}
          </p>
        </div>

        {/* Input Box & Presets */}
        <div className="max-w-4xl mx-auto bg-[#121212] border border-[#222222] rounded-2xl overflow-hidden shadow-2xl">
          
          {/* Visual Header Banner */}
          <div className="relative h-32 sm:h-40 w-full overflow-hidden bg-black">
            <img 
              src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80" 
              alt="AI Relocation & Logistics"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover filter brightness-75"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-[#121212]/40 to-transparent"></div>
            <div className="absolute bottom-3 start-6 end-6 flex items-center justify-between">
              <div>
                <span className="text-[10px] uppercase font-bold tracking-widest text-[#C5A059] block">
                  {isArabic ? 'استشارة لوجستية ذكية' : 'Smart AI Consultation'}
                </span>
                <span className="text-sm sm:text-base font-bold text-white">
                  {isArabic ? 'تخطيط النقل والتغليف المخصص لمنازل ومكاتب المملكة' : 'Custom Relocation Planning for Saudi Residences & Offices'}
                </span>
              </div>
            </div>
          </div>

          <div className="p-6 sm:p-8">
            {/* Quick Presets */}
            <div className="mb-4">
            <span className="text-xs font-semibold text-neutral-400 block mb-2 flex items-center gap-1.5">
              <Lightbulb className="w-3.5 h-3.5 text-[#C5A059]" />
              {isArabic ? 'نماذج استفسارات شائعة (انقر للتجربة المباشرة):' : 'Popular relocation scenarios (click to test):'}
            </span>
            <div className="flex flex-wrap gap-2">
              {samplePrompts.map((sp, idx) => (
                <button
                  key={idx}
                  onClick={() => handleAskAdvisor(sp)}
                  disabled={loading}
                  className="text-[11px] sm:text-xs text-neutral-300 bg-[#181818] hover:bg-[#222222] hover:text-white border border-[#2A2A2A] rounded-lg px-3 py-1.5 transition text-start cursor-pointer disabled:opacity-50"
                >
                  {sp}
                </button>
              ))}
            </div>
          </div>

          {/* Form Textarea */}
          <div className="relative mt-4">
            <textarea
              rows={3}
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder={
                isArabic
                  ? 'اكتب تفاصيل نقلك هنا (مثال: شقة غرفتين وصالة بجدة مع أجهزة كهربائية ومجلس عربي، كيف أجهز للنقل وما هي مواد التغليف المناسبة؟)'
                  : 'Describe your move (e.g. 2-bedroom flat with living majlis, electronics, moving from Jeddah to Dammam. What truck and packing plan is best?)'
              }
              className="w-full bg-[#0A0A0A] border border-[#2A2A2A] rounded-xl p-4 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-[#C5A059] transition resize-none"
            />

            <div className="flex items-center justify-between mt-3">
              <span className="text-[11px] text-neutral-400">
                {isArabic ? 'مدعوم بنموذج الذكاء الاصطناعي المتقدم Gemini 2.5' : 'Powered by Gemini 2.5 AI Logistics Model'}
              </span>

              <button
                type="button"
                onClick={() => handleAskAdvisor()}
                disabled={loading || !prompt.trim()}
                id="ai-generate-plan-btn"
                className="px-5 py-2.5 bg-[#C5A059] hover:bg-[#D4B26F] text-[#0A0A0A] text-xs sm:text-sm font-bold rounded-xl shadow-md shadow-[#C5A059]/25 transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2 cursor-pointer"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin text-[#0A0A0A]" />
                    <span>{isArabic ? 'جاري التحليل وتجهيز الخطة...' : 'Analyzing Move...'}</span>
                  </>
                ) : (
                  <>
                    <Sparkles className="w-4 h-4 text-[#0A0A0A]" />
                    <span>{isArabic ? 'توليد خطة النقل والتغليف' : 'Generate Moving Plan'}</span>
                    <Send className="w-3.5 h-3.5" />
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Error Message */}
          {error && (
            <div className="mt-4 p-4 rounded-xl bg-red-950/40 border border-red-800/60 text-red-300 text-xs flex items-center gap-2">
              <AlertCircle className="w-4 h-4 text-red-400 shrink-0" />
              <span>{error}</span>
            </div>
          )}

          {/* Generated Result Card */}
          {result && (
            <div className="mt-6 pt-6 border-t border-[#222222] space-y-5 animate-in fade-in duration-300">
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-[#C5A059]/20 text-[#C5A059] flex items-center justify-center">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-sm sm:text-base">
                      {isArabic ? 'خطة النقل والخدمات الموصى بها من سعد' : 'Custom Relocation & Packing Blueprint'}
                    </h3>
                    <p className="text-[11px] text-neutral-400">
                      {isArabic ? 'مخصصة وفقاً لمعايير النقل بالمملكة العربية السعودية' : 'Tailored specifically for KSA logistics & climate'}
                    </p>
                  </div>
                </div>
              </div>

              {/* Advice Narrative */}
              <div className="p-4 rounded-xl bg-[#0A0A0A] border border-[#222222] text-xs sm:text-sm text-neutral-200 leading-relaxed whitespace-pre-line">
                {result.advice}
              </div>

              {/* Key Quick Badges */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {result.recommendedTruck && (
                  <div className="p-3 rounded-xl bg-[#181818] border border-[#262626] flex items-start gap-2.5">
                    <Truck className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <div className="text-xs font-bold text-neutral-400">{isArabic ? 'الشاحنة الموصى بها:' : 'Recommended Fleet:'}</div>
                      <div className="text-xs font-semibold text-white mt-0.5">{result.recommendedTruck}</div>
                    </div>
                  </div>
                )}

                {result.estimatedTransitTime && (
                  <div className="p-3 rounded-xl bg-[#181818] border border-[#262626] flex items-start gap-2.5">
                    <Clock className="w-5 h-5 text-[#C5A059] shrink-0 mt-0.5" />
                    <div>
                      <div className="text-xs font-bold text-neutral-400">{isArabic ? 'الزمن التقديري:' : 'Transit Time:'}</div>
                      <div className="text-xs font-semibold text-white mt-0.5">{result.estimatedTransitTime}</div>
                    </div>
                  </div>
                )}
              </div>

              {/* Required Packing Materials Checklist */}
              {result.packingMaterials && result.packingMaterials.length > 0 && (
                <div className="p-4 rounded-xl bg-[#141414] border border-[#222222]">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#C5A059] mb-2.5 flex items-center gap-1.5">
                    <Package className="w-4 h-4" />
                    <span>{isArabic ? 'مواد التغليف المقترحة لمنقولاتك:' : 'Recommended Packing Materials Checklist:'}</span>
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-neutral-300">
                    {result.packingMaterials.map((mat: string, idx: number) => (
                      <div key={idx} className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span>{mat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Climate & Safety Tips */}
              {result.tips && result.tips.length > 0 && (
                <div className="p-4 rounded-xl bg-[#141414] border border-[#222222]">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#C5A059] mb-2.5 flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4" />
                    <span>{isArabic ? 'نصائح مهمة لحماية الأثاث في المملكة:' : 'Crucial Moving & Safety Tips for KSA:'}</span>
                  </h4>
                  <ul className="space-y-1.5 text-xs text-neutral-300">
                    {result.tips.map((tip: string, idx: number) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-[#C5A059] font-bold">•</span>
                        <span>{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* WhatsApp & Booking Forward */}
              <div className="pt-2 flex flex-wrap items-center justify-between gap-3">
                <a
                  href={`https://wa.me/${COMPANY_CONTACTS.whatsappNumber}?text=${encodeURIComponent(
                    isArabic
                      ? `مرحبا، قمت بتوليد خطة نقل عبر الذكاء الاصطناعي وأرغب في تنفيذها مع شركة سعد: ${prompt}`
                      : `Hello, I generated a moving plan with your AI advisor and would like to execute it: ${prompt}`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold rounded-xl flex items-center gap-2 transition"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>{isArabic ? 'مشاركة الخطة مع مشرف النقل بالواتساب' : 'Share Plan on WhatsApp'}</span>
                </a>

                {onOpenBookingWithAiAdvice && (
                  <button
                    onClick={() => onOpenBookingWithAiAdvice(result.advice || prompt)}
                    className="px-4 py-2.5 bg-[#C5A059] hover:bg-[#D4B26F] text-[#0A0A0A] text-xs font-bold rounded-xl flex items-center gap-2 transition cursor-pointer shadow-sm"
                  >
                    <span>{isArabic ? 'حجز موعد نقل وفق هذه الخطة' : 'Book Survey using this Plan'}</span>
                  </button>
                )}
              </div>

            </div>
          )}

          </div>
        </div>

      </div>
    </section>
  );
};
