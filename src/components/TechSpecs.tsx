import React from 'react';
import { TECHNICAL_SPECS } from '../data/landingData';

export const TechSpecs: React.FC = () => {
  return (
    <section id="especificaciones" className="specs-section" data-od-id="specs-section">
      <div className="container">
        <div className="section-header">
          <span className="section-pill">Ficha Técnica</span>
          <h2 className="section-title">Especificaciones de Compatibilidad</h2>
          <p className="section-desc">
            Transparencia total para amantes del audio de alta resolución y entusiastas del hardware.
          </p>
        </div>

        <div className="specs-grid" data-od-id="specs-cards-grid">
          {TECHNICAL_SPECS.map((spec, idx) => (
            <div
              key={idx}
              className={`spec-card-full generate-card-glow is-generated ${spec.staggerClass}`}
            >
              <span className="spec-card-label">{spec.label}</span>
              <p className="spec-card-val">{spec.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
