import React from "react";
import Header from "../components/common/Header";
import HeaderHandheld from "../components/common/HeaderHandheld";
import MainContent from "../components/home/MainContent";
import Works from "../components/home/Works";
import Carousel from "../components/home/Carousel";
import Footer from "../components/common/Footer";
import "../styles/home.css";

function Home(props) {
  return (
    <div className="container">
      <HeaderHandheld />
      <Header onHome={props.onHome} />
      <MainContent />
      <Works />
      <Carousel />
      <Footer onHome={props.onHome} />
    </div>
  );
}

export default Home;
