import React from "react";
import { BsLinkedin, BsDribbble, BsGithub } from "react-icons/bs";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/in/samuel-vergniol/" target="_blank">
        <BsLinkedin />
      </a>
      <a href="https://github.com/Alkyys" target="_blank">
        <BsGithub />
      </a>
      <a href="https://dribbble.com/Alkyys" target="_blank">
        <BsDribbble />
      </a>
    </div>
  );
};

export default HeaderSocials;
