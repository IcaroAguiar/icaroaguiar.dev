import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Projetos',
  description:
    'Case studies de projetos desenvolvidos: ASCEND (React Native), Finanças API (Node.js), Fixxcapital, Rosana Site, Bluefit MVP, Kosmédico LP, Picanha Brasil, Daniele Landing Page, Star Agency V2, Tatiane Aguiar e Neo Constrictor.',
};

export default function ProjetosLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
