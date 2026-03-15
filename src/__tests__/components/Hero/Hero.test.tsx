import React from 'react';
import { render, screen } from '@testing-library/react';
import Hero from '@/components/Hero/Hero';

// Mock framer-motion to avoid animation errors in Jest jsdom
jest.mock('framer-motion', () => {
  const actual = jest.requireActual('framer-motion');
  return {
    ...actual,
    motion: {
      div: ({ children, className, ...props }: any) => {
        const { initial, animate, variants, transition, custom, ...safeProps } = props;
        return <div className={className} {...safeProps}>{children}</div>;
      },
      span: ({ children, className, ...props }: any) => {
        const { initial, animate, variants, transition, custom, ...safeProps } = props;
        return <span className={className} {...safeProps}>{children}</span>;
      },
      h1: ({ children, className, ...props }: any) => <h1 className={className} {...props}>{children}</h1>,
      p: ({ children, className, ...props }: any) => <p className={className} {...props}>{children}</p>,
    },
    useReducedMotion: () => false,
  };
});

// Mock next/image
jest.mock('next/image', () => ({
  __esModule: true,
  default: (props: any) => {
    // eslint-disable-next-line @next/next/no-img-element
    return <img {...props} alt={props.alt} />;
  },
}));

describe('Hero Component', () => {
  it('renders the core positioning texts and headline', () => {
    render(<Hero />);
    
    // Core overline
    expect(screen.getByText(/Desenvolvedor Full-Stack · Arquitetura & Produto/i)).toBeInTheDocument();
    
    // Subheadline
    expect(screen.getByText(/Atuo do backend à interface/i)).toBeInTheDocument();
    
    // Headline chunks
    expect(screen.getByText(/Arquitetura sólida/i)).toBeInTheDocument();
    expect(screen.getByText(/Interfaces refinadas/i)).toBeInTheDocument();
    expect(screen.getByText(/Produtos que evoluem/i)).toBeInTheDocument();
  });

  it('renders the background glow and workbench elements', () => {
    const { container } = render(<Hero />);
    
    // Workbench glow
    const workbenchGlow = container.querySelector('.bg-accent-primary\\/10');
    expect(workbenchGlow).toBeInTheDocument();
    expect(workbenchGlow).toHaveClass('blur-[80px]');
  });
});
