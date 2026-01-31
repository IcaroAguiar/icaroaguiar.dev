'use client';

import { useState, useRef, MouseEvent, ReactNode } from 'react';

interface Use3DTiltReturn {
  tiltStyle: {
    transform: string;
    transition: string;
  };
  handleMouseMove: (e: MouseEvent<HTMLElement>) => void;
  handleMouseLeave: () => void;
}

export function use3DTilt(maxTilt: number = 10): Use3DTiltReturn {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const ref = useRef<HTMLElement | null>(null);

  const handleMouseMove = (e: MouseEvent<HTMLElement>) => {
    if (!ref.current) return;
    
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const mouseX = e.clientX - centerX;
    const mouseY = e.clientY - centerY;
    
    const rotateX = (mouseY / (rect.height / 2)) * -maxTilt;
    const rotateY = (mouseX / (rect.width / 2)) * maxTilt;
    
    setTilt({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  return {
    tiltStyle: {
      transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
      transition: 'transform 0.3s ease-out'
    },
    handleMouseMove,
    handleMouseLeave
  };
}

interface Card3DProps {
  children: ReactNode;
  className?: string;
}

export function Card3D({ children, className = '' }: Card3DProps) {
  const { tiltStyle, handleMouseMove, handleMouseLeave } = use3DTilt(10);

  return (
    <div
      className={`${className}`}
      style={tiltStyle}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </div>
  );
}
