import React from "react";

import emoji from "../../img/emoji.png";

class HeaderStart extends React.Component {
  render() {
    return (
      <div className="header-start">
        <button type="button">
          <img className="emoji" src={emoji} alt="Emoji" width="60px" />
          <br />
          <strong className="txt-aurora">Aurora</strong>
        </button>
      </div>
    );
  }
}
export default HeaderStart;
