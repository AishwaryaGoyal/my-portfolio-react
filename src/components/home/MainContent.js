import React from "react";
import MainContentLeft from "./MainContentLeft";
import MainContentRight from "./MainContentRight";

function MainContent() {
  return (
    <main className="content">
      <MainContentLeft />
      <MainContentRight />
    </main>
  );
}

export default MainContent;
