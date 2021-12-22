import React from "react";
import Button from "../common/Button";

function ColorsUsed(props) {
  return (
    <>
      <p>Colors mostly used:</p>
      {props.colorsUsed.map((color, index) => (
        <div className={color.className} key={color.id}>
          <Button key={index} text={color.name} classNames="color-btn" />
        </div>
      ))}
    </>
  );
}

export default ColorsUsed;
