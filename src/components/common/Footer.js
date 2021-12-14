import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer">
      <Link to="/home">
        <button type="button" className="btn-home-footer">
          <i className="fas fa-home fa-2x"></i>
        </button>
      </Link>

      <Link to="/about">
        <button type="button" className="btn-about-footer">
          <i className="fas fa-user-circle fa-2x"></i>
        </button>
      </Link>
    </div>
  );
}

export default Footer;
