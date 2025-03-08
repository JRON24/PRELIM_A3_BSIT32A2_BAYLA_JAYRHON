import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/lyceum_logo.png"; // Import the logo

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img src={logo} alt="Lyceum Logo" className="logo me-2" /> LYCEUM OF
          ALABANG
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                🏠 Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                📖 About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                📞 Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
