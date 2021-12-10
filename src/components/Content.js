import React from "react";
import avatar from "../img/ReadyPlayerMeAvatar.png";

function Content() {
  return (
    <div className="content">
      <div className="div-intro-text">
        <h1 className="vlarge-text">Bringing to you. Aurora!</h1>
        <strong className="large-text">
          Free-lance, traditional artist from India
        </strong>
        <p className="small-text">
          Hey there! I am Aishwarya/ Aurora. I love working in all mediums like
          watercolors, oil paints, acrylics, pencil colors, plain pencil or pen.
          I have been painting for 5 long years and I just love my work.
          Painting is like meditation and recreation for me. I like to delve
          deep into the intricacies and make realistic drawings, as much as I do
          simple cartoonish characters. Nowadays I am drawing more on the side
          of cartoons, kawaii and chibi. Take some time and explore my site to
          know more about me and my works.
        </p>
        <a className="btn-contactus" href="contact.html" role="button">
          <b>Contact Us</b>
        </a>
      </div>

      <div className="div-image-avatar">
        <img src={avatar} alt="Avatar of artist" height="100%" width="100%" />
      </div>
    </div>
  );
}

export default Content;
