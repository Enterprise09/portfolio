import React from "react";
import { FaBlog, FaGithub, FaInstagram } from "react-icons/fa";
import "./Footer.css";

function Footer() {
  return (
    <footer>
      <a href="" className="footer__logo">
        ENTERPRISE
      </a>

      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#project">Project</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a href="https://instargram.com" target="_blank">
          <FaInstagram />
        </a>
        <a href="https://github.com/Enterprise09" target="_blank">
          <FaGithub />
        </a>
        <a href="https://Enterprise09.github.io" target="_blank">
          <FaBlog />
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; ENTERPRISE. All rights reserved</small>
      </div>
    </footer>
  );
}

export default Footer;
