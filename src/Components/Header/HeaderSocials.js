import React from "react";
import { FaBlog, FaGithub, FaInstagram } from "react-icons/fa";

function HeaderSocials() {
  return (
    <div className="header__socials">
      <a href="https://enterprise09.github.io/" target="_blank">
        <FaBlog />
      </a>
      <a href="https://github.com" target="_blank">
        <FaGithub />
      </a>
      <a href="https://instargram.com" target="_blank">
        <FaInstagram />
      </a>
    </div>
  );
}

export default HeaderSocials;
