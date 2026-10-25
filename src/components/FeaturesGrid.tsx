import React from 'react';
import { FEATURES } from '../data/landingData';

export const FeaturesGrid: React.FC = () => {
  return (
    <section id="funciones" className="features-section" data-od-id="features-section">
      <div className="container">
        <div className="section-header">
          <span className="section-pill">Arquitectura Sonora</span>
          <h2 className="section-title">Ingeniería Acústica de Última Generación</h2>
          <p className="section-desc">
            Cada componente de FritoMusic fue concebido para romper las limitaciones del audio móvil tradicional.
          </p>
        </div>

        <div className="features-grid" data-od-id="features-cards-grid">
          {FEATURES.map((feature) => (
            <div
              key={feature.id}
              className={`feature-card generate-card-glow is-generated ${feature.staggerClass}`}
            >
              <div className="feature-card-header">
                <div className="feature-icon-box">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <polygon points="10 8 16 12 10 16 10 8"></polygon>
                  </svg>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span
                    className="gen-telemetry"
                    style={{ color: 'var(--accent-green)', borderColor: 'var(--accent-green)' }}
                  >
                    {feature.telemetry}
                  </span>
                  <span className="feature-tag">{feature.tag}</span>
                </div>
              </div>
              <h3 className="feature-card-title">{feature.title}</h3>
              <p className="feature-card-desc">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
