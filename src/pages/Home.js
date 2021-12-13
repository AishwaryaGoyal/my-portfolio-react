import React from "react";
import Header from "../components/common/Header";
import HeaderHandheld from "../components/common/HeaderHandheld";
import Content from "../components/home/Content";
import Works from "../components/home/Works";
import Footer from "../components/common/Footer";

function Home() {
  return (
    <div className="container">
      <HeaderHandheld />
      <Header />
      <Content />
      <Works />
      <Footer />
    </div>
  );
}

export default Home;
