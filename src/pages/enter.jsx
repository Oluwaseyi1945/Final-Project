import React from "react";
import signup from "../assets/signup.png";
import google from "../assets/google.png";
import gmail from "../assets/gmail.png";
import { Link } from "react-router";
import "../App.css";

function Enter() {
 

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
  <h2 className="fw-bold ">FASCO</h2>
  <h4>Enter Your New Password</h4>
</div>



          
   

            <form>
           <div className="row g-3 mb-4">
  <div className="col-12">
    <input
      type="text"
      placeholder="New Password"
      className="forgot-input w-100"
    />

    <input
      type="text"
      placeholder="Confirmation Password"
      className="forgot-input w-100"
    />
  </div>
</div>

<Link
  to="/Homepage"
  className="btn btn-primary w-100 py-2 mb-2"
>
  submit
</Link>

            </form>



        
            <div className="text-end mt-5">
              <small className="text-muted">FASCO Terms & Conditions</small>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}

export default Enter;