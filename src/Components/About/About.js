import React from "react";
import { AiOutlineProject } from "react-icons/ai";
import { FaAward, FaSchool, FaUser } from "react-icons/fa";
import ME from "../../assets/images/me.jpg";
import "./About.css";

function About() {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about_icon" />
              <h5>Skills</h5>
              <small>5+ Language</small>
            </article>

            <article className="about__card">
              <FaSchool className="about_icon" />
              <h5>Major</h5>
              <small>Software Engineering</small>
            </article>

            <article className="about__card">
              <AiOutlineProject className="about_icon" />
              <h5>Project</h5>
              <small>3+ Project</small>
            </article>
          </div>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque eos
            voluptatem eius dolorem maiores nihil ducimus at rem ullam
            reprehenderit quidem quia deserunt, molestiae, eligendi amet
            repellat molestias quoa totam.
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
