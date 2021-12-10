import React from "react";
import Header from "./components/common/Header";
import Content from "./components/Content";
import Work from "./components/works/Work";
import Carousel from "./components/Carousel";
import Footer from "./components/common/Footer";
import HeaderHandheld from "./components/common/HeaderHandheld";

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <HeaderHandheld />
        <Header />
        <Content />
        <Work />
        <Footer />
      </div>
    );
  }
}

export default App;
