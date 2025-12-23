import { Service, Project, Product, Testimonial } from './types.js';

export const LOGO_URL = "https://storage.googleapis.com/digli-servidor-de-arquivos-de-apps/escritorio.art.br/optimized-escritorio-logo-rgb-png-roxo.webp";
export const ARTIST_IMAGE_URL = "https://storage.googleapis.com/digli-servidor-de-arquivos-de-apps/escritorio.art.br/mulher-artista-sorrindo-pincel-estudio-arte.webp";

export const NAV_LINKS = [
  { label: 'Início', href: '#hero' },
  { label: 'O Escritório', href: '#about' },
  { label: 'Serviços', href: '#services' },
  { label: 'Produtos', href: '#products' },
  { label: 'Contato', href: '#contact' },
];

export const SERVICES: Service[] = [
  {
    id: '1',
    title: 'Captação de Recursos',
    description: 'Estratégias técnicas para Leis de Incentivo (Rouanet, Paulo Gustavo, Aldir Blanc).',
    iconName: 'Briefcase',
  },
  {
    id: '2',
    title: 'Gestão e Produção',
    description: 'Execução completa de eventos e projetos culturais com rigor técnico.',
    iconName: 'Users',
  },
  {
    id: '3',
    title: 'Prestação de Contas',
    description: 'Organização administrativa e contábil para aprovação junto aos órgãos públicos.',
    iconName: 'FileText',
  },
  {
    id: '4',
    title: 'Consultoria de Acessibilidade',
    description: 'Projetos inclusivos com Libras, Audiodescrição e infraestrutura adaptada.',
    iconName: 'Accessibility',
  },
];

export const PROJECTS: Project[] = [
  {
    id: '1',
    year: '2024',
    title: 'aDeus nossos SONhoS',
    category: 'Cinema',
    imageUrl: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: '2',
    year: '2023',
    title: 'Sarau Ao Natural',
    category: 'Eventos',
    imageUrl: 'https://images.unsplash.com/photo-1514525253361-bee8718a300a?auto=format&fit=crop&q=80&w=800',
  },
];

export const PRODUCTS: Product[] = [
  {
    id: '1',
    type: 'LIVRO',
    title: 'A baleia na lagoa do violão',
    imageUrl: 'https://storage.googleapis.com/digli-servidor-de-arquivos-de-apps/escritorio.art.br/a-baleia-na-lagoa-do-violao-dhai-maus-capa.webp',
    link: 'https://dhaimaus.com.br/',
  },
  {
    id: '2',
    type: 'LIVRO',
    title: 'O Poder Terapêutico de Cultivar Suculentas',
    imageUrl: 'https://storage.googleapis.com/digli-servidor-de-arquivos-de-apps/escritorio.art.br/optimized-opoderterapeuticodocultivodesuculentas.webp',
    link: 'https://wa.me/5551981028246?text=Quero%20comprar%20seu%20livro!',
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    text: "O Escritório de Arte & Cultura é fundamental para a viabilização de projetos complexos com segurança e excelência.",
    author: "Rodrigo Fontoura de Oliveira",
    role: "Artista Visual"
  }
];