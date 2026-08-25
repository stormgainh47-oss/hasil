import React, { useState } from 'react';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { QuickQuoteCalculator } from './components/QuickQuoteCalculator';
import { ServicesSection } from './components/ServicesSection';
import { InventoryCalculator } from './components/InventoryCalculator';
import { AiMovingAdvisor } from './components/AiMovingAdvisor';
import { PackingMaterialsGuide } from './components/PackingMaterialsGuide';
import { KsaCoverageMap } from './components/KsaCoverageMap';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FaqSection } from './components/FaqSection';
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
    <div className="min-h-screen bg-[#0A0A0A] text-[#E0E0E0] flex flex-col selection:bg-[#C5A059] selection:text-[#0A0A0A]">
      
      {/* Top Navigation */}
      <Navbar
        onOpenBooking={() => handleOpenBooking()}
        onOpenTracker={handleOpenTracker}
        onScrollToSection={handleScrollToSection}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        
        {/* 1. Hero Landing & Quick Estimation Banner */}
        <Hero
          onOpenBooking={() => handleOpenBooking()}
          onOpenTracker={handleOpenTracker}
          onScrollToSection={handleScrollToSection}
        />

        {/* 2. Interactive Quick Quote & Route Price Calculator */}
        <QuickQuoteCalculator
          onBookQuote={(quote) => {
            handleOpenBooking({
              moveType: quote.moveType,
              fromCity: quote.fromCity,
              toCity: quote.toCity,
              estimatedCost: quote.estimatedCost,
            });
          }}
        />

        {/* 3. Core Moving, Relocation & Packing Services */}
        <ServicesSection
          onOpenBookingForService={(serviceTitle) => {
            handleOpenBooking({
              moveType: serviceTitle,
            });
          }}
        />

        {/* 4. Room-by-Room Inventory & CBM / Dyna Truck Calculator */}
        <InventoryCalculator
          onOpenBookingWithInventory={(inventorySummary) => {
            handleOpenBooking({
              itemsSummary: inventorySummary,
            });
          }}
        />

        {/* 5. Server-Side Gemini AI Moving Advisor & Strategy Consultant */}
        <AiMovingAdvisor
          onOpenBookingWithAiAdvice={(aiAdviceSummary) => {
            handleOpenBooking({
              itemsSummary: `AI Plan: ${aiAdviceSummary}`,
            });
          }}
        />

        {/* 6. 5-Layer Military-Grade Packing Materials Guide */}
        <PackingMaterialsGuide
          onOpenBooking={() => handleOpenBooking({ moveType: 'Full 5-Layer Packing Package' })}
        />

        {/* 7. Kingdom-Wide Moving Matrix (Jeddah HQ + All KSA Hubs) */}
        <KsaCoverageMap />

        {/* 8. Verified Customer Reviews & Testimonials */}
        <TestimonialsSection />

        {/* 9. FAQ Section */}
        <FaqSection />

      </main>

      {/* Footer */}
      <Footer
        onOpenBooking={() => handleOpenBooking()}
        onOpenTracker={handleOpenTracker}
        onScrollToSection={handleScrollToSection}
      />

      {/* Free Inspection Survey & Booking Modal */}
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
    </LanguageProvider>
  );
}
