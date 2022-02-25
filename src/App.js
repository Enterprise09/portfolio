import React from "react";
import About from "./Components/About";
import Home from "./Components/Home";
import Navigation from "./Components/Navigation";
import "./css/App.css";

function App() {
  // will be add scroll event to .App

  return (
    <div className="App">
      <Navigation />
      <Home />
      <About />
    </div>
  );
}

export default App;
