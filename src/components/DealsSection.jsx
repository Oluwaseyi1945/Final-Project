import React from "react";
import "../App.css";
import ee from "../assets/ee.png";
import ee1 from "../assets/ee1.png";



function DealsSection() {
  return (
     <section className="deals-section">
      <div className="deals-container">

        {/* LEFT SIDE */}
        <div className="deals-left">
          <h2>Deals Of The Month</h2>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Scelerisque duis ultrices sollicitudin aliquam sem.
          </p>

          <button className="buy-btn">Buy Now</button>

          <h4>Hurry, Before It’s Too Late!</h4>

          <div className="countdown">
            <div className="time-box">
              <span>02</span>
              <small>Days</small>
            </div>
            <div className="time-box">
              <span>06</span>
              <small>Hr</small>
            </div>
            <div className="time-box">
              <span>05</span>
              <small>Mins</small>
            </div>
            <div className="time-box">
              <span>30</span>
              <small>Sec</small>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="deals-right">

          <div className="slider-track">

            {/* ACTIVE CARD */}
            <div className="product-card active">
              <img src={ee} alt="" />

              <div className="sale-tag">
                <small>01 — Spring Sale</small>
                <h3>30% OFF</h3>
              </div>
            </div>

            {/* INACTIVE CARD 1 */}
            <div className="product-card">
              <img src={ee1} alt="" />
            </div>

            {/* INACTIVE CARD 2 */}
            <div className="product-card">
              <img src="" alt="" />
            </div>

          </div>

          {/* ARROWS */}
          <div className="slider-controls">
            <button className="arrow">‹</button>
            <button className="arrow">›</button>
          </div>

          {/* DOTS */}
          <div className="dots">
            <span className="active"></span>
            <span></span>
            <span></span>
            <span></span>
          </div>

        </div>

      </div>
    </section>
  );
}

export default DealsSection;