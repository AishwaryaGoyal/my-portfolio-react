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
      <Link to="/work">
        <button type="button" className="btn-work-handheld btn-top-handheld">
          Work
        </button>
      </Link>

      <Link to="/contact">
        <button type="button" className="btn-contact-handheld btn-top-handheld">
          Contact
        </button>
      </Link>

      {/*--For mobile devices---floating menu--*/}
      <button className="btn-menu" onClick={menuClick}>
        <i className="fas fa-bars fa-2x"></i>
      </button>

      <Link to="/home">
        <button className="btn-menu-drop" id="btnHomeDrop">
          Home
        </button>
      </Link>

      <Link to="/work">
        <button className="btn-menu-drop" id="btnWorkDrop">
          Work
        </button>
      </Link>

      <Link to="/contact">
        <button className="btn-menu-drop" id="btnContactDrop">
          Contact
        </button>
      </Link>

      <Link to="/about">
        <button className="btn-menu-drop" id="btnAboutDrop">
          About
        </button>
      </Link>
    </div>
  );
}

export default HeaderHandheld;
