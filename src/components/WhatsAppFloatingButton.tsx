import React from 'react';
import { MessageCircle } from 'lucide-react';
import { STUDIO_CONTACT } from '../data/studioData';

export function WhatsAppFloatingButton() {
  return (
    <div className="fixed right-5 bottom-5 z-30 sm:right-7 sm:bottom-7">
      <span
        aria-hidden="true"
        className="animate-whatsapp-pulse pointer-events-none absolute inset-0 rounded-full border border-[hsl(var(--accent-gold)/0.55)]"
      />
      <a
        href={STUDIO_CONTACT.whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Entrar em contato pelo WhatsApp"
        title="Entrar em contato pelo WhatsApp"
        className="relative flex h-12 w-12 items-center justify-center rounded-full border border-[hsl(var(--accent-gold)/0.65)] bg-[hsl(var(--surface-elevated))] text-[hsl(var(--accent-gold))] shadow-[var(--shadow-elevated)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[hsl(var(--accent-gold))] hover:text-[hsl(var(--accent-gold-foreground))] sm:h-13 sm:w-13"
      >
        <MessageCircle className="h-5 w-5 stroke-[1.75]" aria-hidden="true" />
      </a>
    </div>
  );
}
