import { ReactNode } from 'react';

interface TimelineProps {
  children: ReactNode;
}

interface TimelineItemProps {
  title: string;
  subtitle: string;
  period: string;
  children?: ReactNode;
}

export function Timeline({ children }: TimelineProps) {
  return (
    <ol className="relative border-s border-border-default pl-6 space-y-8">
      {children}
    </ol>
  );
}

export function TimelineItem({ title, subtitle, period, children }: TimelineItemProps) {
  return (
    <li className="relative pl-6">
      <span className="absolute left-0 top-1.5 size-2.5 rounded-full bg-accent ring-4 ring-accent-subtle" />
      <h4 className="font-semibold text-main">
        {title} — {subtitle}
      </h4>
      <div className="text-sm text-muted mb-2">{period}</div>
      {children}
    </li>
  );
}
