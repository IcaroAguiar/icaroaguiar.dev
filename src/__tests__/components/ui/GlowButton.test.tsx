import { render, screen, fireEvent } from '@testing-library/react';
import { GlowButton } from '@/components/ui/GlowButton';
import '@testing-library/jest-dom';

jest.mock('framer-motion', () => ({
  motion: {
    button: ({ children, ...props }: any) => <button {...props}>{children}</button>,
    a: ({ children, ...props }: any) => <a {...props}>{children}</a>,
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
});
