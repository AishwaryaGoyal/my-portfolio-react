import React from "react";
import HeaderHandheld from "../components/common/HeaderHandheld";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import Form from "../components/contact/Form";

function Contact() {
  return (
    <>
      <i className="heart1 fas fa-heart"></i>
      <i className="heart2 fas fa-heart"></i>
      <i className="heart3 fas fa-heart"></i>
      <i className="heart4 fas fa-heart"></i>
      <i className="heart5 fas fa-heart"></i>
      <div className="container">
        <HeaderHandheld />
        <Header />
        <Form />
        <Footer />
      </div>
    </>
  );
}

export default Contact;
