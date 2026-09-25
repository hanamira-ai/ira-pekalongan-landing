/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhyChooseUs from './components/WhyChooseUs';
import CoverageArea from './components/CoverageArea';
import PricingPackage from './components/PricingPackage';
import Testimonials from './components/Testimonials';
import HowItWorksAndFaq from './components/HowItWorksAndFaq';
import RegistrationForm from './components/RegistrationForm';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-gray-800 antialiased selection:bg-[#C8102E] selection:text-white">
      {/* 1. NAVBAR KOMPONEN */}
      <Navbar />

      {/* MAIN CONTENT WRAPPER */}
      <main className="flex-1 w-full max-w-5xl mx-auto px-3.5 sm:px-6 py-6 sm:py-8 space-y-8 sm:space-y-12 pb-16 sm:pb-8">
        
        {/* ========================================================================= */}
        {/* SECTION 1: HERO (SELESAI DIISI)                                           */}
        {/* ========================================================================= */}
        <Hero />

        {/* ========================================================================= */}
        {/* SECTION 2: KENAPA PILIH KAMI (SELESAI DIISI)                              */}
        {/* ========================================================================= */}
        <WhyChooseUs />

        {/* ========================================================================= */}
        {/* SECTION 3: AREA CAKUPAN (SELESAI DIISI)                                   */}
        {/* ========================================================================= */}
        <CoverageArea />

        {/* ========================================================================= */}
        {/* SECTION 4: PAKET HARGA (SELESAI DIISI)                                    */}
        {/* ========================================================================= */}
        <PricingPackage />

        {/* ========================================================================= */}
        {/* SECTION 5: TESTIMONI (SELESAI DIISI)                                      */}
        {/* ========================================================================= */}
        <Testimonials />

        {/* ========================================================================= */}
        {/* SECTION 6: CARA PASANG & FAQ (SELESAI DIISI)                              */}
        {/* ========================================================================= */}
        <HowItWorksAndFaq />

        {/* ========================================================================= */}
        {/* SECTION 7: FORM DAFTAR (SELESAI DIISI)                                    */}
        {/* ========================================================================= */}
        <RegistrationForm />

      </main>

      {/* ========================================================================= */}
      {/* SECTION 8: FOOTER (SELESAI DIISI)                                         */}
      {/* ========================================================================= */}
      <Footer />

      {/* 6. TOMBOL WHATSAPP MELAYANG (FLOATING BUTTON) */}
      <FloatingWhatsApp />
    </div>
  );
}
