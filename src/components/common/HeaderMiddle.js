import React from "react";
import { Link } from "react-router-dom";

function HeaderMiddle() {
  return (
    <div className="header-middle">
      <Link to="/home">Home</Link>
      <Link to="/work">Work</Link>
      <Link to="/about">About</Link>
    </div>
  );
}
export default HeaderMiddle;
