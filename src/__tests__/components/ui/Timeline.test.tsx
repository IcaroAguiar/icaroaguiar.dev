import { render, screen } from '@testing-library/react';
import { Timeline, TimelineItem } from '@/components/ui/Timeline';
import '@testing-library/jest-dom';

describe('Timeline Components', () => {
  it('renders timeline with items correctly', () => {
    render(
      <Timeline>
        <TimelineItem title="Job Title" subtitle="Company" period="2020 - 2021">
          <p>Task description</p>
        </TimelineItem>
      </Timeline>
    );

    expect(screen.getByText('Job Title — Company')).toBeInTheDocument();
    expect(screen.getByText('2020 - 2021')).toBeInTheDocument();
    expect(screen.getByText('Task description')).toBeInTheDocument();
  });

  it('applies correct styling to timeline container', () => {
    const { container } = render(
      <Timeline>
        <TimelineItem title="Title" subtitle="Subtitle" period="2023" />
      </Timeline>
    );
    const timeline = container.querySelector('ol');
    expect(timeline).toHaveClass('border-border-default');
    expect(timeline).toHaveClass('space-y-8');
  });

  it('applies correct styling to timeline dot', () => {
    const { container } = render(
      <Timeline>
        <TimelineItem title="Title" subtitle="Subtitle" period="2023" />
      </Timeline>
    );
    const dot = container.querySelector('span');
    expect(dot).toHaveClass('bg-accent');
    expect(dot).toHaveClass('ring-accent-subtle');
  });

  it('applies correct text colors to timeline items', () => {
    render(
      <Timeline>
        <TimelineItem title="Title" subtitle="Subtitle" period="2023" />
      </Timeline>
    );
    expect(screen.getByText('Title — Subtitle')).toHaveClass('text-main');
    expect(screen.getByText('2023')).toHaveClass('text-muted');
  });
});
