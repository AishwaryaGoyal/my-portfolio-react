import React from "react";

function Button(props) {
  return (
    <button type="button" id={props.id} className={props.classNames}>
      {props.text}
    </button>
  );
}

export default Button;
