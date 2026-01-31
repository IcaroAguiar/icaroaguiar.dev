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
    <ol className="relative border-s border-emerald-200/60 pl-6 space-y-6">
      {children}
    </ol>
  );
}

export function TimelineItem({ title, subtitle, period, children }: TimelineItemProps) {
  return (
    <li className="relative pl-6">
      <span className="absolute left-0 top-2 size-3 rounded-full bg-emerald-500 ring-4 ring-emerald-200/50" />
      <h4 className="font-semibold text-slate-900">
        {title} — {subtitle}
      </h4>
      <div className="text-sm text-slate-500 mb-2">{period}</div>
      {children}
    </li>
  );
}
