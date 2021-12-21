import React from "react";
import { Link } from "react-router-dom";

function HeaderMiddle(props) {
  return (
    <div className="header-middle">
      <Link to="/" className={`home-btn ${props.onHome}`}>
        Home
      </Link>

      <Link to="/work" className={`work-btn ${props.onWork}`}>
        Work
      </Link>

      <Link to="/about" className={`about-btn ${props.onAbout}`}>
        About
      </Link>
    </div>
  );
}
export default HeaderMiddle;
