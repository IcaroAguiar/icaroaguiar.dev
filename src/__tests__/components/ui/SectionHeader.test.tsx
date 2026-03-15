import { render, screen } from '@testing-library/react';
import { SectionHeader } from '@/components/ui/SectionHeader';
import '@testing-library/jest-dom';

describe('SectionHeader Component', () => {
  it('renders title correctly', () => {
    render(<SectionHeader title="Section Title" />);
    expect(screen.getByText('Section Title')).toBeInTheDocument();
  });

  it('renders subtitle when provided', () => {
    render(<SectionHeader title="Title" subtitle="Section Subtitle" />);
    expect(screen.getByText('Section Subtitle')).toBeInTheDocument();
  });

  it('applies centered class when centered is true', () => {
    const { container } = render(<SectionHeader title="Title" centered={true} />);
    expect(container.firstChild).toHaveClass('text-center');
  });

  it('does not apply centered class by default', () => {
    const { container } = render(<SectionHeader title="Title" />);
    expect(container.firstChild).not.toHaveClass('text-center');
  });
});
