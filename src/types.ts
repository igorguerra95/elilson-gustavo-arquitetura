export type ProjectCategory = 'Todos' | 'Residencial' | 'Comercial' | 'Interiores';

export interface ArchitecturalProject {
  id: string;
  title: string;
  category: Exclude<ProjectCategory, 'Todos'>;
  location: string;
  area: string;
  year: string;
  image: string;
  galleryImages: string[];
  summary: string;
  concept: string;
  materials: string[];
  featured?: boolean;
}

export interface StudioMetric {
  id: string;
  target: number;
  suffix: string;
  label: string;
  detail: string;
}

export interface CreativeProcessStep {
  number: string;
  title: string;
  description: string;
  deliverable: string;
}

export interface ContactFormValues {
  name: string;
  email: string;
  phone: string;
  projectType: string;
  message: string;
}
