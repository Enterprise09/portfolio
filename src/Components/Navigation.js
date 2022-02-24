import React from "react";
import "../scss/Navigation.scss";

function Navigation() {
  const PUBLIC_URL = process.env.PUBLIC_URL;
  return (
    <>
      <nav>
        <div className="nav_logo">Corder like Magic</div>
        <div className="nav_item_box">
          <div className="nav_item">Home</div>
          <div className="nav_item">About</div>
          <div className="nav_item">Skills</div>
          <div className="nav_item">Project</div>
          <div className="nav_item">Contact</div>
        </div>
      </nav>
      <img className="nav_github" src={PUBLIC_URL + "/images/github.png"} />
    </>
  );
}

export default Navigation;
