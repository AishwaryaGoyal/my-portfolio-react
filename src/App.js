import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Work from "./pages/Work";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/work">
          <Work />
        </Route>

        <Route path="/about">About</Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
