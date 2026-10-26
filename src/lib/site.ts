export const site = {
  name: "forma",
  provisionalBrand: true,
  description:
    "Estúdio independente de desenvolvimento. Sites, aplicações web e soluções digitais pensadas para o seu negócio.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "",
  whatsapp: (process.env.NEXT_PUBLIC_WHATSAPP || "").replace(/\D/g, ""),
};
export const navigation = [
  { label: "Início", href: "/#inicio" },
  { label: "Projetos", href: "/#projetos" },
  { label: "Serviços", href: "/#servicos" },
  { label: "Sobre", href: "/#sobre" },
  { label: "Contato", href: "/#contato" },
];
