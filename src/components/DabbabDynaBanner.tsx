import React from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import { WORK_IMAGES } from '../assets/images';
import { COMPANY_CONTACTS } from '../data/ksaData';
import { Phone, Truck, Clock, ShieldCheck, Zap } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';

interface DabbabDynaBannerProps {
  onOpenBooking?: () => void;
}

export const DabbabDynaBanner: React.FC<DabbabDynaBannerProps> = ({ onOpenBooking }) => {
  const { isArabic } = useLanguage();

  return (
    <section id="dabbab-dyna-transport" className="py-12 bg-slate-900 text-white relative overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute top-0 end-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 start-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl border border-slate-700/80 shadow-2xl overflow-hidden"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            
            {/* Left/Main Image Visual */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="lg:col-span-6 relative h-72 sm:h-96 lg:h-full min-h-[320px] overflow-hidden bg-slate-950"
            >
              <img 
                src={WORK_IMAGES.dabbabDynaLocal} 
                alt="Dabbab and Dyna Available for Local Transport in Jeddah KSA"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover filter brightness-95 contrast-105 hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-transparent lg:to-slate-900"></div>
              
              {/* Floating Highlight Badge */}
              <div className="absolute top-4 start-4 flex items-center gap-2 bg-amber-500 text-slate-950 font-black text-xs px-3.5 py-1.5 rounded-full shadow-lg">
                <Zap className="w-4 h-4 fill-current" />
                <span>{isArabic ? 'خدمة فورية على مدار الساعة' : 'Instant Dispatch 24/7'}</span>
              </div>

              {/* Bottom Image Caption */}
              <div className="absolute bottom-4 start-4 end-4 lg:hidden">
                <p className="text-xs text-amber-300 font-bold bg-slate-950/80 px-3 py-1.5 rounded-xl border border-amber-500/30 backdrop-blur-sm">
                  {isArabic 
                    ? 'دباب ودينا مجهزة لنقل وتوصيل العفش والبضائع في كافة أحياء جدة'
                    : 'Equipped Dabbab & Dyna for swift local shifting across all Jeddah neighborhoods'}
                </p>
              </div>
            </motion.div>

            {/* Right Content & Direct CTA */}
            <div className="lg:col-span-6 p-6 sm:p-10 lg:p-12 flex flex-col justify-between">
              <div>
                {/* Section Badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/15 border border-amber-400/30 text-amber-400 text-xs font-extrabold uppercase tracking-wider mb-4">
                  <Truck className="w-3.5 h-3.5" />
                  <span>{isArabic ? 'نقل وتوصيل محلي سريع' : 'Local Transport & Shifting'}</span>
                </div>

                {/* Primary Requested Heading */}
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight leading-tight">
                  {isArabic 
                    ? 'دباب ودينا متوفر لنقل العفش والتوصيل المحلي' 
                    : 'Dabbab & Dyna Available for Local Transport'}
                </h2>

                {/* Requested Subtitle: Call me anytime 24/7 service */}
                <div className="mt-3 flex items-center gap-2.5 text-amber-400 font-extrabold text-base sm:text-lg">
                  <Clock className="w-5 h-5 shrink-0 animate-pulse" />
                  <span>
                    {isArabic 
                      ? 'اتصل بي في أي وقت — خدمة 24/7 للنقل والتوصيل المحلي' 
                      : 'Call me anytime — 24/7 service for local transport'}
                  </span>
                </div>

                <p className="mt-3 text-slate-300 text-sm sm:text-base leading-relaxed">
                  {isArabic 
                    ? 'جاهزون على مدار الساعة لنقل غرف النوم، الأثاث الفردي، الأجهزة الكهربائية، البضائع والكراتين داخل جميع أحياء جدة وبأسعار مناسبة مع توفير عمالة فك وتركيب وتنزيل عند الطلب.'
                    : 'On standby 24 hours a day for quick delivery of single furniture pieces, whole rooms, home appliances, boxes, and urgent city moves across all Jeddah districts with careful handling and fair prices.'}
                </p>

                {/* Key Benefits Pills */}
                <div className="mt-6 grid grid-cols-2 gap-3 text-xs font-semibold text-slate-200">
                  <div className="flex items-center gap-2 bg-slate-800/80 p-2.5 rounded-xl border border-slate-700">
                    <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>{isArabic ? 'حماية وأمان تام للعفش' : 'Secure Furniture Protection'}</span>
                  </div>
                  <div className="flex items-center gap-2 bg-slate-800/80 p-2.5 rounded-xl border border-slate-700">
                    <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>{isArabic ? 'وصول فوري خلال دقائق' : 'Fast Pickup & Delivery'}</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-8 pt-6 border-t border-slate-700/80 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {/* Direct Phone Call */}
                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href={`tel:${COMPANY_CONTACTS.phoneCall}`}
                  id="dabbab-dyna-call-btn"
                  className="py-3.5 px-5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-black rounded-xl text-sm shadow-lg shadow-amber-500/20 transition-all flex items-center justify-center gap-2.5 group cursor-pointer"
                >
                  <Phone className="w-4 h-4 fill-current group-hover:scale-110 transition-transform" />
                  <span>{isArabic ? 'اتصل بي الآن (24/7)' : 'Call Me Anytime (24/7)'}</span>
                </motion.a>

                {/* WhatsApp Chat */}
                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href={`https://wa.me/966575771358?text=${encodeURIComponent(
                    isArabic 
                      ? 'مرحباً، أحتاج دباب / دينا لنقل وتوصيل محلي في جدة' 
                      : 'Hello, I need a Dabbab / Dyna for local transport in Jeddah'
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="dabbab-dyna-whatsapp-btn"
                  className="py-3.5 px-5 bg-[#25D366] hover:bg-[#20ba59] text-white font-bold rounded-xl text-sm shadow-lg shadow-[#25D366]/25 transition-all flex items-center justify-center gap-2.5 cursor-pointer"
                >
                  <WhatsAppIcon className="w-5 h-5 fill-white" size={20} />
                  <span>{isArabic ? 'واتساب مباشر' : 'WhatsApp 24/7'}</span>
                </motion.a>
              </div>

              {/* Direct Phone Number Bar */}
              <div className="mt-4 text-center">
                <span className="text-xs text-slate-400">
                  {isArabic ? 'رقم الاتصال المباشر على مدار الساعة: ' : 'Direct 24/7 Hotline: '}
                  <strong className="text-white font-mono text-sm tracking-wide">+966 57 577 1358</strong>
                </span>
              </div>

            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
};
