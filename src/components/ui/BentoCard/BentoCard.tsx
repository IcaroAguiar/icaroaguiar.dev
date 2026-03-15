'use client';

import { ReactNode } from 'react';
import { Card3D } from '@/hooks/use3DTilt';
import { motion } from 'framer-motion';

interface BentoCardProps {
  children: ReactNode;
  size?: 'large' | 'medium' | 'small';
  className?: string;
  enable3D?: boolean;
}

const sizeClasses = {
  large: 'col-span-2 row-span-2',
  medium: 'col-span-2 row-span-1',
  small: 'col-span-1 row-span-1'
};

export function BentoCard({ 
  children, 
  size = 'small', 
  className = '',
  enable3D = false 
}: BentoCardProps) {
  const content = (
    <motion.div
      className={`glass-card p-6 h-full ${sizeClasses[size]} ${className}`}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
    >
      {children}
    </motion.div>
  );

  if (enable3D && size === 'large') {
    return <Card3D className="h-full">{content}</Card3D>;
  }

  return content;
}
