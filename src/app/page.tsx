import Link from "next/link";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Code2,
  Monitor,
  Workflow,
} from "lucide-react";
import { projects } from "@/data/projects";
import { ProjectMedia } from "@/components/project-media";
import { Contact } from "@/components/contact";
export const metadata = { alternates: { canonical: "/" } };
const services = [
  {
    number: "01",
    icon: Monitor,
    title: "Sites que apresentam.\nExperiências que conectam.",
    description:
      "Sites institucionais e comerciais com identidade, navegação clara e atenção a cada tamanho de tela.",
    tags: "Sites institucionais · Landing pages · Portfólios",
  },
  {
    number: "02",
    icon: Code2,
    title: "Seu negócio,\ncom novas possibilidades.",
    description:
      "Aplicações e sistemas web construídos a partir dos seus processos, das suas necessidades e de quem vai usar.",
    tags: "Aplicações web · Plataformas · Sistemas internos",
  },
  {
    number: "03",
    icon: Workflow,
    title: "Menos tarefas repetidas.\nMais espaço para evoluir.",
    description:
      "Soluções sob medida para conectar ferramentas, organizar informações e simplificar o trabalho do dia a dia.",
    tags: "Automações · Integrações · Soluções personalizadas",
  },
];
export default function Home() {
  return (
    <main id="conteudo">
      <section id="inicio" className="container hero">
        <div className="eyebrow">
          <span className="dot" /> ESTÚDIO INDEPENDENTE DE DESENVOLVIMENTO
        </div>
        <h1>
          Boas ideias merecem
          <br />
          uma <span className="hero-soft">forma</span> digital
          <span className="period">.</span>
        </h1>
        <div className="hero-bottom">
          <p>
            Criamos sites, aplicações e soluções digitais
            <br className="desktop-break" /> pensadas para o seu negócio. Do
            primeiro conceito
            <br className="desktop-break" /> ao cuidado com cada detalhe.
          </p>
          <div className="hero-actions">
            <Link href="#projetos" className="button button-dark">
              Explorar projetos <ArrowDown size={17} />
            </Link>
            <Link href="#contato" className="text-link">
              Vamos conversar <ArrowUpRight size={17} />
            </Link>
          </div>
        </div>
        <div className="hero-meta">
          <span>ESTRATÉGIA. DESIGN. DESENVOLVIMENTO.</span>
          <span>
            FEITO COM INTENÇÃO <span className="tiny-cross">+</span>
          </span>
        </div>
      </section>
      <section id="projetos" className="projects-section section">
        <div className="container">
          <div className="section-heading">
            <div>
              <div className="eyebrow">01 / PROJETOS</div>
              <h2>
                Ideias em construção<span className="muted">.</span>
              </h2>
            </div>
            <p>
              Um olhar sobre o que estamos criando.
              <br />
              Espaço para experimentar, construir e evoluir.
            </p>
          </div>
          <div className="project-grid">
            {projects.map((project) => (
              <article key={project.slug} className="project-card">
                <Link
                  href={`/projetos/${project.slug}`}
                  className="project-cover"
                  aria-label={`Conhecer ${project.name}`}
                >
                  <ProjectMedia project={project} />
                  <span className="project-open">
                    <ArrowUpRight size={23} />
                  </span>
                </Link>
                <div className="project-info">
                  <div>
                    <div className="project-tags">
                      <span>{project.category}</span>
                      <span className="status">
                        <span className="dot" />
                        {project.status}
                      </span>
                    </div>
                    <h3>
                      <Link href={`/projetos/${project.slug}`}>
                        {project.name}
                      </Link>
                    </h3>
                    <p>{project.description}</p>
                  </div>
                  <Link
                    className="project-details text-link"
                    href={`/projetos/${project.slug}`}
                  >
                    Conhecer o projeto <ArrowUpRight size={18} />
                  </Link>
                </div>
                <div className="project-disclaimer">
                  {project.kind} · {project.origin}
                </div>
              </article>
            ))}
          </div>
          <div className="project-afterword">
            <span>
              O portfólio está só começando. Novos projetos chegam por aqui.
            </span>
            <Link href="#contato">
              Vamos construir o próximo? <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
      <section id="servicos" className="section container">
        <div className="section-heading">
          <div>
            <div className="eyebrow">02 / O QUE FAZEMOS</div>
            <h2>
              Do que você precisa.
              <br />
              Ao que podemos criar.
            </h2>
          </div>
          <p>
            Tecnologia com propósito.
            <br />
            Soluções na medida do seu momento.
          </p>
        </div>
        <div className="services-grid">
          {services.map(({ icon: Icon, ...service }) => (
            <article className="service" key={service.number}>
              <div className="service-top">
                <Icon size={25} strokeWidth={1.3} />
                <span>{service.number}</span>
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <div className="service-tags">{service.tags}</div>
            </article>
          ))}
        </div>
      </section>
      <section id="sobre" className="about section">
        <div className="container about-grid">
          <div>
            <div className="eyebrow">03 / O ESTÚDIO</div>
            <div className="studio-mark" aria-hidden="true">
              <span>f.</span>
              <small>FORMA / ESTÚDIO DIGITAL</small>
            </div>
          </div>
          <div className="about-content">
            <h2>
              Pequeno por escolha.
              <br />
              Cuidadoso por princípio.
            </h2>
            <p>
              Somos um estúdio independente de desenvolvimento. Acreditamos que
              uma boa solução digital começa com escuta, ganha clareza no design
              e se sustenta em um código bem construído.
            </p>
            <p>
              Nosso foco é criar experiências funcionais, bem projetadas e
              fáceis de usar. Com proximidade no processo e atenção ao que
              realmente faz sentido para cada negócio.
            </p>
            <div className="principles">
              <span>Clareza na conversa.</span>
              <span>Cuidado na execução.</span>
              <span>Espaço para evoluir.</span>
            </div>
          </div>
        </div>
      </section>
      <section className="container process section">
        <div className="section-heading">
          <div>
            <div className="eyebrow">DA PRIMEIRA CONVERSA À ENTREGA</div>
            <h2>
              Um processo claro.
              <br />
              Em cada etapa.
            </h2>
          </div>
          <Link href="#contato" className="text-link">
            Conte sua ideia <ArrowUpRight size={18} />
          </Link>
        </div>
        <div className="process-grid">
          {[
            [
              "01",
              "Entender",
              "Conversamos sobre o negócio, as pessoas e o problema a resolver.",
            ],
            [
              "02",
              "Desenhar",
              "Organizamos o escopo e damos forma à experiência antes de construir.",
            ],
            [
              "03",
              "Desenvolver",
              "Transformamos a proposta em código, com revisões ao longo do caminho.",
            ],
            [
              "04",
              "Evoluir",
              "Preparamos a publicação e alinhamos os próximos passos do projeto.",
            ],
          ].map(([n, title, text]) => (
            <div key={n}>
              <span className="process-number">{n}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </section>
      <Contact />
    </main>
  );
}
