'use client';

import { useEffect, useRef } from 'react';

interface MatrixRainProps {
  opacity?: number;
  speed?: number;
  density?: number;
  className?: string;
}

export function MatrixRain({ 
  opacity = 0.15, 
  speed = 1, 
  density = 100,
  className = '' 
}: MatrixRainProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Símbolos da stack do desenvolvedor
    const symbols = [
      'React', 'Next', 'Nest', 'TS', 'C#', 
      '<>', '{}', '[]', '()', '//', '/*', 
      '()', '=>', '&&', '||', '??', '??.',
      'git', 'npm', 'yarn', 'API', 'REST',
      'SQL', 'NoSQL', 'JSON', 'YAML', 'ENV',
      'async', 'await', 'const', 'let', 'var',
      'func', 'class', 'interface', 'type',
      'import', 'export', 'from', 'return',
      'if', 'else', 'for', 'while', 'map',
      '=>', '?.', '||', '&&', '??',
      '</>', '{ }', '[ ]', '( )', '` `',
    ];

    let width = window.innerWidth;
    let height = window.innerHeight;
    
    canvas.width = width;
    canvas.height = height;

    // Configurar colunas de chuva
    const fontSize = 14;
    const columns = Math.floor(width / fontSize);
    const drops: number[] = [];
    const columnSymbols: string[] = [];
    
    for (let i = 0; i < columns; i++) {
      drops[i] = Math.random() * -100; // Começar acima da tela
      columnSymbols[i] = symbols[Math.floor(Math.random() * symbols.length)];
    }

    let frameCount = 0;
    
    const draw = (timestamp?: number) => {
      // Limpar com fade effect
      ctx.fillStyle = `rgba(0, 0, 0, ${0.05 * speed})`;
      ctx.fillRect(0, 0, width, height);

      ctx.font = `${fontSize}px 'JetBrains Mono', monospace`;
      
      for (let i = 0; i < drops.length; i++) {
        // Cor verde esmeralda com variação de opacidade
        const alpha = opacity * (0.5 + Math.random() * 0.5);
        ctx.fillStyle = `rgba(42, 157, 143, ${alpha})`;
        
        const text = columnSymbols[i];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        // Resetar quando chegar ao fim
        if (drops[i] * fontSize > height && Math.random() > 0.975) {
          drops[i] = 0;
          columnSymbols[i] = symbols[Math.floor(Math.random() * symbols.length)];
        }

        drops[i] += speed;
      }

      frameCount++;
      
      // Atualizar símbolos aleatoriamente para variedade
      if (frameCount % 30 === 0) {
        const randomCol = Math.floor(Math.random() * columns);
        columnSymbols[randomCol] = symbols[Math.floor(Math.random() * symbols.length)];
      }

      animationRef.current = requestAnimationFrame(draw);
    };

    draw();

    // Handler de resize
    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      window.removeEventListener('resize', handleResize);
    };
  }, [opacity, speed, density]);

  return (
    <canvas
      ref={canvasRef}
      className={`fixed inset-0 pointer-events-none z-0 ${className}`}
      style={{ opacity }}
    />
  );
}
