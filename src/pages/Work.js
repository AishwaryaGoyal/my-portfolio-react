import React, { useState } from "react";
import HeaderHandheld from "../components/common/HeaderHandheld";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import Image from "../components/work/Image";
import BigImage from "../components/work/BigImage";
import images from "../components/work/Images";

function Work() {
  const [showBigImage, setShowBigImage] = useState(false);
  var srcBigImage;

  function clickImage(e) {
    srcBigImage = e.target.src;
    setShowBigImage(true);
  }

  function btnCloseClicked() {
    setShowBigImage(false);
  }

  return (
    <div id="container" className="container">
      <HeaderHandheld />
      <Header />
      <div className="works">
        <Image images={images} onClick={clickImage} />
      </div>
      <Footer />
      {showBigImage ? (
        <BigImage src={srcBigImage} btnCloseClicked={btnCloseClicked} />
      ) : null}
    </div>
  );
}

export default Work;
