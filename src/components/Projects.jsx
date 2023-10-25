import React, { useContext } from "react";
import { projects } from "../data/ProjectContent";
import "./Projects.css";

import { FaGithub } from "react-icons/fa";
import { BiLinkAlt } from "react-icons/bi";
import { DarkthemeContext } from "../Contexts/ThemeContext";

const Projects = () => {
  const { dark } = useContext(DarkthemeContext);

  return (
    <div id="projects">
      <div className="projects__content">
        <h1
          className={`projects__content__heading ${
            !dark ? "projects__heading__light" : ""
          }`}
        >
          Check out a selection of my work here! 🚀
        </h1>

        {projects.map((item) => (
          <div
            className={`project__content__row  ${
              item.id % 2 === 0 ? "row__reverse" : ""
            }`}
            id={item.id}
          >
            <div className="project__content__row__left">
              <img
                src={item.image}
                className={`project__content__row__left__img ${
                  item.id % 2 === 0 ? "img__reverse" : "img__default"
                } `}
                alt=""
              />
            </div>
            <div className="project__content__row__right">
              <h1>{item.title}</h1>
              <p>{item.description}</p>
              <a
                className={`project__content__row__right__icons ${
                  !dark ? "row_right_icons_light" : ""
                }`}
                href={item.gitHubURL}
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub />
              </a>
              <a
                className={`project__content__row__right__icons ${
                  !dark ? "row_right_icons_light" : ""
                }`}
                href={item.URL}
                target="_blank"
                rel="noreferrer"
              >
                <BiLinkAlt />
              </a>
            </div>
          </div>
        ))}
        <a
          className={`seemore__button ${!dark ? "seemore__light" : ""}`}
          href="https://github.com/gurjotsingh007"
          target="_blank"
          rel="noreferrer"
        >
          See more on my GitHub
        </a>
      </div>
    </div>
  );
};

export default Projects;
