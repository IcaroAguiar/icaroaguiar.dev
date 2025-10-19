import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contato',
  description:
    'Entre em contato para projetos, parcerias ou oportunidades. Desenvolvedor Full-Stack disponível para transformar sua ideia em produto. Resposta em até 24h.',
};

export default function ContatoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
