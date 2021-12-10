import React from "react";

class HeaderHandheld extends React.Component {
  render() {
    return (
      <div className="header-handheld" id="headerHandheld">
        <button type="button" className="btn-work-handheld">
          Work
        </button>
        <button type="button" className="btn-contact-handheld">
          Contact
        </button>

        {/*--For mobile devices---floating menu--*/}
        <button className="btn-menu">
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
}

export default HeaderHandheld;
