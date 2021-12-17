import React from "react";

function CarouselRadio(props) {
  const radioButtons = props.radioButtons.map((radio) => (
    <button
      type="button"
      id={radio}
      key={radio}
      className="radios"
      onClick={props.radioClicked}
    >
      <i className="far fa-square"></i>
    </button>
  ));
  return <div>{radioButtons}</div>;
}

export default CarouselRadio;
