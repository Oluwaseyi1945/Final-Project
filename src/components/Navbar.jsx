import '../App.css'
 import { Link } from "react-router";

function Navbar () {
    return (
          <section className='container'>
            <nav className="navbar navbar-expand-lg navbar-transparent ">
  <div className="container-fluid ">
    <a className="navbar-brand" href="#" >FASCO</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent" style={{fontFamily: '"Poppins", serif', fontWeight: 400, fontSize: "16px", color:"#484848"}}>
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0 gap-4">
        <li className="nav-item">
          <a className="nav-link " aria-current="page" href="/App">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Deals</a>
        </li> 
        <li className="nav-item">
          <a className="nav-link" href="#">New Arrivals</a>
        </li> 
        <li className="nav-item">
          <a className="nav-link" href="#">Packages</a>
        </li>   
         <li className="nav-item">
          <a className="nav-link" href="/sign">Sign in</a>
        </li>
        <a className="btn btn-dark shadow" href="/createpage">Sign up</a>
      </ul>
        </div>
     </div>
    </nav>
          </section>      
       
    )
}

export default Navbar