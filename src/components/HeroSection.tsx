import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'motion/react';
import { ArrowDownRight, ArrowUpRight } from 'lucide-react';
import { HERO_METRICS, STUDIO_CONTACT } from '../data/studioData';
import type { StudioMetric } from '../types';
import { ArchitecturalImage } from './ArchitecturalImage';

interface HeroSectionProps {
  onContactClick: () => void;
}

function AnimatedMetricValue({ target, suffix }: { target: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.6 });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      setDisplayValue(target);
      return;
    }

    const durationMs = 1100;
    const startTime = performance.now();
    let frameId = 0;

    const tick = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / durationMs, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplayValue(Math.round(eased * target));
      if (progress < 1) {
        frameId = requestAnimationFrame(tick);
      }
    };

    frameId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameId);
  }, [isInView, target]);

  return (
    <span ref={ref} className="tabular-nums">
      {displayValue}
      {suffix}
    </span>
  );
}

const heroContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const heroItemVariants = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
};

export function HeroSection({ onContactClick }: HeroSectionProps) {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden pt-28 pb-16 sm:pt-32 sm:pb-24 lg:pt-36 lg:pb-28"
      style={{ background: 'var(--gradient-obsidian)' }}
    >
      <div aria-hidden="true" className="architectural-grain pointer-events-none absolute inset-0" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        {/* Composição editorial assimétrica em 12 colunas */}
        <div className="grid grid-cols-1 items-stretch gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Coluna tipográfica */}
          <motion.div
            variants={heroContainerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col justify-between lg:col-span-6 lg:py-4"
          >
            <div>
              <motion.p
                variants={heroItemVariants}
                className="mb-6 text-xs font-normal tracking-[0.18em] uppercase text-[hsl(var(--accent-gold))]"
              >
                Arquitetura Autoral · Design Estrutural · Interiores
              </motion.p>

              <motion.h1
                variants={heroItemVariants}
                className="font-display font-normal leading-[0.98] tracking-[-0.025em] text-[hsl(var(--foreground))] [text-wrap:balance]"
                style={{ fontSize: 'clamp(3rem, 5.4vw, 5.5rem)' }}
              >
                Arquitetura que molda o silêncio, a luz e a permanência.
              </motion.h1>

              <motion.p
                variants={heroItemVariants}
                className="mt-7 max-w-xl text-base font-light leading-relaxed text-[hsl(var(--foreground-secondary))] sm:text-lg"
              >
                Projetamos residências singulares e sedes corporativas onde concreto aparente,
                pedra natural e precisão construtiva traduzem identidade com sobriedade atemporal.
              </motion.p>
            </div>

            <motion.div
              variants={heroItemVariants}
              className="mt-10 flex flex-wrap items-center gap-5 sm:gap-7"
            >
              <button
                type="button"
                onClick={onContactClick}
                className="inline-flex min-h-[48px] items-center gap-3 bg-[hsl(var(--accent-gold))] px-7 py-3.5 text-xs font-bold tracking-[0.14em] uppercase text-[hsl(var(--accent-gold-foreground))] shadow-[var(--shadow-gold)] whitespace-nowrap shrink-0 transition-all duration-200 hover:-translate-y-0.5 hover:bg-[hsl(var(--accent-gold-hover))]"
              >
                <span>Entrar em contato</span>
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </button>

              <a
                href="#portfolio"
                className="group inline-flex min-h-[48px] items-center gap-2 border-b border-[hsl(var(--border-hairline))] py-2 text-xs font-bold tracking-[0.14em] uppercase text-[hsl(var(--foreground-secondary))] whitespace-nowrap shrink-0 transition-colors duration-200 hover:border-[hsl(var(--accent-gold))] hover:text-[hsl(var(--foreground))]"
              >
                <span>Explorar obras selecionadas</span>
                <ArrowDownRight
                  className="h-4 w-4 text-[hsl(var(--accent-gold))] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:translate-y-0.5"
                  aria-hidden="true"
                />
              </a>
            </motion.div>
          </motion.div>

          {/* Coluna visual principal 16:9 / full height alinhado */}
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6"
          >
            <div className="relative h-full min-h-[300px] border border-[hsl(var(--border-hairline))] bg-[hsl(var(--surface))] shadow-[var(--shadow-elevated)] sm:min-h-[420px]">
              <ArchitecturalImage
                src={STUDIO_CONTACT.heroImage}
                alt="Pavilhão residencial autoral em concreto aparente, pedra travertino e espelho d'água ao entardecer"
                priority
                className="aspect-[16/10] w-full lg:aspect-auto lg:h-full"
              />

              {/* Scrim medido para contraste WCAG AA na legenda inferior */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[hsl(222_47%_7%/0.92)] via-[hsl(222_47%_7%/0.45)] to-transparent"
              />

              <div className="absolute inset-x-0 bottom-0 flex flex-wrap items-end justify-between gap-4 p-5 sm:p-7">
                <div>
                  <p className="font-display text-xl font-medium text-[hsl(var(--foreground))] sm:text-2xl">
                    Pavilhão Mirante Sul
                  </p>
                  <p className="mt-1 text-xs tracking-wide text-[hsl(var(--foreground-secondary))]">
                    Obra Autoral <span aria-hidden="true">·</span> Concreto e Travertino{' '}
                    <span aria-hidden="true">·</span> 640 m²
                  </p>
                </div>
                <span className="text-xs font-normal tracking-[0.14em] uppercase text-[hsl(var(--accent-gold))] tabular-nums">
                  Acervo 2025
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Faixa horizontal de métricas em largura total abaixo do split */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.65, ease: 'easeOut' }}
          className="mt-16 grid grid-cols-2 border-y border-[hsl(var(--border-hairline))] lg:mt-24 lg:grid-cols-4"
        >
          {HERO_METRICS.map((metric: StudioMetric, idx: number) => (
            <div
              key={metric.id}
              className={`py-7 pr-4 sm:px-6 sm:py-9 ${
                idx > 0 ? 'lg:border-l lg:border-[hsl(var(--border-hairline))]' : 'lg:pl-0'
              } ${idx % 2 === 1 ? 'border-l border-[hsl(var(--border-hairline))] pl-5 lg:pl-6' : ''} ${
                idx >= 2 ? 'border-t border-[hsl(var(--border-hairline))] lg:border-t-0' : ''
              }`}
            >
              <div className="font-display text-4xl font-normal tracking-tight text-[hsl(var(--accent-gold))] sm:text-5xl">
                <AnimatedMetricValue target={metric.target} suffix={metric.suffix} />
              </div>
              <div className="mt-2 text-sm font-bold tracking-wide text-[hsl(var(--foreground))]">
                {metric.label}
              </div>
              <p className="mt-1 text-xs font-light leading-relaxed text-[hsl(var(--foreground-muted))]">
                {metric.detail}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
