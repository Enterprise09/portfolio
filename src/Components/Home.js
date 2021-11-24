import React from "react";
import "../scss/Home.scss";
import endline from "../img/endline_intro.png";
import ewitter from "../img/ewitter_intro.png";
import movie_app from "../img/movie_app_intro.png";
import neflix_clone from "../img/netflix_clone_intro.png";
import github from "../img/github.png";
import instargram from "../img/instargram.png";
import front_skills from "../img/front_skills.png";
import backend_skills from "../img/backend_skills.png";
import database_skills from "../img/database_skills.png";
import vcs_skills from "../img/vcs_skills.png";
import mobile_skills from "../img/mobile_skills.png";
import winform_skills from "../img/winform_skills.png";
import devops_skills from "../img/devops_skills.png";
import comm_skills from "../img/comm_skills.png";
import main_skills from "../img/main_skills.png";

const Home = () => {
  return (
    <>
      <div className="home_container">
        <div className="intro_container">
          <h1>- 김태호 -</h1>
          <p>
            안녕하세요! 개발의 다양함을 좋아하는 개발자입니다.
            <br />
            다양한 언어 기반의 모바일 어플 개발을 좋아하고,
            <br />
            React를 이용한 웹개발 또한 즐겨합니다.
            <br />
            오류를 해결하여 신호등의 빨간불이 사라졌을 때 기분을 좋아합니다!
          </p>
        </div>
        <hr />
        <div className="about_container">
          <h1>ABOUT ME!</h1>
          <div className="about_box">
            <h2>김태호</h2>
            <h2>2001.09.09</h2>
            <h2>시흥시 능곡동</h2>
            <h2>010-7457-7570</h2>
            <h2>유한대학교(소프트웨어 공학과)</h2>
          </div>
        </div>
        <hr />
        <div className="skills_container">
          <h1>SKILLS</h1>
          <div className="skills_box">
            <img src={main_skills} />
          </div>
        </div>
        <hr />
        {/* end of skills_container */}
        <div className="projects_container">
          <h1>PROJECTS</h1>
          <div className="projects_box">
            <img src={endline} />
            <img src={ewitter} />
            <img src={neflix_clone} />
            <img src={movie_app} />
          </div>
        </div>
        <hr />
        <div className="archive_container">
          <h1>ARCHIVE</h1>
          <div className="archive_box">
            <a href="https://github.com/Enterprise09" target="_blank">
              <img src={github} />
            </a>
            <a href="https://www.instagram.com/k_teaho0909/" target="_blank">
              <img src={instargram} />
            </a>
          </div>
        </div>
        <hr />
      </div>
      <footer>
        <p>
          all copy right &copy; by Enterprise09 - TeaHo Kim Since 2021 | contact
          email - goldenstaytes@naver.com
        </p>
      </footer>
    </>
  );
};

export default Home;
