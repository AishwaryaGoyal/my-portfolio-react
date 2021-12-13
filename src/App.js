import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Work from "./pages/Work";
import Home from "./pages/Home";
import About from "./pages/About";
import "./styles/home.css";
import "./styles/work.css";
import "./styles/about.css";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/work">
          <Work />
        </Route>

        <Route path="/about">
          <About />
        </Route>

        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
