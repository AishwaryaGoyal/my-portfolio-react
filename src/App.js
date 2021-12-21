import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Work from "./pages/Work";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/contact">
          <Contact onContact="onContact" />
        </Route>
        <Route path="/work">
          <Work onWork="onWork" />
        </Route>
        <Route path="/about">
          <About onAbout="onAbout" />
        </Route>
        <Route path="/">
          <Home onHome="onHome" />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
