import React from "react";
import HeaderHandheld from "../components/common/HeaderHandheld";
import Header from "../components/common/Header";
import Content from "../components/about/Content";
import Footer from "../components/common/Footer";
import "../styles/about.css";

function About(props) {
  return (
    <div className="container">
      <HeaderHandheld />
      <Header onAbout={props.onAbout} />
      <Content />
      <Footer onAbout={props.onAbout} />
    </div>
  );
}

export default About;
