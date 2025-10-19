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
      {/* Wrapper: centraliza e limita largura no mobile */}
      <div className="mx-auto max-w-screen-sm px-4 sm:px-6 lg:px-8 md:max-w-screen-xl">
        <motion.div
          className="flex flex-col items-center text-center gap-6 md:grid md:grid-cols-12 md:items-center md:text-left md:gap-10"
          variants={shouldReduceMotion ? {} : containerVariants}
          initial={shouldReduceMotion ? 'visible' : 'hidden'}
          animate="visible"
        >
          {/* Texto (desktop: coluna 7, mobile: ordem 2) */}
          <motion.div className="order-2 md:order-1 md:col-span-7" variants={itemVariants}>
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
            <motion.div className="mt-6 flex flex-col gap-3 w-full sm:flex-row sm:justify-center md:justify-start" variants={itemVariants}>
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

          {/* Imagem (desktop: coluna 5, mobile: ordem 1) */}
          <motion.div className="order-1 md:order-2 md:col-span-5 mx-auto" variants={itemVariants}>
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
