import React from "react";

class ColorsUsed extends React.Component {
  render() {
    return (
      <>
        <p>Colors mostly used:</p>
        {this.props.colorsUsed.map((color) => (
          <div className={color.className}>
            <button type="button">{color.name}</button>
          </div>
        ))}
      </>
    );
  }
}

export default ColorsUsed;
