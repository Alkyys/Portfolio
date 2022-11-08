import React from "react";
import "./services.css";

import { BiCheck } from "react-icons/bi";

const Services = () => {
  return (
    <section id="services">
      <h5>Ce que j'ai a proposer</h5>
      <h2>Services</h2>
      <div className="container services_container">
        <article className="service">
          <div className="service_head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className="service_list">
            <li>
              <BiCheck className="service_list-icon" />
              <p>Prototypage</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Conception UX</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Design UI</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Audit ergonomique</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Création de charte graphique</p>
            </li>
          </ul>
        </article>
        <article className="service">
          <div className="service_head">
            <h3>Projet Web</h3>
          </div>
          <ul className="service_list">
            <li>
              <BiCheck className="service_list-icon" />
              <p>Interface Frontend</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Logique Backend</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Smart contrat</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Stockage de donnée</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Déploiement</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Application Multiplatforme</p>
            </li>
          </ul>
        </article>
        <article className="service">
          <div className="service_head">
            <h3>Gestion de projet</h3>
          </div>
          <ul className="service_list">
            <li>
              <BiCheck className="service_list-icon" />
              <p>Coordination de projet</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Méthode Agile</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Rédation de carhier des charges</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Kanban</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Services;
