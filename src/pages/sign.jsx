import React from "react";
import signup from "../assets/signup.png";
import google from "../assets/google.png";
import gmail from "../assets/gmail.png";
import { Link } from "react-router";
import "../App.css";

function Sign() {
 

  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100">
      
    
      <div className="row border rounded-4 overflow-hidden w-100 " style={{ maxWidth: "1100px" }}>
        
      
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
            
            
            <div className="text-start mb-4 d-flex flex-column gap-5">
  <h2 className="fw-bold">FASCO</h2>
  <h4>Sign In To FASCO</h4>
</div>

<div className="d-flex gap-2 mb-4">
  <button
    className="btn  d-flex align-items-center justify-content-center gap-4"
    style={{
      border: "1px solid #b7c7ff",
      height: "38px",
      fontSize: "12px",
      color: "#555",
     
    }}
  >
    <img src={google}alt="Google" width="18" />
    <span>Sign up with Google</span>
  </button>

  <button
    className="btn flex-fill d-flex align-items-center justify-content-center gap-2"
    style={{
      border: "1px solid #b7c7ff",
      height: "38px",
      fontSize: "12px",
      color: "#555",
   
    }}
  >
    <img src={gmail} alt="Email" width="18" />
    <span>Sign up with Email</span>
  </button>
</div>

          
    <div className="d-flex align-items-center justify-content-center my-5 mx-auto" style={{ maxWidth: "200px" }}>
  <hr className="flex-grow-1" />
  <span className="fw-bold text-secondary mx-2">OR</span>
  <hr className="flex-grow-1" />
</div>

            <form>
           <div className="row g-3 mb-4">
  <div className="col-12">
    <input
      type="text"
      placeholder="First Name"
      className="forgot-input w-100"
    />
  </div>

  <div className="col-12">
    <input
      type="text"
      placeholder="Last Name"
      className="forgot-input w-100"
    />
  </div>
</div>

            <Link
  to="/"
  className="btn btn-dark w-100 py-2 mb-2"
>
  Sign in
</Link>

            </form>

           
            <Link
  to="/createpage"
  className="btn btn-outline-primary w-100 py-2 mb-2"
>
  Register Now
</Link>

      
            <div className="text-end">
              <a href="/forget" className="text-decoration-none small">
                Forgot Password?
              </a>
            </div>

            {/* Footer */}
            <div className="text-end mt-5">
              <small className="text-muted">FASCO Terms & Conditions</small>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}

export default Sign;