import React from "react";
import ContentLeft from "./ContentLeft";
import ContentRight from "./ContentRight";

function Content() {
  return (
    <div className="content">
      <ContentLeft />
      <ContentRight />
    </div>
  );
}

export default Content;
