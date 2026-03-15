'use client';

import { motion, useSpring, useTransform } from 'framer-motion';
import { useEffect } from 'react';

interface StatCardProps {
  value: number;
  label: string;
  suffix?: string;
  className?: string;
}

export function StatCard({ value, label, suffix = '', className = '' }: StatCardProps) {
  const spring = useSpring(0, { duration: 2000 });
  const display = useTransform(spring, (current) => Math.round(current));

  useEffect(() => {
    spring.set(value);
  }, [spring, value]);

  return (
    <motion.div
      className={`glass-card p-6 text-center ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: [0.25, 1, 0.5, 1] }}
    >
      <div className="text-4xl font-bold text-accent mb-2 tabular-nums">
        <motion.span>{display}</motion.span>
        {suffix}
      </div>
      <div className="text-sm text-tertiary">{label}</div>
    </motion.div>
  );
}
