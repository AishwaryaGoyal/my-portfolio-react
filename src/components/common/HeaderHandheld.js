import React from "react";

function HeaderHandheld() {
  var clicked = 0;
  /*For mobile devices*/
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
      <a className="btn-work-handheld" href="work.html" role="button">
        <b>Work</b>
      </a>
      <a className="btn-contact-handheld" href="contact.html" role="button">
        <b>Contact</b>
      </a>

      {/*--For mobile devices---floating menu--*/}
      <button className="btn-menu" onClick={menuClick}>
        <i className="fas fa-bars fa-2x"></i>
      </button>
      <button className="btn-home-drop" id="btnHomeDrop" href="">
        <b>Home</b>
      </button>
      <button className="btn-work-drop" id="btnWorkDrop" href="work.html">
        <b>Work</b>
      </button>
      <button
        className="btn-contact-drop"
        id="btnContactDrop"
        href="contact.html"
      >
        <b>Contact</b>
      </button>
      <button className="btn-about-drop" id="btnAboutDrop" href="about.html">
        <b>About</b>
      </button>
    </div>
  );
}

export default HeaderHandheld;
