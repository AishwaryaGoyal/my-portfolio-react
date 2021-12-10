import React from "react";

class HeaderMiddle extends React.Component {
  render() {
    return (
      <div className="header-middle">
        <button type="button" className="btn-home">
          Home
        </button>
        <button type="button" className="btn-work">
          Work
        </button>
        <button type="button" className="btn-about">
          About
        </button>
      </div>
    );
  }
}
export default HeaderMiddle;
