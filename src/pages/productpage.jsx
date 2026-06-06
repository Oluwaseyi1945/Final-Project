import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import Slider from "../components/Slider";
import Navbarshop from "../components/Navbarshop";
import Features from "../components/Features";
import Minicart from "./minicart";
import Subscribe from "../components/Subscribe";
import Footer from "../components/Footer";

import img1 from "../assets/j1.png";
import img2 from "../assets/j2.png";
import img3 from "../assets/j3.png";
import img4 from "../assets/j4.png";
import img5 from "../assets/j5.png";
import img6 from "../assets/j6.png";
import img7 from "../assets/j7.png";

function Productpage() {
 const product = {
  id: 1,
  title: "Denim Jacket",
  price: 39.0,
  images: [img1, img2, img3, img4, img5, img6, img7]
};

const [selectedImage, setSelectedImage] = useState(product.images[0]);
const [isCartOpen, setIsCartOpen] = useState(false);

const cartProduct = {
  id: product.id,
  title: product.title,
  price: product.price,
  image: selectedImage,
};

  return (
    <section>
      <Navbarshop />

      <div className="product-detail">
        <div className="container py-2">
          <div className="row g-1">
            <div className="col-lg-2">
  <div className="thumbs d-flex flex-column align-items-start">
    {product.images.map((img, index) => (
      <div
        key={index}
        className={`thumb-box mb-2 ${
          selectedImage === img ? "active-thumb" : ""
        }`}
        onClick={() => setSelectedImage(img)}
        style={{ cursor: "pointer" }}
      >
        <img
          src={img}
          alt={`Thumbnail ${index + 1}`}
          className="img-fluid"
          width="80"
        />
      </div>
    ))}
  </div>
</div>


<div className="col-lg-4 d-flex justify-content-start align-items-start">
  <div className="main-image">
    <img
      src={selectedImage}
      alt="Selected product"
      className="selected-img"/>
  </div>
</div> 

<div className="col-lg-6 justify-content-start align-items-start">
          <small className="text-muted text-uppercase">Fasco</small>

          <h3 className="fw-bold mt-2">Denim Jacket</h3>

          <div className="mb-2">
            ★★★★★ <span className="text-muted">(3)</span>
          </div>

          <h4 className="fw-bold">$39.00</h4>

          <div className="bg-light p-2 rounded small my-3">
            🔥 24 people are viewing this right now
          </div>

          {/* Countdown */}
          <div className="deal-box p-3 rounded mb-4">
            <div className="d-flex justify-content-between">
              <span>Hurry up! Sale Ends In:</span>
              <strong>00 : 05 : 59 : 47</strong>
            </div>
          </div>

          <p className="text-muted border-bottom pb-3">
            Only 9 items left in stock!
          </p>

          {/* Size */}
          <div className="mb-4">
            <h6>Size</h6>
            <div className="d-flex gap-2">
              <button className="btn btn-outline-dark btn-sm">M</button>
              <button className="btn btn-dark btn-sm">L</button>
              <button className="btn btn-outline-dark btn-sm">XL</button>
              <button className="btn btn-outline-dark btn-sm">XXL</button>
            </div>
          </div>

          {/* Color */}
          <div className="mb-4">
            <h6>Color</h6>

            <div className="d-flex gap-2">
              <span className="color black"></span>
              <span className="color pink"></span>
            </div>
          </div>

          {/* Quantity */}
          <div className="d-flex align-items-center gap-3 mb-4">
            <div className="qty-box">
              <button>-</button>
              <span>1</span>
              <button>+</button>
            </div>

            <button className="btn btn-outline-dark px-5" onClick={() =>
            setIsCartOpen(true)
 
  }>
              Add to Cart
            </button>

          </div>

          {/* Actions */}
          <div className="d-flex gap-4 small border-top pt-3">
            <span>⚖ Compare</span>
            <span>❓ Ask a Question</span>
            <span>↗ Share</span>
          </div>

          <hr />

          <p className="small">
            🚚 Estimated Delivery: Jul 30 - Aug 03
          </p>

          <p className="small">
            🔄 Free Shipping & Returns on all orders over $75
          </p>

          {/* Payment */}
          <div className="payment-box text-center mt-4">
            <img
              src="https://cdn-icons-png.flaticon.com/512/196/196578.png"
              alt=""
              width="35"
            />
            <img
              src="https://cdn-icons-png.flaticon.com/512/349/349221.png"
              alt=""
              width="35"
            />
            <img
              src="https://cdn-icons-png.flaticon.com/512/825/825454.png"
              alt=""
              width="35"
            />
            <img
              src="https://cdn-icons-png.flaticon.com/512/5968/5968144.png"
              alt=""
              width="35"
            />

            <p className="small mt-2">
              Guarantee safe & secure checkout
            </p>
          </div>
        </div>
          </div>
        </div>
      </div>

      <Slider />
      <Features />
      <Subscribe />
      <Footer />
        <Minicart
  isOpen={isCartOpen}
  setIsOpen={setIsCartOpen}
  product={cartProduct}
/>
    </section>
  );
}

export default Productpage;
