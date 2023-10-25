import React, { useContext } from "react";
import "./About.css";
import Lottie from "react-lottie";
import animationData from "../Animation-data/aboutPic.json";

import { FaDownload } from "react-icons/fa";
import { DarkthemeContext } from "../Contexts/ThemeContext";

const About = () => {
  const { dark } = useContext(DarkthemeContext);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className={`about ${!dark ? "about__light" : ""}`} id="about">
      <div className="about__content">
        <h1 className={`about__heading ${!dark ? "heading__light" : ""}`}>
          About Me
        </h1>

        <div className="about__content__body">
          <div className="about__image">
            <Lottie options={defaultOptions} height={200} width={120} />
          </div>
          <div className="about__content__body_text">
            <p>
            Hello there! I'm Gurjot Singh, a passionate software engineer. My journey into the world of web development began during my college years, and since then, I've been deeply engrossed in the art of coding and creating remarkable websites and applications.

            I'm currently in my final year of college, pursuing a B.Tech in Computer Science and Engineering at Guru Nanak Dev University, Amritsar. . My enthusiasm and dedication to crafting exceptional digital experiences have been the driving forces behind my journey. I'm excited to share my work with you, and I look forward to connecting with fellow professional developers who appreciate the art of coding as much as I do.
            </p>
            <a
              className={`about__content__body__button ${
                !dark ? "about__button__light" : ""
              }`}
              href="https://drive.google.com/file/d/14dF7W31dXE7Xhp30mu8PRYZ-a9gjEaH0/view?usp=drivesdk"
              target="_blank"
              rel="noreferrer"
            >
              <FaDownload className="download__icon" /> Download Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
