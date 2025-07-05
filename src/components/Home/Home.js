import React from "react";
import "./home.css";
import perfil from '../../assets/perfil.jpg';
import { TypeAnimation } from "react-type-animation";
import { FaLinkedin, FaGithub } from "react-icons/fa";

function Home() {
  return (
    <div className="home-container container">
      <div className="home-content">
        <div className="home-text">
          <h1>Olá, eu sou Ícaro Aguiar</h1>
          <TypeAnimation
            sequence={[
              "Desenvolvedor Full-Stack",
              2000,
              "Intermediário em React",
              2000,
              "Intermediário em Node.js",
              2000,
              "Intermediário em C#",
              2000,
              "Intermediário em React Native",
              2000,
            ]}
            wrapper="h2"
            speed={50}
            className="home-subtitle"
            repeat={Infinity}
          />
          <p>
            Desenvolvedor apaixonado por construir soluções de software que geram impacto e valor.
          </p>
          <div className="home-actions">
            <a href="#projetos" className="btn btn-primary">
              Ver Projetos
            </a>
            <div className="home-socials">
              <a href="https://www.linkedin.com/in/icaro-aguiar/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </a>
              <a href="https://github.com/IcaroAguiar" target="_blank" rel="noopener noreferrer">
                <FaGithub />
              </a>
            </div>
          </div>
        </div>
        <div className="home-image-container">
          <div className="home-image-wrapper">
            <img
              src={perfil}
              alt="Icaro Aguiar"
              className="home-image"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;