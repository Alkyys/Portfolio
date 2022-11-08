import React from "react";
import "./contact.css";

import { MdOutlineEmail } from "react-icons/md";
import { BsLinkedin } from "react-icons/bs";

const Contact = () => {
  return (
    <section id="contact">
      <h5>Par ici !</h5>
      <h2>Contactez moi</h2>
      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <MdOutlineEmail className="contact_option-icon" />
            <h4>Email</h4>
            <h5>samuelvgnl@gmail.com</h5>
            <a href="mailto:samuelvgnl@gmail.com" target="_blank">
              Envoyez moi un message
            </a>
          </article>
          <article className="contact_option">
            <MdOutlineEmail className="contact_option-icon" />
            <h4>Telephone</h4>
            <h5>06 11 74 37 87</h5>
            <a href="tel:+33611743787">Applez moi</a>
          </article>
          <article className="contact_option">
            <BsLinkedin className="contact_option-icon" />
            <h4>Linkedin</h4>
            <h5>Samuel Vergniol</h5>
            <a href="https://www.linkedin.com/in/samuel-vergniol/">
              Lien linkedin
            </a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form action="">
          <form action="">
            <input type="text" name="name" placeholder="Nom complet" required />
            <input type="email" name="email" placeholder="Email" required />
            <textarea
              name="message"
              rows="7"
              placeholder="Message"
              required
            ></textarea>
            <button type="submit" className="btn btn-primary">
              Envoyer le message
            </button>
          </form>
        </form>
      </div>
    </section>
  );
};

export default Contact;
