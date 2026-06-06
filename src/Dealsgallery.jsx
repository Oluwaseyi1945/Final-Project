import { useState } from "react";

export default function DealsGallery({ slides }) {
  const [active, setActive] = useState(0);

  const next = () => {
    setActive((prev) => (prev + 1) % slides.length);
  };

  const prev = () => {
    setActive((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div>
      <div className="deals-track">
        {slides.map((slide, i) => (
          <div
            key={i}
            className={`deals-slide${i === active ? " active" : ""}`}
            style={{ background: slide.bg }}
            onClick={() => setActive(i)}
          >
            <FigureSVG slide={slide} />

            {i === active && (
              <div className="deals-label">
                <span>{slide.label}</span>
                <strong>{slide.discount}</strong>
              </div>
            )}
          </div>
        ))}

        <div className="deals-dots">
          {slides.map((_, i) => (
            <button
              key={i}
              className={`deals-dot${i === active ? " active" : ""}`}
              onClick={() => setActive(i)}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>

      <div className="deals-controls">
        <div className="deals-arrows">
          <button className="deals-arrow" onClick={prev} aria-label="Previous">
            &#8249;
          </button>
          <button className="deals-arrow" onClick={next} aria-label="Next">
            &#8250;
          </button>
        </div>
      </div>
    </div>
  );
}