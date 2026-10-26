# forma — estúdio digital

Site institucional em Next.js (App Router), TypeScript e Tailwind CSS. Sem banco de dados ou painel. Marca, identidade e mockup são provisórios. As referências originais foram preservadas em `referencias/` e não são publicadas como trabalhos do estúdio.

## Executar

Requer Node.js 20.9 ou superior.

```sh
npm install
npm run dev
```

Acesse http://127.0.0.1:3000. No PowerShell com restrição de scripts, utilize `npm.cmd`.

```sh
npm run typecheck
npm run build
npm start
```

## Estrutura

- `src/app/page.tsx`: página inicial.
- `src/app/projetos/[slug]/page.tsx`: páginas estáticas de projetos.
- `src/data/projects.ts`: catálogo tipado, capas e capturas.
- `src/lib/site.ts`: marca, navegação e contatos.
- `src/components/`: componentes reutilizáveis.
- `src/app/globals.css`: tokens, layout, responsividade e movimento reduzido.

Inter é servida localmente pelo pacote Fontsource. Ícones Lucide. Mockup vetorial próprio, ilustrativo, sem fotos externas ou imagens de clientes.

## Personalizar antes do lançamento

1. Substitua a marca em `src/lib/site.ts`, revise os textos e altere `provisionalBrand` para `false`. Atualize o favicon e o texto alternativo da imagem social.
2. Copie `.env.example` para `.env.local` e configure:
   - `NEXT_PUBLIC_SITE_URL`: URL absoluta de produção, sem barra final.
   - `NEXT_PUBLIC_CONTACT_EMAIL`: e-mail comercial real.
   - `NEXT_PUBLIC_WHATSAPP`: número com código de país e DDD, somente dígitos.
3. Sem contatos, aparecem mensagens de indisponibilidade, sem links falsos. Com os valores definidos, aparecem links para WhatsApp e e-mail.
4. Sem URL configurada, a indexação é bloqueada. Configure o domínio para ativar os metadados canônicos, sitemap e indexação.
5. Substitua as informações previstas por conteúdo real quando disponível. Não há demonstração publicada nesta versão.

## Adicionar projetos

Adicione um objeto ao array em `src/data/projects.ts`, com slug único e os campos de `Project`. A listagem e a página de detalhes são geradas automaticamente. Use `kind: "Projeto de cliente"` apenas para trabalhos reais. `origin` descreve a origem; `visualNote` identifica a mídia. `demoUrl` é opcional.

Salve imagens em `public/projetos/`. Defina `cover: { src: "/projetos/capa.webp", alt: "Descrição da capa" }` e `screenshots: [{ src: "/projetos/tela.webp", alt: "Descrição da tela", caption: "Legenda" }]`. Não é necessário alterar o layout. A ausência de capa usa o mockup automotivo ilustrativo; forneça uma capa para cada novo projeto.

## Vercel

Importe o repositório na Vercel, selecione o preset Next.js e mantenha a raiz do projeto. Build: `npm run build`. Instalação: `npm ci`. Cadastre as variáveis acima e publique. Alterações nas variáveis públicas exigem novo build. Nenhum serviço externo ou banco é necessário.

## Acessibilidade e SEO

HTML semântico, link para pular ao conteúdo, foco visível, menu com estado expandido e fechamento por Escape, movimento reduzido, idioma pt-BR, metadados por projeto, imagem social, sitemap, robots e página 404. O mockup é uma ilustração estática.

Integração Tailwind/PostCSS baseada na [documentação oficial](https://tailwindcss.com/docs/installation/framework-guides/nextjs).
