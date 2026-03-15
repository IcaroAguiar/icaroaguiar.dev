'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaInfoCircle, FaLock } from 'react-icons/fa';
import { HiArrowRight } from 'react-icons/hi';
import { projects } from '@/data';
import { ScrollReveal } from '@/components/ui';
import { Card3D } from '@/hooks/use3DTilt';
import { staggerContainerVariants, itemVariants } from '@/hooks';

type Category = 'Todos' | 'Mobile' | 'Web' | 'AI/ML' | 'Backend';

const categories: Category[] = ['Todos', 'Mobile', 'Web', 'AI/ML', 'Backend'];

function getProjectCategory(tags: string[]): Category {
  if (tags.some(t => t.toLowerCase().includes('react native') || t.toLowerCase().includes('mobile'))) return 'Mobile';
  if (tags.some(t => t.toLowerCase().includes('python') || t.toLowerCase().includes('face') || t.toLowerCase().includes('ai'))) return 'AI/ML';
  if (tags.some(t => t.toLowerCase().includes('api') || t.toLowerCase().includes('backend') || t.toLowerCase().includes('node'))) return 'Backend';
  return 'Web';
}

export default function ProjetosPage() {
  const [activeCategory, setActiveCategory] = useState<Category>('Todos');

  const filteredProjects = activeCategory === 'Todos'
    ? projects
    : projects.filter(p => getProjectCategory(p.tags) === activeCategory);

  const featuredProject = filteredProjects.find(p => p.featured);
  const otherProjects = filteredProjects.filter(p => !p.featured);

  return (
    <div className="bg-surface-1 min-h-screen">
      {/* Fixed background layers */}
      <div className="fixed inset-0 z-0 bg-grid-pattern opacity-30 mix-blend-luminosity" />
      <div className="fixed inset-0 z-0 bg-noise opacity-40" />

      <div className="relative z-10 py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1100px] mx-auto">

          {/* Header */}
          <motion.div
            variants={staggerContainerVariants}
            initial="hidden"
            animate="visible"
            className="mb-16"
          >
            <motion.p variants={itemVariants} className="text-xs font-mono text-accent-primary tracking-widest uppercase mb-3">
              Portfólio
            </motion.p>
            <motion.h1 variants={itemVariants} className="text-4xl md:text-5xl font-bold tracking-tight text-main mb-4">
              Projetos
            </motion.h1>
            <motion.p variants={itemVariants} className="text-text-secondary text-lg max-w-2xl">
              Case studies com foco em performance, escalabilidade e experiência do usuário.
            </motion.p>
          </motion.div>

          {/* Filtros */}
          <ScrollReveal>
            <div className="flex flex-wrap gap-2 mb-12">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 border ${
                    activeCategory === category
                      ? 'bg-text-main text-surface-1 border-text-main'
                      : 'bg-surface-1 text-text-secondary border-border-default hover:border-border-strong hover:text-main'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </ScrollReveal>

          {/* Bento Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[280px]"
            >
              {/* Featured Project - Large Card */}
              {featuredProject && (
                <Card3D className="md:col-span-2 md:row-span-2">
                  <Link href={`/projeto/${featuredProject.id}`}>
                    <div className="bg-surface-1 border border-border-default h-full p-5 hover:border-border-strong hover:shadow-xl hover:shadow-accent-primary/5 hover:-translate-y-0.5 transition-all duration-500 group cursor-pointer flex flex-col rounded-2xl overflow-hidden">
                      <div className="relative flex-1 rounded-xl overflow-hidden mb-4 bg-surface-2">
                        {featuredProject.image ? (
                          <Image
                            src={featuredProject.image}
                            alt={featuredProject.title}
                            fill
                            className="object-cover object-top opacity-80 group-hover:opacity-100 group-hover:scale-[1.02] transition-all duration-700"
                          />
                        ) : (
                          <div className="flex items-center justify-center h-full text-text-faint text-6xl">
                            <FaInfoCircle />
                          </div>
                        )}
                        {/* Gradient overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-surface-1/40 to-transparent" />
                        <div className="absolute top-3 left-3 flex gap-2">
                          <span className="px-2.5 py-0.5 bg-accent-primary text-white text-xs font-semibold rounded-full">
                            {featuredProject.status}
                          </span>
                          <span className="px-2.5 py-0.5 bg-surface-3 text-text-secondary border border-border-default text-xs font-semibold rounded-full">
                            Destaque
                          </span>
                        </div>
                      </div>
                      <h3 className="text-xl font-bold text-main mb-1 group-hover:text-accent-primary transition-colors">
                        {featuredProject.title}
                      </h3>
                      <p className="text-text-secondary text-sm line-clamp-2 mb-3">
                        {featuredProject.description}
                      </p>
                      <div className="flex flex-wrap gap-1.5 mt-auto">
                        {featuredProject.tags.slice(0, 4).map(tag => (
                          <span key={tag} className="text-xs px-2 py-0.5 bg-surface-3 text-text-tertiary border border-border-default rounded-md">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </Link>
                </Card3D>
              )}

              {/* Other Projects */}
              {otherProjects.map((project, index) => {
                const isLarge = index === 0 || index === 3;
                return (
                  <ScrollReveal
                    key={project.id}
                    delay={index * 0.08}
                    className={isLarge ? 'md:col-span-2' : ''}
                  >
                    <Link href={`/projeto/${project.id}`}>
                      <div className="bg-surface-1 border border-border-default h-full p-4 hover:border-border-strong hover:shadow-lg hover:shadow-accent-primary/5 hover:-translate-y-0.5 transition-all duration-300 group cursor-pointer flex flex-col rounded-2xl overflow-hidden">
                        <div className="relative h-36 rounded-lg overflow-hidden mb-3 bg-surface-2">
                          {project.image ? (
                            <Image
                              src={project.image}
                              alt={project.title}
                              fill
                              className="object-cover object-top opacity-80 group-hover:opacity-100 group-hover:scale-[1.02] transition-all duration-500"
                            />
                          ) : (
                            <div className="flex items-center justify-center h-full text-text-faint text-4xl">
                              <FaInfoCircle />
                            </div>
                          )}
                          <div className="absolute top-2.5 left-2.5 flex gap-1.5">
                            <span className={`px-2 py-0.5 text-xs font-semibold rounded-full ${
                              project.status === 'Open-Source'
                                ? 'bg-accent-primary text-white'
                                : project.status === 'Em Produção'
                                ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                                : 'bg-surface-3 text-text-secondary border border-border-default'
                            }`}>
                              {project.status}
                            </span>
                            {project.privateProject && (
                              <span className="px-2 py-0.5 bg-surface-3 text-text-muted border border-border-default text-xs rounded-full flex items-center gap-1">
                                <FaLock size={9} />
                                Privado
                              </span>
                            )}
                          </div>
                        </div>
                        <h3 className="text-sm font-semibold text-main mb-1 group-hover:text-accent-primary transition-colors line-clamp-1">
                          {project.title}
                        </h3>
                        <p className="text-text-secondary text-xs line-clamp-2 mb-3 flex-1">
                          {project.description}
                        </p>
                        <div className="flex flex-wrap gap-1 mt-auto">
                          {project.tags.slice(0, 3).map(tag => (
                            <span key={tag} className="text-xs px-2 py-0.5 bg-surface-3 text-text-tertiary border border-border-default rounded-md">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </Link>
                  </ScrollReveal>
                );
              })}
            </motion.div>
          </AnimatePresence>

          {/* CTA */}
          <ScrollReveal>
            <div className="mt-20 flex flex-col items-center gap-4">
              <div className="divider-gradient w-full opacity-30 mb-4" />
              <p className="text-text-secondary text-sm">
                Interessado em ver mais do meu trabalho?
              </p>
              <a
                href="https://github.com/IcaroAguiar"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-surface-2 text-main border border-border-default hover:border-border-strong font-semibold rounded-lg transition-all text-sm"
              >
                <FaGithub />
                Ver GitHub
                <HiArrowRight className="w-4 h-4" />
              </a>
            </div>
          </ScrollReveal>

        </div>
      </div>
    </div>
  );
}
