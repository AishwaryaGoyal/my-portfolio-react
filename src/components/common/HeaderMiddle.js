import React from "react";
import { Link } from "react-router-dom";

function HeaderMiddle() {
  return (
    <div className="header-middle">
      <Link to="/home">
        <button className="btn-home" type="button">
          Home
        </button>
      </Link>

      <Link to="/work">
        <button className="btn-work" type="button">
          Work
        </button>
      </Link>

      <Link to="/about">
        <button className="btn-about" type="button">
          About
        </button>
      </Link>
    </div>
  );
}
export default HeaderMiddle;
