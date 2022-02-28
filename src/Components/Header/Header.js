import React from "react";
import CTA from "./CTA";
import ME from "../../assets/images/me.jpg";
import MEFULLSHOT from "../../assets/images/me_fullshot.png";
import HeaderSocials from "./HeaderSocials";
import "./Header.css";

function Header() {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>TaeHo Kim</h1>
        <h5 className="text-light">Fullstack Developer</h5>
        <CTA />
        <HeaderSocials />
        <div className="me">
          <img src={ME} alt="me" />
        </div>
        <a href="#contact" className="scroll_down">
          Scroll Down
        </a>
      </div>
    </header>
  );
}

export default Header;
