import React from "react";

import "./header.css";
import CTA from "./CTA";
import HeaderSocials from "./HeaderSocials";

import ME from "../../assets/me.png";

const Header = () => {
  return (
    <header id="home">
      <div className="container header__container">
        <h5>Bonjour je suis</h5>
        <h1>Samuel VERGNIOL</h1>
        <h5 className="text-light">Développeur Fullstack JavaScript</h5>
        <CTA />
        <HeaderSocials />

        <div className="me">
          <img src={ME} alt="me" />
        </div>

        <a href="#contact" className="scroll_down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
