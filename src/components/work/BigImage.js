import React from "react";

function BigImage(props) {
  console.log("It works");
  return (
    <div id="transparentDiv">
      <div id="bigImage">
        <img src={props.src} alt="Big size" />
        <button type="button" id="closeBtn" onClick={props.btnCloseClicked}>
          <i className="far fa-window-close fa-2x"></i>
        </button>
      </div>
    </div>
  );
}

export default BigImage;
