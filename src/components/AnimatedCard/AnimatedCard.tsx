'use client';

import React from 'react';
import { useInView } from 'react-intersection-observer';
import './AnimatedCard.css';

interface AnimatedCardProps {
  children: React.ReactNode;
  customClass?: string;
}

function AnimatedCard({ children, customClass = '' }: AnimatedCardProps) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div
      ref={ref}
      className={`animated-card ${inView ? 'is-visible' : ''} ${customClass}`}
    >
      {children}
    </div>
  );
}

export default AnimatedCard;
