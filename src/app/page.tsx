'use client';

import Hero from '@/components/Hero/Hero';
import { MatrixRain, ParticleNetwork } from '@/components/effects';
import { ScrollReveal, GlowButton, StatCard, BentoCard } from '@/components/ui';
import { projects } from '@/data';
import { FaArrowRight } from 'react-icons/fa';
import Link from 'next/link';

export default function HomePage() {
  const featuredProject = projects.find(p => p.featured);
  const previewProjects = projects.slice(0, 3);

  return (
    <>
      {/* Efeitos de Background */}
      <MatrixRain opacity={0.15} speed={0.8} />
      <ParticleNetwork particleCount={60} connectionDistance={150} />

      <div className="relative z-10">
        {/* Hero Section */}
        <Hero />

        {/* Preview de Projetos */}
        <section className="py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <ScrollReveal>
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
                Projetos em Destaque
              </h2>
              <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
                Soluções que desenvolvi com foco em performance, escalabilidade e experiência do usuário.
              </p>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {previewProjects.map((project, index) => (
                <ScrollReveal key={project.id} delay={index * 0.1}>
                  <Link href={`/projeto/${project.id}`}>
                    <div className="glass-card p-6 hover:glow transition-all duration-300 group cursor-pointer h-full">
                      <div className="aspect-video bg-gradient-to-br from-emerald-900/20 to-emerald-800/10 rounded-lg mb-4 overflow-hidden">
                        {project.image && (
                          <img 
                            src={project.image} 
                            alt={project.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                        )}
                      </div>
                      <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-emerald-400 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-gray-400 text-sm line-clamp-2">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mt-4">
                        {project.tags.slice(0, 3).map(tag => (
                          <span key={tag} className="text-xs px-2 py-1 bg-emerald-900/30 text-emerald-400 rounded">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </Link>
                </ScrollReveal>
              ))}
            </div>

            <ScrollReveal>
              <div className="text-center">
                <GlowButton href="/projetos" variant="outline">
                  Ver Todos os Projetos <FaArrowRight className="ml-2" />
                </GlowButton>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-black/20">
          <div className="max-w-7xl mx-auto">
            <ScrollReveal>
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                Experiência em Números
              </h2>
            </ScrollReveal>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <ScrollReveal delay={0}>
                <StatCard value={4} suffix="+" label="Anos de Experiência" />
              </ScrollReveal>
              <ScrollReveal delay={0.1}>
                <StatCard value={15} suffix="+" label="Projetos Entregues" />
              </ScrollReveal>
              <ScrollReveal delay={0.2}>
                <StatCard value={20} suffix="+" label="Tecnologias Dominadas" />
              </ScrollReveal>
              <ScrollReveal delay={0.3}>
                <StatCard value={6} suffix="" label="Empresas Atendidas" />
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <ScrollReveal>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Vamos construir algo{' '}
                <span className="text-emerald-500">incrível</span> juntos?
              </h2>
              <p className="text-xl text-gray-400 mb-8">
                Estou disponível para projetos freelance, consultoria e oportunidades de trabalho.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <GlowButton href="/contato" variant="primary">
                  Entre em Contato
                </GlowButton>
                <GlowButton href="/sobre" variant="outline">
                  Conheça Mais Sobre Mim
                </GlowButton>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </div>
    </>
  );
}
