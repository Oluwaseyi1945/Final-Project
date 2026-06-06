import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";

import Navbarshop from "../components/Navbarshop";
import Subscribe from "../components/Subscribe";
import Footer from "../components/Footer";

// 👇 define initialItems properly
const initialItems = [
  {
    id: 1,
    name: "Mini Dress With Ruffled Straps",
    color: "Red",
    price: 14.9,
    quantity: 1,
    image: "/images/dress1.jpg",
  },
];

function Cart() {
  const [items, setItems] = useState(initialItems);
  const [giftWrap, setGiftWrap] = useState(false);

  const GIFT_WRAP_PRICE = 10;

  const updateQty = (id, delta) => {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };

  const removeItem = (id) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  // ✅ correct subtotal (based on cart items)
  const itemsTotal = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const subtotal = itemsTotal + (giftWrap ? GIFT_WRAP_PRICE : 0);

  return (
    <>
      <Navbarshop />

      <div className="container py-5">
        <h2 className="text-center mb-3">Shopping Cart</h2>

        <div className="breadcrumb-custom text-center">
          <Link to="/" className="text-decoration-none text-dark">
            Home
          </Link>

          <span className="separator2"> &gt; </span>

          <span>Your Shopping Cart</span>
        </div>
      </div>

      <div className="cart-wrapper">
        {/* Header */}
        <div className="cart-header-row">
          <span className="cart-header-cell product">Product</span>
          <span className="cart-header-cell price">Price</span>
          <span className="cart-header-cell quantity">Quantity</span>
          <span className="cart-header-cell total">Total</span>
        </div>

        <div className="cart-divider" />

        {/* Items */}
        {items.length === 0 ? (
          <p className="cart-empty-msg">Your cart is empty.</p>
        ) : (
          items.map((item) => (
            <div key={item.id} className="cart-item-row">
              <div className="cart-cell product">
                <img src={item.image} alt={item.name} className="cart-thumb" />
                <div>
                  <p className="cart-item-name">{item.name}</p>
                  <p className="cart-item-meta">Color: {item.color}</p>
                  <button
                    onClick={() => removeItem(item.id)}
                    className="cart-remove-btn"
                  >
                    Remove
                  </button>
                </div>
              </div>

              <div className="cart-cell price w ">
                ${item.price.toFixed(2)}
              </div>

              <div className="cart-cell quantity">
                <div className="cart-qty-control">
                  <button
                    className="cart-qty-btn"
                    onClick={() => updateQty(item.id, -1)}
                  >
                    −
                  </button>
                  <span className="cart-qty-num">
                    {String(item.quantity).padStart(2, "0")}
                  </span>
                  <button
                    className="cart-qty-btn"
                    onClick={() => updateQty(item.id, 1)}
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="cart-cell total">
                ${(item.price * item.quantity).toFixed(2)}
              </div>
            </div>
          ))
        )}

        <div className="cart-divider" />

        {/* Bottom */}
        <div className="cart-bottom-section">
          <label className="cart-gift-label">
            <input
              type="checkbox"
              checked={giftWrap}
              onChange={(e) => setGiftWrap(e.target.checked)}
              className="cart-checkbox"
            />
            For <strong>${GIFT_WRAP_PRICE.toFixed(2)}</strong> Please Wrap The
            Product
          </label>

          <div className="cart-subtotal-row">
            <span>Subtotal</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>

          <button className="cart-checkout-btn shadow">Checkout</button>

          <div className="cart-view-cart">
            <a href="#">View Cart</a>
          </div>
        </div>
      </div>

      <Subscribe />
      <Footer />
    </>
  );
}

export default Cart;