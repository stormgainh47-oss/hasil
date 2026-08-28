import React, { useState } from 'react';
import { Analytics } from '@vercel/analytics/react';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { DabbabDynaBanner } from './components/DabbabDynaBanner';
import { ServicesSection } from './components/ServicesSection';
import { WhyChooseUsSection } from './components/WhyChooseUsSection';
import { HowItWorksSection } from './components/HowItWorksSection';
import { OnTheJobSection } from './components/OnTheJobSection';
import { CoverageSection } from './components/CoverageSection';
import { ReviewsSection } from './components/ReviewsSection';
import { FreeQuoteFormSection } from './components/FreeQuoteFormSection';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { MoveTrackerModal } from './components/MoveTrackerModal';
import { FloatingActions } from './components/FloatingActions';

const AppContent: React.FC = () => {
  const { isArabic } = useLanguage();

  // Modals state
  const [isBookingModalOpen, setIsBookingModalOpen] = useState<boolean>(false);
  const [isTrackerModalOpen, setIsTrackerModalOpen] = useState<boolean>(false);
  
  // Modal prefilled data
  const [bookingPrefill, setBookingPrefill] = useState<{
    moveType?: string;
    fromCity?: string;
    toCity?: string;
    estimatedCost?: number;
    itemsSummary?: string;
  }>({});

  const handleOpenBooking = (prefillData?: {
    moveType?: string;
    fromCity?: string;
    toCity?: string;
    estimatedCost?: number;
    itemsSummary?: string;
  }) => {
    setBookingPrefill(prefillData || {});
    setIsBookingModalOpen(true);
  };

  const handleOpenTracker = () => {
    setIsTrackerModalOpen(true);
  };

  const handleScrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 flex flex-col selection:bg-amber-400 selection:text-slate-950 font-sans w-full max-w-full overflow-x-hidden relative">
      
      {/* Top Navigation */}
      <Navbar
        onOpenBooking={() => handleOpenBooking()}
        onOpenTracker={handleOpenTracker}
        onScrollToSection={handleScrollToSection}
      />

      {/* Main Content Flow */}
      <main className="flex-1 w-full max-w-full overflow-x-hidden">
        
        {/* 1. Hero & Branding */}
        <Hero
          onOpenBooking={() => handleOpenBooking()}
          onOpenTracker={handleOpenTracker}
          onScrollToSection={handleScrollToSection}
        />

        {/* 1.5 Dabbab & Dyna Local Transport 24/7 Featured Banner */}
        <DabbabDynaBanner
          onOpenBooking={() => handleOpenBooking({
            moveType: isArabic ? 'دباب ودينا نقل محلي' : 'Dabbab & Dyna Local Transport'
          })}
        />

        {/* 2. Our Services (Dedicated Services + Visual Crew Banner) */}
        <ServicesSection
          onOpenBookingForService={(serviceTitle) => {
            handleOpenBooking({
              moveType: serviceTitle,
            });
          }}
        />

        {/* 3. Why Choose Us (4 Core Pillars) */}
        <WhyChooseUsSection />

        {/* 4. How It Works (4 Simple Steps) */}
        <HowItWorksSection
          onOpenQuote={() => handleScrollToSection('free-quote')}
        />

        {/* 5. On the Job (Living Rooms to Office Floors) */}
        <OnTheJobSection />

        {/* 6. Coverage (Jeddah HQ + All over KSA) */}
        <CoverageSection />

        {/* 7. Reviews (6 Customer Testimonials) */}
        <ReviewsSection />

        {/* 8. Free Quote & Contact Form */}
        <FreeQuoteFormSection />

      </main>

      {/* Footer */}
      <Footer
        onOpenBooking={() => handleOpenBooking()}
        onOpenTracker={handleOpenTracker}
        onScrollToSection={handleScrollToSection}
      />

      {/* Booking Modal */}
      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        initialData={bookingPrefill}
      />

      {/* Live Cargo & Relocation Tracker Modal */}
      <MoveTrackerModal
        isOpen={isTrackerModalOpen}
        onClose={() => setIsTrackerModalOpen(false)}
      />

      {/* Floating 24/7 Hotline & WhatsApp Quick Actions */}
      <FloatingActions
        onOpenBooking={() => handleOpenBooking()}
      />

    </div>
  );
};

export default function App() {
  return (
    <LanguageProvider>
      <AppContent />
      <Analytics />
    </LanguageProvider>
  );
}
