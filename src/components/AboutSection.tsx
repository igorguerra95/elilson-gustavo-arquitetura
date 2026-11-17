import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { CREATIVE_PROCESS_STEPS, STUDIO_CONTACT } from '../data/studioData';
import { ArchitecturalImage } from './ArchitecturalImage';

interface AboutSectionProps {
  onContactClick: () => void;
}

export function AboutSection({ onContactClick }: AboutSectionProps) {
  return (
    <section
      id="sobre"
      className="border-t border-[hsl(var(--border-hairline))] py-24 sm:py-28 lg:py-36"
      style={{ background: 'var(--gradient-surface)' }}
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        {/* Bloco 1: Visão Estética & Perfil do Arquiteto */}
        <div className="grid grid-cols-1 items-stretch gap-12 lg:grid-cols-12 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="lg:col-span-5"
          >
            <div className="relative h-full min-h-[380px] border border-[hsl(var(--border-hairline))] bg-[hsl(var(--canvas))] shadow-[var(--shadow-elevated)]">
              <ArchitecturalImage
                src={STUDIO_CONTACT.architectPortrait}
                alt="Arquiteto Elilson Gustavo em seu estúdio analisando plantas e amostras de pedra natural"
                className="aspect-[3/4] w-full lg:aspect-auto lg:h-full"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[hsl(222_47%_8%/0.9)] via-[hsl(222_47%_8%/0.4)] to-transparent"
              />
              <div className="absolute inset-x-0 bottom-0 p-6">
                <p className="font-display text-2xl font-normal text-[hsl(var(--foreground))]">
                  Elilson Gustavo
                </p>
                <p className="mt-1 text-xs tracking-[0.12em] uppercase text-[hsl(var(--accent-gold))]">
                  Arquiteto Titular · Direção de Criação
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.08, ease: 'easeOut' }}
            className="flex flex-col justify-between lg:col-span-7 lg:py-4"
          >
            <div>
              <p className="text-xs font-normal tracking-[0.18em] uppercase text-[hsl(var(--accent-gold))]">
                Sobre o Escritório & Visão Estética
              </p>

              <h2
                className="mt-3 font-display font-normal leading-[1.04] tracking-[-0.02em] text-[hsl(var(--foreground))] [text-wrap:balance]"
                style={{ fontSize: 'clamp(2.25rem, 4vw, 3.75rem)' }}
              >
                Rigor construtivo a serviço da serenidade espacial.
              </h2>

              <div className="mt-8 space-y-5 text-base font-light leading-relaxed text-[hsl(var(--foreground-secondary))] sm:text-lg">
                <p>
                  À frente do escritório{' '}
                  <strong className="font-normal text-[hsl(var(--foreground))]">
                    Elilson Gustavo Arquitetura
                  </strong>
                  , nossa prática parte da convicção de que a arquitetura duradoura recusa o
                  excesso ornamental. Buscamos a essência da proporção, onde estrutura e estética
                  são indivisíveis.
                </p>
                <p>
                  Trabalhamos com matérias-primas honestas — concreto aparente, pedras brasileiras
                  sem polimento artificial, madeiras certificadas e metais escovados — que
                  envelhecem com dignidade ao longo das décadas.
                </p>
                <p>
                  Cada encomenda recebe atenção autoral limitada por ano, garantindo imersão total
                  desde os primeiros croquis de implantação até o ajuste fino da luminotécnica na
                  entrega da obra.
                </p>
              </div>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-6 border-t border-[hsl(var(--border-hairline))] pt-8 sm:grid-cols-3">
              <div>
                <p className="text-xs font-bold tracking-[0.14em] uppercase text-[hsl(var(--accent-gold))]">
                  Arquitetura Residencial
                </p>
                <p className="mt-2 text-sm font-light text-[hsl(var(--foreground-muted))]">
                  Casas de alto padrão, pavilhões contemporâneos e implantação em encostas.
                </p>
              </div>
              <div>
                <p className="text-xs font-bold tracking-[0.14em] uppercase text-[hsl(var(--accent-gold))]">
                  Sedes Corporativas
                </p>
                <p className="mt-2 text-sm font-light text-[hsl(var(--foreground-muted))]">
                  Espaços empresariais, galerias e clínicas com identidade institucional forte.
                </p>
              </div>
              <div>
                <p className="text-xs font-bold tracking-[0.14em] uppercase text-[hsl(var(--accent-gold))]">
                  Design de Interiores
                </p>
                <p className="mt-2 text-sm font-light text-[hsl(var(--foreground-muted))]">
                  Marcenaria arquitetônica, curadoria de mobiliário e desenho luminotécnico.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bloco 2: Processo Criativo */}
        <div className="mt-24 border-t border-[hsl(var(--border-hairline))] pt-20">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end"
          >
            <div className="max-w-2xl">
              <p className="text-xs font-normal tracking-[0.18em] uppercase text-[hsl(var(--accent-gold))]">
                Metodologia e Processo Criativo
              </p>
              <h3
                className="mt-3 font-display font-normal leading-[1.06] tracking-[-0.02em] text-[hsl(var(--foreground))] [text-wrap:balance]"
                style={{ fontSize: 'clamp(1.85rem, 3.2vw, 3rem)' }}
              >
                Quatro etapas estruturadas do conceito à entrega técnica.
              </h3>
            </div>

            <button
              type="button"
              onClick={onContactClick}
              className="inline-flex min-h-[44px] items-center gap-2 border border-[hsl(var(--accent-gold)/0.45)] px-6 py-3 text-xs font-bold tracking-[0.14em] uppercase text-[hsl(var(--accent-gold))] whitespace-nowrap shrink-0 self-start transition-colors duration-200 hover:bg-[hsl(var(--accent-gold))] hover:text-[hsl(var(--accent-gold-foreground))] lg:self-end"
            >
              <span>Entrar em contato</span>
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </button>
          </motion.div>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {CREATIVE_PROCESS_STEPS.map((step, idx) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: idx * 0.08, ease: 'easeOut' }}
                className="flex flex-col justify-between border border-[hsl(var(--border-hairline))] bg-[hsl(var(--canvas))] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[hsl(var(--accent-gold)/0.45)] hover:shadow-[var(--shadow-elevated)]"
              >
                <div>
                  <span className="font-display text-3xl font-normal text-[hsl(var(--accent-gold))] tabular-nums">
                    {step.number}
                  </span>
                  <h4 className="mt-4 font-display text-2xl font-normal text-[hsl(var(--foreground))]">
                    {step.title}
                  </h4>
                  <p className="mt-3 text-sm font-light leading-relaxed text-[hsl(var(--foreground-secondary))]">
                    {step.description}
                  </p>
                </div>

                <div className="mt-8 border-t border-[hsl(var(--border-subtle))] pt-4">
                  <span className="block text-[11px] font-bold tracking-[0.14em] uppercase text-[hsl(var(--foreground-muted))]">
                    Entrega da etapa
                  </span>
                  <span className="mt-1 block text-xs font-normal text-[hsl(var(--foreground))]">
                    {step.deliverable}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
