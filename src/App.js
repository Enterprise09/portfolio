import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import Navigation from "./Components/Navigation";
import "./css/App.css";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
