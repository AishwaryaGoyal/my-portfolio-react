import React from "react";
import HeaderStart from "./HeaderStart";
import HeaderMiddle from "./HeaderMiddle";
import HeaderEnd from "./HeaderEnd";

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <HeaderStart />
        <HeaderMiddle />
        <HeaderEnd />
      </div>
    );
  }
}

export default Header;
