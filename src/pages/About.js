import React from "react";
import HeaderHandheld from "../components/common/HeaderHandheld";
import Header from "../components/common/Header";
import MainContent from "../components/about/MainContent";
import Footer from "../components/common/Footer";
import "../styles/about.css";

function About(props) {
  return (
    <div className="container">
      <HeaderHandheld />
      <Header onAbout={props.onAbout} />
      <MainContent />
      <Footer onAbout={props.onAbout} />
    </div>
  );
}

export default About;
