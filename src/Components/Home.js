import React from "react";
import "../scss/Home.scss";

function Home() {
  return (
    <div className="home_container">
      <div className="home_title_box">
        <span className="home_title">Welcome</span>
        <div className="home_title_dash"></div>
      </div>

      <div className="home_text_box">
        <p className="home_welcome_word">
          안녕하세요!
          <br />
          새로운 환경에 마법과 같이 빠르게 적응하는
          <br />
          풀스택 개발자 김태호입니다.
        </p>
        <p className="home_welcome_word">
          프로그래머에게도 빠르게 무언가에 적응한다는 것은 정말 중요한 일입니다.
          <br />
          새로운 IDE, 새로운 언어, 새로운 플랫폼, 그리고 새로운 아이디어에
          <br />
          빠르게 적응해야 합니다.
        </p>
        <div className="home_ambitious_box">
          <span className="home_ambitious">
            저는 미래를 코딩하는 개발자가 되려고 합니다.
          </span>
          <div className="home_ambitious_dash"></div>
        </div>
      </div>
    </div>
  );
}

export default Home;
