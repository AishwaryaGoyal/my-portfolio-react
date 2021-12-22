import React from "react";
import ButtonIcon from "../common/ButtonIcon";

function CarouselRadio(props) {
  const radioBtns = props.radioButtons.map((radio) => (
    <ButtonIcon
      id={radio.id}
      classNames={props.classNames}
      onClick={props.onClick}
      iClassNames={props.iClassNames}
    ></ButtonIcon>
  ));
  return <div>{radioBtns}</div>;
}

export default CarouselRadio;
