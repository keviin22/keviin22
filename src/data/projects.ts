export type Project = {
  slug: string;
  name: string;
  category: string;
  description: string;
  kind: "Projeto demonstrativo" | "Projeto de cliente";
  status: string;
  introduction: string;
  problem: string;
  solution: string;
  features: string[];
  technologies: string[];
  demoUrl?: string;
  cover?: { src: string; alt: string };
  screenshots?: { src: string; alt: string; caption: string }[];
  origin: string;
  visualNote: string;
};
export const projects: Project[] = [
  {
    slug: "plataforma-automotiva",
    name: "Auto / Plataforma automotiva",
    category: "Aplicação web",
    kind: "Projeto demonstrativo",
    status: "Em desenvolvimento",
    origin: "Conceito próprio, sem vínculo com cliente.",
    visualNote:
      "Estudo visual do catálogo. Mockup ilustrativo, não uma captura de um produto finalizado.",
    description:
      "Uma experiência digital para conectar revendas, veículos e novas oportunidades.",
    introduction:
      "Um projeto em desenvolvimento que explora uma forma mais simples de apresentar o estoque de uma revenda e aproximar pessoas do próximo veículo.",
    problem:
      "Como organizar informações de veículos e criar uma apresentação clara, que ajude o visitante a encontrar o que procura e iniciar uma conversa com a revenda?",
    solution:
      "A proposta reúne catálogo, filtros e páginas de veículos em uma interface objetiva. As telas apresentadas são estudos visuais provisórios; não representam funcionalidades já entregues nem um trabalho comercial para cliente.",
    features: [
      "Catálogo com fotos e informações dos veículos",
      "Busca e filtros por características",
      "Página individual para cada veículo",
      "Contato direto com a revenda",
      "Interface adaptada a dispositivos móveis",
    ],
    technologies: [
      "Next.js (previsto)",
      "TypeScript (previsto)",
      "Tailwind CSS (previsto)",
    ],
  },
];
