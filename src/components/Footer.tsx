import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { STUDIO_CONTACT } from '../data/studioData';

export function Footer() {
  return (
    <footer className="border-t border-[hsl(var(--border-hairline))] bg-[hsl(var(--surface))] py-14">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="flex flex-col justify-between gap-10 border-b border-[hsl(var(--border-subtle))] pb-10 lg:flex-row lg:items-end">
          <div>
            <a
              href="#inicio"
              className="font-display text-2xl font-medium tracking-[-0.02em] text-[hsl(var(--foreground))] sm:text-3xl"
            >
              {STUDIO_CONTACT.brandName}
            </a>
            <p className="mt-3 max-w-md text-sm font-light leading-relaxed text-[hsl(var(--foreground-muted))]">
              Arquitetura contemporânea, projetos residenciais, comerciais e interiores concebidos
              com precisão técnica e materialidade perene.
            </p>
          </div>

          <nav
            aria-label="Links do rodapé"
            className="flex flex-wrap items-center gap-x-8 gap-y-3 text-xs font-bold tracking-[0.12em] uppercase text-[hsl(var(--foreground-secondary))]"
          >
            <a
              href="#inicio"
              className="transition-colors hover:text-[hsl(var(--accent-gold))]"
            >
              Início
            </a>
            <a
              href="#portfolio"
              className="transition-colors hover:text-[hsl(var(--accent-gold))]"
            >
              Portfólio
            </a>
            <a
              href="#sobre"
              className="transition-colors hover:text-[hsl(var(--accent-gold))]"
            >
              Sobre
            </a>
            <a
              href="#contato"
              className="transition-colors hover:text-[hsl(var(--accent-gold))]"
            >
              Contato
            </a>
            <a
              href={STUDIO_CONTACT.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 transition-colors hover:text-[hsl(var(--accent-gold))]"
            >
              <span>Mapa</span>
              <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
            </a>
          </nav>
        </div>

        <div className="mt-8 flex flex-col justify-between gap-4 text-xs font-light text-[hsl(var(--foreground-muted))] sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} {STUDIO_CONTACT.brandName}. Todos os direitos reservados.</p>
          <p className="tabular-nums">
            {STUDIO_CONTACT.address} <span aria-hidden="true">·</span> {STUDIO_CONTACT.phoneDisplay}
          </p>
        </div>
      </div>
    </footer>
  );
}
