import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-logo">
        <img src="" alt="" />
      </div>
      <div className="navbar-items">
        <NavLink to="/accueil" className="nav-items-item">
          ACCUEIL
        </NavLink>
        <NavLink to="/concept" className="nav-items-item">
          CONCEPT
        </NavLink>
        <NavLink to="/prestations" className="nav-items-item">
          PRESTATIONS
        </NavLink>{" "}
        <NavLink to="/contact" className="nav-items-item">
          CONTACT
        </NavLink>{" "}
        <NavLink to="/rdv" className="nav-items-item">
          RENDEZ-VOUS
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
