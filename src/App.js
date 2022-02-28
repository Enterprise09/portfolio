import React from "react";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
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
      <Contact />
      <Footer />
    </>
  );
}

export default App;
