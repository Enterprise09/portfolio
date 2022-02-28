import React from "react";
import { BiCheck } from "react-icons/bi";
import "./Project.css";

function Project() {
  return (
    <section id="project">
      <h5>What I Made</h5>
      <h2>Projects</h2>

      <div className="container project__container">
        <article className="project">
          <div className="project__head">
            <h3>Web Development</h3>
          </div>
          <ul className="project__list">
            <li>
              <BiCheck className="project__list-icon" />
              <p>Lorem, ipsum dolor sit amet consectetur elit</p>
            </li>
            <li>
              <BiCheck className="project__list-icon" />
              <p>Lorem, ipsum dolor sit amet consectetur elit</p>
            </li>
            <li>
              <BiCheck className="project__list-icon" />
              <p>Lorem, ipsum dolor sit amet consectetur elit</p>
            </li>
            <li>
              <BiCheck className="project__list-icon" />
              <p>Lorem, ipsum dolor sit amet consectetur elit</p>
            </li>
            <li>
              <BiCheck className="project__list-icon" />
              <p>Lorem, ipsum dolor sit amet consectetur elit</p>
            </li>
            <li>
              <BiCheck className="project__list-icon" />
              <p>Lorem, ipsum dolor sit amet consectetur elit</p>
            </li>
          </ul>
        </article>
        {/* End of Web Development part */}
        <article className="project">
          <div className="project__head">
            <h3>Mobile Development</h3>
          </div>
          <ul className="project__list">
            <li>
              <BiCheck className="project__list-icon" />
              <p>Lorem, ipsum dolor sit amet consectetur elit</p>
            </li>
            <li>
              <BiCheck className="project__list-icon" />
              <p>Lorem, ipsum dolor sit amet consectetur elit</p>
            </li>
            <li>
              <BiCheck className="project__list-icon" />
              <p>Lorem, ipsum dolor sit amet consectetur elit</p>
            </li>
            <li>
              <BiCheck className="project__list-icon" />
              <p>Lorem, ipsum dolor sit amet consectetur elit</p>
            </li>
            <li>
              <BiCheck className="project__list-icon" />
              <p>Lorem, ipsum dolor sit amet consectetur elit</p>
            </li>
            <li>
              <BiCheck className="project__list-icon" />
              <p>Lorem, ipsum dolor sit amet consectetur elit</p>
            </li>
            <li>
              <BiCheck className="project__list-icon" />
              <p>Lorem, ipsum dolor sit amet consectetur elit</p>
            </li>
          </ul>
        </article>
        {/* End of Mobile Development */}
        <article className="project">
          <div className="project__head">
            <h3>Web Development</h3>
          </div>
          <ul className="project__list">
            <li>
              <BiCheck className="project__list-icon" />
              <p>Lorem, ipsum dolor sit amet consectetur elit</p>
            </li>
            <li>
              <BiCheck className="project__list-icon" />
              <p>Lorem, ipsum dolor sit amet consectetur elit</p>
            </li>
            <li>
              <BiCheck className="project__list-icon" />
              <p>Lorem, ipsum dolor sit amet consectetur elit</p>
            </li>
            <li>
              <BiCheck className="project__list-icon" />
              <p>Lorem, ipsum dolor sit amet consectetur elit</p>
            </li>
            <li>
              <BiCheck className="project__list-icon" />
              <p>Lorem, ipsum dolor sit amet consectetur elit</p>
            </li>
            <li>
              <BiCheck className="project__list-icon" />
              <p>Lorem, ipsum dolor sit amet consectetur elit</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
}

export default Project;
