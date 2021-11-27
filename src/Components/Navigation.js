import {
  faAddressCard,
  faArchive,
  faBars,
  faLayerGroup,
  faProjectDiagram,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import "../scss/Navigation.scss";

const Navigation = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isDropdown, setIsDropDown] = useState(false);
  const onScroll = () => {
    setScrollPosition(window.scrollY || document.documentElement.scrollTop);
  };
  useEffect(() => {
    window.addEventListener("scroll", onScroll);
  });
  const isMobile = useMediaQuery({
    query: "(max-width: 1180px)",
  });
  const onToggleClick = () => {
    setIsDropDown(!isDropdown);
  };

  return (
    <>
      {isMobile ? (
        <nav className="mobile_nav">
          <div className="mobile_nav_box">
            <a href="#intro">
              <div className="intro_logo">Enterprise's Portfolio</div>
            </a>
            <>
              {isDropdown ? (
                <>
                  <FontAwesomeIcon
                    className="mobile_nav_toggle"
                    icon={faTimes}
                    size="2x"
                    onClick={onToggleClick}
                  />
                  <ul>
                    <a href="#about">
                      <FontAwesomeIcon
                        className="nav_item_icon"
                        icon={faAddressCard}
                        size="1x"
                      />
                      <li>About</li>
                    </a>
                    <a href="#skills">
                      <FontAwesomeIcon
                        className="nav_item_icon"
                        icon={faLayerGroup}
                        size="1x"
                      />
                      <li>Skills</li>
                    </a>
                    <a href="#archive">
                      <FontAwesomeIcon
                        className="nav_item_icon"
                        icon={faArchive}
                        size="1x"
                      />
                      <li>Archive</li>
                    </a>
                    <a href="#projects">
                      <FontAwesomeIcon
                        className="nav_item_icon"
                        icon={faProjectDiagram}
                        size="1x"
                      />
                      <li>Projects</li>
                    </a>
                  </ul>
                </>
              ) : (
                <FontAwesomeIcon
                  className="mobile_nav_toggle"
                  icon={faBars}
                  size="2x"
                  onClick={onToggleClick}
                />
              )}
            </>
          </div>
        </nav>
      ) : (
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
      )}
    </>
  );
};

export default Navigation;
