import React from "react";
import { Link } from "react-router-dom";

function HeaderHandheld() {
  var clicked = 0;

  function menuClick() {
    clicked = clicked + 1;
    var header = document.getElementById("headerHandheld");
    if (clicked % 2 !== 0) {
      header.style.height = "20.5rem";
      document.getElementById("btnHomeDrop").style.display = "block";
      document.getElementById("btnWorkDrop").style.display = "block";
      document.getElementById("btnContactDrop").style.display = "block";
      document.getElementById("btnAboutDrop").style.display = "block";
    } else {
      header.style.height = "4.3rem";
      document.getElementById("btnHomeDrop").style.display = "none";
      document.getElementById("btnWorkDrop").style.display = "none";
      document.getElementById("btnContactDrop").style.display = "none";
      document.getElementById("btnAboutDrop").style.display = "none";
    }
  }

  return (
    <div className="header-handheld" id="headerHandheld">
      <Link to="/work">
        <button type="button" className="btn-work-handheld">
          Work
        </button>
      </Link>

      <Link to="/contact">
        <button type="button" className="btn-contact-handheld">
          Contact
        </button>
      </Link>

      {/*--For mobile devices---floating menu--*/}
      <button className="btn-menu" onClick={menuClick}>
        <i className="fas fa-bars fa-2x"></i>
      </button>

      <Link to="/home">
        <button className="btn-home-drop" id="btnHomeDrop">
          Home
        </button>
      </Link>

      <Link to="/work">
        <button className="btn-work-drop" id="btnWorkDrop">
          Work
        </button>
      </Link>

      <Link to="/contact">
        <button className="btn-contact-drop" id="btnContactDrop">
          Contact
        </button>
      </Link>

      <Link to="/about">
        <button className="btn-about-drop" id="btnAboutDrop">
          About
        </button>
      </Link>
    </div>
  );
}

export default HeaderHandheld;
