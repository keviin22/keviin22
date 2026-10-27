export type Project = {
  slug: string;
  name: string;
  category: string;
  description: string;
  kind: "Projeto demonstrativo" | "Projeto de cliente" | "Projeto institucional";
  status: string;
  introduction: string;
  problem: string;
  solutionTitle: string;
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
    slug: "festa-santa-edwiges-2026",
    name: "Festa de Santa Edwiges 2026",
    category: "Site institucional",
    kind: "Projeto institucional",
    status: "Publicado",
    origin: "Paróquia Santa Edwiges · Uberaba, MG.",
    visualNote: "Imagem de capa do site publicado para a Festa de Santa Edwiges 2026.",
    description:
      "Programação, história e informações da festa reunidas em um site para a comunidade.",
    introduction:
      "Um site para apresentar a Festa de Santa Edwiges 2026 e facilitar o acesso da comunidade à programação, às pessoas envolvidas e aos canais da paróquia.",
    problem:
      "Como reunir a programação da festa e as informações da paróquia em um lugar fácil de consultar durante a celebração?",
    solutionTitle: "Informação ao alcance da comunidade.",
    solution:
      "O site organiza a programação por dia e oferece caminhos diretos para conhecer a história da padroeira, os participantes da festa, a localização e os canais de contato da paróquia.",
    features: [
      "Programação diária da novena, das missas e da quermesse",
      "Página sobre a história de Santa Edwiges",
      "Páginas de comissões, noiteiros, homenageados, madrinhas e padrinhos",
      "Acesso rápido ao endereço, Instagram e WhatsApp da paróquia",
      "Layout adaptado a diferentes tamanhos de tela",
    ],
    technologies: ["HTML", "CSS", "JavaScript"],
    demoUrl: "https://santa-edwiges-2026.vercel.app/",
    cover: {
      src: "/projetos/santa-edwiges-2026.jpg",
      alt: "Capa da Festa de Santa Edwiges 2026 com imagem da padroeira e brasão da paróquia",
    },
  },
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
    solutionTitle: "Do estoque à descoberta.",
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
