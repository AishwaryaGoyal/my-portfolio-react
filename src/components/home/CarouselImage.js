import React from "react";

function CarouselImage(props) {
  return (
    <div id={props.image.id} key={props.image.key} className="carouselImages">
      <img src={props.image.src} alt={props.image.alt} height="100%" />
    </div>
  );
}

export default CarouselImage;
