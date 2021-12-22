import React from "react";
import { Link } from "react-router-dom";

function Footer(props) {
  return (
    <footer className="footer">
      <Link to="/" className={`btn-home-footer ${props.onHome}`}>
        <i className="fas fa-home fa-2x"></i>
      </Link>

      <Link to="/about" className={`btn-about-footer ${props.onAbout}`}>
        <i className="fas fa-user-circle fa-2x"></i>
      </Link>
    </footer>
  );
}

export default Footer;
