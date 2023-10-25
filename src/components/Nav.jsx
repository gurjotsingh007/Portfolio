import React, { useContext, useEffect } from "react";
import "./Nav.css";

import { FaSun } from "react-icons/fa";
import { FaMoon } from "react-icons/fa";
import { DarkthemeContext } from "../Contexts/ThemeContext";

const Nav = () => {
  const { dark, setDark } = useContext(DarkthemeContext);

  const transitionNavbar = () => {
    if (window.scrollY > 100) {
      document.getElementById(
        "nav__items"
      ).style.cssText = `background-color : #2B2B2B; box-shadow: rgba(0, 0, 0, 0.19) 0px 0px 20px, rgba(0, 0, 0, 0.23) 0px 0px 6px;`;
    } else {
      document.getElementById(
        "nav__items"
      ).style.cssText = `background-color : transparent;`;
    }
  };

  //runs once when component is mounted
  useEffect(() => {
    window.addEventListener("scroll", transitionNavbar); //attach an EventListener which runs transitionNavbar every time user scrolls
    return () => window.removeEventListener("scroll", transitionNavbar); //return function is run when component unmounts, cleaning up the EventListener
  }, []);

  const handleClick = () => {
    setDark(!dark);
  };
  localStorage.setItem("dark", dark);

  return (
    <div className="nav">
      <div
        className={`nav__items ${dark ? "" : "nav__items__light"}`}
        id="nav__items"
      >
        <p>
          <a className="nav__item" href="#about">
            About Me
          </a>
        </p>

        <p>
          <a className="nav__item" href="#projects">
            Projects
          </a>
        </p>
        <p>
          <a className="nav__item" href="#skills">
            Skills
          </a>
        </p>
        <p>
          <a className="nav__item" href="#contact">
            Contact
          </a>
        </p>

        {dark ? (
          <FaSun onClick={handleClick} className="nav__theme__light" />
        ) : (
          <FaMoon onClick={handleClick} className="nav__theme__dark" />
        )}
      </div>
    </div>
  );
};

export default Nav;
