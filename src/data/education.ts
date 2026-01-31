export interface Education {
  course: string;
  institution: string;
  status: string;
}

export const education: Education[] = [
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
