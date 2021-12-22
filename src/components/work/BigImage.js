import React from "react";
import ButtonIcon from "../common/ButtonIcon";

function BigImage(props) {
  return (
    <>
      <div id="transparentDiv"></div>
      <div id="bigImage">
        <img src={props.src} alt="Big size" />
        <ButtonIcon
          id="closeBtn"
          onClick={props.btnCloseClicked}
          iClassNames="far fa-window-close fa-2x"
        />
      </div>
    </>
  );
}

export default BigImage;
