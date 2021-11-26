import React from "react";
import "../scss/Home.scss";
import endline from "../img/endline_intro.png";
import ewitter from "../img/ewitter_intro.png";
import movie_app from "../img/movie_app_intro.png";
import neflix_clone from "../img/netflix_clone_intro.png";
import main_skills from "../img/main_skills.png";
import comm_skills from "../img/comm_skills.png";
import database_skills from "../img/database_skills.png";
import mobile_skills from "../img/mobile_skills.png";
import backend_skills from "../img/backend_skills.png";
import frontend_skills from "../img/frontend_skills.png";
import winform_skills from "../img/winform_skills.png";
import vcs_skills from "../img/vcs_skills.png";
import devops_skills from "../img/devops_skills.png";
import indicator from "../img/indicator.png";
import user from "../img/user.png";
import date from "../img/date.png";
import phone from "../img/phone.png";
import email from "../img/email.png";
import college from "../img/college.png";
import location from "../img/location.png";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  return (
    <div className="home_container">
      <a id="intro"></a>
      <div className="intro_container">
        <h1>
          - 김태호 -
          <br />
          개발자 포트폴리오
        </h1>
        <img src={indicator} />
        <p>
          안녕하세요! 개발의 <span>다양함</span>을 좋아하는 개발자입니다.
          <br />
          <span>다양한</span> 언어 기반의 모바일 어플 개발을 좋아하고,
          <br />
          <span>React</span>를 이용한 웹개발 또한 즐겨합니다.
          <br />
          오류를 해결하여 신호등의 <span>빨간불</span>이 사라졌을 때 기분을
          좋아합니다!
        </p>
      </div>
      <a id="about">
        hello <br />
      </a>
      <div className="about_container">
        <h1>ABOUT ME!</h1>
        <div className="about_box">
          <div className="about_content">
            <img src={user} width="42px" />
            <div className="about_text_box">
              <div className="about_title">이름</div>
              <div className="about_value">김태호</div>
            </div>
          </div>
          <div className="about_content">
            <img src={date} width="42px" />
            <div className="about_text_box">
              <div className="about_title">생년월일</div>
              <div className="about_value">2001.09.09</div>
            </div>
          </div>
          <div className="about_content">
            <img src={location} width="42px" />
            <div className="about_text_box">
              <div className="about_title">주소지</div>
              <div className="about_value">시흥시 능곡동</div>
            </div>
          </div>
        </div>
        <div className="about_box">
          <div className="about_content">
            <img src={phone} width="42px" />
            <div className="about_text_box">
              <div className="about_title">연락처</div>
              <div className="about_value">010-7457-7570</div>
            </div>
          </div>
          <div className="about_content">
            <img src={email} width="42px" />
            <div className="about_text_box">
              <div className="about_title">이메일</div>
              <div className="about_value">goldenstaytes@naver.com</div>
            </div>
          </div>
          <div className="about_content">
            <img src={college} width="42px" />
            <div className="about_text_box">
              <div className="about_title">학력</div>
              <div className="about_value">유한대학교(소프트웨어 공학과)</div>
            </div>
          </div>
        </div>
        <a id="skills">skills</a>
      </div>
      <div className="skills_container">
        <h1>SKILLS</h1>
        <div className="skills_box">
          <div className="skills_content_box">
            <div className="skills_title">
              <h2>FRONT-END</h2>
              <img src={frontend_skills} />
            </div>
            <div className="skills_title">
              <h2>BACK-END</h2>
              <img src={backend_skills} />
            </div>
          </div>
          <div className="skills_content_box">
            <div className="skills_title">
              <h2>MOBILE</h2>
              <img src={mobile_skills} />
            </div>
            <div className="skills_title">
              <h2>WINDOWS</h2>
              <img src={winform_skills} />
            </div>
          </div>
          <div className="skills_content_box">
            <div className="skills_title">
              <h2>DATABASE</h2>
              <img src={database_skills} />
            </div>
            <div className="skills_title">
              <h2>COMM</h2>
              <img src={comm_skills} />
            </div>
          </div>
          <div className="skills_content_box">
            <div className="skills_title">
              <h2>DEVOPS</h2>
              <img src={devops_skills} />
            </div>
            <div className="skills_title">
              <h2>VERSION-CONTROL</h2>
              <img src={vcs_skills} />
            </div>
          </div>
        </div>
        <a id="archive">archive</a>
      </div>
      <div className="archive_container">
        <h1>ARCHIVE</h1>
        <div className="archive_box">
          <div className="archive_content_box">
            <FontAwesomeIcon icon={faGithub} size="5x" />
            <a href="https://github.com/Enterprise09">
              github.com/Enterprise09
            </a>
            <h3>소스 코드 저장소</h3>
            <ul>
              <li>졸업 작품 및 공부를 하며 궁금했던 것의 실험 보고서!</li>
              <li>온라인에 코드를 저장하여 언제 어디서나 코드 리뷰 가능</li>
              <li>그 밖에 개인 프로젝트 및 팀 프로젝트 형상 관리</li>
            </ul>
          </div>
          <div className="archive_content_box">
            <FontAwesomeIcon icon={faPen} size="5x" color="#CD7A2B" />
            <a href="https://enterprise09.github.io/">
              enterprise09.github.io/
            </a>
            <h3>공부 기록 및 발전소</h3>
            <ul>
              <li>에러 발생 이유 및 해결 방법 기록</li>
              <li>비슷하거나 같은 에러를 겪었을 때 도움 </li>
              <li>봉황중학교 웹디자인 수업 자료 정리</li>
              <li>하루 일상을 돌아보며 다음 계획을 준비</li>
              <li>페이지를 운영하며 Ruby-Jekyll 공부</li>
            </ul>
          </div>
        </div>
        <a id="projects">projects</a>
      </div>
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
    </div>
  );
};

export default Home;
