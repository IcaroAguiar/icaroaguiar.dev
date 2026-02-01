import { render, screen } from '@testing-library/react';
import { Card } from '@/components/ui/Card';
import '@testing-library/jest-dom';

describe('Card Component', () => {
  it('renders children correctly', () => {
    render(<Card>Card Content</Card>);
    expect(screen.getByText('Card Content')).toBeInTheDocument();
  });

  it('applies hover styles by default', () => {
    const { container } = render(<Card>Card</Card>);
    expect(container.firstChild).toHaveClass('hover:border-border-strong');
    expect(container.firstChild).toHaveClass('hover:shadow-md');
  });

  it('disables hover styles when hoverable is false', () => {
    const { container } = render(<Card hoverable={false}>Card</Card>);
    expect(container.firstChild).not.toHaveClass('hover:border-border-strong');
    expect(container.firstChild).not.toHaveClass('hover:shadow-md');
  });

  it('applies custom className', () => {
    render(<Card className="custom-card">Card</Card>);
    expect(screen.getByText('Card')).toHaveClass('custom-card');
  });

  it('has correct base styling with theme variables', () => {
    const { container } = render(<Card>Card</Card>);
    const card = container.firstChild;
    expect(card).toHaveClass('bg-surface-2');
    expect(card).toHaveClass('border-border-default');
    expect(card).toHaveClass('rounded-lg');
    expect(card).toHaveClass('shadow-sm');
  });
});
