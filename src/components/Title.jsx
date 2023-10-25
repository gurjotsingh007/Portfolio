import React, { useContext } from "react";
import "./Title.css";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { SiGeeksforgeeks } from "react-icons/si";
import { FaChevronDown } from "react-icons/fa";
import TypeWriter from "react-typewriter";
import { DarkthemeContext } from "../Contexts/ThemeContext";

const Title = () => {
  const { dark } = useContext(DarkthemeContext);

  return (
    <div
      className="title"
      style={{
        backgroundImage: dark
          ? `url("images/bg-dark.jpg")`
          : `url("images/bg-light.jpg")`,
      }}
    >
      <div className="title__content">
        <div
          className={`title__content__container ${
            dark ? "title__content__dark" : ""
          } `}
        >
          <h1
            className={`title__heading ${!dark ? "title__heading__light" : ""}`}
          >
            <TypeWriter typing={0.6}>I'm Gurjot Singh</TypeWriter>
          </h1>
          <h3
            className={`title__content__left__subheading ${
              dark ? "subheading__dark" : ""
            }`}
          >
            Frontend Developer with a fervor for crafting exceptional websites and applications. Passionate about pixel-perfect design, smooth user interfaces, and innovation.
          </h3>
          <hr className="title__content__line" />
          <div className="title__links">
            <a
              href="https://www.linkedin.com/in/gurjot-singh-a226ab242"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedinIn
                className={`title__content__left__icons ${
                  dark ? "left__icons__dark" : ""
                }`}
              />
            </a>
            <a
              href="https://github.com/gurjotsingh007"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub
                className={`title__content__left__icons ${
                  dark ? "left__icons__dark" : ""
                }`}
              />
            </a>
            <a
              href="https://auth.geeksforgeeks.org/user/sgurjot0001"
              target="_blank"
              rel="noreferrer"
            >
              <SiGeeksforgeeks
                className={`title__content__left__icons ${
                  dark ? "left__icons__dark" : ""
                }`}
              />
            </a>
            <a
              href="https://www.instagram.com/g.u.r.j.o.t_0001"
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram
                className={`title__content__left__icons ${
                  dark ? "left__icons__dark" : ""
                }`}
              />
            </a>
          </div>
        </div>
      </div>

      <button className={`scrollDown__button ${!dark ? "scroll__light" : ""}`}>
        <a href="#about">
          <FaChevronDown className="scrollDown__button__icon" />
        </a>
      </button>
    </div>
  );
};

export default Title;
