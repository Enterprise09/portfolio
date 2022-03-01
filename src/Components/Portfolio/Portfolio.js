import React from "react";
import CLC from "../../assets/images/clc.png";
import ENDLINE from "../../assets/images/endline.png";
import EWITTER from "../../assets/images/ewitter.png";
import NETFLIX from "../../assets/images/netflix.png";
import "./Portfolio.css";

function Portfolio() {
  const data = [
    {
      id: 1,
      image: ENDLINE,
      title: "EndLine - Supervise Expirate Date",
      github: "https://github.com/Enterprise09/EndLine.git",
      demo: null,
    },
    {
      id: 2,
      image: NETFLIX,
      title: "NETFLIX Clone",
      github:
        "https://github.com/Enterprise09/Flutter_Study/tree/main/netflix_clone_project",
      demo: null,
    },
    {
      id: 3,
      image: CLC,
      title: "CLC - Cinema Lover Community(Client)",
      github: "https://github.com/Enterprise09/CLC_client.git",
      demo: "https://enterprise09.github.io/movie_app/#/",
    },
    {
      id: 4,
      image: EWITTER,
      title: "Ewitter - simple twitter clone",
      github: "https://github.com/Enterprise09/ewitter.git",
      demo: "https://enterprise09.github.io/ewitter/#/",
    },
  ];
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {data.map((d, index) => (
          <article className="portfolio__item" key={d.id}>
            <div className="portfolio__item-image">
              <img src={d.image} alt="Endline" />
            </div>
            <h3>{d.title}</h3>
            <div className="portfolio__item-cta">
              <a href={d.github} className="btn" target="_blank">
                Github
              </a>
              <a
                href={d.demo}
                className={d.demo ? "btn btn-primary" : "btn_disable"}
                target="_blank"
              >
                Live Demo
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
