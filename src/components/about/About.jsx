import React from "react";

import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

import "./about.css";
import me from "../../assets/me-about.jpg";

const About = () => {
  return (
    <section id="about">
      <h5>A savoir</h5>
      <h2>A propos de moi</h2>

      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={me} alt="" />
          </div>
        </div>

        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <FaAward className="about_icon" />
              <h5>Expérience</h5>
              <small>1,5 ans d'expérience</small>
            </article>
            <article className="about_card">
              <FiUsers className="about_icon" />
              <h5>Client</h5>
              <small>1</small>
            </article>
            <article className="about_card">
              <VscFolderLibrary className="about_icon" />
              <h5>Projets</h5>
              <small>8</small>
            </article>
          </div>
          {/* <p>
            Apres avoir terminé mon Master en alternace mi-septemble 2022, je suis à
            la recheche d'une nouvelle aventure
          </p> */}
          <p></p>
          <a href="#contact" className="btn btn-primary">
            Parlons en
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
