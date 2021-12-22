import React, { useState } from "react";
import ButtonIcon from "../common/ButtonIcon";
import images from "./Images";

function BigImage(props) {
  const [imageSrc, setImageSrc] = useState(props.src);
  const noOfImages = images.length;

  function leftArrowBigClicked() {
    const index = images.findIndex((image) => image.src === imageSrc);
    const newSrc = (images[index - 1] || images[noOfImages - 1]).src;

    setImageSrc(newSrc);
  }

  function rightArrowBigClicked() {
    const index = images.findIndex((image) => image.src === imageSrc);
    const newSrc = (images[index + 1] || images[0]).src;

    setImageSrc(newSrc);
  }

  return (
    <>
      <div id="transparentDiv"></div>
      <div id="bigImage">
        <img src={imageSrc} alt="Big size" />
        <ButtonIcon
          id="closeBtn"
          onClick={props.btnCloseClicked}
          iClassNames="far fa-window-close fa-2x"
        />
        <ButtonIcon
          id="leftArrowBig"
          classNames="arrows-big"
          onClick={leftArrowBigClicked}
          iClassNames="fas fa-arrow-alt-circle-left fa-3x"
        />
        <ButtonIcon
          id="rightArrowBig"
          classNames="arrows-big"
          onClick={rightArrowBigClicked}
          iClassNames="fas fa-arrow-alt-circle-right fa-3x"
        />
      </div>
    </>
  );
}

export default BigImage;
