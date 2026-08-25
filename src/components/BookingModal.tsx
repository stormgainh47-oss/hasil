import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { COMPANY_CONTACTS, KSA_CITIES } from '../data/ksaData';
import { 
  X, 
  CheckCircle2, 
  Calendar, 
  MapPin, 
  Phone, 
  User, 
  Truck, 
  MessageSquare, 
  ShieldCheck, 
  Loader2,
  AlertCircle
} from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialData?: {
    moveType?: string;
    fromCity?: string;
    toCity?: string;
    estimatedCost?: number;
    itemsSummary?: string;
  };
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  initialData,
}) => {
  const { isArabic, t } = useLanguage();

  const [name, setName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [fromCity, setFromCity] = useState<string>(initialData?.fromCity || (isArabic ? 'جدة - حي الروضة' : 'Jeddah - Al Rawdah'));
  const [toCity, setToCity] = useState<string>(initialData?.toCity || (isArabic ? 'جدة - حي الشاطئ' : 'Jeddah - Al Shatie'));
  const [moveType, setMoveType] = useState<string>(initialData?.moveType || (isArabic ? 'شقة غرفتين وصالة' : '2 BHK Apartment'));
  const [moveDate, setMoveDate] = useState<string>(
    new Date(Date.now() + 86400000 * 2).toISOString().split('T')[0]
  );
  const [notes, setNotes] = useState<string>(initialData?.itemsSummary || '');
  
  const [loading, setLoading] = useState<boolean>(false);
  const [successBooking, setSuccessBooking] = useState<any | null>(null);
  const [error, setError] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) {
      setError(isArabic ? 'يرجى كتابة الاسم ورقم الجوال للتواصل.' : 'Please enter your name and phone number.');
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const res = await fetch('/api/bookings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          phone,
          email,
          fromCity,
          toCity,
          moveType,
          moveDate,
          estimatedCost: initialData?.estimatedCost || 0,
          itemsSummary: notes || initialData?.itemsSummary || 'Household furniture',
          specialNotes: notes,
        }),
      });

      const data = await res.json();
      if (!res.ok || !data.success) {
        throw new Error(data.error || 'Failed to submit booking');
      }

      setSuccessBooking(data.booking);
    } catch (err: any) {
      setError(
        isArabic
          ? 'حدث خطأ أثناء إرسال الطلب. يمكنك الحجز فوراً عبر الواتساب.'
          : 'Error submitting booking. You can book directly on WhatsApp.'
      );
    } finally {
      setLoading(false);
    }
  };

  const handleResetAndClose = () => {
    setSuccessBooking(null);
    setError(null);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200">
      <div className="bg-[#121212] rounded-2xl max-w-xl w-full p-6 sm:p-8 shadow-2xl border border-[#262626] relative max-h-[90vh] overflow-y-auto text-white">
        
        <button
          onClick={handleResetAndClose}
          className="absolute top-5 end-5 p-2 rounded-lg text-neutral-400 hover:text-white hover:bg-[#1E1E1E] transition cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {!successBooking ? (
          <div>
            {/* Modal Header */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-11 h-11 rounded-xl bg-[#C5A059] text-[#0A0A0A] flex items-center justify-center shadow-md shadow-[#C5A059]/20">
                <Calendar className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">
                  {isArabic ? 'طلب معاينة مجانية وحجز موعد النقل' : 'Book Free Inspection Survey'}
                </h3>
                <p className="text-xs text-neutral-400">
                  {isArabic ? 'معاينة بدون التزام مالي في جدة وكافة مدن المملكة' : '100% Free Survey with official quotation lock'}
                </p>
              </div>
            </div>

            {error && (
              <div className="p-3.5 rounded-xl bg-red-950/40 border border-red-800/60 text-red-300 text-xs flex items-center gap-2 mb-4">
                <AlertCircle className="w-4 h-4 text-red-400 shrink-0" />
                <span>{error}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-bold text-[#C5A059] mb-1">
                    {isArabic ? 'الاسم الكريم *' : 'Full Name *'}
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder={isArabic ? 'مثال: أبو فهد' : 'e.g. Tariq Al-Ghamdi'}
                      className="w-full bg-[#0A0A0A] border border-[#2A2A2A] rounded-xl px-3.5 py-2.5 text-xs sm:text-sm font-medium text-white placeholder-neutral-500 focus:bg-[#0A0A0A] focus:outline-none focus:border-[#C5A059]"
                    />
                    <User className="w-4 h-4 text-neutral-500 absolute end-3 top-1/2 -translate-y-1/2" />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#C5A059] mb-1">
                    {isArabic ? 'رقم الجوال (واتساب) *' : 'Saudi Mobile / WhatsApp *'}
                  </label>
                  <div className="relative">
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="05X XXX XXXX"
                      className="w-full bg-[#0A0A0A] border border-[#2A2A2A] rounded-xl px-3.5 py-2.5 text-xs sm:text-sm font-medium text-white placeholder-neutral-500 focus:bg-[#0A0A0A] focus:outline-none focus:border-[#C5A059]"
                    />
                    <Phone className="w-4 h-4 text-neutral-500 absolute end-3 top-1/2 -translate-y-1/2" />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-bold text-[#C5A059] mb-1">
                    {isArabic ? 'مدينة الانطلاق والحي' : 'Moving From (City & District)'}
                  </label>
                  <input
                    type="text"
                    value={fromCity}
                    onChange={(e) => setFromCity(e.target.value)}
                    placeholder={isArabic ? 'جدة - حي الروضة' : 'Jeddah - Al Rawdah'}
                    className="w-full bg-[#0A0A0A] border border-[#2A2A2A] rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-white placeholder-neutral-500 focus:bg-[#0A0A0A] focus:outline-none focus:border-[#C5A059]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#C5A059] mb-1">
                    {isArabic ? 'مدينة الوصول والحي' : 'Moving To (City & District)'}
                  </label>
                  <input
                    type="text"
                    value={toCity}
                    onChange={(e) => setToCity(e.target.value)}
                    placeholder={isArabic ? 'الرياض - حي الملقا' : 'Riyadh - Al Malqa'}
                    className="w-full bg-[#0A0A0A] border border-[#2A2A2A] rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-white placeholder-neutral-500 focus:bg-[#0A0A0A] focus:outline-none focus:border-[#C5A059]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-bold text-[#C5A059] mb-1">
                    {isArabic ? 'نوع السكن / المنقولات' : 'Move Type'}
                  </label>
                  <input
                    type="text"
                    value={moveType}
                    onChange={(e) => setMoveType(e.target.value)}
                    className="w-full bg-[#0A0A0A] border border-[#2A2A2A] rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-white focus:bg-[#0A0A0A] focus:outline-none focus:border-[#C5A059]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#C5A059] mb-1">
                    {isArabic ? 'تاريخ النقل المفضل' : 'Preferred Date'}
                  </label>
                  <input
                    type="date"
                    value={moveDate}
                    onChange={(e) => setMoveDate(e.target.value)}
                    className="w-full bg-[#0A0A0A] border border-[#2A2A2A] rounded-xl px-3.5 py-2 text-xs sm:text-sm text-white focus:bg-[#0A0A0A] focus:outline-none focus:border-[#C5A059]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#C5A059] mb-1">
                  {isArabic ? 'ملاحظات إضافية (أجهزة خاصة، غرف نوم، مكيفات)' : 'Additional Notes / Heavy Items'}
                </label>
                <textarea
                  rows={2}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder={isArabic ? 'مثال: يوجد دولاب كبير 6 أبواب يحتاج فك وتركيب نجار، و3 مكيفات سبليت' : 'e.g. 6-door IKEA wardrobe needing carpenter, 3 split ACs'}
                  className="w-full bg-[#0A0A0A] border border-[#2A2A2A] rounded-xl p-3 text-xs sm:text-sm text-white placeholder-neutral-500 focus:bg-[#0A0A0A] focus:outline-none focus:border-[#C5A059] resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={loading}
                  id="submit-survey-booking-btn"
                  className="w-full py-3.5 bg-[#C5A059] hover:bg-[#D4B26F] text-[#0A0A0A] font-bold rounded-xl text-sm shadow-lg shadow-[#C5A059]/25 transition flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin text-[#0A0A0A]" />
                      <span>{isArabic ? 'جاري تسجيل الطلب وتعيين الرمز...' : 'Registering Survey...'}</span>
                    </>
                  ) : (
                    <>
                      <CheckCircle2 className="w-5 h-5" />
                      <span>{isArabic ? 'تأكيد طلب المعاينة وحجز الموعد' : 'Confirm Free Survey Booking'}</span>
                    </>
                  )}
                </button>
              </div>

              <div className="text-center text-[11px] text-neutral-400 flex items-center justify-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>{isArabic ? 'بياناتك محمية ومحفوظة بموجب ترخيص وزارة التجارة' : 'Protected & Verified under Saudi CR License'}</span>
              </div>

            </form>
          </div>
        ) : (
          /* Booking Success Screen */
          <div className="text-center py-4 space-y-5 animate-in zoom-in-95 duration-200">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center mx-auto shadow-inner">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div>
              <span className="text-xs font-bold text-[#C5A059] bg-[#C5A059]/15 px-3 py-1 rounded-full border border-[#C5A059]/30">
                {isArabic ? 'تم تأكيد طلبك بنجاح' : 'Survey Confirmed Successfully'}
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-white mt-2">
                {isArabic ? 'شكراً لثقتكم بشركة سعد لنقل العفش' : 'Thank You for Choosing Saad Movers'}
              </h3>
              <p className="text-xs sm:text-sm text-neutral-400 mt-1">
                {isArabic ? 'تم تعيين مشرف ميداني لمراجعة المعاينة والتواصل معكم خلال 15 دقيقة.' : 'Our logistics supervisor will contact you within 15 minutes.'}
              </p>
            </div>

            {/* Tracking Code Box */}
            <div className="p-4 rounded-xl bg-[#0A0A0A] border border-[#2A2A2A] text-white space-y-1.5 max-w-sm mx-auto">
              <div className="text-xs text-neutral-400">{isArabic ? 'رمز تتبع الحجز الخاص بك:' : 'Your Booking Reference ID:'}</div>
              <div className="text-2xl font-black text-[#C5A059] font-mono tracking-wider">
                {successBooking.id}
              </div>
              <div className="text-[10px] text-neutral-400">
                {isArabic ? 'يمكنك استخدام هذا الرمز لتتبع تقدم النقل في الموقع' : 'Use this ID to track your relocation milestones live'}
              </div>
            </div>

            {/* Direct WhatsApp Follow-up */}
            <div className="space-y-2 pt-2 max-w-sm mx-auto">
              <a
                href={`https://wa.me/${COMPANY_CONTACTS.whatsappNumber}?text=${encodeURIComponent(
                  isArabic
                    ? `مرحباً سعد لنقل العفش، قمت بتسجيل طلب معاينة برقم الحجز: ${successBooking.id}. الاسم: ${name}، من: ${fromCity} إلى: ${toCity}.`
                    : `Hello Saad Movers, I registered a survey with reference ${successBooking.id}. Name: ${name}, from ${fromCity} to ${toCity}.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl text-xs sm:text-sm shadow-md transition flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4" />
                <span>{isArabic ? 'إرسال تفاصيل الحجز للمشرف عبر الواتساب' : 'Notify Supervisor on WhatsApp'}</span>
              </a>

              <button
                onClick={handleResetAndClose}
                className="w-full py-2.5 border border-[#2A2A2A] rounded-xl text-xs font-semibold text-neutral-300 hover:bg-[#181818] transition cursor-pointer"
              >
                {isArabic ? 'إغلاق والعودة للموقع' : 'Done & Return to Website'}
              </button>
            </div>

          </div>
        )}

      </div>
    </div>
  );
};
