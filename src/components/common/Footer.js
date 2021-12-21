import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer">
      <Link to="/" style={{ textDecoration: "none" }}>
        <button type="button" id="btnHomeFooter">
          <i className="fas fa-home fa-2x"></i>
        </button>
      </Link>

      <Link to="/about" style={{ textDecoration: "none" }}>
        <button type="button" id="btnAboutFooter">
          <i className="fas fa-user-circle fa-2x"></i>
        </button>
      </Link>
    </div>
  );
}

export default Footer;
