import React from "react";

function Content() {
  return (
    <div className="content">
      <div className="div-intro-text">
        <h1 className="vlarge-text">Bringing to you. Aurora!</h1>
        <h2 className="large-text">
          Free-lance, traditional artist from India
        </h2>
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
        <button type="button" className="btn-contactus">
          Contact Us
        </button>
      </div>

      <div className="div-image-avatar">
        <img
          src="https://drive.google.com/uc?export=view&id=1Ew-u8aSLsd-7iA-MYOMo0gtyS8Ev9gXv"
          alt="Avatar of artist"
        />
      </div>
    </div>
  );
}

export default Content;
