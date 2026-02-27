import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Narrative from './components/Narrative';
import Servicios from './components/Amenities'; // Renamed conceptually, file remains Amenities.jsx for now
import BentoGrid from './components/BentoGrid';
import UbicacionPremium from './components/UbicacionPremium';
import GaleriaEstiloVida from './components/GaleriaEstiloVida';
import HistoriasHuespedes from './components/HistoriasHuespedes';
import PreguntasFrecuentes from './components/PreguntasFrecuentes';
import { CTA, Footer } from './components/FooterAndCTA';

function App() {
  return (
    <div className="relative">
      {/* Global Elements */}
      <div className="noise-overlay" />

      {/* Page Content */}
      <Navigation />
      <main>
        <Hero />
        <Narrative />
        <Servicios />
        <BentoGrid />
        <UbicacionPremium />
        <GaleriaEstiloVida />
        <HistoriasHuespedes />
        <PreguntasFrecuentes />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
