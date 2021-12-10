import React from "react";
import ExplanationWork1 from "./ExplanationWork1";
import ExplanationWork2 from "./ExplanationWork2";
import ExplanationWork3 from "./ExplanationWork3";

class Work extends React.Component {
  render() {
    return (
      <>
        <div className="work">
          <div className="video-container">
            <iframe
              title="Child by the river"
              src="https://drive.google.com/file/d/158hm-4jYZqmdZghM3o5IucFYaoPe3g4T/preview"
              height="450"
              allow="autoplay"
            ></iframe>
          </div>
          <ExplanationWork1 />
        </div>
        <div className="work">
          <div className="video-container">
            <iframe
              title="Moon and water girl"
              src="https://drive.google.com/file/d/1nUGlKyuTlh0wthWycPteTOx9MekGJWjn/preview"
              height="450"
              allow="autoplay"
            ></iframe>
          </div>
          <ExplanationWork2 />
        </div>
        <div className="work">
          <div className="video-container">
            <iframe
              title="Flowers on a bicycle"
              src="https://drive.google.com/file/d/1rhItnBvUivaAx8DPqPTjetR4QoXgMWW9/preview"
              height="450"
              allow="autoplay"
            ></iframe>
          </div>
          <ExplanationWork3 />
        </div>
      </>
    );
  }
}

export default Work;
