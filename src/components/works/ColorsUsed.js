import React from "react";

function ColorsUsed(props) {
  const colorDivs = props.colorsUsed.map((color) => (
    <div className={color.className}>
      <a>{color.name}</a>
    </div>
  ));

  return (
    <>
      <p>Colors mostly used:</p>
      {colorDivs}
    </>
  );
}

export default ColorsUsed;
