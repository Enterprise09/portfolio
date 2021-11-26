import React, { useEffect, useState } from "react";
import "../scss/Navigation.scss";

const Navigation = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const onScroll = () => {
    setScrollPosition(window.scrollY || document.documentElement.scrollTop);
  };
  useEffect(() => {
    window.addEventListener("scroll", onScroll);
  });

  return (
    <nav className={scrollPosition < 10 ? "original_nav" : "change_nav"}>
      <ul>
        <a href="#intro" className="logo">
          <li className="logo">Enterprise's Portfolio</li>
        </a>
        <a href="#about">
          <li>About</li>
        </a>
        <a href="#skills">
          <li>Skills</li>
        </a>
        <a href="#archive">
          <li>Archive</li>
        </a>
        <a href="#projects">
          <li>Projects</li>
        </a>
      </ul>
    </nav>
  );
};

export default Navigation;
