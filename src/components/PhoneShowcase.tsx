import React, { useState, useEffect, useRef } from 'react';
import { SHOWCASE_SLIDES } from '../data/landingData';

export const PhoneShowcase: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState<boolean>(false);
  const sectionRef = useRef<HTMLElement | null>(null);
  const phoneFrameRef = useRef<HTMLDivElement | null>(null);
  const isClickingTabRef = useRef<boolean>(false);

  useEffect(() => {
    if (!isLightboxOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsLightboxOpen(false);
      } else if (e.key === 'ArrowLeft') {
        const prevIdx = activeIndex > 0 ? activeIndex - 1 : SHOWCASE_SLIDES.length - 1;
        scrollToSlide(prevIdx);
      } else if (e.key === 'ArrowRight') {
        const nextIdx = activeIndex < SHOWCASE_SLIDES.length - 1 ? activeIndex + 1 : 0;
        scrollToSlide(nextIdx);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isLightboxOpen, activeIndex]);

  const touchStartXRef = useRef<number | null>(null);
  const touchStartYRef = useRef<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      if (isClickingTabRef.current) return; // Skip if animated scroll triggered by tab click

      const rect = sectionRef.current.getBoundingClientRect();
      const totalScrollable = sectionRef.current.offsetHeight - window.innerHeight;

      if (totalScrollable > 0) {
        // Sticky offset threshold: 80px on desktop, 65px on mobile
        const stickyOffset = window.innerWidth <= 768 ? 65 : 80;

        // While the section is within its sticky window
        if (rect.top <= stickyOffset && rect.bottom >= window.innerHeight - 30) {
          const progressPixels = Math.max(0, -rect.top + (stickyOffset - 10));
          const scrollProgress = Math.min(Math.max(progressPixels / totalScrollable, 0), 0.999);
          const newIdx = Math.floor(scrollProgress * SHOWCASE_SLIDES.length);
          const clampedIdx = Math.min(Math.max(newIdx, 0), SHOWCASE_SLIDES.length - 1);
          setActiveIndex(clampedIdx);

          if (phoneFrameRef.current) {
            const rotY = (scrollProgress - 0.5) * -6;
            const rotX = Math.sin(scrollProgress * Math.PI) * 2;
            phoneFrameRef.current.style.transform = `perspective(1000px) rotateY(${rotY.toFixed(
              2
            )}deg) rotateX(${rotX.toFixed(2)}deg)`;
          }
        } else if (rect.top > stickyOffset) {
          // Above the section: show first slide
          setActiveIndex(0);
          if (phoneFrameRef.current) {
            phoneFrameRef.current.style.transform = 'perspective(1000px) rotateY(0deg) rotateX(0deg)';
          }
        } else if (rect.bottom < window.innerHeight - 30) {
          // Below the section: show last slide
          setActiveIndex(SHOWCASE_SLIDES.length - 1);
          if (phoneFrameRef.current) {
            phoneFrameRef.current.style.transform = 'perspective(1000px) rotateY(0deg) rotateX(0deg)';
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });
    handleScroll();
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  const scrollToSlide = (index: number) => {
    setActiveIndex(index);
    if (sectionRef.current) {
      isClickingTabRef.current = true;
      const totalScrollable = sectionRef.current.offsetHeight - window.innerHeight;
      if (totalScrollable > 0) {
        const targetRatio = (index + 0.35) / SHOWCASE_SLIDES.length;
        const targetScrollTop = sectionRef.current.offsetTop + targetRatio * totalScrollable;
        window.scrollTo({ top: targetScrollTop, behavior: 'smooth' });
      }

      setTimeout(() => {
        isClickingTabRef.current = false;
      }, 600);
    }
  };

  const handleTabClick = (index: number) => {
    scrollToSlide(index);
  };

  const handlePrev = () => {
    const prevIdx = activeIndex > 0 ? activeIndex - 1 : SHOWCASE_SLIDES.length - 1;
    scrollToSlide(prevIdx);
  };

  const handleNext = () => {
    const nextIdx = activeIndex < SHOWCASE_SLIDES.length - 1 ? activeIndex + 1 : 0;
    scrollToSlide(nextIdx);
  };

  // Touch Swipe Gesture for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartXRef.current = e.touches[0].clientX;
    touchStartYRef.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartXRef.current === null || touchStartYRef.current === null) return;
    const deltaX = e.changedTouches[0].clientX - touchStartXRef.current;
    const deltaY = e.changedTouches[0].clientY - touchStartYRef.current;

    // Detect horizontal swipe (> 35px delta and predominantly horizontal)
    if (Math.abs(deltaX) > 35 && Math.abs(deltaX) > Math.abs(deltaY) * 1.15) {
      if (deltaX < 0) {
        // Swiped left -> go to next screen
        handleNext();
      } else {
        // Swiped right -> go to previous screen
        handlePrev();
      }
    }
    touchStartXRef.current = null;
    touchStartYRef.current = null;
  };

  const progressPercent = ((activeIndex + 1) / SHOWCASE_SLIDES.length) * 100;
  const currentSlide = SHOWCASE_SLIDES[activeIndex];

  return (
    <section id="capturas" ref={sectionRef} className="showcase-section" data-od-id="mobile-showcase-section">
      <div className="showcase-sticky-wrap">
        <div className="container">
          <div className="section-header">
            <span className="section-pill">Vista Previa Móvil Dinámica</span>
            <h2 className="section-title">El Proyecto FritoMusic en tus Manos</h2>
            <p className="section-desc">
              Desplázate con el ratón para recorrer las 7 pantallas de la aplicación. Al llegar a la última, el scroll
              continuará bajando con total naturalidad.
            </p>
          </div>

          {/* Scroll Progress Track & Screen Selector Tabs */}
          <div className="carousel-timeline-rail">
            <div
              className="carousel-timeline-fill"
              id="carousel-timeline-fill"
              style={{ width: `${progressPercent}%`, transition: 'width 0.25s ease' }}
            ></div>
          </div>

          {/* Carousel Screen Selector Tabs (7 Tabs) */}
          <div className="carousel-tabs-nav" data-od-id="carousel-tabs">
            {SHOWCASE_SLIDES.map((slide, idx) => (
              <button
                key={slide.id}
                type="button"
                className={`carousel-tab-label ${activeIndex === idx ? 'is-active-tab' : ''}`}
                onClick={() => handleTabClick(idx)}
                aria-pressed={activeIndex === idx}
              >
                {slide.tabLabel}
              </button>
            ))}
          </div>

          {/* Showcase Stage: Complete Phone Frame + Detail Info */}
          <div
            className="showcase-stage"
            data-od-id="showcase-stage"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            {/* Left: High-Fi Titanium Phone Mockup Frame (Significantly Larger) */}
            <div className="phone-mockup-wrap">
              <div
                ref={phoneFrameRef}
                className="phone-frame"
                onClick={() => setIsLightboxOpen(true)}
                title="Haz clic para ver la captura ampliada en pantalla completa"
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    setIsLightboxOpen(true);
                  }
                }}
              >
                {/* Modern Punch-Hole Camera */}
                <div className="phone-notch">
                  <div className="phone-camera-lens"></div>
                </div>

                {/* Screen Contents Container with Real Screenshots */}
                <div className="phone-screen-content">
                  {SHOWCASE_SLIDES.map((slide, idx) => (
                    <div
                      key={slide.id}
                      className={`phone-slide-pane ${activeIndex === idx ? 'is-active-pane' : ''}`}
                    >
                      {slide.screenshotUrl ? (
                        <img
                          src={slide.screenshotUrl}
                          alt={slide.screenTitle}
                          className="phone-screenshot-img"
                          loading={idx === 0 ? 'eager' : 'lazy'}
                        />
                      ) : (
                        <div
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            height: '100%',
                            color: 'var(--muted)',
                            fontSize: '0.85rem',
                          }}
                        >
                          {slide.screenTitle}
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                {/* Hover Zoom Hint */}
                <div className="phone-zoom-hint">
                  🔍 Clic para ampliar
                </div>
              </div>
            </div>

            {/* Right: Screen Information & Interactive Controls */}
            <div className="showcase-info-panel">
              <div key={currentSlide.id} className="showcase-slide-info is-active-info">
                <span className="slide-badge">{currentSlide.badge}</span>
                <h3 className="slide-title">{currentSlide.title}</h3>
                <h4 className="slide-subtitle">{currentSlide.subtitle}</h4>
                <p className="slide-desc">{currentSlide.description}</p>
              </div>

              {/* Navigation Controls: Arrows, Fullscreen & Progress */}
              <div className="showcase-controls-row">
                <button
                  type="button"
                  onClick={handlePrev}
                  className="btn btn-secondary showcase-nav-btn"
                  aria-label="Pantalla anterior"
                >
                  ← Anterior
                </button>

                <button
                  type="button"
                  onClick={handleNext}
                  className="btn btn-primary showcase-nav-btn"
                  aria-label="Siguiente pantalla"
                >
                  Siguiente →
                </button>

                <button
                  type="button"
                  onClick={() => setIsLightboxOpen(true)}
                  className="btn btn-secondary showcase-nav-btn showcase-zoom-btn"
                  aria-label="Ver captura en pantalla completa"
                >
                  <span>🔍</span>
                  <span>Pantalla Completa</span>
                </button>

                <span className="showcase-nav-hint">
                  Desliza o usa flechas
                </span>
              </div>

              {/* Dot Pagination (7 Dots) */}
              <div className="carousel-nav-controls" style={{ marginTop: '12px' }}>
                <span
                  style={{
                    fontSize: '0.80rem',
                    color: 'var(--muted)',
                    fontFamily: 'var(--font-mono)',
                  }}
                >
                  Pantalla {activeIndex + 1} de {SHOWCASE_SLIDES.length}:
                </span>
                <div className="carousel-dots-group">
                  {SHOWCASE_SLIDES.map((slide, idx) => (
                    <button
                      key={slide.id}
                      type="button"
                      className={`carousel-dot-label ${activeIndex === idx ? 'is-active-dot' : ''}`}
                      onClick={() => handleTabClick(idx)}
                      title={slide.screenTitle}
                      aria-label={`Seleccionar pantalla ${slide.screenTitle}`}
                      style={{
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        padding: 0,
                      }}
                    ></button>
                  ))}
                </div>
              </div>

              {/* Step indicator cue */}
              <div className="showcase-scroll-cue">
                <span className="scroll-cue-pulse"></span>
                <span id="showcase-step-label">
                  Vista 0{activeIndex + 1} / 0{SHOWCASE_SLIDES.length} · {currentSlide.screenTitle}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Fullscreen High-Resolution Lightbox Modal */}
      {isLightboxOpen && (
        <div
          className="screenshot-lightbox-backdrop"
          onClick={() => setIsLightboxOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label={`Vista ampliada: ${currentSlide.screenTitle}`}
        >
          <div
            className="screenshot-lightbox-card"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="screenshot-lightbox-close"
              onClick={() => setIsLightboxOpen(false)}
              aria-label="Cerrar vista completa"
            >
              ✕
            </button>

            <div className="screenshot-lightbox-img-wrap">
              <img
                src={currentSlide.screenshotUrl}
                alt={currentSlide.screenTitle}
                className="screenshot-lightbox-img"
              />
            </div>

            <div className="screenshot-lightbox-info">
              <span className="slide-badge">{currentSlide.badge}</span>
              <h3 className="slide-title" style={{ fontSize: '1.6rem', marginTop: '4px' }}>
                {currentSlide.title}
              </h3>
              <h4 className="slide-subtitle" style={{ fontSize: '1.05rem', marginTop: '2px' }}>
                {currentSlide.subtitle}
              </h4>
              <p className="slide-desc" style={{ fontSize: '0.92rem', marginTop: '8px', lineHeight: '1.6' }}>
                {currentSlide.description}
              </p>

              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginTop: '16px' }}>
                <button
                  type="button"
                  onClick={handlePrev}
                  className="btn btn-secondary"
                  style={{ padding: '8px 16px', fontSize: '0.85rem', borderRadius: '10px' }}
                >
                  ← Anterior
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  className="btn btn-primary"
                  style={{ padding: '8px 18px', fontSize: '0.85rem', borderRadius: '10px' }}
                >
                  Siguiente →
                </button>
              </div>

              <div style={{ marginTop: '14px', fontSize: '0.78rem', color: 'var(--muted)', fontFamily: 'var(--font-mono)' }}>
                Captura {activeIndex + 1} de {SHOWCASE_SLIDES.length} · Pulsa Esc para salir o navega con flechas
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
