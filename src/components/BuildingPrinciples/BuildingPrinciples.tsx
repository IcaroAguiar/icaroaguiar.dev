'use client';

import { motion } from 'framer-motion';
import { staggerContainerVariants, itemVariants } from '@/hooks';

const PRINCIPLES = [
  {
    pill: 'Arquitetura',
    description: 'Organizo domínio, contratos e responsabilidades para escalar sem perder clareza.',
  },
  {
    pill: 'Produto',
    description: 'Traduzo requisitos em fluxos utilizáveis, priorizando valor, simplicidade e evolução.',
  },
  {
    pill: 'Frontend',
    description: 'Crio interfaces com hierarquia visual, responsividade e microinterações consistentes.',
  },
  {
    pill: 'Backend',
    description: 'Desenho APIs, integrações e persistência com foco em previsibilidade, manutenção e operação real.',
  },
];

export function BuildingPrinciples() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background glow sutil */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-accent-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10%' }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold tracking-tight text-main mb-4">
            Como eu construo
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl">
            Princípios de engenharia que norteiam cada decisão técnica, do backend à interface do usuário.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16"
          variants={staggerContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-10%' }}
        >
          {PRINCIPLES.map((principle, index) => (
            <motion.div 
              key={principle.pill} 
              className="group relative flex flex-col gap-5 p-6 md:p-8 rounded-2xl border border-transparent hover:border-border-subtle hover:bg-surface-2/20 transition-all duration-500 overflow-hidden" 
              variants={itemVariants}
            >
              {/* Numeração Implícita Discreta / Watermark */}
              <div className="absolute top-2 right-4 text-7xl font-display font-bold text-text-faint/10 select-none pointer-events-none group-hover:text-accent-primary/5 transition-colors duration-500">
                0{index + 1}
              </div>

              <div className="relative z-10">
                <span className="inline-block px-3 py-1.5 bg-surface-3 border border-border-default rounded-md text-xs font-semibold text-accent-primary tracking-wider uppercase shadow-sm">
                  {principle.pill}
                </span>
              </div>
              <p className="relative z-10 text-lg md:text-xl font-medium text-text-main leading-relaxed">
                {principle.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
