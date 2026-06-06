import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'


const categories = [
  "Men's Fashion",
  "Women's Fashion",
  "Women Accessories",
  "Men Accessories",
  "Discount Deals",
];

export default function CategoryTabs({ onSelect }) {
  const [active, setActive] = useState("Women's Fashion");

  const handleSelect = (cat) => {
    setActive(cat);
    if (onSelect) onSelect(cat);
  };

  return (
    <nav
      aria-label="Product categories"
      style={{
        display: "flex",
        gap: "8px",
        alignItems: "center",
        flexWrap: "wrap",
        padding: "16px 0",
        justifyContent: "center"
      }}
    >
      {categories.map((cat) => {
        const isActive = cat === active;
        return (
          <button
            key={cat}
            onClick={() => handleSelect(cat)}
            aria-pressed={isActive}
            style={{
              padding: "10px 22px",
              borderRadius: "10px",
               border: "none",
              background: isActive ? "#111" : "#fafafa",
              color: isActive ? "#fff" : "#6b6b6b",
              fontSize: "16px",
              fontWeight: isActive ? 400 : 400,
              cursor: "pointer",
              whiteSpace: "nowrap",
              transition: "all 0.18s ease",
              fontFamily: "poppins",
             
            }}
            onMouseEnter={(e) => {
              if (!isActive) {
                e.currentTarget.style.borderColor = "#888";
                e.currentTarget.style.color = "#111";
              }
            }}
            onMouseLeave={(e) => {
              if (!isActive) {
                e.currentTarget.style.borderColor = "#d1d1d1";
                e.currentTarget.style.color = "#6b6b6b";
              }
            }}
          >
            {cat}
          </button>
        );
      })}
    </nav>
  );
}