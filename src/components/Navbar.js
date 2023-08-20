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

        </ul>
      </div>
    </nav>

    <Outlet/>
    </>

  );
}