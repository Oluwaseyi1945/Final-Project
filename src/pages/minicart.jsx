import React from "react";
import { Link } from "react-router";

function Minicart({ isOpen,
  setIsOpen,
  product,}) {
    if (!isOpen) return null;
 

  return (
    <section>
    <div className="cart-overlay">
      <div className="cart-drawer">

        {/* Header */}
        <div className="cart-header">
          <h5>Shopping Cart</h5>
          <button className="close-btn" onClick={() => setIsOpen(false)}>
            ✕
          </button>
        </div>

        {/* Free shipping message */}
        <p className="free-shipping">
          Buy $122.35 more and get free shipping
        </p>

        {/* Product */}
        <div className="cart-item">
          <img src={product?.image} alt="" />

          <div className="cart-details">
            <p className="text-muted">Color: Red</p>
            <h6>{product?.title}</h6>
            <p>${product?.price}</p>

            {/* Quantity */}
            <div className="qty">
              <button>-</button>
              <span>01</span>
              <button>+</button>
            </div>

            <p className="wrap">
              For $10.00 please wrap the product
            </p>
          </div>
        </div>

       
        <div className="subtotal">
          <h6>Subtotal</h6>
          <h5>$100.00</h5>
        </div>
             <Link
          to="/cartpage"
          className="btn btn-dark w-100 py-2 mb-2"
        >
          Checkout
        </Link>


        <button className="view-cart-btn">
          View Cart
        </button>

      </div>
    </div>

    </section>
  );
}

export default Minicart;