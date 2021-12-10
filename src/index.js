import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./App.css";

ReactDOM.render(<App />, document.getElementById("root"));

var currentRadioID, previousRadioID;
previousRadioID = "radio5";
currentRadioID = "radio1";

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
      "#" + clickedRadioID + " > .fa-square"
    ).style.backgroundColor = "white";
    document.querySelector(
      "#" + previousRadioID + "> .fa-square"
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
