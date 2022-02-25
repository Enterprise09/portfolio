import React, { useEffect, useRef } from "react";
import "../scss/About.scss";

function About() {
  const PUBLIC_URL = process.env.PUBLIC_URL;
  const about_title_dash = useRef(null);
  const text_block = useRef(null);
  const profileData = [
    // 프로필 데이터
    {
      label: "이름",
      content: "김태호",
    },
    {
      label: "나이",
      content: "22살",
    },
    {
      label: "학력",
      content: "학사(소프트웨어공학)",
    },
    {
      label: "지역",
      content: "경기도 시흥 or 대전광역시",
    },
  ];
  const licenseData = [
    // 자격증 데이터
    {
      date: "2021.06",
      content: "정보처리산업기사",
    },
    {
      date: "2021.10",
      content: "리눅스마스터2급",
    },
    {
      date: "2021.05",
      content: "정보처리기능사",
    },
  ];

  useEffect(() => {
    about_title_dash.current.classList.add("about_title_dash");
    text_block.current.classList.toggle("min_opacity");
  }, []);

  return (
    <div className="about_container">
      <div className="about_title_box">
        <span className="about_title">About Me</span>
        <span className="dash_enter" ref={about_title_dash}></span>
      </div>
      <div className="about_content_box min_opacity" ref={text_block}>
        <img src={PUBLIC_URL + "/images/캐리커쳐.jpg"} alt="캐리커쳐" />
        <div className="about_profile_box ">
          <span className="profile_title">PROFILE</span>
          {profileData.map((data) => (
            <div className="profile_content_box">
              <span className="profile_label">{data.label}</span>
              <span className="profile_content">{data.content}</span>
            </div>
          ))}
        </div>
        <div className="about_license_box ">
          <span className="license_title">LICENSE</span>
          {licenseData.map((data) => (
            <div className="profile_license_box">
              <span className="license_label">{data.date}</span>
              <span className="license_content">{data.content}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;
