import React from "react";
import CarouselRadio from "./CarouselRadio";
import CarouselImage from "./CarouselImage";
import images from "./CarouselImages";
import radioButtons from "./CarouselRadios";

function Carousel() {
  const totalImages = radioButtons.length;

  let currentRadioId = "radio1",
    currentRadioNumber = 0;
  let currentImage;
  let timeoutId;

  function onLoadCarousel(e) {
    currentImage = e.target;
    animateCarousel();
  }

  function animateCarousel() {
    timeoutId = setTimeout(rightarrowClicked, 2000);
  }

  function radioClicked(e) {
    clearTimeout(timeoutId);
    document
      .getElementById(currentRadioId)
      .firstElementChild.classList.remove("clicked");

    currentRadioId = e.currentTarget.id;
    currentRadioNumber = radioButtons.indexOf(currentRadioId);

    currentImage.key = images[currentRadioNumber].key;
    currentImage.src = images[currentRadioNumber].src;
    currentImage.alt = images[currentRadioNumber].alt;

    e.target.classList.add("clicked");
  }

  function leftarrowClicked() {
    clearTimeout(timeoutId);
    document
      .getElementById(currentRadioId)
      .firstElementChild.classList.remove("clicked");

    const prevRadioId =
      radioButtons[currentRadioNumber - 1] || radioButtons[totalImages - 1];

    document
      .getElementById(prevRadioId)
      .firstElementChild.classList.add("clicked");

    currentRadioId = prevRadioId;
    currentRadioNumber = radioButtons.indexOf(currentRadioId);
    currentImage.key = images[currentRadioNumber].key;
    currentImage.src = images[currentRadioNumber].src;
    currentImage.alt = images[currentRadioNumber].alt;
  }

  function rightarrowClicked() {
    clearTimeout(timeoutId);
    // console.log(currentImage);
    const currentRadio = document.getElementById(currentRadioId);
    if (currentRadio) {
      currentRadio.firstElementChild.classList.remove("clicked");
    } else return;

    const nextRadioId = radioButtons[currentRadioNumber + 1] || radioButtons[0];
    document
      .getElementById(nextRadioId)
      .firstElementChild.classList.add("clicked");

    currentRadioId = nextRadioId;
    currentRadioNumber = radioButtons.indexOf(currentRadioId);
    currentImage.key = images[currentRadioNumber].key;
    currentImage.src = images[currentRadioNumber].src;
    currentImage.alt = images[currentRadioNumber].alt;
  }

  return (
    <div className="carousel" id="carousel" onLoad={onLoadCarousel}>
      <CarouselImage image={images[0]} />

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
