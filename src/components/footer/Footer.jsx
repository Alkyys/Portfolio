import React from "react";
import "./footer.css";

import { BsLinkedin, BsDribbble, BsGithub } from "react-icons/bs";

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer_logo">
        Samuel VERGNIOL
      </a>
      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        {/* <li>
          <a href="#portfolio">Portfolio</a>
        </li> */}

        {/* <li>
          <a href="#testimonials">Testimonials</a>
        </li> */}
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="footer_socials">
        <a href="https://linkdin.com" target="_blank">
          <BsLinkedin />
        </a>
        <a href="https://github.com" target="_blank">
          <BsGithub />
        </a>
        <a href="https://dribbble.com" target="_blank">
          <BsDribbble />
        </a>
      </div>
      <div className="footer_copyright">
        <small>Make with ❤ and ☕</small>
      </div>
    </footer>
  );
};

export default Footer;
