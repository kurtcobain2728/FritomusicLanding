import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="site-footer" data-od-id="site-footer">
      <div className="container footer-content">
        <div className="brand-logo" style={{ justifyContent: 'center' }}>
          <div className="logo-orb" style={{ width: '30px', height: '30px' }}>
            <div className="logo-orb-inner" style={{ width: '12px', height: '12px' }}></div>
          </div>
          <span className="brand-title">FritoMusic</span>
        </div>
        <p className="footer-copy">© 2026 FritoMusic Project. Diseñado con excelencia acústica y visual.</p>
        <p className="footer-links">Comunidad en Telegram · Repositorio GitHub · Soporte &amp; Discord</p>
      </div>
    </footer>
  );
};
