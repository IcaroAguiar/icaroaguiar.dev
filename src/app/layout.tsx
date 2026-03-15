import type { Metadata } from 'next';
import { DM_Serif_Display, Geist } from 'next/font/google';
import { ThemeProvider } from '@/providers/ThemeProvider';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import './globals.css';

const dmSerifDisplay = DM_Serif_Display({
  weight: ['400'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-dm-serif',
});

const geist = Geist({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-geist',
});

export const metadata: Metadata = {
  title: {
    default: 'Ícaro Aguiar | Desenvolvedor Full-Stack',
    template: '%s | Ícaro Aguiar',
  },
  description:
    'Desenvolvedor Full-Stack especializado em React, Node.js, C# e AI/ML. Criador de aplicações web e mobile de alto impacto com foco em soluções escaláveis e performance.',
  keywords: [
    'Desenvolvedor Full-Stack',
    'React',
    'Next.js',
    'Node.js',
    'C#',
    'React Native',
    'PostgreSQL',
    'AI',
    'Machine Learning',
    'Desenvolvimento Web',
    'Desenvolvimento Mobile',
  ],
  authors: [{ name: 'Ícaro Aguiar' }],
  creator: 'Ícaro Aguiar',
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://icaroaguiar.dev',
    title: 'Ícaro Aguiar | Desenvolvedor Full-Stack',
    description:
      'Desenvolvedor Full-Stack especializado em React, Node.js, C# e AI/ML. Criador de aplicações web e mobile de alto impacto.',
    siteName: 'Ícaro Aguiar Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ícaro Aguiar | Desenvolvedor Full-Stack',
    description:
      'Desenvolvedor Full-Stack especializado em React, Node.js, C# e AI/ML.',
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
    <html lang="pt-BR" className={`${dmSerifDisplay.variable} ${geist.variable}`} suppressHydrationWarning>
      <body className="antialiased">
        <ThemeProvider>
          <Navbar />
          <main className="pt-16 min-h-screen">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
