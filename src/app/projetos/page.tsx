'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaInfoCircle, FaLock } from 'react-icons/fa';
import { projects } from '@/data';
import { ScrollReveal, GlowButton } from '@/components/ui';
import { Card3D } from '@/hooks/use3DTilt';

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
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <ScrollReveal>
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Projetos
          </h1>
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            Case studies de projetos desenvolvidos com foco em performance, escalabilidade e experiência do usuário.
          </p>
        </ScrollReveal>

        {/* Filtros */}
        <ScrollReveal delay={0.1}>
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-[#2a9d8f] text-white shadow-[0_0_20px_rgba(42,157,143,0.5)]'
                    : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white'
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
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-[300px]"
          >
            {/* Featured Project - Large Card */}
            {featuredProject && (
              <Card3D className="md:col-span-2 md:row-span-2">
                <Link href={`/projeto/${featuredProject.id}`}>
                  <div className="glass-card h-full p-6 hover:glow transition-all duration-300 group cursor-pointer flex flex-col">
                    <div className="relative flex-1 rounded-xl overflow-hidden mb-4 bg-gradient-to-br from-emerald-900/30 to-emerald-800/20">
                      {featuredProject.image ? (
                        <Image
                          src={featuredProject.image}
                          alt={featuredProject.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                      ) : (
                        <div className="flex items-center justify-center h-full text-emerald-500/50 text-6xl">
                          <FaInfoCircle />
                        </div>
                      )}
                      <div className="absolute top-4 left-4 flex gap-2">
                        <span className="px-3 py-1 bg-[#2a9d8f] text-white text-xs font-semibold rounded-full">
                          {featuredProject.status}
                        </span>
                        <span className="px-3 py-1 bg-amber-500 text-white text-xs font-semibold rounded-full">
                          Featured
                        </span>
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors">
                      {featuredProject.title}
                    </h3>
                    <p className="text-gray-400 text-sm line-clamp-2 mb-4">
                      {featuredProject.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {featuredProject.tags.slice(0, 4).map(tag => (
                        <span key={tag} className="text-xs px-2 py-1 bg-emerald-900/30 text-emerald-400 rounded">
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
                  delay={index * 0.1}
                  className={isLarge ? 'md:col-span-2' : ''}
                >
                  <Link href={`/projeto/${project.id}`}>
                    <div className="glass-card h-full p-5 hover:glow transition-all duration-300 group cursor-pointer flex flex-col">
                      <div className="relative h-40 rounded-lg overflow-hidden mb-4 bg-gradient-to-br from-gray-800/50 to-gray-700/30">
                        {project.image ? (
                          <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                        ) : (
                          <div className="flex items-center justify-center h-full text-gray-600 text-4xl">
                            <FaInfoCircle />
                          </div>
                        )}
                        <div className="absolute top-3 left-3 flex gap-2">
                          <span className={`px-2 py-0.5 text-xs font-semibold rounded-full ${
                            project.status === 'Open-Source' 
                              ? 'bg-emerald-500 text-white' 
                              : project.status === 'Em Produção'
                              ? 'bg-blue-500 text-white'
                              : 'bg-gray-600 text-white'
                          }`}>
                            {project.status}
                          </span>
                          {project.privateProject && (
                            <span className="px-2 py-0.5 bg-gray-700 text-gray-300 text-xs rounded-full flex items-center gap-1">
                              <FaLock size={10} />
                              Privado
                            </span>
                          )}
                        </div>
                      </div>
                      <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-emerald-400 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-gray-400 text-sm line-clamp-2 mb-3">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-1.5 mt-auto">
                        {project.tags.slice(0, 3).map(tag => (
                          <span key={tag} className="text-xs px-2 py-0.5 bg-white/5 text-gray-400 rounded">
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
          <div className="mt-20 text-center">
            <p className="text-gray-400 mb-6">
              Interessado em ver mais do meu trabalho?
            </p>
            <GlowButton href="https://github.com/IcaroAguiar" variant="outline">
              <FaGithub className="mr-2" />
              Ver GitHub
            </GlowButton>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
