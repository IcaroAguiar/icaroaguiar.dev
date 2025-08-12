import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
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
        <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
          Ícaro Aguiar
        </Link>

        {/* --- Ícone do Menu Hambúrguer (só aparece em mobile) --- */}
        <div className="menu-icon" onClick={handleMenuClick}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </div>

        {/* --- Adiciona a classe 'active' quando o menu está aberto --- */}
        <ul className={isMenuOpen ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
              Início
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/sobre" className="nav-links" onClick={closeMobileMenu}>
              Sobre
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/projetos" className="nav-links" onClick={closeMobileMenu}>
              Projetos
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contato" className="nav-links" onClick={closeMobileMenu}>
              Contato
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
