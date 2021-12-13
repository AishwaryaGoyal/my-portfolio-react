import React from "react";

function ColorsUsed(props) {
  return (
    <>
      <p>Colors mostly used:</p>
      {props.colorsUsed.map((color) => (
        <div className={color.className}>
          <button type="button">{color.name}</button>
        </div>
      ))}
    </>
  );
}

export default ColorsUsed;
