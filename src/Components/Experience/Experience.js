import React from "react";
import { BsPatchCheckFill } from "react-icons/bs";
import "./Experience.css";

function Experience() {
  const experiences = [
    {
      title: "Frontend",
      skills: [
        {
          lang: "HTML",
          level: "Advanced",
        },
        {
          lang: "CSS",
          level: "Intermediate",
        },
        {
          lang: "JavaScript",
          level: "Advanced",
        },
        {
          lang: "React.js",
          level: "Intermediate",
        },
        {
          lang: "TypeScript",
          level: "Experience",
        },
        {
          lang: "Next.js",
          level: "Experience",
        },
      ],
    },
    {
      title: "Backend",
      skills: [
        {
          lang: "Node JS",
          level: "Advanced",
        },
        {
          lang: "Django",
          level: "Experience",
        },
        {
          lang: "Spring",
          level: "Intermediate",
        },
        {
          lang: "JPA",
          level: "Intermediate",
        },
        {
          lang: "SQL",
          level: "Intermediate",
        },
        {
          lang: "Firebase",
          level: "Advanced",
        },
      ],
    },
    {
      title: "Mobile",
      skills: [
        {
          lang: "Java",
          level: "Advanced",
        },
        {
          lang: "Kotlin",
          level: "Experience",
        },
        {
          lang: "Flutter",
          level: "Intermediate",
        },
        {
          lang: "ReactNative",
          level: "Experience",
        },
        {
          lang: "SQLite",
          level: "Intermediate",
        },
        {
          lang: "Firebase",
          level: "Advanced",
        },
      ],
    },
    {
      title: "Solution",
      skills: [
        {
          lang: "C#",
          level: "Intermediate",
        },
        {
          lang: ".NET",
          level: "Intermediate",
        },
        {
          lang: "WinForm",
          level: "Intermediate",
        },
        {
          lang: "SQL",
          level: "Intermediate",
        },
      ],
    },
    {
      title: "Devops & PM",
      skills: [
        {
          lang: "VSCode & Visual Studio",
          level: "Advanced",
        },
        {
          lang: "Intellj",
          level: "Intermediate",
        },
        {
          lang: "Android Studio",
          level: "Advanced",
        },
        {
          lang: "Maven & Gradle",
          level: "Advanced",
        },
        {
          lang: "NPM",
          level: "Advanced",
        },
        {
          lang: "Github",
          level: "Advanced",
        },
      ],
    },
    {
      title: "Most use Languages",
      skills: [
        {
          lang: "Python",
          level: "Intermediate",
        },
        {
          lang: "Java",
          level: "Advanced",
        },
        {
          lang: "Dart",
          level: "Experience",
        },
        {
          lang: "HTML",
          level: "Advanced",
        },
        {
          lang: "CSS",
          level: "Intermediate",
        },
        {
          lang: "JavaScript",
          level: "Advanced",
        },
      ],
    },
  ];
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container" data-aos="fade-up">
        {experiences.map((experience) => (
          <div className="experience__frontend">
            <h3>{experience.title} Development</h3>
            <div className="experience__content">
              {experience.skills.map((skill) => (
                <article className="experience__details">
                  <BsPatchCheckFill className="experience__details-icon" />
                  <div>
                    <h4>{skill.lang}</h4>
                    <small className="text-light">{skill.level}</small>
                  </div>
                </article>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;
