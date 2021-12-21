import React from "react";

function BigImage(props) {
  return (
    <>
      <div id="transparentDiv"></div>
      <div id="bigImage">
        <img src={props.src} alt="Big size" />
        <button type="button" id="closeBtn" onClick={props.btnCloseClicked}>
          <i className="far fa-window-close fa-2x"></i>
        </button>
      </div>
    </>
  );
}

export default BigImage;
