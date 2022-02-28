import React, { useState } from "react";
import { FaHome, FaUser } from "react-icons/fa";
import { BsStack } from "react-icons/bs";
import { BiMessageDetail } from "react-icons/bi";
import { AiOutlineProject } from "react-icons/ai";
import "./Navigation.css";

function Navigation() {
  const [activeNav, setActiveNav] = useState("#");
  return (
    <nav>
      <a
        href="#"
        className={activeNav === "#" ? "active" : ""}
        onClick={() => {
          setActiveNav("#");
        }}
      >
        <FaHome />
      </a>
      <a
        href="#about"
        className={activeNav === "#about" ? "active" : ""}
        onClick={() => {
          setActiveNav("#about");
        }}
      >
        <FaUser />
      </a>
      <a
        href="#skills"
        className={activeNav === "#skills" ? "active" : ""}
        onClick={() => {
          setActiveNav("#skills");
        }}
      >
        <BsStack />
      </a>
      <a
        href="#project"
        className={activeNav === "#project" ? "active" : ""}
        onClick={() => {
          setActiveNav("#project");
        }}
      >
        <AiOutlineProject />
      </a>
      <a
        href="#contact"
        className={activeNav === "#contact" ? "active" : ""}
        onClick={() => {
          setActiveNav("#contact");
        }}
      >
        <BiMessageDetail />
      </a>
    </nav>
  );
}

export default Navigation;
