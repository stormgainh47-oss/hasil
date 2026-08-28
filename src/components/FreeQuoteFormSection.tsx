import React, { useState } from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import { COMPANY_CONTACTS } from '../data/ksaData';
import { 
  Phone, 
  Mail, 
  Clock, 
  CheckCircle2, 
  Send, 
  ShieldCheck,
  Calendar,
  MapPin,
  Truck
} from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';

export const FreeQuoteFormSection: React.FC = () => {
  const { isArabic } = useLanguage();

  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    service: '',
    movingFrom: '',
    movingTo: '',
    movingDate: '',
    notes: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const servicesList = [
    { id: 'dabbab-dyna-local-transport', en: 'Dabbab & Dyna Local Transport (24/7 Service)', ar: 'دباب ودينا نقل محلي (خدمة 24/7)' },
    { id: 'furniture-moving-relocation-ksa', en: 'Furniture Moving & Relocation (Local & All Over KSA)', ar: 'نقل وترحيل الأثاث (محلياً وفي كافة أنحاء المملكة)' },
    { id: 'home-shifting', en: 'Home Shifting', ar: 'نقل عفش منزلي' },
    { id: 'office-relocation', en: 'Office Relocation', ar: 'نقل مكاتب وشركات' },
    { id: 'furniture-moving', en: 'Furniture Moving', ar: 'نقل أثاث ومقتنيات' },
    { id: 'professional-packing', en: 'Professional Packing', ar: 'تغليف احترافي متكامل' },
    { id: 'loading-unloading', en: 'Loading & Unloading', ar: 'تحميل وتنزيل بالعمالة' },
    { id: 'intercity-transport', en: 'Intercity Transport', ar: 'نقل بين مدن المملكة' },
    { id: 'wardrobe-uninstall-refix', en: 'Wardrobe Uninstall & Refix', ar: 'فك وتركيب الدواليب والمطابخ' }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.phone || !formData.movingFrom || !formData.movingTo) {
      alert(isArabic ? 'يرجى تعبئة الحقول المطلوبة الإلزامية (*)' : 'Please fill in all required fields (*)');
      return;
    }

    // Compose WhatsApp message
    const message = `*Free Quote Request - Saad Moving Company*%0A` +
      `*Name:* ${encodeURIComponent(formData.fullName)}%0A` +
      `*Phone:* ${encodeURIComponent(formData.phone)}%0A` +
      (formData.email ? `*Email:* ${encodeURIComponent(formData.email)}%0A` : '') +
      `*Service:* ${encodeURIComponent(formData.service || 'General Relocation')}%0A` +
      `*From:* ${encodeURIComponent(formData.movingFrom)}%0A` +
      `*To:* ${encodeURIComponent(formData.movingTo)}%0A` +
      (formData.movingDate ? `*Date:* ${encodeURIComponent(formData.movingDate)}%0A` : '') +
      (formData.notes ? `*Notes:* ${encodeURIComponent(formData.notes)}` : '');

    const waUrl = `https://wa.me/966575771358?text=${message}`;
    window.open(waUrl, '_blank');
    setSubmitted(true);
  };

  return (
    <section id="free-quote" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-xs font-extrabold uppercase tracking-widest text-emerald-700 bg-emerald-50 px-3.5 py-1.5 rounded-full border border-emerald-200">
            {isArabic ? 'عرض سعر مجاني' : 'Free quote'}
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            {isArabic ? 'احصل على عرض سعر مجاني وبدون أي التزام' : 'Get your free, no-obligation quote'}
          </h2>
          <p className="mt-4 text-slate-600 text-base sm:text-lg">
            {isArabic 
              ? 'أخبرنا عن تفاصيل نقلك في أي مكان بالمملكة وسنرسل لك تقديراً واضحاً ومسبقاً — عادة خلال ساعات قليلة. بدون أي ضغوط أو تكاليف خفية.' 
              : "Tell us about your move anywhere in Saudi Arabia and we'll send a clear, upfront estimate — usually within a few hours. No pressure, no hidden costs."}
          </p>
        </motion.div>

        {/* 2 Column Layout: Sidebar Contact Cards + Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Contact Details Sidebar (4 Cols) */}
          <motion.div 
            initial={{ opacity: 0, x: isArabic ? 30 : -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 space-y-4"
          >
            
            {/* Call Card */}
            <a 
              href={`tel:${COMPANY_CONTACTS.phoneCall}`}
              className="flex items-center gap-4 p-5 rounded-2xl border border-slate-200 hover:border-blue-400 bg-slate-50 hover:bg-white hover:shadow-md transition-all group"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-700 text-white flex items-center justify-center shrink-0 shadow-md shadow-blue-700/20 group-hover:scale-105 transition-transform">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs text-slate-500 font-bold block uppercase tracking-wider">
                  {isArabic ? 'اتصل بنا' : 'Call us'}
                </span>
                <span className="text-lg font-extrabold text-slate-900">
                  +966 57 577 1358
                </span>
              </div>
            </a>

            {/* WhatsApp Card */}
            <a 
              href={isArabic ? COMPANY_CONTACTS.whatsappLinkAr : COMPANY_CONTACTS.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-5 rounded-2xl border border-slate-200 hover:border-[#25D366] bg-emerald-50/50 hover:bg-white hover:shadow-md transition-all group"
            >
              <div className="w-12 h-12 rounded-xl bg-[#25D366] text-white flex items-center justify-center shrink-0 shadow-md shadow-[#25D366]/25 group-hover:scale-105 transition-transform">
                <WhatsAppIcon className="w-6 h-6 fill-white" size={24} />
              </div>
              <div>
                <span className="text-xs text-emerald-800 font-bold block uppercase tracking-wider">
                  {isArabic ? 'واتساب مباشر' : 'WhatsApp'}
                </span>
                <span className="text-lg font-extrabold text-slate-900">
                  +966 57 577 1358
                </span>
              </div>
            </a>

            {/* Email Card */}
            <a 
              href={`mailto:${COMPANY_CONTACTS.email}`}
              className="flex items-center gap-4 p-5 rounded-2xl border border-slate-200 hover:border-slate-400 bg-slate-50 hover:bg-white hover:shadow-md transition-all group"
            >
              <div className="w-12 h-12 rounded-xl bg-slate-800 text-white flex items-center justify-center shrink-0 shadow-md group-hover:scale-105 transition-transform">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs text-slate-500 font-bold block uppercase tracking-wider">
                  {isArabic ? 'البريد الإلكتروني' : 'Email'}
                </span>
                <span className="text-sm sm:text-base font-extrabold text-slate-900 break-all">
                  info@saadpackersmovers.com
                </span>
              </div>
            </a>

            {/* Hours Card */}
            <div className="flex items-center gap-4 p-5 rounded-2xl border border-slate-200 bg-slate-50">
              <div className="w-12 h-12 rounded-xl bg-amber-500 text-slate-950 flex items-center justify-center shrink-0 font-bold shadow-md">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs text-slate-500 font-bold block uppercase tracking-wider">
                  {isArabic ? 'ساعات العمل' : 'Hours'}
                </span>
                <span className="text-sm font-extrabold text-slate-900 block">
                  Sat – Thu · 9:00 AM – 9:00 PM
                </span>
                <span className="text-xs text-slate-500">
                  {isArabic ? 'السبت – الخميس · 9:00 ص – 9:00 م' : 'Jeddah & all over Saudi Arabia'}
                </span>
              </div>
            </div>

            {/* Trust box */}
            <div className="p-4 rounded-2xl bg-blue-50 border border-blue-100 flex items-center gap-3">
              <ShieldCheck className="w-5 h-5 text-blue-700 shrink-0" />
              <p className="text-xs text-blue-900 font-medium">
                {isArabic 
                  ? 'خدمة مرخصة ومؤمنة بالكامل مع ضمان شامل بدون أي خدوش.' 
                  : 'Licensed & insured service with complete liability coverage across KSA.'}
              </p>
            </div>

          </motion.div>

          {/* Quote Form (7 Cols) */}
          <motion.div 
            initial={{ opacity: 0, x: isArabic ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="lg:col-span-7"
          >
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-lg">
              
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">
                    {isArabic ? 'تم إرسال طلبك بنجاح!' : 'Quote Request Sent!'}
                  </h3>
                  <p className="text-slate-600 text-sm max-w-md mx-auto mb-6">
                    {isArabic 
                      ? 'شكراً لتواصلك مع شركة سعد لنقل الأثاث. سيقوم فريقنا بمراجعة تفاصيل النقل والرد عليك بأدق تسعيرة خلال وقت قصير.' 
                      : "Thank you for contacting Saad Packers & Movers. Our logistics team is preparing your custom estimate and will reply shortly."}
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2.5 bg-slate-900 text-white rounded-xl text-xs font-bold hover:bg-slate-800 transition"
                  >
                    {isArabic ? 'إرسال طلب آخر' : 'Send Another Request'}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  
                  {/* Name and Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        {isArabic ? 'الاسم الكامل *' : 'Full name *'}
                      </label>
                      <input
                        type="text"
                        required
                        placeholder={isArabic ? 'اسمك الكريم' : 'Your name'}
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        {isArabic ? 'رقم الجوال *' : 'Phone number *'}
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+966 5X XXX XXXX"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent font-mono"
                      />
                    </div>
                  </div>

                  {/* Email & Service Needed */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        {isArabic ? 'البريد الإلكتروني (اختياري)' : 'Email (optional)'}
                      </label>
                      <input
                        type="email"
                        placeholder="you@email.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        {isArabic ? 'الخدمة المطلوبة' : 'Service needed'}
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent bg-white"
                      >
                        <option value="">{isArabic ? 'اختر الخدمة…' : 'Select a service…'}</option>
                        {servicesList.map((svc) => (
                          <option key={svc.id} value={isArabic ? svc.ar : svc.en}>
                            {isArabic ? svc.ar : svc.en}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Moving From & Moving To */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        {isArabic ? 'الانطلاق من (العنوان / الحي / المدينة) *' : 'Moving from *'}
                      </label>
                      <input
                        type="text"
                        required
                        placeholder={isArabic ? 'مثال: حي الروضة، جدة' : 'Current address / area'}
                        value={formData.movingFrom}
                        onChange={(e) => setFormData({ ...formData, movingFrom: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        {isArabic ? 'الوصول إلى (العنوان / الحي / المدينة) *' : 'Moving to *'}
                      </label>
                      <input
                        type="text"
                        required
                        placeholder={isArabic ? 'مثال: الرياض / حي الشاطئ، جدة' : 'New address / area'}
                        value={formData.movingTo}
                        onChange={(e) => setFormData({ ...formData, movingTo: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                      />
                    </div>
                  </div>

                  {/* Preferred Moving Date */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      {isArabic ? 'تاريخ النقل المفضل' : 'Preferred moving date'}
                    </label>
                    <input
                      type="date"
                      value={formData.movingDate}
                      onChange={(e) => setFormData({ ...formData, movingDate: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent bg-white"
                    />
                  </div>

                  {/* Notes / Anything else */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      {isArabic ? 'هل هناك أي تفاصيل أخرى ترغب في إضافتها؟' : 'Anything else we should know?'}
                    </label>
                    <textarea
                      rows={3}
                      placeholder={isArabic ? 'مثال: عدد الغرف، وجود أثاث ثقيل أو زجاجي، الحاجة لنجار لفك الدواليب...' : 'e.g. large furniture, fragile items, number of rooms…'}
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent resize-none"
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-4 px-6 rounded-2xl bg-blue-700 hover:bg-blue-800 text-white font-extrabold text-base shadow-lg shadow-blue-700/25 transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <Send className="w-5 h-5" />
                      <span>{isArabic ? 'احصل على عرض السعر المجاني الآن' : 'Get My Free Quote'}</span>
                    </button>
                    <p className="text-center text-xs text-slate-500 mt-2.5 font-medium">
                      {isArabic 
                        ? 'عرض سعر مجاني وبدون أي التزام • الرد السريع خلال ساعات قليلة' 
                        : 'Free estimate · No obligation · Response within a few hours'}
                    </p>
                  </div>

                </form>
              )}

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
