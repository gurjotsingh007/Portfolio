import React, { useContext } from "react";
import "./Contact.css";

import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { SiGeeksforgeeks } from "react-icons/si";
import { DarkthemeContext } from "../Contexts/ThemeContext";

const Contact = () => {
  const { dark } = useContext(DarkthemeContext);
  return (
    <div id="contact">
      <div className={`contact__details ${!dark ? "contact__light" : ""}`}>
        <h1
          className={`contact__details__heading ${
            !dark ? "contact__heading__light" : ""
          }`}
        >
          Contact me
        </h1>
        <p>Welcome to Insightful Advice and Exciting Prospects!</p>
        <h2
          className={`contact__details__name ${
            !dark ? "contact__name__light" : ""
          }`}
        >
          Gurjot Singh
        </h2>
        <p className="contact__details__address">Amritsar, Punjab</p>
        <p className="contact__details__links">
          <a
            className={`contact__details__resume ${
              !dark ? "contact__deatails__resumeDark" : ""
            }`}
          >
            ✉ gurjotsingh9327@gmail.com
          </a>
        </p>
        <p className="contact__details__links">
          <a
            className={`contact__details__resume ${
              !dark ? "contact__deatails__resumeDark" : ""
            }`}
            href="https://drive.google.com/file/d/1uiiNUUxAv4XZ2d1ewC5FKFlQgZex6B0x/view?usp=drivesdk"
            target="_blank"
            rel="noreferrer"
          >
            Resume
          </a>
        </p>
        <a
          href="https://www.linkedin.com/in/gurjot-singh-a226ab242"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedinIn
            className={`contact__details__icons ${
              !dark ? "contact__icons__light" : ""
            }`}
          />
        </a>

        <a
          href="https://github.com/gurjotsingh007"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub
            className={`contact__details__icons ${
              !dark ? "contact__icons__light" : ""
            }`}
          />
        </a>
        <a
          href="https://auth.geeksforgeeks.org/user/sgurjot0001"
          target="_blank"
          rel="noreferrer"
        >
          <SiGeeksforgeeks
            className={`contact__details__icons ${
              !dark ? "contact__icons__light" : ""
            }`}
          />
        </a>
        <a
          href="https://www.instagram.com/g.u.r.j.o.t_0001"
          target="_blank"
          rel="noreferrer"
        >
          <FaInstagram
            className={`contact__details__icons ${
              !dark ? "contact__icons__light" : ""
            }`}
          />
        </a>
      </div>
    </div>
  );
};

export default Contact;
