import React from "react";

class Footer extends React.Component {
  render() {
    return (
      <div className="footer">
        <button type="button" className="btn-home-footer">
          <i className="fas fa-home fa-2x"></i>
        </button>
        <button type="button" className="btn-about-footer">
          <i className="fas fa-user-circle fa-2x"></i>
        </button>
      </div>
    );
  }
}

export default Footer;
