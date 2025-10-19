import React from 'react';
import { FaEnvelope } from 'react-icons/fa';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-16 border-t border-black/5 bg-white/60">
      <div className="mx-auto max-w-screen-lg px-4 sm:px-6 lg:px-8 py-10 text-center">
        {/* Headline */}
        <p className="text-slate-800 font-medium text-lg">Pronto para o próximo passo?</p>
        <p className="mt-1 text-slate-600">Disponível para projetos e parcerias.</p>

        {/* CTA principal (pill) */}
        <a
          href="mailto:icaroaguiar14@gmail.com"
          className="mt-4 inline-flex items-center gap-2 rounded-full border border-emerald-300 bg-emerald-50 px-5 py-2 text-sm font-medium text-emerald-800 hover:bg-emerald-100 transition"
        >
          <FaEnvelope size={14} />
          icaroaguiar14@gmail.com
        </a>

        {/* Links rápidos */}
        <div className="mt-5 flex items-center justify-center gap-5 text-sm text-slate-600">
          <a
            href="https://github.com/IcaroAguiar"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-emerald-700 transition"
          >
            GitHub
          </a>
          <span className="h-4 w-px bg-slate-300" />
          <a
            href="https://www.linkedin.com/in/icaro-aguiar/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-emerald-700 transition"
          >
            LinkedIn
          </a>
          <span className="h-4 w-px bg-slate-300" />
          <a
            href="/Icaro-Aguiar-DevFullStack-PT%20(2).pdf"
            download="Icaro-Aguiar-DevFullStack-PT.pdf"
            className="hover:text-emerald-700 transition"
          >
            Currículo (PDF)
          </a>
        </div>

        {/* Copyright */}
        <div className="mt-6 text-xs text-slate-500">
          © {currentYear} Ícaro Aguiar. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
