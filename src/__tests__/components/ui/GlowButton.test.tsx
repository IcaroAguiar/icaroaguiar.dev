import { render, screen, fireEvent } from '@testing-library/react';
import { GlowButton } from '@/components/ui/GlowButton';
import '@testing-library/jest-dom';

jest.mock('framer-motion', () => ({
  motion: {
    button: ({ children, whileHover, whileTap, transition, ...props }: any) => <button {...props}>{children}</button>,
    a: ({ children, whileHover, whileTap, transition, ...props }: any) => <a {...props}>{children}</a>,
  },
}));

describe('GlowButton Component', () => {
  it('renders children correctly', () => {
    render(<GlowButton>Click me</GlowButton>);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });

  it('handles click events', () => {
    const handleClick = jest.fn();
    render(<GlowButton onClick={handleClick}>Click</GlowButton>);
    fireEvent.click(screen.getByText('Click'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('renders as link when href is provided', () => {
    render(<GlowButton href="/test">Link</GlowButton>);
    const link = screen.getByText('Link');
    expect(link.tagName).toBe('A');
    expect(link).toHaveAttribute('href', '/test');
  });

  it('applies primary variant styles by default', () => {
    const { container } = render(<GlowButton>Primary</GlowButton>);
    const button = container.querySelector('button');
    expect(button).toHaveClass('bg-accent');
    expect(button).toHaveClass('text-white');
  });

  it('applies outline variant styles', () => {
    const { container } = render(<GlowButton variant="outline">Outline</GlowButton>);
    const button = container.querySelector('button');
    expect(button).toHaveClass('border-accent');
    expect(button).toHaveClass('text-accent');
  });

  it('applies custom className', () => {
    render(<GlowButton className="custom-btn">Button</GlowButton>);
    expect(screen.getByText('Button')).toHaveClass('custom-btn');
  });
});
