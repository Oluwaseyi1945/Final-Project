import React from "react";
import "../App.css";
import image8 from "../assets/image8.png";
import { useState } from "react";





const hotspots = [
  { id: 1, label: "Flat Cap", top: "12%", left: "52%", lineDir: "right" },
  { id: 2, label: "Suspender", top: "34%", left: "14%", lineDir: "right" },
  { id: 3, label: "Hugo Boss", top: "52%", left: "42%", lineDir: "right" },
  { id: 4, label: "Hugo Boss", top: "62%", left: "6%", lineDir: "right" },
  { id: 5, label: "Santoni", top: "88%", left: "38%", lineDir: "right" },
];

const sizes = ["XS", "S", "M", "L", "XL"];

export default function ProductPage() {
  const [selectedSize, setSelectedSize] = useState("M");
  const [activeHotspot, setActiveHotspot] = useState(null);
  const [added, setAdded] = useState(false);

  const handleBuy = () => {
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="pp-wrapper">
      {/* LEFT PANEL */}
      <div className="pp-image-panel">
        <div className="pp-diagonal-bg" />
     
        {/* Model image placeholder — swap src for real image */}
        <img
          className="pp-model"
          src={image8}
          alt="Model"
         
        />

        {/* Fallback silhouette when no image */}
        <div className="pp-model-placeholder">
          <svg viewBox="0 0 180 420"  className="pp-silhouette">
            <ellipse cx="90" cy="40" rx="28" ry="32" fill="#c8c0b4" />
            <rect x="62" y="68" width="56" height="100" rx="8" fill="#b0a898" />
            <rect x="30" y="72" width="30" height="80" rx="8" fill="#b0a898" />
            <rect x="118" y="72" width="30" height="80" rx="8" fill="#b0a898" />
            <rect x="66" y="165" width="24" height="110" rx="6" fill="#9a9080" />
            <rect x="92" y="165" width="24" height="110" rx="6" fill="#9a9080" />
            <ellipse cx="78" cy="285" rx="16" ry="10" fill="#7a7060" />
            <ellipse cx="104" cy="285" rx="16" ry="10" fill="#7a7060" />
          </svg>
        </div>

        {/* Hotspots */}
        {hotspots.map((spot) => (
          <div
            key={spot.id}
            className={`pp-hotspot ${activeHotspot === spot.id ? "pp-hotspot--active" : ""}`}
            style={{ top: spot.top, left: spot.left }}
            onMouseEnter={() => setActiveHotspot(spot.id)}
            onMouseLeave={() => setActiveHotspot(null)}
          >
            <span className="pp-hotspot-line" />
            <span className="pp-hotspot-label">{spot.label}</span>
            <span className="pp-hotspot-dot" />
          </div>
        ))}
      </div>

      {/* RIGHT PANEL */}
      <div className="pp-info-panel">
        <p className="pp-collection">Women Collection</p>
        <h1 className="pp-title">Peaky Blinders</h1>

        <div className="pp-divider-label">DESCRIPTION</div>
        <p className="pp-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque
          duis ultrices sollicitudin aliquam sem. Scelerisque duis ultrices
          sollicitudin. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Scelerisque duis.
        </p>
        
<div className="pp-size-row">
  <span className="pp-size-label">Size</span>

  <div className="pp-size-options">
    <span className="pp-size-btn pp-size-btn--active">M</span>
  </div>
</div><p className="pp-price">$100.00</p>

        <button
          className={`pp-buy-btn ${added ? "pp-buy-btn--added" : ""}`}
          onClick={handleBuy}
        >
          {added ? "Added ✓" : "Buy Now"}
        </button>
      </div>
    </div>
  );
}