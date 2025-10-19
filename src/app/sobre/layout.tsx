import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sobre',
  description:
    'Desenvolvedor Full-Stack focado em transformar requisitos em produtos funcionais com React/Next.js, .NET/Node.js e CI/CD. Confira minha trajetória profissional e habilidades técnicas.',
};

export default function SobreLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
