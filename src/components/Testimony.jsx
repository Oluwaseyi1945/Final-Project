import { useState } from "react";
import "../App.css";

function TestimonialsCarousel() {
  const testimonials = [
    {
      id: 1,
      quote:
        "You won't regret it. I would like to personally thank you for your outstanding product. Absolutely wonderful!",
      name: "James K.",
      role: "Traveler",
      rating: 5,
      img: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      id: 2,
      quote:
        "I was looking for exactly this. Thank you for making it pleasant and most of all hassle free! All so great.",
      name: "Jan W.",
      role: "Entrepreneur",
      rating: 5,
      img: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      id: 3,
      quote:
        "Definitely worth the investment. My team loves it and we've seen incredible results since we started using it.",
      name: "Marcus T.",
      role: "Product Manager",
      rating: 5,
      img: "https://randomuser.me/api/portraits/men/75.jpg",
    },
    {
      id: 4,
      quote:
        "I can't imagine going back to the old way of doing things. This has completely changed our workflow.",
      name: "Aisha B.",
      role: "Designer",
      rating: 5,
      img: "https://randomuser.me/api/portraits/women/68.jpg",
    },
  ];

  const [active, setActive] = useState(0);
  const total = testimonials.length;

  function getIndices(active) {
    return {
      prev: (active - 1 + total) % total,
      next: (active + 1) % total,
    };
  }

  const { prev, next } = getIndices(active);

  function go(dir) {
    if (dir === "next") {
      setActive((p) => (p + 1) % total);
    } else {
      setActive((p) => (p - 1 + total) % total);
    }
  }

  const activeCard = testimonials[active];
  const prevCard = testimonials[prev];
  const nextCard = testimonials[next];

  return (
    <div className="testimonials">

      {/* HEADER */}
      <div className="testimonials-header">
        <h2>This Is What Our Customers Say</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque duis
        </p>
      </div>

      {/* STAGE */}
      <div className="testimonials-stage">

        <div className="testimonials-line" />

        {/* PREV */}
        <div className="testimonials-card testimonials-prev">
          <img src={prevCard.img} alt={prevCard.name} />

          <p>{prevCard.quote}</p>

          <div className="testimonials-mini-stars">
            {Array.from({ length: prevCard.rating }).map((_, i) => (
              <span key={i}>★</span>
            ))}
          </div>

          <div className="testimonials-name">{prevCard.name}</div>
        </div>

        {/* ACTIVE */}
        <div className="testimonials-card testimonials-active">

          <div className="testimonials-content">

            <img
              src={activeCard.img}
              alt={activeCard.name}
              className="testimonials-image"
            />

            <div>

              <p className="testimonials-quote">
                "{activeCard.quote}"
              </p>

              <div className="testimonials-stars">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span
                    key={i}
                    style={{
                      color: i < activeCard.rating ? "#F5A623" : "#E0E0E0",
                    }}
                  >
                    ★
                  </span>
                ))}
              </div>

              <div className="testimonials-info">
                <div className="testimonials-name">
                  {activeCard.name}
                </div>

                <div className="testimonials-role">
                  {activeCard.role}
                </div>
              </div>

            </div>

          </div>

        </div>

        {/* NEXT */}
        <div className="testimonials-card testimonials-next">
          <img src={nextCard.img} alt={nextCard.name} />

          <p>{nextCard.quote}</p>

          <div className="testimonials-mini-stars">
            {Array.from({ length: nextCard.rating }).map((_, i) => (
              <span key={i}>★</span>
            ))}
          </div>

          <div className="testimonials-name">{nextCard.name}</div>
        </div>

      </div>

      {/* BUTTONS */}
      <div className="testimonials-nav">
        <button className="testimonials-btn" onClick={() => go("prev")}>
          ‹
        </button>

        <button className="testimonials-btn" onClick={() => go("next")}>
          ›
        </button>
      </div>

    </div>
  );
}

export default TestimonialsCarousel;