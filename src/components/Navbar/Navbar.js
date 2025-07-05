import React, { useState, useEffect } from "react";
import "./Navbar.css";

function Navbar() {
  // Estado para controlar a sombra da navbar ao rolar
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Limpa o event listener quando o componente é desmontado
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    // A classe 'scrolled' é adicionada dinamicamente
    <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      <div className="navbar-container">
        <a href="#home" className="navbar-logo">
          Ícaro Aguiar
        </a>
        <ul className="nav-menu">
          <li className="nav-item">
            <a href="#home" className="nav-links">
              Início
            </a>
          </li>
          <li className="nav-item">
            <a href="#sobre" className="nav-links">
              Sobre
            </a>
          </li>
          <li className="nav-item">
            <a href="#projetos" className="nav-links">
              Projetos
            </a>
          </li>
          <li className="nav-item">
            <a href="#contato" className="nav-links">
              Contato
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
