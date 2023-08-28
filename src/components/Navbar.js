import React from "react";
import { Outlet, Link } from "react-router-dom";
import "../styles/navbarstyles.css";

export default function Navbar(){
  return(
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link className="navbar-brand-logo" to="/">WallStreet Bank</Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link className="nav-link" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/personal">Personal</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">About</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/contact">Contact Us</Link>
          </li>
          <li className="loginbtn">
            <Link className="nav-link" to="/login">Login</Link>
          </li>
          <li className="nav-item dropdown">
            {/* <Link className="nav-link dropdown-toggle" to="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Dropdown
            </Link> */}
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <Link className="dropdown-item" to="/">Home</Link>
              <Link className="dropdown-item" to="/personal">Personal</Link>
              <Link className="dropdown-item" to="/about">About</Link>
              <Link className="dropdown-item" to="/contact">Contact Us</Link>
              <Link className="dropdown-item" to="/login">Login</Link>
              <div className="dropdown-divider"></div>
              {/* <Link className="dropdown-item" to="/">Something else here</Link> */}
            </div>
          </li>

        </ul>
      </div>
    </nav>

    <Outlet/>
    </>

  );
}