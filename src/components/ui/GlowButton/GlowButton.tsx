'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface GlowButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'outline';
  onClick?: () => void;
  href?: string;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

export function GlowButton({ 
  children, 
  variant = 'primary', 
  onClick, 
  href,
  className = '',
  type = 'button'
}: GlowButtonProps) {
  const baseStyles = 'relative inline-flex items-center justify-center px-6 py-3 rounded-lg font-medium transition-all duration-200';
  
  const variants = {
    primary: 'bg-accent text-white hover:bg-accent-hover shadow-sm hover:shadow-glow',
    outline: 'border border-accent text-accent hover:bg-accent hover:text-white'
  };

  const Component = href ? motion.a : motion.button;
  const props = href ? { href } : { type };

  return (
    <Component
      {...props}
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.15, ease: [0.25, 1, 0.5, 1] }}
    >
      {children}
    </Component>
  );
}
