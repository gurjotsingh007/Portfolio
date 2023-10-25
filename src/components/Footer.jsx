import React, { useContext } from "react";
import "./Footer.css";

import Lottie from "react-lottie";
import rocketData from "../Animation-data/rocket.json";
import { FaChevronUp } from "react-icons/fa";
import { DarkthemeContext } from "../Contexts/ThemeContext";

const Footer = () => {
  const { dark } = useContext(DarkthemeContext);
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: rocketData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className="footer">
      <Lottie options={defaultOptions} height={250} width={200} />
      <button className={`footer__button ${!dark ? "scroll__light" : ""}`}>
        <a href="#top">
          <FaChevronUp className="footer__button__icon" />
        </a>
      </button>
    </div>
  );
};

export default Footer;
