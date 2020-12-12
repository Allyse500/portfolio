import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import 'bootstrap/dist/css/bootstrap.min.css';

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
  return (

    <div id ="navbar">
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/" style = {{fontSize: "120%"}}>
        Web Development
      </Link>
      <div>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link
              to="/"
              className={
                window.location.pathname === "/" || window.location.pathname === "/home"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/latestworks"
              className={window.location.pathname === "/latestworks" ? "nav-link active" : "nav-link"}
            >
              Latest Works
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/contact"
              className={window.location.pathname === "/contact" ? "nav-link active" : "nav-link"}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
    </div>
  );
}

export default Navbar;
