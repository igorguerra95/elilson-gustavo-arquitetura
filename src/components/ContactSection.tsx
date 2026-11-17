import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, CheckCircle2, Clock, MapPin, Phone } from 'lucide-react';
import { STUDIO_CONTACT } from '../data/studioData';
import type { ContactFormValues } from '../types';

interface ContactSectionProps {
  preselectedProject?: string | null;
}

const PROJECT_TYPES = [
  'Projeto Arquitetônico Residencial',
  'Arquitetura Comercial / Corporativa',
  'Design de Interiores Completo',
  'Consultoria de Viabilidade e Terreno',
];

export function ContactSection({ preselectedProject }: ContactSectionProps) {
  const [form, setForm] = useState<ContactFormValues>({
    name: '',
    email: '',
    phone: '',
    projectType: PROJECT_TYPES[0],
    message: '',
  });
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormValues, string>>>({});
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (!preselectedProject) return;
    setSubmitted(false);
    setForm((prev) => ({
      ...prev,
      message: `Gostaria de agendar uma reunião tendo como referência o projeto "${preselectedProject}".`,
    }));
  }, [preselectedProject]);

  const validate = (): boolean => {
    const nextErrors: Partial<Record<keyof ContactFormValues, string>> = {};

    if (form.name.trim().length < 3) {
      nextErrors.name = 'Informe seu nome completo para o atendimento.';
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      nextErrors.email = 'Informe um endereço de e-mail válido.';
    }
    if (form.phone.replace(/\D/g, '').length < 8) {
      nextErrors.phone = 'Informe um telefone ou WhatsApp com DDD.';
    }
    if (form.message.trim().length < 10) {
      nextErrors.message = 'Descreva brevemente o escopo ou localização do projeto.';
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (!validate()) return;
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setErrors({});
    setForm({
      name: '',
      email: '',
      phone: '',
      projectType: PROJECT_TYPES[0],
      message: '',
    });
  };

  return (
    <section
      id="contato"
      className="border-t border-[hsl(var(--border-hairline))] py-24 sm:py-28 lg:py-36"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-16">
          {/* Coluna esquerda: Dados do escritório */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65, ease: 'easeOut' }}
            className="flex flex-col justify-between lg:col-span-5"
          >
            <div>
              <p className="text-xs font-normal tracking-[0.18em] uppercase text-[hsl(var(--accent-gold))]">
                Atendimento Personalizado
              </p>
              <h2
                className="mt-3 font-display font-normal leading-[1.04] tracking-[-0.02em] text-[hsl(var(--foreground))] [text-wrap:balance]"
                style={{ fontSize: 'clamp(2.25rem, 4vw, 3.75rem)' }}
              >
                Inicie o diálogo sobre o seu próximo espaço.
              </h2>
              <p className="mt-5 text-base font-light leading-relaxed text-[hsl(var(--foreground-secondary))]">
                Recebemos novas solicitações de estudo preliminar por agendamento direto. Preencha
                os dados ao lado ou acione nossa equipe pelo WhatsApp.
              </p>
            </div>

            <div className="mt-12 space-y-6 border-t border-[hsl(var(--border-hairline))] pt-8">
              <div className="flex items-start gap-4">
                <MapPin
                  className="mt-0.5 h-5 w-5 shrink-0 stroke-[1.5] text-[hsl(var(--accent-gold))]"
                  aria-hidden="true"
                />
                <div>
                  <p className="text-xs font-bold tracking-[0.14em] uppercase text-[hsl(var(--foreground-muted))]">
                    Endereço do Escritório
                  </p>
                  <p className="mt-1 text-base font-normal text-[hsl(var(--foreground))]">
                    {STUDIO_CONTACT.address}
                  </p>
                  <a
                    href={STUDIO_CONTACT.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1.5 inline-flex items-center gap-1.5 text-xs font-bold tracking-[0.1em] uppercase text-[hsl(var(--accent-gold))] transition-colors hover:text-[hsl(var(--accent-gold-hover))]"
                  >
                    <span>Ver localização no Google Maps</span>
                    <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone
                  className="mt-0.5 h-5 w-5 shrink-0 stroke-[1.5] text-[hsl(var(--accent-gold))]"
                  aria-hidden="true"
                />
                <div>
                  <p className="text-xs font-bold tracking-[0.14em] uppercase text-[hsl(var(--foreground-muted))]">
                    Telefone e WhatsApp
                  </p>
                  <a
                    href={STUDIO_CONTACT.phoneHref}
                    className="mt-1 inline-block text-base font-normal text-[hsl(var(--foreground))] tabular-nums transition-colors hover:text-[hsl(var(--accent-gold))]"
                  >
                    {STUDIO_CONTACT.phoneDisplay}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Clock
                  className="mt-0.5 h-5 w-5 shrink-0 stroke-[1.5] text-[hsl(var(--accent-gold))]"
                  aria-hidden="true"
                />
                <div>
                  <p className="text-xs font-bold tracking-[0.14em] uppercase text-[hsl(var(--foreground-muted))]">
                    Horário de Atendimento
                  </p>
                  <p className="mt-1 text-base font-normal text-[hsl(var(--foreground-secondary))]">
                    {STUDIO_CONTACT.hours}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Coluna direita: Formulário estruturado */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65, delay: 0.08, ease: 'easeOut' }}
            className="border border-[hsl(var(--border-hairline))] bg-[hsl(var(--surface))] p-6 sm:p-10 lg:col-span-7"
          >
            {submitted ? (
              <div className="flex h-full min-h-[420px] flex-col items-start justify-center py-8">
                <CheckCircle2
                  className="h-10 w-10 stroke-[1.4] text-[hsl(var(--accent-gold))]"
                  aria-hidden="true"
                />
                <h3 className="mt-5 font-display text-3xl font-normal text-[hsl(var(--foreground))] sm:text-4xl">
                  Solicitação registrada com sucesso.
                </h3>
                <p className="mt-3 max-w-lg text-base font-light leading-relaxed text-[hsl(var(--foreground-secondary))]">
                  Agradecemos o contato, <strong className="font-normal text-[hsl(var(--foreground))]">{form.name}</strong>.
                  Nossa equipe técnica analisará o briefing informado e retornará pelo telefone{' '}
                  <span className="tabular-nums">{form.phone}</span> ou pelo e-mail{' '}
                  <span>{form.email}</span>.
                </p>
                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <a
                    href={STUDIO_CONTACT.whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-[48px] items-center gap-2 bg-[hsl(var(--accent-gold))] px-6 py-3 text-xs font-bold tracking-[0.14em] uppercase text-[hsl(var(--accent-gold-foreground))] transition-colors hover:bg-[hsl(var(--accent-gold-hover))]"
                  >
                    <span>Continuar via WhatsApp</span>
                    <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                  </a>
                  <button
                    type="button"
                    onClick={handleReset}
                    className="inline-flex min-h-[48px] items-center border border-[hsl(var(--border-hairline))] px-6 py-3 text-xs font-bold tracking-[0.14em] uppercase text-[hsl(var(--foreground-secondary))] transition-colors hover:border-[hsl(var(--accent-gold))] hover:text-[hsl(var(--foreground))]"
                  >
                    Enviar nova mensagem
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-6">
                <div className="border-b border-[hsl(var(--border-subtle))] pb-5">
                  <h3 className="font-display text-2xl font-normal text-[hsl(var(--foreground))] sm:text-3xl">
                    Briefing de Atendimento
                  </h3>
                  <p className="mt-1 text-sm font-light text-[hsl(var(--foreground-muted))]">
                    Todos os dados informados são tratados com estrito sigilo profissional.
                  </p>
                </div>

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block text-xs font-bold tracking-[0.12em] uppercase text-[hsl(var(--foreground-secondary))]"
                    >
                      Nome completo
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Ex.: Mariana Ferreira"
                      className="mt-2 min-h-[46px] w-full border border-[hsl(var(--border-hairline))] bg-[hsl(var(--canvas))] px-4 py-3 text-sm text-[hsl(var(--foreground))] placeholder:text-[hsl(var(--foreground-muted)/0.65)] transition-colors focus:border-[hsl(var(--accent-gold))] focus:outline-none"
                    />
                    {errors.name && (
                      <p className="mt-1.5 text-xs text-[hsl(var(--status-error))]">
                        {errors.name}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="contact-phone"
                      className="block text-xs font-bold tracking-[0.12em] uppercase text-[hsl(var(--foreground-secondary))]"
                    >
                      Telefone / WhatsApp
                    </label>
                    <input
                      id="contact-phone"
                      type="tel"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      placeholder="(00) 00000-0000"
                      className="mt-2 min-h-[46px] w-full border border-[hsl(var(--border-hairline))] bg-[hsl(var(--canvas))] px-4 py-3 text-sm text-[hsl(var(--foreground))] tabular-nums placeholder:text-[hsl(var(--foreground-muted)/0.65)] transition-colors focus:border-[hsl(var(--accent-gold))] focus:outline-none"
                    />
                    {errors.phone && (
                      <p className="mt-1.5 text-xs text-[hsl(var(--status-error))]">
                        {errors.phone}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block text-xs font-bold tracking-[0.12em] uppercase text-[hsl(var(--foreground-secondary))]"
                    >
                      E-mail
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="nome@empresa.com.br"
                      className="mt-2 min-h-[46px] w-full border border-[hsl(var(--border-hairline))] bg-[hsl(var(--canvas))] px-4 py-3 text-sm text-[hsl(var(--foreground))] placeholder:text-[hsl(var(--foreground-muted)/0.65)] transition-colors focus:border-[hsl(var(--accent-gold))] focus:outline-none"
                    />
                    {errors.email && (
                      <p className="mt-1.5 text-xs text-[hsl(var(--status-error))]">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="contact-type"
                      className="block text-xs font-bold tracking-[0.12em] uppercase text-[hsl(var(--foreground-secondary))]"
                    >
                      Tipologia do Projeto
                    </label>
                    <select
                      id="contact-type"
                      value={form.projectType}
                      onChange={(e) => setForm({ ...form, projectType: e.target.value })}
                      className="mt-2 min-h-[46px] w-full border border-[hsl(var(--border-hairline))] bg-[hsl(var(--canvas))] px-4 py-3 text-sm text-[hsl(var(--foreground))] transition-colors focus:border-[hsl(var(--accent-gold))] focus:outline-none"
                    >
                      {PROJECT_TYPES.map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-xs font-bold tracking-[0.12em] uppercase text-[hsl(var(--foreground-secondary))]"
                  >
                    Briefing e localização estimada
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Descreva o perfil do imóvel ou terreno, metragem aproximada e previsão de início."
                    className="mt-2 w-full border border-[hsl(var(--border-hairline))] bg-[hsl(var(--canvas))] px-4 py-3 text-sm text-[hsl(var(--foreground))] placeholder:text-[hsl(var(--foreground-muted)/0.65)] transition-colors focus:border-[hsl(var(--accent-gold))] focus:outline-none"
                  />
                  {errors.message && (
                    <p className="mt-1.5 text-xs text-[hsl(var(--status-error))]">
                      {errors.message}
                    </p>
                  )}
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="inline-flex min-h-[50px] w-full items-center justify-center gap-3 bg-[hsl(var(--accent-gold))] px-8 py-3.5 text-xs font-bold tracking-[0.14em] uppercase text-[hsl(var(--accent-gold-foreground))] shadow-[var(--shadow-gold)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[hsl(var(--accent-gold-hover))] sm:w-auto"
                  >
                    <span>Entrar em contato</span>
                    <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                  </button>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
