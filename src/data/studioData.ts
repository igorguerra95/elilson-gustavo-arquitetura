import heroArchitecturalPavilion from '../assets/images/hero_architectural_pavilion_1794943622778.jpg';
import portfolioResidenciaAlvorada from '../assets/images/portfolio_residencia_alvorada_1794943623275.jpg';
import portfolioGaleriaAurora from '../assets/images/portfolio_galeria_aurora_1794943624174.jpg';
import portfolioCasaHorizonte from '../assets/images/portfolio_casa_horizonte_1794943625506.jpg';
import portfolioCoberturaJardins from '../assets/images/portfolio_cobertura_jardins_1794943625311.jpg';
import studioArchitectPortrait from '../assets/images/studio_architect_portrait_1794943626289.jpg';
import type {
  ArchitecturalProject,
  CreativeProcessStep,
  StudioMetric,
} from '../types';

export const STUDIO_CONTACT = {
  brandName: 'Elilson Gustavo Arquitetura',
  shortMark: 'Elilson Gustavo',
  address: 'SEU ENDEREÇO AQUI',
  phoneDisplay: '(00) 00000-0000',
  phoneHref: 'tel:+5500000000000',
  whatsappHref:
    'https://wa.me/5500000000000?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20reuni%C3%A3o%20com%20o%20escrit%C3%B3rio%20Elilson%20Gustavo%20Arquitetura.',
  hours: 'Não informado',
  googleMapsUrl:
    'https://maps.google.com/?cid=10789693687204539323&g_mp=Cidnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLlNlYXJjaFRleHQQAhgEIAA',
  referenceSite: 'http://chavesarquitetura.com.br/',
  heroImage: heroArchitecturalPavilion,
  architectPortrait: studioArchitectPortrait,
};

export const HERO_METRICS: StudioMetric[] = [
  {
    id: 'anos',
    target: 14,
    suffix: '+',
    label: 'Anos de Prática Autoral',
    detail: 'Arquitetura residencial e corporativa',
  },
  {
    id: 'projetos',
    target: 68,
    suffix: '',
    label: 'Obras Executadas',
    detail: 'Com direção técnica integral',
  },
  {
    id: 'area',
    target: 42,
    suffix: ' mil m²',
    label: 'Área Projetada',
    detail: 'Em lotes urbanos e topografias complexas',
  },
  {
    id: 'precisao',
    target: 100,
    suffix: '%',
    label: 'Compatibilização BIM',
    detail: 'Rigor estrutural do traço à entrega',
  },
];

export const PORTFOLIO_PROJECTS: ArchitecturalProject[] = [
  {
    id: 'residencia-alvorada',
    title: 'Residência Alvorada',
    category: 'Residencial',
    location: 'Jardins · Brasil',
    area: '580 m²',
    year: '2025',
    image: portfolioResidenciaAlvorada,
    galleryImages: [portfolioResidenciaAlvorada, heroArchitecturalPavilion],
    summary:
      'Pé-direito duplo esculpido em travertino bruto, marcenaria em carvalho ebanizado e planos envidraçados que diluem o limite entre estar e jardim.',
    concept:
      'Concebida em torno de um eixo de luz zenital e ventilação cruzada, a residência privilegia proporções serenas, acústica controlada e iluminação indireta de baixa temperatura de cor para acolhimento noturno.',
    materials: ['Travertino Romano Bruto', 'Carvalho Ebanizado', 'Ardósia Escovada', 'Esquadrias em Bronze'],
    featured: true,
  },
  {
    id: 'galeria-aurora',
    title: 'Galeria & Sede Aurora',
    category: 'Comercial',
    location: 'Eixo Corporativo · Brasil',
    area: '410 m²',
    year: '2025',
    image: portfolioGaleriaAurora,
    galleryImages: [portfolioGaleriaAurora, portfolioCoberturaJardins],
    summary:
      'Sede executiva e galeria privada com paginação monolítica em pedra escura, frisos em latão escovado e recepção esculpida em bloco maciço.',
    concept:
      'O programa comercial exige autoridade imediata sem excesso visual. Rasgos lineares no forro conduzem o olhar do visitante ao longo de nichos museológicos e salas de reunião acusticamente isoladas.',
    materials: ['Pedra Ardósia Negra', 'Latão Escovado', 'Travertino Esculpido', 'Cimento Queimado Mineral'],
  },
  {
    id: 'casa-horizonte',
    title: 'Casa Horizonte',
    category: 'Residencial',
    location: 'Encosta Litorânea · Brasil',
    area: '720 m²',
    year: '2024',
    image: portfolioCasaHorizonte,
    galleryImages: [portfolioCasaHorizonte, heroArchitecturalPavilion],
    summary:
      'Balanço estrutural em concreto aparente ripado e forro em cumaru brasileiro projetado sobre a encosta para emoldurar o oceano.',
    concept:
      'Implantada respeitando a declividade natural do terreno, a volumetria horizontal cria varandas sombreadas que protegem os panos de vidro da insolação direta e conectam piscina, estar e paisagem.',
    materials: ['Concreto Aparente Ripado', 'Madeira Cumaru Certificada', 'Pedra Moledo', 'Vidro Solar Laminado'],
  },
  {
    id: 'cobertura-jardins',
    title: 'Cobertura Atelier Sul',
    category: 'Interiores',
    location: 'Alto Padrão Urbano · Brasil',
    area: '340 m²',
    year: '2024',
    image: portfolioCoberturaJardins,
    galleryImages: [portfolioCoberturaJardins, portfolioResidenciaAlvorada],
    summary:
      'Arquitetura de interiores de traço cirúrgico: mesa monolítica em mármore escuro levigado, painéis de nogueira e linho natural translúcido.',
    concept:
      'Cada junção entre pedra, madeira e metal foi desenhada sob medida em escala 1:5 para eliminar rodapés aparentes e guarnições convencionais, resultando em planos contínuos de pura calma espacial.',
    materials: ['Mármore Nero Levigado', 'Painel de Nogueira', 'Linho Belga', 'Iluminação Linear Embutida'],
  },
];

export const CREATIVE_PROCESS_STEPS: CreativeProcessStep[] = [
  {
    number: '01.',
    title: 'Escuta e Leitura do Sítio',
    description:
      'Análise rigorosa de insolação, ventos dominantes, topografia, legislação urbanística e rotina dos futuros moradores ou usuários.',
    deliverable: 'Estudo de Viabilidade e Programa de Necessidades',
  },
  {
    number: '02.',
    title: 'Partido Arquitetônico',
    description:
      'Definição da implantação, cheios e vazios, estrutura e fluidez espacial traduzidos em maquetes volumétricas e estudos tridimensionais.',
    deliverable: 'Anteprojeto Volumétrico e Curadoria Material',
  },
  {
    number: '03.',
    title: 'Executivo e Detalhamento',
    description:
      'Compatibilização integral entre estrutura, instalações, luminotécnica e marcenaria sob medida para eliminar improvisos no canteiro.',
    deliverable: 'Caderno Executivo BIM e Memoriais Descritivos',
  },
  {
    number: '04.',
    title: 'Direção Técnica de Obra',
    description:
      'Acompanhamento periódico junto a engenheiros, fornecedores e artesãos para assegurar fidelidade absoluta ao desenho original.',
    deliverable: 'Curadoria de Acabamentos e Entrega das Chaves',
  },
];
