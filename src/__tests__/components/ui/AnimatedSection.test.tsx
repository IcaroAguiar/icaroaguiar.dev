import { render, screen } from '@testing-library/react';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import '@testing-library/jest-dom';

describe('AnimatedSection Component', () => {
  it('renders children correctly', () => {
    render(<AnimatedSection>Animated Content</AnimatedSection>);
    expect(screen.getByText('Animated Content')).toBeInTheDocument();
  });

  it('applies custom className', () => {
    render(<AnimatedSection className="custom-section">Content</AnimatedSection>);
    expect(screen.getByText('Content')).toHaveClass('custom-section');
  });
});
