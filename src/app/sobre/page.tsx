'use client';

import { motion } from 'framer-motion';
import { FaDownload, FaEnvelope } from 'react-icons/fa';
import Link from 'next/link';

export default function SobrePage() {
  const experiences = [
    {
      role: 'Desenvolvedor Full-Stack',
      company: 'Star Agency',
      period: 'Setembro de 2025 - Presente',
      tasks: [
        'Sites e sistemas em WordPress/Next.js com UI React + Tailwind.',
        'Desenvolvimento de aplicativos React Native (Expo).',
        'CI/CD com GitHub Actions para deploy automatizado.',
      ],
    },
    {
      role: 'Desenvolvedor de Software',
      company: 'ATSD IT Solutions',
      period: 'Junho de 2025 - Presente',
      tasks: [
        'APIs em C#/.NET para modernização de sistemas web/mobile.',
        'Suporte a bancos de dados e infraestrutura.',
        'Azure DevOps (pipelines CI/CD) e gestão de processos.',
      ],
    },
    {
      role: 'AI Programmer',
      company: 'Outlier',
      period: 'Março de 2025 - Presente',
      tasks: [
        'Programador freelancer em projetos de Inteligência Artificial.',
        'Desenvolvimento e aprimoramento de modelos de IA.',
      ],
    },
    {
      role: 'Estagiário de Desenvolvimento',
      company: 'Oi S.A.',
      period: 'Abril de 2023 - Abril de 2025',
      tasks: [
        'Full-Stack com React/Node.js e aplicações mobile React Native.',
        'Otimização de APIs REST e suporte a ambientes SOA.',
      ],
    },
    {
      role: 'Aprendiz Técnico',
      company: 'Oi S.A.',
      period: 'Abril de 2022 - Fevereiro de 2023',
      tasks: [
        'Desenvolvimento de sistemas internos com Angular/Python.',
        'Automação de tarefas em Linux e rotinas SOA.',
      ],
    },
    {
      role: 'Instrutor',
      company: 'Código Kid',
      period: 'Junho de 2021 - Abril de 2022',
      tasks: [
        'Ensino de programação e robótica para crianças e adolescentes.',
      ],
    },
  ];

  const skills = {
    Linguagens: ['C#', 'JavaScript/TypeScript', 'Python'],
    'Front-end': ['React', 'Next.js', 'Angular', 'Tailwind CSS', 'HTML5/CSS3', 'WordPress'],
    'Back-end': ['.NET', 'Node.js', 'APIs REST'],
    Mobile: ['React Native', 'Expo'],
    'Bancos de Dados': ['SQL Server', 'Oracle', 'PostgreSQL'],
    'DevOps & Cloud': ['GitHub Actions', 'Azure DevOps', 'CI/CD', 'Linux', 'Docker'],
    Metodologias: ['Scrum', 'Desenvolvimento Ágil'],
  };

  const education = [
    {
      course: 'Engenharia da Computação',
      institution: 'Universidade Federal do Recôncavo da Bahia (UFRB)',
      status: 'Em andamento',
    },
    {
      course: 'Análise e Desenvolvimento de Sistemas',
      institution: 'Universidade Salvador (UNIFACS)',
      status: 'Conclusão prevista: Dezembro de 2025',
    },
    {
      course: 'Técnico em Programação Full-Stack',
      institution: 'SENAI-SP',
      status: 'Concluído em Fevereiro de 2023',
    },
  ];

  return (
    <section className="py-16">
      <div className="max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header + CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, ease: 'easeOut' }}
          className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"
        >
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
        </motion.div>

        {/* Intro + O que eu faço (Grid 7/5) */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, ease: 'easeOut', delay: 0.1 }}
          className="grid gap-8 md:grid-cols-12 items-start"
        >
          {/* Intro (7 colunas) */}
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

          {/* O Que Eu Faço (5 colunas) */}
          <div className="md:col-span-5 rounded-2xl border border-black/5 bg-white/60 shadow-sm p-6 hover:shadow-md transition">
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
          </div>
        </motion.div>

        {/* Experiência - Timeline Vertical */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, ease: 'easeOut', delay: 0.2 }}
        >
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 mb-6">Experiência</h2>
          <ol className="relative border-s border-emerald-200/60 pl-6 space-y-6">
            {experiences.map((exp, index) => (
              <li key={index} className="relative pl-6">
                <span className="absolute left-0 top-2 size-3 rounded-full bg-emerald-500 ring-4 ring-emerald-200/50" />
                <h4 className="font-semibold text-slate-900">
                  {exp.role} — {exp.company}
                </h4>
                <div className="text-sm text-slate-500 mb-2">{exp.period}</div>
                {exp.tasks.length > 0 && (
                  <ul className="mt-2 list-disc list-outside pl-6 space-y-1 text-[15px] text-slate-700">
                    {exp.tasks.map((task, i) => (
                      <li key={i} className="pl-0">{task}</li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ol>
        </motion.div>

        {/* Habilidades */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, ease: 'easeOut', delay: 0.3 }}
          className="rounded-2xl border border-black/5 bg-white/60 shadow-sm p-6 hover:shadow-md transition"
        >
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 mb-6">Habilidades</h2>
          <div className="space-y-5">
            {Object.entries(skills).map(([category, list]) => (
              <div key={category}>
                <strong className="text-slate-900 block mb-3">{category}</strong>
                <div className="flex flex-wrap gap-2">
                  {list.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 text-xs font-medium rounded-full border border-emerald-200 bg-emerald-50 text-emerald-700"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Formação */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, ease: 'easeOut', delay: 0.4 }}
          className="rounded-2xl border border-black/5 bg-white/60 shadow-sm p-6 hover:shadow-md transition"
        >
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 mb-6">Formação</h2>
          <div className="space-y-5">
            {education.map((edu, index) => (
              <div key={index}>
                <h3 className="font-semibold text-slate-900">{edu.course}</h3>
                <h4 className="text-sm text-slate-600 mt-1">{edu.institution}</h4>
                <p className="text-sm text-slate-500 mt-1">{edu.status}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
