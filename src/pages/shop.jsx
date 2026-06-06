import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import { Link } from "react-router";
import Navbarshop from "../components/Navbarshop";
import Slider from "../components/Slider";
import Features from "../components/Features";
import Gallery from "../components/Gallery";
import Footer from "../components/Footer";
import Subscribe from "../components/Subscribe";


const products = [
  {
    id: 1,
    name: "Rounded Red Hat",
    price: "$8.00",
    image: "https://images.unsplash.com/photo-1496747611176-843222e1e57",
    color: ["red", "black"],
  },
  {
    id: 2,
    name: "Linen Blend Shirt",
    price: "$17.00",
    image: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df",
     color: ["red", "black"],
  },
  {
    id: 3,
    name: "Long Sleeve Coat",
    price: "$106.00",
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f",
     color: ["red", "black"],
  },
  {
    id: 4,
    name: "Denim Hat",
    price: "$25.00",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9",
     color: ["red", "black"],
  },
  {
    id: 5,
    name: "Linen Black Top",
    price: "$23.00",
    image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1",
     color: ["red", "black"],
  },
  {
    id: 6,
    name: "Oversized Tshirt",
    price: "$110.00",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
     color: ["red", "black", "pink",],
  },
];


function Shop() {
    const [open, setOpen] = useState(null);
    const toggle = (name) => {
    setOpen(open === name ? null : name);
  };

    
  return (
    <section>
      <Navbarshop />

      <div className="container py-5">
        <h2 className="text-center mb-3">Fashion</h2>

        <div className="breadcrumb-custom text-center">
          <Link to="/" className="text-decoration-none text-dark">
            Home
          </Link>
          <span className="separator2"> &gt; </span>
          <span>Fashion</span>
        </div>

        <section className="shop-content">
          
          <aside className="filters">
            <h5  style={{ fontSize: "18px", fontWeight: "300" }}>Filters</h5>

            <div className="mb-5">
              <h6>Size</h6>
              <div className="d-flex gap-2 flex-wrap">
                <button className="btn btn-outline-secondary btn-sm">S</button>
                <button className="btn btn-outline-secondary btn-sm">M</button>
                <button className="btn btn-outline-secondary btn-sm">L</button>
              </div>
            </div>

            <div className="mb-4">
              <h6  style={{ fontSize: "18px", fontWeight: "300" }}>Colors</h6>
              <div className="d-flex gap-2 flex-wrap "style={{ width: "200px" }} >
                <span className="color orange"></span>
                <span className="color yellow"></span>
                <span className="color green"></span>
                <span className="color blue"></span>
                <span className="color pink"></span>
                 <span className="color orange"></span>
                <span className="color yellow"></span>
                <span className="color green"></span>
                <span className="color blue"></span>
                <span className="color pink"></span>
                <span className="color yellow"></span>
                <span className="color green"></span>
                <span className="color blue"></span>
                <span className="color pink"></span>
              </div>
            </div>

            <div className="mb-4">
              <h6>Price</h6>
              <p>$0 - $50</p>
              <p>$50 - $100</p>
              <p>$100 - $200</p>
              <p>$300 - $400</p>
            </div>
           <div className="filter-box">
  <button
    className="custom-dropdown"
    onClick={() => toggle("brand")}
   style={{ fontSize: "18px", fontWeight: "300" }}>
    Brands
  </button>

  <div className={`filter-panel ${open === "brand" ? "open" : ""}`}>
    <ul>
      <li>Minimog</li>
      <li>Retrolie Brook</li>
      <li>Learts</li>
      <li>Vagabond</li>
      <li>Abby</li>
    </ul>
  </div>
</div>
    <div className="filter-box">
  <button
    className="custom-dropdown"
    onClick={() => toggle("category")}
    style={{ fontSize: "18px", fontWeight: "300" }}>
    Collections
  </button>

  <div className={`filter-panel ${open === "category" ? "open" : ""}`}>
    <ul>
      <li>All Products</li>
      <li>Best Sellers</li>
      <li>New Arrivals</li>
      <li>Accessories</li>
    </ul>
  </div>
</div>
<div className="filter-menu">
<h6  style={{ fontSize: "18px", fontWeight: "600" }}>Tags</h6>
<div  className="d-flex gap-2 flex-wrap " style={{ fontSize: "12px"}}>
    <span>Fashion</span>
<span>Hats</span>
<span>Sandal</span>
<span>Belts</span>
<span>Bags</span>
<span>Snackers</span>
<span>Denim</span>
<span>Minimog</span>
<span>Vagabond</span>
<span>sunglasses</span>
<span>Beachwear</span>
</div>
</div>

          </aside>

             <section className="products">
            <div className="products-toolbar">
              <select className="sort-dropdown">
                <option>Best Selling</option>
                <option>Newest</option>
                <option>Price Low to High</option>
                <option>Price High to Low</option>
              </select>

              <div className="left-tools">
                <button className="view-btn active">
                  <i className="bi bi-grid-2x2-gap-fill"></i>
                </button>
                <button className="view-btn">
                  <i className="bi bi-list"></i>
                </button>
              </div>
            </div>

            <div className="products-grid">
              {products.map((item) => (
                <div className="product-card" key={item.id}>
                  <img
                    src={item.image}
                    alt={item.name}
                    className="img-fluid"
                  />

                  <h6>{item.name}</h6>
                  <p>{item.price}</p>

                  
                  {item.color && (
                    <div className="product-colors">
                      {item.color.map((c, index) => (
                         <span
        key={index}
        className={`color-dot ${index === 0 ? "active" : ""}`}
        style={{ backgroundColor: c }}
      ></span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

       
            <span className="product-count">
              Showing 1–16 of 72 products
            </span>
          </section>
        </section>
      </div>

      <Slider />
      <Features/>
      <Gallery/>
      <Subscribe/>
      <Footer/>
    </section>
  );
}

export default Shop;