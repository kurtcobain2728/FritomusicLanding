import React, { useState } from 'react';
import { FAQS } from '../data/landingData';

export const FaqSection: React.FC = () => {
  const [openIds, setOpenIds] = useState<number[]>([1, 2]);

  const toggleItem = (id: number) => {
    setOpenIds((prev) => (prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]));
  };

  return (
    <section id="faq" className="faq-section" data-od-id="faq-section">
      <div className="container">
        <div className="section-header">
          <span className="section-pill">Dudas Comunes</span>
          <h2 className="section-title">Preguntas Frecuentes</h2>
          <p className="section-desc">
            Todo lo que necesitas saber sobre la filosofía, seguridad y uso de FritoMusic.
          </p>
        </div>

        <div className="faq-accordion-list" data-od-id="faq-accordion">
          {FAQS.map((faq) => {
            const isOpen = openIds.includes(faq.id);
            return (
              <details
                key={faq.id}
                className={`faq-item is-generated ${faq.staggerClass}`}
                open={isOpen}
                onClick={(e) => {
                  e.preventDefault();
                  toggleItem(faq.id);
                }}
              >
                <summary>
                  <span>{faq.question}</span>
                  <span className="faq-icon-cross" style={{ transform: isOpen ? 'rotate(45deg)' : 'none', transition: 'transform 0.2s ease' }}>
                    +
                  </span>
                </summary>
                {isOpen && (
                  <div className="faq-answer-pane">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </details>
            );
          })}
        </div>
      </div>
    </section>
  );
};
