import React from "react";

function Carousel() {
  var currentRadioID = "radio1",
    previousRadioID = "radio5";

  function radioClicked(e) {
    var image1, image2, image3, image4, image5;
    const clickedRadioID = e.target.id;
    currentRadioID = clickedRadioID;

    image1 = document.getElementById("carouselImage1");
    image2 = document.getElementById("carouselImage2");
    image3 = document.getElementById("carouselImage3");
    image4 = document.getElementById("carouselImage4");
    image5 = document.getElementById("carouselImage5");

    image1.style.display = "none";
    image2.style.display = "none";
    image3.style.display = "none";
    image4.style.display = "none";
    image5.style.display = "none";

    if (clickedRadioID === "radio1") {
      image1.style.display = "block";
    } else if (clickedRadioID === "radio2") {
      image2.style.display = "block";
    } else if (clickedRadioID === "radio3") {
      image3.style.display = "block";
    } else if (clickedRadioID === "radio4") {
      image4.style.display = "block";
    } else {
      image5.style.display = "block";
    }

    if (clickedRadioID !== previousRadioID) {
      document.querySelector(
        `#${clickedRadioID} > .fa-square`
      ).style.backgroundColor = "white";
      document.querySelector(
        `#${previousRadioID} > .fa-square`
      ).style.backgroundColor = "transparent";
    }
    previousRadioID = clickedRadioID;
  }

  function leftarrowClicked() {
    var prevRadioID;
    if (currentRadioID === "radio1") {
      prevRadioID = "radio5";
    } else if (currentRadioID === "radio2") {
      prevRadioID = "radio1";
    } else if (currentRadioID === "radio3") {
      prevRadioID = "radio2";
    } else if (currentRadioID === "radio4") {
      prevRadioID = "radio3";
    } else {
      prevRadioID = "radio4";
    }
    document.getElementById(prevRadioID).click();
  }

  function rightarrowClicked() {
    var nextRadioID;
    if (currentRadioID === "radio1") {
      nextRadioID = "radio2";
    } else if (currentRadioID === "radio2") {
      nextRadioID = "radio3";
    } else if (currentRadioID === "radio3") {
      nextRadioID = "radio4";
    } else if (currentRadioID === "radio4") {
      nextRadioID = "radio5";
    } else {
      nextRadioID = "radio1";
    }
    document.getElementById(nextRadioID).click();
  }

  return (
    <div className="carousel" id="carousel">
      <div id="carouselImage1">
        <img alt="Swans in landscape mode" height="100%" />
      </div>
      <div id="carouselImage2">
        <img alt="Child sitting by a river" height="100%" />
      </div>
      <div id="carouselImage3">
        <img alt="Seascape" height="100%" />
      </div>
      <div id="carouselImage4">
        <img alt="Snowscape" height="100%" />
      </div>
      <div id="carouselImage5">
        <img alt="Abstract girl" height="100%" />
      </div>

      <button id="leftArrow" onClick={leftarrowClicked}>
        <i className="fas fa-arrow-alt-circle-left fa-2x"></i>
      </button>
      <button id="rightArrow" onClick={rightarrowClicked}>
        <i className="fas fa-arrow-alt-circle-right fa-2x"></i>
      </button>

      <button type="button" id="radio1" onClick={radioClicked}>
        <i className="far fa-square"></i>
      </button>
      <button type="button" id="radio2" onClick={radioClicked}>
        <i className="far fa-square"></i>
      </button>
      <button type="button" id="radio3" onClick={radioClicked}>
        <i className="far fa-square"></i>
      </button>
      <button type="button" id="radio4" onClick={radioClicked}>
        <i className="far fa-square"></i>
      </button>
      <button type="button" id="radio5" onClick={radioClicked}>
        <i className="far fa-square"></i>
      </button>
    </div>
  );
}

export default Carousel;
