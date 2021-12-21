import React from "react";
import HeaderHandheld from "../components/common/HeaderHandheld";
import Header from "../components/common/Header";
import Content from "../components/about/Content";
import Footer from "../components/common/Footer";
import "../styles/about.css";

function About() {
  function onLoadAbout() {
    const btnAbout = document.getElementById("btnAboutHeader");
    btnAbout.classList.add("about");
    const btnAboutFooter = document.getElementById("btnAboutFooter");
    btnAboutFooter.classList.add("about");
  }
  return (
    <div className="container" onLoad={onLoadAbout}>
      <HeaderHandheld />
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default About;
