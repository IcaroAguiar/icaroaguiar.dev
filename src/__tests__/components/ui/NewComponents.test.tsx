import { render, screen } from '@testing-library/react';
import { BentoCard } from '@/components/ui/BentoCard';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { TypewriterV2 } from '@/components/ui/TypewriterV2';
import { StatCard } from '@/components/ui/StatCard';
import '@testing-library/jest-dom';

jest.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
  },
  useSpring: () => ({ set: jest.fn() }),
  useTransform: () => 0,
}));

describe('BentoCard Component', () => {
  it('renders children correctly', () => {
    render(<BentoCard>Content</BentoCard>);
    expect(screen.getByText('Content')).toBeInTheDocument();
  });

  it('applies size classes', () => {
    const { rerender } = render(<BentoCard size="large">Large</BentoCard>);
    expect(screen.getByText('Large').parentElement).toHaveClass('col-span-2', 'row-span-2');
    
    rerender(<BentoCard size="medium">Medium</BentoCard>);
    expect(screen.getByText('Medium').parentElement).toHaveClass('col-span-2', 'row-span-1');
    
    rerender(<BentoCard size="small">Small</BentoCard>);
    expect(screen.getByText('Small').parentElement).toHaveClass('col-span-1', 'row-span-1');
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
});
