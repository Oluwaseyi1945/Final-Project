import '../App.css';
import { Link, useLocation } from "react-router";
import { FaSearch, FaUser, FaShoppingBag , FaRegStar} from "react-icons/fa";

function Navbarshop() {
  const location = useLocation();

  return (
    <section className="container">
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">

          <Link className="navbar-brand fw-semibold" to="/">FASCO</Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">

            <ul className="navbar-nav mx-auto mb-2 mb-lg-0 gap-5">

              <li className="nav-item">
                <Link
                  className={`nav-link ${location.pathname === "/Homepage" ? "active-link" : ""}`}
                  to="/Homepage"
                >
                  Home
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  className={`nav-link ${location.pathname === "/shop" ? "active-link" : ""}`}
                  to="/shop"
                >
                  Shop
                </Link>
              </li>

              <li className="nav-item">
                <Link className={`nav-link ${location.pathname === "/productpage" ? "active-link" : ""}`}
                  to="/productpage">
                  Products
                </Link>
              </li>

              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to="#"
                  role="button"
                  data-bs-toggle="dropdown"
                >
                  Pages
                </Link>

                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" to="#">About Us</Link></li>
                  <li><Link className="dropdown-item" to="#">Contact</Link></li>
                </ul>
              </li>

            </ul>

            <div className="d-flex align-items-center">
              <Link className="nav-link me-3" to="#"><FaSearch /></Link>
              <Link className="nav-link me-3" to="#"><FaUser /></Link>
               <Link className="nav-link me-3" to="#"><FaRegStar /></Link>
              <Link className="nav-link " to="#"><FaShoppingBag /></Link>
             
            </div>

          </div>
        </div>
      </nav>
    </section>
  );
}

export default Navbarshop;