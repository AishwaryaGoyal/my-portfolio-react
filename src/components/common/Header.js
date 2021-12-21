import React from "react";
import HeaderStart from "./HeaderStart";
import HeaderMiddle from "./HeaderMiddle";
import HeaderEnd from "./HeaderEnd";

function Header(props) {
  return (
    <div className="header">
      <HeaderStart />
      <HeaderMiddle
        onHome={props.onHome}
        onWork={props.onWork}
        onAbout={props.onAbout}
      />
      <HeaderEnd />
    </div>
  );
}

export default Header;
