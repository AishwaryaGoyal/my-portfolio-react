import React from "react";
import Header from "../components/common/Header";
import HeaderHandheld from "../components/common/HeaderHandheld";
import Content from "../components/home/Content";
import Works from "../components/home/Works";
import Carousel from "../components/home/Carousel";
import Footer from "../components/common/Footer";
import "../styles/home.css";

function Home() {
  function onLoadHome() {
    const btnHome = document.getElementById("btnHomeHeader");
    btnHome.classList.add("home");
    const btnHomeFooter = document.getElementById("btnHomeFooter");
    btnHomeFooter.classList.add("home");
  }
  return (
    <div className="container" onLoad={onLoadHome}>
      <HeaderHandheld />
      <Header />
      <Content />
      <Works />
      <Carousel />
      <Footer />
    </div>
  );
}

export default Home;
