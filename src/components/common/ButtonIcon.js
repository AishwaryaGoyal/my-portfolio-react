import React from "react";

function ButtonIcon(props) {
  return (
    <button
      type="button"
      id={props.id}
      key={props.id}
      className={props.classNames}
      onClick={props.onClick}
    >
      <i className={props.iClassNames}></i>
    </button>
  );
}

export default ButtonIcon;
