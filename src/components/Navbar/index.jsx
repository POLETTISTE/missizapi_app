import "./style.scss";
import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  //use state + active style

  return (
    <div id="navbar">
      <div className="navbar-logo"></div>
      <div className="navbar-items">
        <NavLink to="/accueil" className="navbar-items-item">
          ACCUEIL
        </NavLink>
        <NavLink to="/concept" className="navbar-items-item">
          CONCEPT
        </NavLink>
        <NavLink to="/prestations" className="navbar-items-item">
          PRESTATIONS
        </NavLink>{" "}
        <NavLink to="/contact" className="navbar-items-item">
          CONTACT
        </NavLink>{" "}
        <NavLink to="/rdv" className="navbar-items-item">
          RENDEZ-VOUS
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
