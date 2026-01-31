'use client';

import Link from 'next/link';
import { FaDownload, FaEnvelope } from 'react-icons/fa';
import { experiences, skills, education } from '@/data';
import {
  AnimatedSection,
  Card,
  SectionHeader,
  TechChip,
  Timeline,
  TimelineItem,
} from '@/components/ui';

export default function SobrePage() {
  return (
    <section className="py-16">
      <div className="max-w-(--breakpoint-lg) mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header + CTAs */}
        <AnimatedSection className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <h1 className="text-[clamp(1.8rem,3.2vw,2.5rem)] font-extrabold tracking-[-0.015em] leading-tight text-slate-900">
            Sobre mim
          </h1>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="/Icaro-Aguiar-DevFullStack-PT%20(2).pdf"
              download="Icaro-Aguiar-DevFullStack-PT.pdf"
              className="inline-flex items-center justify-center gap-2 h-10 px-4 rounded-xl bg-emerald-600 text-white font-medium text-sm hover:bg-emerald-700 transition"
            >
              <FaDownload size={14} />
              Baixar CV (PDF)
            </a>
            <Link
              href="/contato"
              className="inline-flex items-center justify-center gap-2 h-10 px-4 rounded-xl border border-emerald-600 text-emerald-700 font-medium text-sm hover:bg-emerald-50 transition"
            >
              <FaEnvelope size={14} />
              Contato
            </Link>
          </div>
        </AnimatedSection>

        {/* Intro + O que eu faço */}
        <AnimatedSection delay={0.1} className="grid gap-8 md:grid-cols-12 items-start">
          <div className="md:col-span-7 max-w-prose leading-relaxed text-[15.5px] sm:text-[16px] text-slate-700 space-y-4">
            <p>
              Sou <strong>Desenvolvedor Full-Stack</strong> focado em transformar requisitos em
              produtos funcionais. Trabalho com <strong>React/Next.js</strong> no frontend e{' '}
              <strong>.NET / Node.js</strong> no backend, entregando interfaces claras, APIs
              confiáveis e deploy com <strong>CI/CD</strong>.
            </p>
            <p>
              Curto ciclos curtos, versionamento bem feito e comunicação direta. Meu foco é sempre
              entregar valor real para o negócio.
            </p>
          </div>

          <Card className="md:col-span-5 p-6">
            <h3 className="font-semibold text-slate-900 mb-4">O Que Eu Faço</h3>
            <ul className="space-y-3 text-[15px] text-slate-700">
              <li>
                <strong>Frontend:</strong> React/Next.js, Tailwind, acessibilidade e responsividade.
              </li>
              <li>
                <strong>Backend:</strong> .NET e Node.js com APIs REST; integrações e automações.
              </li>
              <li>
                <strong>Mobile:</strong> React Native (Expo).
              </li>
              <li>
                <strong>Dados & Infra:</strong> SQL Server, Oracle, PostgreSQL, CI/CD, Docker.
              </li>
            </ul>
          </Card>
        </AnimatedSection>

        {/* Experiência - Timeline Vertical */}
        <AnimatedSection delay={0.2}>
          <SectionHeader title="Experiência" />
          <Timeline>
            {experiences.map((exp, index) => (
              <TimelineItem
                key={index}
                title={exp.role}
                subtitle={exp.company}
                period={exp.period}
              >
                {exp.tasks.length > 0 && (
                  <ul className="mt-2 list-disc list-outside pl-6 space-y-1 text-[15px] text-slate-700">
                    {exp.tasks.map((task, i) => (
                      <li key={i} className="pl-0">{task}</li>
                    ))}
                  </ul>
                )}
              </TimelineItem>
            ))}
          </Timeline>
        </AnimatedSection>

        {/* Habilidades */}
        <AnimatedSection delay={0.3}>
          <Card className="p-6">
            <SectionHeader title="Habilidades" />
            <div className="space-y-5">
              {Object.entries(skills).map(([category, list]) => (
                <div key={category}>
                  <strong className="text-slate-900 block mb-3">{category}</strong>
                  <div className="flex flex-wrap gap-2">
                    {list.map((skill) => (
                      <TechChip key={skill} label={skill} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </AnimatedSection>

        {/* Formação */}
        <AnimatedSection delay={0.4}>
          <Card className="p-6">
            <SectionHeader title="Formação" />
            <div className="space-y-5">
              {education.map((edu, index) => (
                <div key={index}>
                  <h3 className="font-semibold text-slate-900">{edu.course}</h3>
                  <h4 className="text-sm text-slate-600 mt-1">{edu.institution}</h4>
                  <p className="text-sm text-slate-500 mt-1">{edu.status}</p>
                </div>
              ))}
            </div>
          </Card>
        </AnimatedSection>
      </div>
    </section>
  );
}
