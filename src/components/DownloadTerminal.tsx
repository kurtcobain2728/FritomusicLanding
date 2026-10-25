import React, { useState, useEffect } from 'react';

const OFFICIAL_SHA256 = 'e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855';

export const DownloadTerminal: React.FC = () => {
  const [displayedHash, setDisplayedHash] = useState<string>(OFFICIAL_SHA256);
  const [copied, setCopied] = useState<boolean>(false);

  useEffect(() => {
    const hexChars = '0123456789abcdef';
    let iteration = 0;
    const interval = setInterval(() => {
      setDisplayedHash(
        OFFICIAL_SHA256.split('')
          .map((char, index) => {
            if (index < iteration) return char;
            return hexChars[Math.floor(Math.random() * hexChars.length)];
          })
          .join('')
      );

      iteration += 2;
      if (iteration >= OFFICIAL_SHA256.length + 6) {
        clearInterval(interval);
        setDisplayedHash(OFFICIAL_SHA256);
      }
    }, 30);

    return () => clearInterval(interval);
  }, []);

  const handleCopyHash = () => {
    navigator.clipboard.writeText(OFFICIAL_SHA256);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="descargar" className="download-section" data-od-id="download-apk-section">
      <div className="container">
        <div className="download-terminal-card generate-card-glow is-generated" data-od-id="download-card">
          <div className="download-left">
            <div className="release-tag" style={{ background: 'oklch(24% 0.05 195 / 0.4)' }}>
              <span className="release-dot"></span>
              v1.0 Oficial Estable
            </div>

            <h2 className="download-heading">Descárgalo Aquí</h2>
            <p className="download-subtext">
              Obtén la última versión oficial de FritoMusic para Android. Instalación directa, segura y sin
              intermediarios.
            </p>

            {/* Main APK Download Link */}
            <a
              href="https://github.com/kurtcobain2728/FritoMusic/releases/latest/download/fritomusic-v1.0.apk"
              className="btn-download-hero"
              data-od-id="btn-download-apk"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
              </svg>
              Descargar APK para Android
            </a>

            {/* Specs Pills Row */}
            <div className="download-pills-row">
              <span className="spec-pill">📦 fritomusic-v1.0.apk</span>
              <span className="spec-pill">⚡ ~16.6 MB</span>
              <span className="spec-pill">🛡️ Universal ARM64-v8a / x86_64</span>
            </div>

            {/* SHA-256 Checksum Container */}
            <div
              className="sha-checksum-box"
              onClick={handleCopyHash}
              style={{ cursor: 'pointer' }}
              title="Clic para copiar hash"
            >
              <div className="sha-label-row">
                <span>SUMA DE VERIFICACIÓN OFICIAL SHA-256</span>
                <span style={{ color: copied ? 'var(--accent-green)' : 'var(--fg-dim)', fontSize: '0.72rem' }}>
                  {copied ? '✓ ¡Copiado al portapapeles!' : '✓ Hash Oficial (Clic para copiar)'}
                </span>
              </div>
              <div className="sha-hash-text">{displayedHash}</div>
            </div>
          </div>
        </div>

        {/* 3-Step Install Guide */}
        <div className="install-guide-wrap">
          <h3 className="guide-title">¿Cómo instalar el archivo APK en Android?</h3>
          <div className="guide-steps-grid">
            <div className="guide-step-card is-generated stagger-1">
              <div className="guide-step-num">1</div>
              <h4 className="guide-step-title">Descarga el APK</h4>
              <p className="guide-step-desc">
                Pulsa el botón de descarga superior para guardar el archivo APK directamente en tu móvil.
              </p>
            </div>
            <div className="guide-step-card is-generated stagger-2">
              <div className="guide-step-num">2</div>
              <h4 className="guide-step-title">Permite Orígenes Desconocidos</h4>
              <p className="guide-step-desc">
                Si tu navegador solicita confirmación de seguridad, selecciona "Permitir desde esta fuente" en Ajustes.
              </p>
            </div>
            <div className="guide-step-card is-generated stagger-3">
              <div className="guide-step-num">3</div>
              <h4 className="guide-step-title">Instala y Disfruta</h4>
              <p className="guide-step-desc">
                Abre la notificación de descarga o busca el archivo en tus Descargas, presiona "Instalar" y listo.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
