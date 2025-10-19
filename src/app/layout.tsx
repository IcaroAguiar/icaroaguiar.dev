import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import './globals.css';

const inter = Inter({
  weight: ['400', '500', '600', '700', '800'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const jetbrainsMono = JetBrains_Mono({
  weight: ['500'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-jetbrains-mono',
});

export const metadata: Metadata = {
  title: {
    default: 'Ícaro Aguiar | Desenvolvedor Full-Stack',
    template: '%s | Ícaro Aguiar',
  },
  description:
    'Desenvolvedor Full-Stack especializado em React, Node.js e C#. Criador de aplicações web e mobile de alto impacto com foco em soluções escaláveis e performance.',
  keywords: [
    'Desenvolvedor Full-Stack',
    'React',
    'Node.js',
    'C#',
    'React Native',
    'Next.js',
    'PostgreSQL',
    'Desenvolvimento Web',
    'Desenvolvimento Mobile',
  ],
  authors: [{ name: 'Ícaro Aguiar' }],
  creator: 'Ícaro Aguiar',
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://seu-dominio.vercel.app',
    title: 'Ícaro Aguiar | Desenvolvedor Full-Stack',
    description:
      'Desenvolvedor Full-Stack especializado em React, Node.js e C#. Criador de aplicações web e mobile de alto impacto.',
    siteName: 'Ícaro Aguiar Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ícaro Aguiar | Desenvolvedor Full-Stack',
    description:
      'Desenvolvedor Full-Stack especializado em React, Node.js e C#.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className={`${inter.className} bg-background`}>
        <Navbar />
        <main className="pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
