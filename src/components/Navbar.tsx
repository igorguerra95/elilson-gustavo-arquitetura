import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { STUDIO_CONTACT } from '../data/studioData';

interface NavbarProps {
  onContactClick: () => void;
}

const NAV_LINKS = [
  { label: 'Início', href: '#inicio' },
  { label: 'Portfólio', href: '#portfolio' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Contato', href: '#contato' },
];

export function Navbar({ onContactClick }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!mobileMenuOpen) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [mobileMenuOpen]);

  const handleMobileNav = (href: string) => {
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-40 transition-colors duration-300 ${
          isScrolled
            ? 'border-b border-[hsl(var(--border-hairline))] bg-[hsl(var(--canvas)/0.92)] backdrop-blur-md'
            : 'border-b border-transparent bg-gradient-to-b from-[hsl(var(--canvas)/0.85)] to-transparent'
        }`}
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-8 px-5 sm:px-8 lg:h-20 lg:px-12">
          {/* Zona 1: Wordmark em linha única */}
          <a
            href="#inicio"
            className="font-display text-xl font-medium tracking-[-0.02em] text-[hsl(var(--foreground))] whitespace-nowrap shrink-0 transition-colors hover:text-[hsl(var(--accent-gold))] sm:text-2xl"
          >
            {STUDIO_CONTACT.brandName}
          </a>

          {/* Zona 2: Links de navegação desktop */}
          <nav
            aria-label="Navegação principal"
            className="hidden items-center gap-8 md:flex"
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="group relative py-1 text-sm font-normal tracking-[0.04em] text-[hsl(var(--foreground-secondary))] whitespace-nowrap shrink-0 transition-colors duration-200 hover:text-[hsl(var(--foreground))]"
              >
                {link.label}
                <span
                  aria-hidden="true"
                  className="absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-[hsl(var(--accent-gold))] transition-transform duration-200 group-hover:scale-x-100"
                />
              </a>
            ))}
          </nav>

          {/* Zona 3: Ação primária única + gatilho do drawer mobile */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={onContactClick}
              className="hidden items-center gap-2 border border-[hsl(var(--accent-gold)/0.55)] bg-[hsl(var(--accent-gold))] px-5 py-2.5 text-xs font-bold tracking-[0.12em] uppercase text-[hsl(var(--accent-gold-foreground))] whitespace-nowrap shrink-0 transition-all duration-200 hover:bg-[hsl(var(--accent-gold-hover))] sm:inline-flex"
            >
              <span>Entrar em contato</span>
              <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
            </button>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Abrir menu de navegação"
              aria-expanded={mobileMenuOpen}
              className="inline-flex h-11 w-11 items-center justify-center border border-[hsl(var(--border-hairline))] bg-[hsl(var(--surface)/0.75)] text-[hsl(var(--foreground))] transition-colors hover:border-[hsl(var(--accent-gold)/0.6)] md:hidden"
            >
              <Menu className="h-5 w-5 stroke-[1.5]" aria-hidden="true" />
            </button>
          </div>
        </div>
      </header>

      {/* Sheet / Drawer Mobile */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <div
            className="fixed inset-0 z-50 md:hidden"
            role="dialog"
            aria-modal="true"
            aria-label="Menu principal"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-[hsl(var(--canvas)/0.82)] backdrop-blur-sm"
            />

            <motion.aside
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
              className="fixed inset-y-0 right-0 flex w-[84vw] max-w-sm flex-col justify-between border-l border-[hsl(var(--border-hairline))] bg-[hsl(var(--surface))] p-6 shadow-[var(--shadow-elevated)]"
            >
              <div className="flex items-center justify-between border-b border-[hsl(var(--border-hairline))] pb-5">
                <span className="font-display text-lg font-medium text-[hsl(var(--foreground))] whitespace-nowrap">
                  {STUDIO_CONTACT.shortMark}
                </span>
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  aria-label="Fechar menu"
                  className="inline-flex h-11 w-11 items-center justify-center border border-[hsl(var(--border-hairline))] text-[hsl(var(--foreground))] transition-colors hover:border-[hsl(var(--accent-gold))]"
                >
                  <X className="h-5 w-5 stroke-[1.5]" aria-hidden="true" />
                </button>
              </div>

              <nav aria-label="Navegação mobile" className="my-auto flex flex-col gap-2 py-8">
                {NAV_LINKS.map((link, index) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleMobileNav(link.href);
                    }}
                    className="flex min-h-[48px] items-center justify-between border-b border-[hsl(var(--border-subtle))] py-3 font-display text-3xl font-normal text-[hsl(var(--foreground))] transition-colors hover:text-[hsl(var(--accent-gold))]"
                  >
                    <span>{link.label}</span>
                    <span className="font-body text-xs tracking-widest text-[hsl(var(--foreground-muted))] tabular-nums">
                      0{index + 1}
                    </span>
                  </a>
                ))}
              </nav>

              <div className="space-y-4 border-t border-[hsl(var(--border-hairline))] pt-6">
                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onContactClick();
                  }}
                  className="flex min-h-[48px] w-full items-center justify-center gap-2 bg-[hsl(var(--accent-gold))] px-6 py-3.5 text-xs font-bold tracking-[0.14em] uppercase text-[hsl(var(--accent-gold-foreground))] transition-colors hover:bg-[hsl(var(--accent-gold-hover))]"
                >
                  <span>Entrar em contato</span>
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </button>
                <p className="text-center text-xs text-[hsl(var(--foreground-muted))]">
                  {STUDIO_CONTACT.phoneDisplay}
                </p>
              </div>
            </motion.aside>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
