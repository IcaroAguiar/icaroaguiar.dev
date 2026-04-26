import Link from 'next/link';
import { BriefcaseBusiness, Github, Linkedin, Mail, MessageCircle, UserRound } from 'lucide-react';
import { SOCIAL_LINKS } from '@/constants';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-[#173331] bg-[#061514] px-4 py-10 text-white sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[1fr_auto] md:items-end">
        <div>
          <Link href="/" className="text-lg font-semibold tracking-normal text-white hover:text-[#5eead4]">
            Ícaro Aguiar
          </Link>
          <p className="mt-1 text-xs font-medium uppercase tracking-[0.16em] text-white/45">Full-stack engineer</p>
          <p className="mt-4 max-w-xl text-sm leading-6 text-white/62">
            Engenharia full-stack, arquitetura de produto e IA aplicada para sistemas que precisam sair do papel com qualidade.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-x-5 gap-y-3 text-sm text-white/62">
          <Link href="/projetos" className="inline-flex items-center gap-2 hover:text-[#5eead4]">
            <BriefcaseBusiness aria-hidden="true" className="h-4 w-4" />
            Projetos
          </Link>
          <Link href="/sobre" className="inline-flex items-center gap-2 hover:text-[#5eead4]">
            <UserRound aria-hidden="true" className="h-4 w-4" />
            Sobre
          </Link>
          <Link href="/contato" className="inline-flex items-center gap-2 hover:text-[#5eead4]">
            <MessageCircle aria-hidden="true" className="h-4 w-4" />
            Contato
          </Link>
          <a href={SOCIAL_LINKS.GITHUB} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:text-[#5eead4]">
            <Github aria-hidden="true" className="h-4 w-4" />
            GitHub
          </a>
          <a href={SOCIAL_LINKS.LINKEDIN} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:text-[#5eead4]">
            <Linkedin aria-hidden="true" className="h-4 w-4" />
            LinkedIn
          </a>
          <a href={`mailto:${SOCIAL_LINKS.EMAIL}`} className="inline-flex items-center gap-2 hover:text-[#5eead4]">
            <Mail aria-hidden="true" className="h-4 w-4" />
            Email
          </a>
        </div>
      </div>

      <div className="mx-auto mt-8 flex max-w-7xl flex-col gap-3 border-t border-white/10 pt-5 text-xs text-white/42 sm:flex-row sm:items-center sm:justify-between">
        <span>© {currentYear} Ícaro Aguiar. Todos os direitos reservados.</span>
        <a href="/Icaro_Aguiar_Curriculo_2026_PTBR.pdf" download className="hover:text-[#5eead4]">
          Currículo
        </a>
      </div>
    </footer>
  );
}

export default Footer;
