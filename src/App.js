import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Components/Home";
import Navigation from "./Components/Navigation";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Home />
    </div>
  );
}

export default App;
