import React from "react";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Experience from "./Components/Experience/Experience";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Navigation from "./Components/Navigation/Navigation";
import Portfolio from "./Components/Portfolio/Portfolio";
import Project from "./Components/Project/Project";

function App() {
  return (
    <>
      <Header />
      <Navigation />
      <About />
      <Experience />
      <Project />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
