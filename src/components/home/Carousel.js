import React, { useState } from "react";

function Carousel() {
  //const refCarousel = React.createRef();
  //console.log("Observer", refCarousel);

  //const observer = new IntersectionObserver(animateCarousel, {threshold: 0.5,});

  //observer.observe(refCarousel);

  const [image1, setImage1] = useState(true);
  const [image2, setImage2] = useState(false);
  const [image3, setImage3] = useState(false);
  const [image4, setImage4] = useState(false);
  const [image5, setImage5] = useState(false);

  const refImage1 = React.createRef();

  let currentImage = refImage1;
  console.log("Current image is ", currentImage);

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
      {image1 ? (
        <div id="carouselImage1" className="carouselImages" ref={refImage1}>
          <img
            src="https://drive.google.com/uc?export=view&id=1pcwAFoDKoq-nQ6GjBs8iMplqKpnj6mFk"
            alt="Swans in landscape mode"
            height="100%"
          />
        </div>
      ) : null}

      {image2 ? (
        <div id="carouselImage2" className="carouselImages">
          <img
            src="https://drive.google.com/uc?export=view&id=1WY1lyw1q6KZyrqus2t8nAmfI_qQLe3Ai"
            alt="Child sitting by a river"
            height="100%"
          />
        </div>
      ) : null}

      {image3 ? (
        <div id="carouselImage3" className="carouselImages">
          <img
            src="https://drive.google.com/uc?export=view&id=12I6FjVcRu9O9j4FegrurkfKMtydWr9Pg"
            alt="Seascape"
            height="100%"
          />
        </div>
      ) : null}

      {image4 ? (
        <div id="carouselImage4" className="carouselImages">
          <img
            src="https://drive.google.com/uc?export=view&id=18F5WkW1AtmjnWRkHsc-8Jp0n1iJoIi6s"
            alt="Snowscape"
            height="100%"
          />
        </div>
      ) : null}

      {image5 ? (
        <div id="carouselImage5" className="carouselImages">
          <img
            src="https://drive.google.com/uc?export=view&id=1YqV8WvXxF6yB09Q6egrE3fmumM3_JdCZ"
            alt="Abstract girl"
            height="100%"
          />
        </div>
      ) : null}

      <button id="leftArrow" className="arrows" onClick={leftarrowClicked}>
        <i className="fas fa-arrow-alt-circle-left fa-2x"></i>
      </button>
      <button id="rightArrow" className="arrows" onClick={rightarrowClicked}>
        <i className="fas fa-arrow-alt-circle-right fa-2x"></i>
      </button>

      <div>
        <button
          type="button"
          id="radio1"
          className="radios"
          onClick={radioClicked}
        >
          <i className="far fa-square"></i>
        </button>
        <button
          type="button"
          id="radio2"
          className="radios"
          onClick={radioClicked}
        >
          <i className="far fa-square"></i>
        </button>
        <button
          type="button"
          id="radio3"
          className="radios"
          onClick={radioClicked}
        >
          <i className="far fa-square"></i>
        </button>
        <button
          type="button"
          id="radio4"
          className="radios"
          onClick={radioClicked}
        >
          <i className="far fa-square"></i>
        </button>
        <button
          type="button"
          id="radio5"
          className="radios"
          onClick={radioClicked}
        >
          <i className="far fa-square"></i>
        </button>
      </div>
    </div>
  );
}

export default Carousel;
