'use client';

import Hero from './components/Hero';
import FactsSection from './components/FactsSection';
import BillOfRightsSection from './components/BillOfRightsSection';
import VideosSection from './components/VideosSection';
import RisksSection from './components/RisksSection';
import Footer from './components/Footer';
import GradientMesh from './components/GradientMesh';

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <div className="relative z-0">
        <div className="absolute inset-0 -z-10">
          <GradientMesh />
        </div>
        <Hero />
        <FactsSection />
        <BillOfRightsSection />
        <VideosSection />
        <RisksSection />
        <Footer />
      </div>
    </main>
  );
}
