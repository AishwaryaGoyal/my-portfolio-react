import React from "react";
import { Link } from "react-router-dom";

function HeaderStart() {
  return (
    <div className="header-start">
      <Link to="/about" className="about-aurora">
        <img
          src="https://drive.google.com/uc?export=view&id=1hnEiYpoWR_MXa2QyGsqySRDok3AE1kG8"
          className="emoji"
          alt="Emoji"
          width="60px"
        />
        <strong className="txt-aurora">Aurora</strong>
      </Link>
    </div>
  );
}
export default HeaderStart;
