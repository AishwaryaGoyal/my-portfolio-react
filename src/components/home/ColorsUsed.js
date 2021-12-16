import React from "react";
import { nanoid } from "nanoid";

function ColorsUsed(props) {
  return (
    <>
      <p key={nanoid}>Colors mostly used:</p>
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
