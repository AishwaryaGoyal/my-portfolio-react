import React from "react";
import Header from "./components/common/Header";
import Content from "./components/Content";
import Work from "./components/works/Work";
import Carousel from "./components/Carousel";
import Footer from "./components/common/Footer";
import HeaderHandheld from "./components/common/HeaderHandheld";

function App() {
  return (
    <div className="container">
      <HeaderHandheld />
      <Header />
      <Content />
      <Work />
      <Carousel />
      <Footer />
    </div>
  );
}

export default App;
