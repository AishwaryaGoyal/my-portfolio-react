import React from "react";
import ColorsUsed from "./ColorsUsed";

function Explanation2() {
  const colors = [
    {
      name: "Prussian Blue",
      className: "prussianblue",
    },
    {
      name: "Cobalt Blue",
      className: "cobaltblue",
    },
  ];

  return (
    <div className="explanation-work">
      I made this painting in the end of 2019. I call it "Beyond" due to its
      celestial theme. I have used the astrological elements of the Cancerian
      horoscope- moon and water. Along with that I have included some mountains
      and clouds. The girl in the picture is coming out of the waves taking form
      of water itself. Girl's reference is taken from pinterest. It took me 1
      month to complete this painting. I worked during the weekdays for 2 hours
      every day on an average. This painting is completely made using oil
      colors. This is a video attached on the side that you see here. Go ahead
      and play it to get a zoomed-in view of the painting. The unframed size of
      this painting is 2*2.5 feet.
      <ColorsUsed colorsUsed={colors} />
    </div>
  );
}

export default Explanation2;
