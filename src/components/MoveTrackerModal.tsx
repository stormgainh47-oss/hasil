import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { 
  Search, 
  X, 
  Truck, 
  CheckCircle2, 
  Clock, 
  MapPin, 
  Phone, 
  Package, 
  Wrench,
  AlertCircle,
  Loader2
} from 'lucide-react';
import { BookingRecord } from '../types';

interface MoveTrackerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MoveTrackerModal: React.FC<MoveTrackerModalProps> = ({
  isOpen,
  onClose,
}) => {
  const { isArabic, t } = useLanguage();
  const [query, setQuery] = useState<string>('SAAD-JED-8421');
  const [loading, setLoading] = useState<boolean>(false);
  const [booking, setBooking] = useState<BookingRecord | null>(null);
  const [searched, setSearched] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleSearch = async (codeToSearch?: string) => {
    const target = codeToSearch || query;
    if (!target.trim()) return;

    setLoading(true);
    setError(null);
    setSearched(true);

    try {
      const res = await fetch(`/api/bookings/track/${encodeURIComponent(target.trim())}`);
      const data = await res.json();
      if (!res.ok || !data.success) {
        throw new Error(data.error || 'Booking not found');
      }
      setBooking(data.booking);
    } catch (err: any) {
      setBooking(null);
      setError(
        isArabic
          ? 'لم يتم العثور على حجز بهذا الرمز أو رقم الجوال. يرجى التأكد من الرقم أو التواصل مع خدمة العملاء.'
          : 'No booking found with this reference code or phone number. Please check or contact dispatch.'
      );
    } finally {
      setLoading(false);
    }
  };

  const getStatusStep = (status?: string) => {
    switch (status) {
      case 'SURVEY_SCHEDULED': return 1;
      case 'PACKING_SCHEDULED': return 2;
      case 'IN_TRANSIT': return 3;
      case 'DELIVERED_ASSEMBLED': return 4;
      default: return 1;
    }
  };

  const currentStep = getStatusStep(booking?.status);

  const steps = isArabic
    ? [
        { title: 'معاينة واعتماد السعر', desc: 'تم تحديد موعد المعاينة وتأكيد الحجز' },
        { title: 'تغليف وتفكيك العفش', desc: 'وصول فريق النجارين ومواد التغليف 5 طبقات' },
        { title: 'الشحن والانطلاق بالشاحنة', desc: 'تم التحميل والانطلاق في دينا مغلقة ومجهزة' },
        { title: 'التوصيل والتركيب الكامل', desc: 'تسليم الأثاث وتركيب غرف النوم والمطبخ' }
      ]
    : [
        { title: 'Survey & Quote Confirmation', desc: 'Inspection scheduled & pricing locked' },
        { title: 'Carpenter Dismantling & Packing', desc: '5-layer packing & master carpenter crew on site' },
        { title: 'Loaded & Highway Transit', desc: 'Secured in closed Dyna truck with GPS live tracking' },
        { title: 'Delivered & Re-assembled', desc: 'Unpacking, positioning, and full bedroom assembly' }
      ];

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200">
      <div className="bg-[#121212] rounded-2xl max-w-xl w-full p-6 sm:p-8 shadow-2xl border border-[#262626] relative max-h-[90vh] overflow-y-auto text-white">
        
        <button
          onClick={onClose}
          className="absolute top-5 end-5 p-2 rounded-lg text-neutral-400 hover:text-white hover:bg-[#1E1E1E] transition cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 rounded-xl bg-[#C5A059]/15 text-[#C5A059] flex items-center justify-center border border-[#C5A059]/30">
            <Search className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-white">
              {isArabic ? 'تتبع مسار وحالة شحنة الأثاث' : 'Track Move & Cargo Status'}
            </h3>
            <p className="text-xs text-neutral-400">
              {isArabic ? 'أدخل رقم الحجز (مثال: SAAD-JED-8421) أو رقم الجوال' : 'Enter Booking Code (e.g. SAAD-JED-8421) or phone'}
            </p>
          </div>
        </div>

        {/* Search Bar */}
        <div className="flex gap-2 mb-3">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={isArabic ? 'رقم الحجز أو رقم الجوال...' : 'Booking ID or Mobile...'}
            className="flex-1 bg-[#0A0A0A] border border-[#2A2A2A] rounded-xl px-4 py-2.5 text-sm font-semibold text-white placeholder-neutral-500 focus:outline-none focus:border-[#C5A059]"
          />
          <button
            onClick={() => handleSearch()}
            disabled={loading}
            className="px-5 py-2.5 bg-[#C5A059] hover:bg-[#D4B26F] text-[#0A0A0A] text-sm font-bold rounded-xl transition flex items-center gap-2 cursor-pointer disabled:opacity-50 shadow-md shadow-[#C5A059]/25"
          >
            {loading ? <Loader2 className="w-4 h-4 animate-spin text-[#0A0A0A]" /> : <Search className="w-4 h-4" />}
            <span>{isArabic ? 'بحث' : 'Track'}</span>
          </button>
        </div>

        {/* Sample Codes Pill */}
        <div className="flex flex-wrap items-center gap-1.5 mb-6 text-[11px] text-neutral-400">
          <span>{isArabic ? 'جرّب الرموز التجريبية:' : 'Try sample tracking IDs:'}</span>
          {['SAAD-JED-8421', 'SAAD-JED-7932', 'SAAD-RYD-9104'].map((sample) => (
            <button
              key={sample}
              onClick={() => {
                setQuery(sample);
                handleSearch(sample);
              }}
              className="px-2 py-0.5 rounded bg-[#181818] hover:bg-[#222222] text-[#C5A059] font-mono font-bold cursor-pointer border border-[#2A2A2A]"
            >
              {sample}
            </button>
          ))}
        </div>

        {/* Error Notification */}
        {error && (
          <div className="p-4 rounded-xl bg-red-950/40 border border-red-800/60 text-red-300 text-xs flex items-center gap-2 mb-4">
            <AlertCircle className="w-4 h-4 text-red-400 shrink-0" />
            <span>{error}</span>
          </div>
        )}

        {/* Active Booking Details Display */}
        {booking && (
          <div className="space-y-6 pt-2">
            
            {/* Summary Banner */}
            <div className="p-4 rounded-xl bg-[#0A0A0A] border border-[#222222] text-white space-y-2">
              <div className="flex justify-between items-center text-xs">
                <span className="text-[#C5A059] font-mono font-bold">{booking.id}</span>
                <span className="bg-[#C5A059]/20 text-[#C5A059] border border-[#C5A059]/30 text-[10px] font-bold px-2 py-0.5 rounded uppercase">
                  {booking.status.replace('_', ' ')}
                </span>
              </div>
              <div className="text-base font-bold text-white">{booking.name}</div>
              <div className="grid grid-cols-2 gap-2 text-xs text-neutral-300 pt-1 border-t border-[#222222]">
                <div>
                  <span className="text-neutral-500 block">{isArabic ? 'من:' : 'From:'}</span>
                  <span className="font-semibold text-white">{booking.fromCity}</span>
                </div>
                <div>
                  <span className="text-neutral-500 block">{isArabic ? 'إلى:' : 'To:'}</span>
                  <span className="font-semibold text-white">{booking.toCity}</span>
                </div>
              </div>
              {booking.itemsSummary && (
                <div className="text-[11px] text-neutral-400 pt-1">
                  <span className="text-neutral-500">{isArabic ? 'تفاصيل الأثاث:' : 'Items:'} </span>
                  {booking.itemsSummary}
                </div>
              )}
            </div>

            {/* Step Milestones Timeline */}
            <div className="space-y-4 ps-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#C5A059]">
                {isArabic ? 'مراحل تنفيذ النقل:' : 'Relocation Milestones:'}
              </h4>

              <div className="space-y-4 relative before:absolute before:inset-0 before:start-3.5 before:w-0.5 before:bg-[#222222]">
                {steps.map((step, idx) => {
                  const stepNumber = idx + 1;
                  const isCompleted = stepNumber <= currentStep;
                  const isCurrent = stepNumber === currentStep;

                  return (
                    <div key={idx} className="relative flex items-start gap-4">
                      <div
                        className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold shrink-0 transition-colors z-10 ${
                          isCompleted
                            ? 'bg-[#C5A059] text-[#0A0A0A] ring-4 ring-[#C5A059]/20'
                            : 'bg-[#181818] text-neutral-500 border border-[#2A2A2A]'
                        }`}
                      >
                        {isCompleted ? <CheckCircle2 className="w-4 h-4" /> : stepNumber}
                      </div>

                      <div className="space-y-0.5">
                        <div className={`text-xs sm:text-sm font-bold ${isCurrent ? 'text-[#C5A059]' : isCompleted ? 'text-white' : 'text-neutral-500'}`}>
                          {step.title}
                        </div>
                        <div className="text-[11px] text-neutral-400">
                          {step.desc}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>
        )}

      </div>
    </div>
  );
};
