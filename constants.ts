import { Service, Project, Product, Testimonial } from './types';

// RECURSOS OTIMIZADOS
export const LOGO_URL = "https://storage.googleapis.com/digli-servidor-de-arquivos-de-apps/escritorio.art.br/optimized-escritorio-logo-rgb-png-roxo.webp";
export const ARTIST_IMAGE_URL = "https://storage.googleapis.com/digli-servidor-de-arquivos-de-apps/escritorio.art.br/mulher-artista-sorrindo-pincel-estudio-arte.webp";

export const NAV_LINKS = [
  { label: 'Início', href: '#hero' },
  { label: 'O Escritório', href: '#about' },
  { label: 'Serviços', href: '#services' },
  { label: 'Portfólio', href: '#portfolio' },
  { label: 'Produtos', href: '#products' },
  { label: 'Contato', href: '#contact' },
];

export const SERVICES: Service[] = [
  {
    id: '1',
    title: 'Captação de Recursos',
    description: 'Domínio técnico das Leis Rouanet, Paulo Gustavo e Aldir Blanc para viabilizar projetos com incentivo fiscal.',
    iconName: 'Briefcase',
  },
  {
    id: '2',
    title: 'Produção Executiva',
    description: 'Gestão 360º: do planejamento logístico à coordenação de equipes em eventos de grande porte.',
    iconName: 'Users',
  },
  {
    id: '3',
    title: 'Prestação de Contas',
    description: 'Segurança jurídica e contábil total com organização rigorosa para aprovação junto aos órgãos reguladores.',
    iconName: 'FileText',
  },
  {
    id: '4',
    title: 'Acessibilidade 360º',
    description: 'Consultoria e implementação de Libras, audiodescrição e infraestrutura inclusiva em projetos culturais.',
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
  {
    id: '3',
    year: '2023',
    title: 'Encorajamento Musical',
    category: 'Educação',
    imageUrl: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: '4',
    year: '2022',
    title: 'Hip Hop Nas Escolas',
    category: 'Social',
    imageUrl: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&q=80&w=800',
  }
];

export const PRODUCTS: Product[] = [
  {
    id: '1',
    type: 'LIVRO FÍSICO',
    title: 'A baleia na lagoa do violão',
    imageUrl: 'https://storage.googleapis.com/digli-servidor-de-arquivos-de-apps/escritorio.art.br/a-baleia-na-lagoa-do-violao-dhai-maus-capa.webp',
    link: 'https://dhaimaus.com.br/',
  },
  {
    id: '2',
    type: 'GUIA PRÁTICO',
    title: 'O Poder Terapêutico de Cultivar Suculentas',
    imageUrl: 'https://storage.googleapis.com/digli-servidor-de-arquivos-de-apps/escritorio.art.br/optimized-opoderterapeuticodocultivodesuculentas.webp',
    link: 'https://wa.me/5551981028246?text=Olá,%20tenho%20interesse%20no%20livro%20de%20suculentas!',
  },
  {
    id: '3',
    type: 'COLETÂNEA',
    title: 'Arte e Acessibilidade: Um Guia para Gestores',
    imageUrl: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&q=80&w=800',
    link: 'mailto:contato@escritorio.art.br',
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    text: "Profissionalismo impecável. A gestão da Dhai Maús transformou a execução do nosso documentário em um processo leve e tecnicamente perfeito.",
    author: "Rodrigo Fontoura de Oliveira",
    role: "Diretor de Cinema"
  }
];