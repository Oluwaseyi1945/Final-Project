import React from "react";
import forget from "../assets/forget.png";
import google from "../assets/google.png";
import gmail from "../assets/gmail.png";
import { Link } from "react-router";
import "../App.css";

function Createpage() {
  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100">
      <div
        className="row border rounded-4 overflow-hidden w-100 "
        style={{ maxWidth: "1100px" }}
      >
       
        <div className="col-md-6 p-0 bg-light d-flex justify-content-center align-items-center">
          <img
            src={forget}
            className="img-fluid"
            alt="Fashion photo"
            style={{ objectFit: "cover", width: "100%", height: "100%" }}
          />
        </div>

        {/* Right Form */}
        <div className="col-md-6 d-flex align-items-center justify-content-center p-5">
          <div className="w-100" style={{ maxWidth: "380px" }}>
            
            {/* Header */}
            <div className="text-start mb-4 d-flex flex-column gap-5">
              <h2 className="fw-bold">FASCO</h2>
              <h4>Create Account</h4>
            </div>

            {/* Social Buttons */}
            <div className="d-flex gap-2 mb-4">
              <button
                className="btn d-flex align-items-center justify-content-center gap-2 w-50"
                style={{
                  border: "1px solid #b7c7ff",
                  height: "38px",
                  fontSize: "12px",
                  color: "#555",
                }}
              >
                <img src={google} alt="Google" width="18" />
                <span>Sign up with Google</span>
              </button>

              <button
                className="btn d-flex align-items-center justify-content-center gap-2 w-50"
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

            
            <div
              className="d-flex align-items-center justify-content-center my-4 mx-auto"
              style={{ maxWidth: "200px" }}
            >
              <hr className="flex-grow-1" />
              <span className="fw-bold text-secondary mx-2">OR</span>
              <hr className="flex-grow-1" />
            </div>

            {/* Form */}
            <form>
              <div className="row g-3 mb-3">
                <div className="col-12  col-md-6">
                  <input
                    type="text"
                    placeholder="First Name"
                    className="forgot-input w-100"
                  />
                </div>

                <div className="col-12  col-md-6">
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="forgot-input w-100"
                  />
                </div>

                <div className="col-12  col-md-6">
                  <input
                    type="email"
                    placeholder="Email"
                    className="forgot-input w-100"
                  />
                </div>

                <div className="col-12  col-md-6">
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="forgot-input w-100"
                  />
                </div>

                <div className="col-12  col-md-6">
                  <input
                    type="password"
                    placeholder="Password"
                    className="forgot-input w-100"
                  />
                </div>

                <div className="col-12  col-md-6">
                  <input
                    type="password"
                    placeholder="Confirm Password"
                    className="forgot-input w-100"
                  />
                </div>
              </div>
                    <Link
                  to="/confirm"
                  className="btn btn-dark w-100 py-2 mb-2 shadow"
                >
                  Create Account
                </Link>
              
            </form>

            {/* Login Link - CENTERED */}
            <div className="text-center mb-3">
              <small>
                Already have an account?{" "}
                <Link to="/login" className="text-decoration-none">
                  Login
                </Link>
              </small>
            </div>

         
            <div className="text-end">
              <a href="/forget" className="text-decoration-none small">
                Forgot Password?
              </a>
            </div>

            {/* Footer */}
            <div className="text-end mt-5">
              <small className="text-muted">
                FASCO Terms & Conditions
              </small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Createpage;