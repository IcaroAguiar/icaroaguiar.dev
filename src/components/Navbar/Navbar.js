import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { FaBars, FaTimes } from "react-icons/fa"; // Ícones para o menu

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  // --- NOVO ESTADO PARA CONTROLAR O MENU MOBILE ---
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleMenuClick = () => setIsMenuOpen(!isMenuOpen);
  const closeMobileMenu = () => setIsMenuOpen(false);

  return (
    <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      <div className="navbar-container">
        <a href="#home" className="navbar-logo" onClick={closeMobileMenu}>
          Ícaro Aguiar
        </a>

        {/* --- Ícone do Menu Hambúrguer (só aparece em mobile) --- */}
        <div className="menu-icon" onClick={handleMenuClick}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </div>

        {/* --- Adiciona a classe 'active' quando o menu está aberto --- */}
        <ul className={isMenuOpen ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <a href="#home" className="nav-links" onClick={closeMobileMenu}>
              Início
            </a>
          </li>
          <li className="nav-item">
            <a href="#sobre" className="nav-links" onClick={closeMobileMenu}>
              Sobre
            </a>
          </li>
          <li className="nav-item">
            <a href="#projetos" className="nav-links" onClick={closeMobileMenu}>
              Projetos
            </a>
          </li>
          <li className="nav-item">
            <a href="#contato" className="nav-links" onClick={closeMobileMenu}>
              Contato
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
