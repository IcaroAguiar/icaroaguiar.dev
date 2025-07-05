import React from 'react';
import './Footer.css';
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-socials">
          <a href="https://github.com/IcaroAguiar" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/icaro-aguiar/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedin />
          </a>
        </div>
        <div className="footer-copyright">
          <p>© {currentYear} Ícaro Aguiar. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;