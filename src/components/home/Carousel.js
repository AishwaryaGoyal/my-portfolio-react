import React, { useState } from "react";
import CarouselRadio from "./CarouselRadio";
import CarouselImage from "./CarouselImage";
import images from "./CarouselImages";

function Carousel() {
  const radioButtons = ["radio1", "radio2", "radio3", "radio4", "radio5"];
  //const refCarousel = React.createRef();
  //console.log("Observer", refCarousel);

  //const observer = new IntersectionObserver(animateCarousel, {threshold: 0.5,});

  //observer.observe(refCarousel);

  const [image1, setImage1] = useState(true);
  const [image2, setImage2] = useState(false);
  const [image3, setImage3] = useState(false);
  const [image4, setImage4] = useState(false);
  const [image5, setImage5] = useState(false);

  //const refImage1 = React.createRef();

  // let currentImage = refImage1;
  // console.log("Current image is ", currentImage);

  let currentRadioId;

  function radioClicked(e) {
    currentRadioId = e.currentTarget.id;

    document
      .querySelectorAll(".fa-square")
      .forEach((el) => el.classList.remove("clicked"));

    e.target.classList.add("clicked");

    setImage1(false);
    setImage2(false);
    setImage3(false);
    setImage4(false);
    setImage5(false);

    if (currentRadioId === "radio1") {
      setImage1(true);
    } else if (currentRadioId === "radio2") {
      setImage2(true);
    } else if (currentRadioId === "radio3") {
      setImage3(true);
    } else if (currentRadioId === "radio4") {
      setImage4(true);
    } else {
      setImage5(true);
    }
  }

  function leftarrowClicked() {
    document
      .querySelectorAll(".fa-square")
      .forEach((el) => el.classList.remove("clicked"));

    if (image1) {
      document
        .getElementById("radio5")
        .firstElementChild.classList.add("clicked");
      setImage5(true);
      setImage1(false);
    } else if (image2) {
      document
        .getElementById("radio1")
        .firstElementChild.classList.add("clicked");
      setImage1(true);
      setImage2(false);
    } else if (image3) {
      document
        .getElementById("radio2")
        .firstElementChild.classList.add("clicked");
      setImage2(true);
      setImage3(false);
    } else if (image4) {
      document
        .getElementById("radio3")
        .firstElementChild.classList.add("clicked");
      setImage3(true);
      setImage4(false);
    } else {
      document
        .getElementById("radio4")
        .firstElementChild.classList.add("clicked");
      setImage4(true);
      setImage5(false);
    }
  }

  function rightarrowClicked() {
    document
      .querySelectorAll(".fa-square")
      .forEach((el) => el.classList.remove("clicked"));

    if (image1) {
      document
        .getElementById("radio2")
        .firstElementChild.classList.add("clicked");
      setImage2(true);
      setImage1(false);
    } else if (image2) {
      document
        .getElementById("radio3")
        .firstElementChild.classList.add("clicked");
      setImage3(true);
      setImage2(false);
    } else if (image3) {
      document
        .getElementById("radio4")
        .firstElementChild.classList.add("clicked");
      setImage4(true);
      setImage3(false);
    } else if (image4) {
      document
        .getElementById("radio5")
        .firstElementChild.classList.add("clicked");
      setImage5(true);
      setImage4(false);
    } else {
      document
        .getElementById("radio1")
        .firstElementChild.classList.add("clicked");
      setImage1(true);
      setImage5(false);
    }
  }

  return (
    <div className="carousel" id="carousel">
      {image1 ? <CarouselImage image={images[0]} /> : null}
      {image2 ? <CarouselImage image={images[1]} /> : null}
      {image3 ? <CarouselImage image={images[2]} /> : null}
      {image4 ? <CarouselImage image={images[3]} /> : null}
      {image5 ? <CarouselImage image={images[4]} /> : null}

      <button id="leftArrow" className="arrows" onClick={leftarrowClicked}>
        <i className="fas fa-arrow-alt-circle-left fa-2x"></i>
      </button>
      <button id="rightArrow" className="arrows" onClick={rightarrowClicked}>
        <i className="fas fa-arrow-alt-circle-right fa-2x"></i>
      </button>

      <CarouselRadio radioButtons={radioButtons} radioClicked={radioClicked} />
    </div>
  );
}

export default Carousel;
