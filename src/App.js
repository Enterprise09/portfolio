import React, { useEffect } from "react";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Experience from "./Components/Experience/Experience";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Navigation from "./Components/Navigation/Navigation";
import Portfolio from "./Components/Portfolio/Portfolio";
import Project from "./Components/Project/Project";
import Aos from "aos";
import "aos/dist/aos.css";
import { useMediaQuery } from "react-responsive";

function App() {
  const md = useMediaQuery({
    query: "(max-width: 1024px)",
  });
  const sd = useMediaQuery({
    query: "(max-width: 600px)",
  });
  const deviceSize = md || sd;
  useEffect(() => {
    Aos.init({
      duration: 2000,
    });
  }, []);
  return (
    <>
      <Header />
      <Navigation />
      <About />
      <Experience />
      <Project deviceSize={deviceSize} />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
