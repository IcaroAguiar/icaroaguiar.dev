import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Projetos',
  description:
    'Case studies de projetos desenvolvidos: Ascend (React Native + Node.js), Face API (Python + DeepFace), FixxCapital (Next.js). Aplicações web, mobile e APIs com foco em performance e UX.',
};

export default function ProjetosLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
