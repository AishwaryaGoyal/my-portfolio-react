import React from "react";
import { Link } from "react-router-dom";

function HeaderHandheld() {
  function menuClick() {
    const header = document.getElementById("headerHandheld");
    const menuBtns = document.querySelectorAll(".btn-menu-drop");

    menuBtns.forEach((el) => el.classList.toggle("clicked"));
    header.classList.toggle("clicked");
  }

  return (
    <div className="header-handheld" id="headerHandheld">
      <Link to="/work" style={{ textDecoration: "none" }}>
        <button type="button" id="btnWorkHandheld" className="btn-top-handheld">
          Work
        </button>
      </Link>

      <Link to="/contact" style={{ textDecoration: "none" }}>
        <button
          type="button"
          id="btnContactHandheld"
          className="btn-top-handheld"
        >
          Contact
        </button>
      </Link>

      {/*--For mobile devices---floating menu--*/}
      <button className="btn-menu" onClick={menuClick}>
        <i className="fas fa-bars fa-2x"></i>
      </button>

      <Link to="/" style={{ textDecoration: "none" }}>
        <button type="button" className="btn-menu-drop">
          Home
        </button>
      </Link>

      <Link to="/work" style={{ textDecoration: "none" }}>
        <button type="button" className="btn-menu-drop">
          Work
        </button>
      </Link>

      <Link to="/contact" style={{ textDecoration: "none" }}>
        <button type="button" className="btn-menu-drop">
          Contact
        </button>
      </Link>

      <Link to="/about" style={{ textDecoration: "none" }}>
        <button type="button" className="btn-menu-drop">
          About
        </button>
      </Link>
    </div>
  );
}

export default HeaderHandheld;
