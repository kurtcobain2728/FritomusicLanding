import React, { useState } from 'react';
import { HERO_STATS } from '../data/landingData';

export const HeroSection: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState<boolean>(true);

  const togglePlayback = () => {
    setIsPlaying((prev) => !prev);
  };

  return (
    <section className="hero-section" data-od-id="hero-section">
      <div className="container hero-grid">
        <div className="hero-content">
          <div className="release-tag" data-od-id="hero-release-tag">
            <span className="release-dot"></span>
            Android APK Oficial
          </div>

          <h1 className="hero-title" data-od-id="hero-heading">
            Tu música sin límites.
            <br />
            <span className="hero-title-white">Local, streaming y descargas masivas.</span>
          </h1>

          <p className="hero-tagline" data-od-id="hero-tagline">
            El reproductor nativo para Android que une tu biblioteca local con el streaming ilimitado en la nube sin anuncios y un descargador integral en alta calidad hasta 320 kbps. Con letras sincronizadas en tiempo real y diseño Glassmorphism.
          </p>

          <div className="hero-cta-group" data-od-id="hero-cta-group">
            <a href="#descargar" className="btn btn-primary" data-od-id="hero-btn-download">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
              </svg>
              Descargar APK Gratis
            </a>

            <a href="#capturas" className="btn btn-secondary" data-od-id="hero-btn-demo">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <polygon points="5 3 19 12 5 21 5 3"></polygon>
              </svg>
              <span>Ver Pantallas de la App</span>
            </a>
          </div>

          <div className="hero-scroll-invite" data-od-id="hero-scroll-invite">
            <a href="#capturas" className="scroll-invite-link">
              <span className="scroll-invite-dot"></span>
              <span>Explorar vistas dinámicas y descargas</span>
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                aria-hidden="true"
              >
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </a>
          </div>

          {/* Stats Bar */}
          <div className="hero-stats-grid" data-od-id="hero-stats-bar">
            {HERO_STATS.map((stat, idx) => (
              <div key={idx} className="stat-card">
                <span className="stat-value">{stat.value}</span>
                <span className="stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Interactive Celestial Audio Player Deck (Right Column of Hero) */}
        <div className="audio-deck-card" data-od-id="hero-audio-deck">
          <div className="deck-top-bar">
            <span
              className="deck-status-pill"
              onClick={togglePlayback}
              style={{ cursor: 'pointer' }}
              title="Alternar reproducción"
            >
              <span
                className="release-dot"
                style={{
                  background: isPlaying ? 'var(--accent-green)' : 'var(--muted)',
                  boxShadow: isPlaying ? '0 0 8px var(--accent-green)' : 'none',
                }}
              ></span>
              {isPlaying ? 'Reproduciendo muestra cósmica' : 'Pausado · Clic para reproducir'}
            </span>
            <span className="deck-codec-badge">OPUS ~160 kbps · Alta Fidelidad</span>
          </div>

          {/* Vinyl Disc Animated Graphic */}
          <div className="deck-visual-stage">
            <div
              className="vinyl-wrapper"
              style={{
                animationPlayState: isPlaying ? 'running' : 'paused',
              }}
            >
              <div className="vinyl-grooves"></div>
              <div className="vinyl-center-art">
                <div className="vinyl-center-hole"></div>
              </div>
            </div>
          </div>

          {/* Animated Frequency Spectrum Bars */}
          <div
            className="spectrum-canvas-wrap"
            style={{
              opacity: isPlaying ? 1 : 0.45,
            }}
          >
            {Array.from({ length: 24 }).map((_, i) => (
              <div
                key={i}
                className={`eq-bar eq-b${i + 1}`}
                style={{
                  animationPlayState: isPlaying ? 'running' : 'paused',
                }}
              ></div>
            ))}
          </div>

          {/* Track Meta Info */}
          <div className="deck-track-info">
            <h3 className="deck-song-title">Cosmic Horizon (Deep Orbit Mix)</h3>
            <p className="deck-song-artist">Stellar Resonance ft. FritoMusic</p>
          </div>

          {/* Scrubber Track Bar */}
          <div className="deck-progress-section">
            <div className="progress-bar-track">
              <div
                className="progress-bar-fill"
                style={{
                  width: isPlaying ? '48%' : '35%',
                  transition: 'width 0.4s ease',
                }}
              ></div>
            </div>
            <div className="progress-timestamps">
              <span>01:48</span>
              <span>03:48</span>
            </div>
          </div>

          {/* Control Buttons */}
          <div className="deck-controls">
            <button
              className="deck-btn-ctrl"
              title="Canción anterior"
              aria-label="Canción anterior"
              onClick={() => alert('Pista anterior seleccionada')}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <polygon points="19 20 9 12 19 4 19 20"></polygon>
                <line x1="5" y1="19" x2="5" y2="5" stroke="currentColor" strokeWidth="2.5"></line>
              </svg>
            </button>

            <button
              className="deck-btn-play"
              title={isPlaying ? 'Pausar bucle cósmico' : 'Reproducir bucle cósmico'}
              aria-label={isPlaying ? 'Pausar' : 'Reproducir'}
              onClick={togglePlayback}
            >
              {isPlaying ? (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <rect x="6" y="4" width="4" height="16"></rect>
                  <rect x="14" y="4" width="4" height="16"></rect>
                </svg>
              ) : (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <polygon points="6 4 20 12 6 20 6 4"></polygon>
                </svg>
              )}
            </button>

            <button
              className="deck-btn-ctrl"
              title="Siguiente canción"
              aria-label="Siguiente canción"
              onClick={() => alert('Siguiente pista seleccionada')}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <polygon points="5 4 15 12 5 20 5 4"></polygon>
                <line x1="19" y1="5" x2="19" y2="19" stroke="currentColor" strokeWidth="2.5"></line>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
