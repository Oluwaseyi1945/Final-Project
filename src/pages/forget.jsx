import React from "react";
import signup from "../assets/signup.png";
import google from "../assets/google.png";
import gmail from "../assets/gmail.png";
import { Link } from "react-router";
import "../App.css";

function Forget() {
  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100">
      
    
      <div  className="row border overflow-hidden w-100 forget-container"
  style={{ maxWidth: "1100px" }}>
        
        
        <div className="col-md-6 p-0 bg-light d-flex justify-content-center align-items-center">
          <img
            src={signup}
            className="img-fluid"
            alt="Fashion photo"
            style={{ objectFit: "cover", width: "100%", height: "100%" }}
          />
        </div>

        <div className="col-md-6 d-flex align-items-center justify-content-center p-5">
          <div className="w-100" style={{ maxWidth: "380px" }}>
            
        
            <div className="text-start mb-5">
              <h2 className="fw-bold">FASCO</h2>
            </div>
              <div
   className="w-100"
  style={{
    maxWidth: "420px",
  }}
>
 
  <h2
      style={{
    fontFamily: "Volkhov, serif",
    fontSize: "28px",
    fontWeight: "400",
    marginBottom: "50px",
  }}
  >
    Forget Password
  </h2>

  {/* Form */}
  <form>
    <div className="row g-0 mb-4">
      <div className="col-6 pe-4">
        <input
          type="text"
          placeholder="First Name"
          className="forgot-input"
        />
      </div>

      <div className="col-6 ps-4">
        <input
          type="text"
          placeholder="Last Name"
          className="forgot-input"
        />
      </div>
    </div>

    <div className="row g-0 mb-4">
      <div className="col-6 pe-2">
        <input
          type="email"
          placeholder="Email Address"
          className="forgot-input"
        />
      </div>

      <div className="col-6 ps-2">
        <input
          type="text"
          placeholder="Phone Number"
          className="forgot-input"
        />
      </div>
    </div>

  
    <div className="text-center mt-4">
       <Link
  to="/confirm"
  className="btn btn-dark fogot-btn"
>
  Send Confirmation Code
</Link>
</div>

  
    <div
      className="text-center"
      style={{
        marginTop: "18px",
        fontSize: "13px",
      }}
    >
      <span style={{ color: "#666" }}>
        Already have an account?
      </span>{" "}
      <a
        href="#"
        style={{
          color: "#6c7cff",
          textDecoration: "none",
        }}
      >
        Login
      </a>
    </div>
  </form>
</div>
            <div className="text-end mt-5">
              <small className="text-muted">FASCO Terms & Conditions</small>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}

export default Forget;