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
});
