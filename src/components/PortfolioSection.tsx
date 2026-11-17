import React, { useMemo, useState } from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { PORTFOLIO_PROJECTS } from '../data/studioData';
import type { ArchitecturalProject, ProjectCategory } from '../types';
import { ArchitecturalImage } from './ArchitecturalImage';

interface PortfolioSectionProps {
  onSelectProject: (project: ArchitecturalProject) => void;
  onContactClick: () => void;
}

const CATEGORIES: ProjectCategory[] = ['Todos', 'Residencial', 'Comercial', 'Interiores'];

export function PortfolioSection({
  onSelectProject,
  onContactClick,
}: PortfolioSectionProps) {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('Todos');

  const filteredProjects = useMemo(() => {
    if (activeCategory === 'Todos') return PORTFOLIO_PROJECTS;
    return PORTFOLIO_PROJECTS.filter((project) => project.category === activeCategory);
  }, [activeCategory]);

  return (
    <section
      id="portfolio"
      className="border-t border-[hsl(var(--border-hairline))] py-24 sm:py-28 lg:py-36"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        {/* Cabeçalho da seção com título forte e filtros interativos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.65, ease: 'easeOut' }}
          className="flex flex-col justify-between gap-8 border-b border-[hsl(var(--border-hairline))] pb-10 lg:flex-row lg:items-end"
        >
          <div className="max-w-2xl">
            <p className="text-xs font-normal tracking-[0.18em] uppercase text-[hsl(var(--accent-gold))]">
              Obras Selecionadas
            </p>
            <h2
              className="mt-3 font-display font-normal leading-[1.02] tracking-[-0.02em] text-[hsl(var(--foreground))] [text-wrap:balance]"
              style={{ fontSize: 'clamp(2.25rem, 4vw, 3.75rem)' }}
            >
              Acervo residencial, comercial e de interiores sob medida.
            </h2>
            <p className="mt-4 text-base font-light leading-relaxed text-[hsl(var(--foreground-secondary))]">
              Cada projeto nasce da leitura precisa do terreno, da nobreza dos materiais brutos e
              da relação silenciosa entre escala humana e luz natural.
            </p>
          </div>

          {/* Controles interativos de filtragem */}
          <div
            role="tablist"
            aria-label="Filtrar obras por categoria"
            className="flex flex-wrap items-center gap-1 border border-[hsl(var(--border-hairline))] bg-[hsl(var(--surface))] p-1 self-start lg:self-end"
          >
            {CATEGORIES.map((category) => {
              const isSelected = activeCategory === category;
              return (
                <button
                  key={category}
                  role="tab"
                  type="button"
                  aria-selected={isSelected}
                  onClick={() => setActiveCategory(category)}
                  className={`relative min-h-[40px] px-4 py-2 text-xs font-bold tracking-[0.1em] uppercase whitespace-nowrap shrink-0 transition-colors duration-200 ${
                    isSelected
                      ? 'text-[hsl(var(--accent-gold-foreground))]'
                      : 'text-[hsl(var(--foreground-secondary))] hover:text-[hsl(var(--foreground))]'
                  }`}
                >
                  {isSelected && (
                    <motion.span
                      layoutId="portfolio-category-indicator"
                      transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                      className="absolute inset-0 bg-[hsl(var(--accent-gold))]"
                    />
                  )}
                  <span className="relative z-10">{category}</span>
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* Grid Assimétrico 12 colunas (Bento Editorial) */}
        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-10">
          {filteredProjects.map((project, index) => {
            const isWide =
              filteredProjects.length > 2 && (index === 0 || index === 3);

            return (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.65,
                  delay: (index % 2) * 0.08,
                  ease: 'easeOut',
                }}
                className={isWide ? 'lg:col-span-7' : 'lg:col-span-5'}
              >
                <button
                  type="button"
                  onClick={() => onSelectProject(project)}
                  aria-label={`Abrir galeria do projeto ${project.title}`}
                  className="group flex h-full w-full flex-col border border-[hsl(var(--border-hairline))] bg-[hsl(var(--surface))] text-left transition-all duration-300 hover:-translate-y-1 hover:border-[hsl(var(--accent-gold)/0.45)] hover:shadow-[var(--shadow-card-hover)]"
                >
                  <div className="relative aspect-[4/3] w-full overflow-hidden">
                    <ArchitecturalImage
                      src={project.image}
                      alt={`${project.title} — ${project.category}`}
                      className="h-full w-full transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                    />
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[hsl(222_47%_8%/0.55)] via-transparent to-transparent opacity-70 transition-opacity duration-300 group-hover:opacity-40"
                    />
                  </div>

                  <div className="flex flex-1 flex-col justify-between p-6 sm:p-8">
                    <div>
                      {/* Metadados sem pílulas, com separadores tipográficos */}
                      <div className="flex flex-wrap items-center gap-2 text-xs tracking-[0.12em] uppercase text-[hsl(var(--accent-gold))] tabular-nums">
                        <span>{project.category}</span>
                        <span aria-hidden="true">·</span>
                        <span>{project.location}</span>
                        <span aria-hidden="true">·</span>
                        <span>{project.area}</span>
                        <span aria-hidden="true">·</span>
                        <span>{project.year}</span>
                      </div>

                      <div className="mt-3 flex items-baseline justify-between gap-4">
                        <h3 className="font-display text-2xl font-normal tracking-tight text-[hsl(var(--foreground))] transition-colors duration-200 group-hover:text-[hsl(var(--accent-gold))] sm:text-3xl">
                          {project.title}
                        </h3>
                        <ArrowUpRight
                          className="h-5 w-5 shrink-0 text-[hsl(var(--foreground-muted))] transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[hsl(var(--accent-gold))]"
                          aria-hidden="true"
                        />
                      </div>

                      <p className="mt-3 text-sm font-light leading-relaxed text-[hsl(var(--foreground-secondary))]">
                        {project.summary}
                      </p>
                    </div>

                    <div className="mt-6 flex items-center justify-between border-t border-[hsl(var(--border-subtle))] pt-4 text-xs tracking-[0.1em] uppercase text-[hsl(var(--foreground-muted))]">
                      <span>Visualizar galeria e ficha técnica</span>
                      <span className="text-[hsl(var(--foreground-secondary))] tabular-nums">
                        0{project.galleryImages.length} lâminas
                      </span>
                    </div>
                  </div>
                </button>
              </motion.article>
            );
          })}
        </div>

        {/* Chamada discreta pós-portfólio */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="mt-14 flex flex-col items-start justify-between gap-6 border border-[hsl(var(--border-hairline))] bg-[hsl(var(--surface))] p-7 sm:flex-row sm:items-center sm:p-9"
        >
          <div className="max-w-xl">
            <h3 className="font-display text-2xl font-normal text-[hsl(var(--foreground))] sm:text-3xl">
              Deseja desenvolver um projeto com esta assinatura construtiva?
            </h3>
            <p className="mt-2 text-sm font-light text-[hsl(var(--foreground-secondary))]">
              Apresente o programa do seu imóvel ou terreno e receba um diagnóstico inicial de
              viabilidade e escopo técnico.
            </p>
          </div>
          <button
            type="button"
            onClick={onContactClick}
            className="inline-flex min-h-[48px] items-center gap-2.5 bg-[hsl(var(--accent-gold))] px-7 py-3.5 text-xs font-bold tracking-[0.14em] uppercase text-[hsl(var(--accent-gold-foreground))] whitespace-nowrap shrink-0 transition-all duration-200 hover:-translate-y-0.5 hover:bg-[hsl(var(--accent-gold-hover))]"
          >
            <span>Entrar em contato</span>
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
