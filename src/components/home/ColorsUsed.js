import React from "react";

function ColorsUsed(props) {
  return (
    <>
      <p>Colors mostly used:</p>
      {props.colorsUsed.map((color, index) => (
        <div className={color.className} key={color.id}>
          <button type="button" key={index}>
            {color.name}
          </button>
        </div>
      ))}
    </>
  );
}

export default ColorsUsed;
