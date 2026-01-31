import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  hoverable?: boolean;
}

export function Card({ children, className = '', hoverable = true }: CardProps) {
  const baseStyles = 'rounded-2xl border border-black/5 bg-white/60 shadow-xs';
  const hoverStyles = hoverable ? 'hover:shadow-md transition' : '';
  
  return (
    <div className={`${baseStyles} ${hoverStyles} ${className}`}>
      {children}
    </div>
  );
}
