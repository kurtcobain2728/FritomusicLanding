import React from 'react';
import { CosmicBackground } from './components/CosmicBackground';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { PhoneShowcase } from './components/PhoneShowcase';
import { FeaturesGrid } from './components/FeaturesGrid';
import { TechSpecs } from './components/TechSpecs';
import { DownloadTerminal } from './components/DownloadTerminal';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  return (
    <>
      <CosmicBackground />
      <div className="app-wrapper">
        <Navbar />
        <main>
          <HeroSection />
          <PhoneShowcase />
          <FeaturesGrid />
          <DownloadTerminal />
          <TechSpecs />
          <FaqSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default App;
