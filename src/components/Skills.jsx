import React, { useContext } from "react";
import "./Skills.css";

import { skills } from "../data/SkillsContent";
import { DarkthemeContext } from "../Contexts/ThemeContext";

const Skills = () => {
  const { dark } = useContext(DarkthemeContext);
  return (
    <div id="skills">
      <h1 className={`skills__heading ${!dark ? "skills__light" : ""}`}>
        Skills & Tools 🎯
      </h1>
      <div className="skills__content">
        {skills.map((item) => (
          <div className="skills__row" key={item.id}>
            <img className="skills__img" src={item.image} alt="" />
            <p
              className={`skills__row__title ${
                !dark ? "skills__row__light" : ""
              }`}
            >
              {item.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
