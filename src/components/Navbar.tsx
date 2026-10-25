import React from 'react';

export const Navbar: React.FC = () => {
  return (
    <header className="navbar" data-od-id="main-nav">
      <div className="container nav-container">
        <a href="#" className="brand-logo" data-od-id="brand-logo" aria-label="FritoMusic Inicio">
          <div className="logo-orb">
            <div className="logo-orb-inner"></div>
          </div>
          <span className="brand-title">FritoMusic</span>
          <span className="brand-badge">Android APK Oficial</span>
        </a>

        <nav aria-label="Navegación principal">
          <ul className="nav-links">
            <li>
              <a href="#funciones" className="nav-link">
                Funciones
              </a>
            </li>
            <li>
              <a href="#capturas" className="nav-link">
                Vista Previa Móvil
              </a>
            </li>
            <li>
              <a href="#descargar" className="nav-link">
                Descargar APK
              </a>
            </li>
            <li>
              <a href="#especificaciones" className="nav-link">
                Especificaciones
              </a>
            </li>
            <li>
              <a href="#faq" className="nav-link">
                FAQ
              </a>
            </li>
          </ul>
        </nav>

        <a href="#descargar" className="nav-action-btn" data-od-id="nav-cta-download">
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
            <polyline points="7 10 12 15 17 10"></polyline>
            <line x1="12" y1="15" x2="12" y2="3"></line>
          </svg>
          Descargar APK
        </a>
      </div>
    </header>
  );
};
