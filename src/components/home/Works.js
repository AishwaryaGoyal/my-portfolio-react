import React from "react";
import Video from "./Video";
import ExplanationWork1 from "./ExplanationWork1";
import ExplanationWork2 from "./ExplanationWork2";
import ExplanationWork3 from "./ExplanationWork3";

function Works() {
  return (
    <>
      <div className="work">
        <Video
          title="Child by the river"
          src="https://drive.google.com/file/d/158hm-4jYZqmdZghM3o5IucFYaoPe3g4T/preview"
        />
        <ExplanationWork1 />
      </div>

      <div className="work">
        <Video
          title="Moon and water girl"
          src="https://drive.google.com/file/d/1nUGlKyuTlh0wthWycPteTOx9MekGJWjn/preview"
        />
        <ExplanationWork2 />
      </div>

      <div className="work">
        <Video
          title="Flowers on a bicycle"
          src="https://drive.google.com/file/d/1rhItnBvUivaAx8DPqPTjetR4QoXgMWW9/preview"
        />
        <ExplanationWork3 />
      </div>
    </>
  );
}

export default Works;
