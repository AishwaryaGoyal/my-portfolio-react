import React from "react";
import HeaderHandheld from "../components/common/HeaderHandheld";
import Header from "../components/common/Header";
import Content from "../components/about/Content";
import Footer from "../components/common/Footer";
import "../styles/about.css";

function About() {
  return (
    <div className="container">
      <HeaderHandheld />
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default About;
