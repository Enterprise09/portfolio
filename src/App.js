import React from "react";
import About from "./Components/About/About";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Navigation from "./Components/Navigation/Navigation";
import Project from "./Components/Project/Project";
import Skills from "./Components/Skills/Skills";

function App() {
  return (
    <>
      <Header />
      <Navigation />
      <About />
      <Skills />
      <Project />
      <Footer />
    </>
  );
}

export default App;
