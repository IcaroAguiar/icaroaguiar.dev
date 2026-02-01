import { FaEnvelope } from 'react-icons/fa';
import { SOCIAL_LINKS } from '@/constants';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-16 border-t border-border-default bg-surface-2">
      <div className="mx-auto max-w-(--breakpoint-lg) px-4 sm:px-6 lg:px-8 py-10 text-center">
        {/* Headline */}
        <p className="text-main font-medium text-lg">Pronto para o próximo passo?</p>
        <p className="mt-1 text-tertiary">Disponível para projetos e parcerias.</p>

        {/* CTA principal (pill) */}
        <a
          href={`mailto:${SOCIAL_LINKS.EMAIL}`}
          className="mt-4 inline-flex items-center gap-2 rounded-full border border-default bg-accent-subtle px-5 py-2 text-sm font-medium text-accent hover:bg-accent hover:text-white transition"
        >
          <FaEnvelope size={14} />
          {SOCIAL_LINKS.EMAIL}
        </a>

        {/* Links rápidos */}
        <div className="mt-5 flex items-center justify-center gap-5 text-sm text-tertiary">
          <a
            href={SOCIAL_LINKS.GITHUB}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent transition"
          >
            GitHub
          </a>
          <span className="h-4 w-px bg-border-default" />
          <a
            href={SOCIAL_LINKS.LINKEDIN}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent transition"
          >
            LinkedIn
          </a>
          <span className="h-4 w-px bg-border-default" />
          <a
            href="/Icaro-Aguiar-DevFullStack-PT%20(2).pdf"
            download="Icaro-Aguiar-DevFullStack-PT.pdf"
            className="hover:text-accent transition"
          >
            Currículo (PDF)
          </a>
        </div>

        {/* Copyright */}
        <div className="mt-6 text-xs text-muted">
          © {currentYear} Ícaro Aguiar. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
