import React from "react";
import { Link } from "react-router-dom";

function HeaderMiddle() {
  return (
    <div className="header-middle">
      <Link to="/" style={{ textDecoration: "none" }}>
        <button className="btn-middle" id="btnHomeHeader" type="button">
          Home
        </button>
      </Link>

      <Link to="/work" style={{ textDecoration: "none" }}>
        <button className="btn-middle" id="btnWorkHeader" type="button">
          Work
        </button>
      </Link>

      <Link to="/about" style={{ textDecoration: "none" }}>
        <button className="btn-middle" id="btnAboutHeader" type="button">
          About
        </button>
      </Link>
    </div>
  );
}
export default HeaderMiddle;
