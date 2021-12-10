import React from "react";

import emoji from "../../img/emoji.png";

function HeaderStart() {
  return (
    <div className="header-start">
      <a href="about.html" role="button">
        <img className="emoji" src={emoji} alt="Emoji" width="60px" />
        <br />
        <strong className="txt-aurora">Aurora</strong>
      </a>
    </div>
  );
}
export default HeaderStart;
