import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { ArrowUpRight, ChevronLeft, ChevronRight, X } from 'lucide-react';
import type { ArchitecturalProject } from '../types';
import { ArchitecturalImage } from './ArchitecturalImage';

interface ProjectLightboxProps {
  project: ArchitecturalProject | null;
  onClose: () => void;
  onInquireProject: (projectTitle: string) => void;
}

export function ProjectLightbox({
  project,
  onClose,
  onInquireProject,
}: ProjectLightboxProps) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  useEffect(() => {
    setActiveImageIndex(0);
  }, [project?.id]);

  useEffect(() => {
    if (!project) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      } else if (event.key === 'ArrowRight') {
        setActiveImageIndex((prev) => (prev + 1) % project.galleryImages.length);
      } else if (event.key === 'ArrowLeft') {
        setActiveImageIndex(
          (prev) => (prev - 1 + project.galleryImages.length) % project.galleryImages.length
        );
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8"
          role="dialog"
          aria-modal="true"
          aria-labelledby="lightbox-project-title"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
            className="fixed inset-0 bg-[hsl(222_52%_5%/0.9)] backdrop-blur-md"
          />

          <motion.div
            initial={{ opacity: 0, y: 18, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.98 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 grid max-h-[90vh] w-full max-w-6xl grid-cols-1 overflow-y-auto border border-[hsl(var(--border-hairline))] bg-[hsl(var(--surface))] shadow-[var(--shadow-elevated)] lg:grid-cols-12"
          >
            {/* Botão fechar alto contraste */}
            <button
              type="button"
              onClick={onClose}
              aria-label="Fechar galeria do projeto"
              className="absolute top-4 right-4 z-20 inline-flex h-11 w-11 items-center justify-center border border-[hsl(var(--border-hairline))] bg-[hsl(var(--canvas)/0.9)] text-[hsl(var(--foreground))] transition-colors hover:border-[hsl(var(--accent-gold))] hover:text-[hsl(var(--accent-gold))]"
            >
              <X className="h-5 w-5 stroke-[1.5]" aria-hidden="true" />
            </button>

            {/* Galeria de fotos */}
            <div className="relative flex flex-col justify-between bg-[hsl(var(--canvas))] lg:col-span-7">
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <ArchitecturalImage
                  src={project.galleryImages[activeImageIndex] || project.image}
                  alt={`${project.title} — vista arquitetônica ${activeImageIndex + 1}`}
                  priority
                  className="h-full w-full"
                />
              </div>

              {project.galleryImages.length > 1 && (
                <div className="flex items-center justify-between border-t border-[hsl(var(--border-hairline))] px-5 py-3.5">
                  <span className="text-xs tracking-[0.12em] text-[hsl(var(--foreground-muted))] tabular-nums">
                    Lâmina 0{activeImageIndex + 1} / 0{project.galleryImages.length}
                  </span>

                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() =>
                        setActiveImageIndex(
                          (prev) =>
                            (prev - 1 + project.galleryImages.length) %
                            project.galleryImages.length
                        )
                      }
                      aria-label="Imagem anterior"
                      className="inline-flex h-10 w-10 items-center justify-center border border-[hsl(var(--border-hairline))] text-[hsl(var(--foreground))] transition-colors hover:border-[hsl(var(--accent-gold))] hover:text-[hsl(var(--accent-gold))]"
                    >
                      <ChevronLeft className="h-4 w-4" aria-hidden="true" />
                    </button>
                    <button
                      type="button"
                      onClick={() =>
                        setActiveImageIndex(
                          (prev) => (prev + 1) % project.galleryImages.length
                        )
                      }
                      aria-label="Próxima imagem"
                      className="inline-flex h-10 w-10 items-center justify-center border border-[hsl(var(--border-hairline))] text-[hsl(var(--foreground))] transition-colors hover:border-[hsl(var(--accent-gold))] hover:text-[hsl(var(--accent-gold))]"
                    >
                      <ChevronRight className="h-4 w-4" aria-hidden="true" />
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Ficha técnica do projeto */}
            <div className="flex flex-col justify-between p-6 sm:p-10 lg:col-span-5">
              <div>
                <div className="flex flex-wrap items-center gap-2 text-xs tracking-[0.12em] uppercase text-[hsl(var(--accent-gold))]">
                  <span>{project.category}</span>
                  <span aria-hidden="true">·</span>
                  <span className="tabular-nums">{project.year}</span>
                </div>

                <h3
                  id="lightbox-project-title"
                  className="mt-3 font-display text-3xl font-normal tracking-tight text-[hsl(var(--foreground))] sm:text-4xl"
                >
                  {project.title}
                </h3>

                <div className="mt-3 flex flex-wrap items-center gap-2 text-xs text-[hsl(var(--foreground-muted))] tabular-nums">
                  <span>{project.location}</span>
                  <span aria-hidden="true">·</span>
                  <span>{project.area}</span>
                </div>

                <div className="my-6 h-px bg-[hsl(var(--border-hairline))]" />

                <p className="text-sm leading-relaxed text-[hsl(var(--foreground-secondary))] sm:text-base">
                  {project.concept}
                </p>

                <div className="mt-8">
                  <p className="text-xs font-bold tracking-[0.14em] uppercase text-[hsl(var(--foreground))]">
                    Paleta de Materiais
                  </p>
                  <p className="mt-2.5 text-sm leading-relaxed text-[hsl(var(--foreground-muted))]">
                    {project.materials.join(' · ')}
                  </p>
                </div>
              </div>

              <div className="mt-10 border-t border-[hsl(var(--border-hairline))] pt-6">
                <button
                  type="button"
                  onClick={() => {
                    const title = project.title;
                    onClose();
                    onInquireProject(title);
                  }}
                  className="flex min-h-[48px] w-full items-center justify-center gap-2 bg-[hsl(var(--accent-gold))] px-6 py-3.5 text-xs font-bold tracking-[0.14em] uppercase text-[hsl(var(--accent-gold-foreground))] transition-colors hover:bg-[hsl(var(--accent-gold-hover))]"
                >
                  <span>Entrar em contato</span>
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
