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
    >
      <div className="text-4xl font-bold text-[#2a9d8f] mb-2">
        <motion.span>{display}</motion.span>
        {suffix}
      </div>
      <div className="text-sm text-gray-500">{label}</div>
    </motion.div>
  );
}
