'use client';

import { motion } from 'framer-motion';
import { useReducedMotion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import Link from 'next/link';
import Image from 'next/image';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import perfil from '@/assets/perfil.jpg';
import './Hero.css';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="hero-section">
      <div className="container">
        <motion.div
          className="hero-grid"
          variants={shouldReduceMotion ? {} : containerVariants}
          initial={shouldReduceMotion ? 'visible' : 'hidden'}
          animate="visible"
        >
          {/* Texto (esquerda) */}
          <motion.div className="hero-text" variants={itemVariants}>
            <div className="hero-title-group">
              <h1 className="hero-title-main">
                Desenvolvedor Full-Stack
              </h1>
              <h2 className="hero-title-sub">
                que transforma ideias em produtos
              </h2>
            </div>

            {/* Animação de Tecnologias */}
            <motion.div className="hero-tech-animation" variants={itemVariants}>
              <TypeAnimation
                sequence={[
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
                wrapper="span"
                speed={50}
                className="tech-animation"
                repeat={Infinity}
              />
            </motion.div>

            <motion.p className="hero-subtitle" variants={itemVariants}>
              Especializado em React, Node.js e C#. Criador de aplicações web e
              mobile de alto impacto com foco em arquitetura escalável e
              experiência de usuário excepcional.
            </motion.p>

            {/* CTAs */}
            <motion.div className="hero-actions" variants={itemVariants}>
              <Link href="/projetos" className="btn-primary">
                Ver Meus Projetos
              </Link>
              <a
                href="mailto:icaroaguiar14@gmail.com"
                className="btn-secondary"
              >
                Vamos Conversar
              </a>
            </motion.div>

            {/* Sociais */}
            <motion.div className="hero-socials" variants={itemVariants}>
              <a
                href="https://www.linkedin.com/in/icaro-aguiar/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="social-link"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://github.com/IcaroAguiar"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="social-link"
              >
                <FaGithub />
              </a>
            </motion.div>
          </motion.div>

          {/* Imagem (direita) */}
          <motion.div className="hero-image" variants={itemVariants}>
            <div className="image-wrapper">
              <Image
                src={perfil}
                alt="Ícaro Aguiar"
                width={400}
                height={400}
                priority
                className="profile-image"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
