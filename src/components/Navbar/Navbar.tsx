'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Mail, Menu, X } from 'lucide-react';
import { SOCIAL_LINKS } from '@/constants';
import { ThemeToggle } from '@/components/ui/ThemeToggle';
import './Navbar.css';

const navLinks = [
  { href: '/', label: 'Início' },
  { href: '/projetos', label: 'Projetos' },
  { href: '/sobre', label: 'Sobre' },
  { href: '/contato', label: 'Contato' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => pathname === path;

  return (
    <header className={`navbar-wrapper ${isScrolled ? 'scrolled' : ''}`}>
      <nav className="mx-auto flex h-full max-w-6xl items-center px-4 sm:px-6 lg:px-8">
        <div className="navbar-shell grid h-full w-full min-w-0 grid-cols-[1fr_auto_1fr] items-center gap-3">
          <Link href="/" className="navbar-logo min-w-0" onClick={() => setIsOpen(false)}>
            <span className="logo-text">Ícaro Aguiar</span>
            <span className="logo-kicker">Full-stack engineer</span>
          </Link>

          <div className="hidden items-center justify-center md:flex">
            <ul className="flex items-center gap-1 text-sm">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`navbar-link ${isActive(link.href) ? 'active' : ''}`}
                >
                  {link.label}
                  {isActive(link.href) && (
                    <motion.div
                      className="navbar-indicator"
                      layoutId="navbar-indicator"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              </li>
            ))}
            </ul>
          </div>

          <div className="ml-auto hidden items-center gap-3 md:flex">
            <div className="navbar-theme-control">
              <ThemeToggle />
            </div>
            <a href={SOCIAL_LINKS.WHATSAPP} target="_blank" rel="noopener noreferrer" className="navbar-contact-button">
              <Mail className="h-4 w-4" aria-hidden="true" />
              Falar comigo
            </a>
          </div>

          <div className="ml-auto flex items-center gap-2 md:hidden">
            <button
              className="navbar-mobile-button"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Menu"
              aria-expanded={isOpen}
            >
            {isOpen ? (
              <X className="icon" />
            ) : (
              <Menu className="icon" />
            )}
           </button>
          </div>
        </div>
      </nav>

      {isOpen && (
        <motion.div
          className="navbar-menu-mobile"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`navbar-link-mobile ${
                isActive(link.href) ? 'active' : ''
              }`}
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </motion.div>
      )}
    </header>
  );
}
