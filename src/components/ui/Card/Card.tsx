import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  hoverable?: boolean;
}

export function Card({ children, className = '', hoverable = true }: CardProps) {
  const baseStyles = 'rounded-lg border border-border-default bg-surface-2 shadow-sm';
  const hoverStyles = hoverable 
    ? 'hover:border-border-strong hover:shadow-md transition-all duration-200 ease-out' 
    : '';
  
  return (
    <div className={`${baseStyles} ${hoverStyles} ${className}`}>
      {children}
    </div>
  );
}
