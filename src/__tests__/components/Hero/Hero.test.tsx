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
    const { fill, priority, sizes, ...imgProps } = props;
    // eslint-disable-next-line @next/next/no-img-element
    return <img {...imgProps} alt={props.alt} />;
  },
}));

describe('Hero Component', () => {
  it('renders the core positioning texts and headline', () => {
    render(<Hero />);
    
    // Core overline
    expect(screen.getByText(/Engenharia · Produto · IA aplicada/i)).toBeInTheDocument();
    
    // Subheadline
    expect(screen.getByText(/Do diagnóstico técnico à interface final/i)).toBeInTheDocument();
    
    // Headline
    expect(screen.getByText(/Arquitetura, produto e/i)).toBeInTheDocument();
  });

  it('renders the technical artifact cards without invented metrics', () => {
    render(<Hero />);

    expect(screen.getByText('create-subscription.use-case.ts')).toBeInTheDocument();
    expect(screen.getByText('ASCEND architecture')).toBeInTheDocument();
    expect(screen.getByText('Billing')).toBeInTheDocument();
    expect(screen.getByText('Fiscal')).toBeInTheDocument();
    expect(screen.getByAltText('Dashboard ASCEND no tema claro')).toBeInTheDocument();
    expect(screen.queryByText('R$ 94,8k')).not.toBeInTheDocument();
    expect(screen.queryByText('Eventos recentes')).not.toBeInTheDocument();
  });
});
