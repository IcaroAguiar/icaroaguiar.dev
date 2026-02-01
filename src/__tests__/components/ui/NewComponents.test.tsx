import { render, screen } from '@testing-library/react';
import { BentoCard } from '@/components/ui/BentoCard';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { TypewriterV2 } from '@/components/ui/TypewriterV2';
import { StatCard } from '@/components/ui/StatCard';
import '@testing-library/jest-dom';

// Properly mock framer-motion to avoid DOM prop warnings
jest.mock('framer-motion', () => ({
  motion: {
    div: ({ children, whileHover, whileInView, transition, initial, animate, viewport, ...props }: any) => (
      <div {...props}>{children}</div>
    ),
    span: ({ children, ...props }: any) => <span {...props}>{children}</span>,
  },
  useSpring: () => ({ 
    set: jest.fn(),
    get: () => 0,
    on: jest.fn(),
  }),
  useTransform: () => 0,
}));

describe('BentoCard Component', () => {
  it('renders children correctly', () => {
    render(<BentoCard>Content</BentoCard>);
    expect(screen.getByText('Content')).toBeInTheDocument();
  });

  it('applies size classes', () => {
    const { rerender, container } = render(<BentoCard size="large">Large</BentoCard>);
    expect(container.querySelector('.col-span-2')).toBeInTheDocument();
    expect(container.querySelector('.row-span-2')).toBeInTheDocument();
    
    rerender(<BentoCard size="medium">Medium</BentoCard>);
    expect(container.querySelector('.col-span-2')).toBeInTheDocument();
    expect(container.querySelector('.row-span-1')).toBeInTheDocument();
    
    rerender(<BentoCard size="small">Small</BentoCard>);
    expect(container.querySelector('.col-span-1')).toBeInTheDocument();
    expect(container.querySelector('.row-span-1')).toBeInTheDocument();
  });
});

describe('ScrollReveal Component', () => {
  it('renders children correctly', () => {
    render(<ScrollReveal>Content</ScrollReveal>);
    expect(screen.getByText('Content')).toBeInTheDocument();
  });
});

describe('TypewriterV2 Component', () => {
  it('renders with initial text', () => {
    render(<TypewriterV2 words={["Hello", "World"]} />);
    expect(screen.getByText('|')).toBeInTheDocument();
  });
});

describe('StatCard Component', () => {
  it('renders value and label', () => {
    render(<StatCard value={42} label="Projects" />);
    expect(screen.getByText('Projects')).toBeInTheDocument();
  });

  it('displays suffix correctly', () => {
    render(<StatCard value={5} label="Years" suffix="+" />);
    expect(screen.getByText('+')).toBeInTheDocument();
  });

  it('applies custom className', () => {
    const { container } = render(<StatCard value={10} label="Test" className="custom-stat" />);
    expect(container.firstChild).toHaveClass('custom-stat');
  });
});
