'use client';

import Link from 'next/link';
import { TypeAnimation } from 'react-type-animation';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import perfil from '@/assets/perfil.jpg';
import '@/components/Home/home.css';

export default function HomePage() {
  return (
    <section className="container">
      <div className="home-container">
        <div className="home-content">
          <div className="home-text">
            <h1>Olá, eu sou Ícaro Aguiar</h1>
            <TypeAnimation
              sequence={[
                'Desenvolvedor Full-Stack',
                2000,
                'React',
                2000,
                'Node.js',
                2000,
                'C#',
                2000,
                'React Native',
                2000,
                'PostgreSQL',
                2000,
                'FastAPI',
                2000,
              ]}
              wrapper="h2"
              speed={50}
              className="home-subtitle"
              repeat={Infinity}
            />
            <p>
              Desenvolvedor apaixonado por construir soluções de software que geram
              impacto e valor.
            </p>
            <div className="home-actions">
              <Link href="/projetos" className="btn btn-primary">
                Ver Projetos
              </Link>
              <div className="home-socials">
                <a
                  href="https://www.linkedin.com/in/icaro-aguiar/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin />
                </a>
                <a
                  href="https://github.com/IcaroAguiar"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub />
                </a>
              </div>
            </div>
          </div>
          <div className="home-image-container">
            <div className="home-image-wrapper">
              <img src={perfil.src} alt="Ícaro Aguiar" className="home-image" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
