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
        <Route path="/contact" component={Contact}></Route>
        <Route path="/work" component={Work}></Route>
        <Route path="/about" component={About}></Route>
        <Route path="/" component={Home}></Route>
      </Switch>
    </Router>
  );
}

export default App;
