import React from "react";
import Header from "../components/common/Header";
import HeaderHandheld from "../components/common/HeaderHandheld";
import Content from "../components/home/Content";
import Works from "../components/home/Works";
import Carousel from "../components/home/Carousel";
import Footer from "../components/common/Footer";
import "../styles/home.css";

function Home(props) {
  console.log("on home is ", props.onHome);
  return (
    <div className="container">
      <HeaderHandheld />
      <Header onHome={props.onHome} />
      <Content />
      <Works />
      <Carousel />
      <Footer onHome={props.onHome} />
    </div>
  );
}

export default Home;
