import React from "react";
import HeaderHandheld from "../components/common/HeaderHandheld";
import Header from "../components/common/Header";
import AboutLeft from "../components/about/AboutLeft";
import AboutRight from "../components/about/AboutRight";
import Footer from "../components/common/Footer";

function About() {
  return (
    <div class="container">
      <HeaderHandheld />
      <Header />

      <div class="about">
        <AboutLeft />
        <AboutRight />
      </div>

      <Footer />
    </div>
  );
}

export default About;
