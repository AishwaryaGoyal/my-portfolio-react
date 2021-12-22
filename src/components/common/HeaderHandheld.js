import React from "react";
import { Link } from "react-router-dom";
import ButtonIcon from "./ButtonIcon";

function HeaderHandheld(props) {
  function menuClick() {
    const header = document.querySelector(".header-handheld");
    const menuBtns = document.querySelectorAll(".btn-menu-drop");

    menuBtns.forEach((el) => el.classList.toggle("clicked"));
    header.classList.toggle("clicked");
  }

  return (
    <header className="header-handheld">
      <Link to="/work" className={`btn-work-handheld ${props.onWork}`}>
        Work
      </Link>
      <Link to="/contact" className={`btn-contact-handheld ${props.onContact}`}>
        Contact
      </Link>

      {/*--For mobile devices---floating menu--*/}
      <ButtonIcon
        classNames="btn-menu"
        onClick={menuClick}
        iClassNames="fas fa-bars fa-2x"
      />
      <Link to="/" className="btn-menu-drop">
        Home
      </Link>
      <Link to="/work" className="btn-menu-drop">
        Work
      </Link>
      <Link to="/contact" className="btn-menu-drop">
        Contact
      </Link>
      <Link to="/about" className="btn-menu-drop">
        About
      </Link>
    </header>
  );
}

export default HeaderHandheld;
