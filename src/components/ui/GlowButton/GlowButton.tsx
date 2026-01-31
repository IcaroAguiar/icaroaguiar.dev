'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface GlowButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'outline';
  onClick?: () => void;
  href?: string;
  className?: string;
}

export function GlowButton({ 
  children, 
  variant = 'primary', 
  onClick, 
  href,
  className = '' 
}: GlowButtonProps) {
  const baseStyles = 'relative inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold transition-all duration-300';
  
  const variants = {
    primary: 'bg-[#2a9d8f] text-white hover:shadow-[0_0_30px_rgba(42,157,143,0.5)]',
    outline: 'border-2 border-[#2a9d8f] text-[#2a9d8f] hover:bg-[#2a9d8f] hover:text-white'
  };

  const Component = href ? motion.a : motion.button;

  return (
    <Component
      href={href}
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      whileHover={{ scale: 1.02, y: -2 }}
      whileTap={{ scale: 0.98 }}
    >
      {children}
    </Component>
  );
}
