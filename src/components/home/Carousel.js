import React, { useState } from "react";

function Carousel() {
  const refCarousel = React.createRef();
  //console.log("Observer", refCarousel);

  //const observer = new IntersectionObserver(animateCarousel, {threshold: 0.5,});

  //observer.observe(refCarousel);

  const [image1, setImage1] = useState(true);
  const [image2, setImage2] = useState(false);
  const [image3, setImage3] = useState(false);
  const [image4, setImage4] = useState(false);
  const [image5, setImage5] = useState(false);
  const refimage1 = React.createRef();
  const refimage2 = React.createRef();
  const refimage3 = React.createRef();
  const refimage4 = React.createRef();
  const refimage5 = React.createRef();
  let currentImage = refimage1.current;

  function radioClicked(e) {
    let currentRadioId = e.currentTarget.id;
    console.log("Inside radio clicked. You clicked ", e.currentTarget.id);

    setImage1(false);
    setImage2(false);
    setImage3(false);
    setImage4(false);
    setImage5(false);

    if (currentRadioId === "radio1") {
      setImage1(true);
      currentImage = refimage1.current;
    } else if (currentRadioId === "radio2") {
      setImage2(true);
      currentImage = refimage2.current;
    } else if (currentRadioId === "radio3") {
      setImage3(true);
      currentImage = refimage3.current;
    } else if (currentRadioId === "radio4") {
      setImage4(true);
      currentImage = refimage4.current;
    } else {
      setImage5(true);
      currentImage = refimage5.current;
    }
  }

  function leftarrowClicked() {
    currentImage = currentImage.previousElementSibling() || refimage5.current;

    if (currentImage === refimage1) setImage1(true);
    else if (currentImage === refimage2) setImage2(true);
    else if (currentImage === refimage3) setImage3(true);
    else if (currentImage === refimage4) setImage4(true);
    else if (currentImage === refimage5) setImage5(true);
  }

  function rightarrowClicked() {}

  return (
    <div className="carousel" id="carousel" ref={refCarousel}>
      {image1 ? (
        <div id="carouselImage1" className="carouselImages" ref={refimage1}>
          <img
            src="https://drive.google.com/uc?export=view&id=1pcwAFoDKoq-nQ6GjBs8iMplqKpnj6mFk"
            alt="Swans in landscape mode"
            height="100%"
          />
        </div>
      ) : null}

      {image2 ? (
        <div id="carouselImage2" className="carouselImages" ref={refimage2}>
          <img
            src="https://drive.google.com/uc?export=view&id=1WY1lyw1q6KZyrqus2t8nAmfI_qQLe3Ai"
            alt="Child sitting by a river"
            height="100%"
          />
        </div>
      ) : null}

      {image3 ? (
        <div id="carouselImage3" className="carouselImages" ref={refimage3}>
          <img
            src="https://drive.google.com/uc?export=view&id=12I6FjVcRu9O9j4FegrurkfKMtydWr9Pg"
            alt="Seascape"
            height="100%"
          />
        </div>
      ) : null}

      {image4 ? (
        <div id="carouselImage4" className="carouselImages" ref={refimage4}>
          <img
            src="https://drive.google.com/uc?export=view&id=18F5WkW1AtmjnWRkHsc-8Jp0n1iJoIi6s"
            alt="Snowscape"
            height="100%"
          />
        </div>
      ) : null}

      {image5 ? (
        <div id="carouselImage5" className="carouselImages" ref={refimage5}>
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
  );
}

export default Carousel;
