import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, Check } from "lucide-react";
import { projects } from "@/data/projects";
import { ProjectMedia } from "@/components/project-media";
import Image from "next/image";
import { Contact } from "@/components/contact";
export const dynamicParams = false;
export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}
type Props = { params: Promise<{ slug: string }> };
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  return project
    ? {
        title: project.name,
        description: project.description,
        alternates: { canonical: `/projetos/${slug}` },
      }
    : {};
}
export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();
  const isConcept = project.kind === "Projeto demonstrativo";
  return (
    <main id="conteudo">
      <div className="container case-header">
        <Link className="text-link" href="/#projetos">
          <ArrowLeft size={16} /> Todos os projetos
        </Link>
        <div className="eyebrow">
          {project.kind} / {project.status}
        </div>
        <h1>{project.name}</h1>
        <p>{project.introduction}</p>
        <div className="case-meta">
          <span>{project.category}</span>
          <span>{project.origin}</span>
        </div>
      </div>
      <div className="container">
        <ProjectMedia project={project} detail />
        <p className="image-caption">{project.visualNote}</p>
        {project.screenshots?.map((shot) => (
          <figure className="project-screenshot" key={shot.src}>
            <Image
              src={shot.src}
              alt={shot.alt}
              width={1400}
              height={900}
              sizes="(max-width: 700px) 100vw, 1240px"
            />
            <figcaption className="image-caption">{shot.caption}</figcaption>
          </figure>
        ))}
        <div className="case-copy">
          <section>
            <div className="eyebrow">01 / O DESAFIO</div>
            <h2>
              Uma experiência
              <br />
              mais clara.
            </h2>
            <p>{project.problem}</p>
          </section>
          <section>
            <div className="eyebrow">02 / {isConcept ? "A PROPOSTA" : "A SOLUÇÃO"}</div>
            <h2>{project.solutionTitle}</h2>
            <p>{project.solution}</p>
          </section>
        </div>
        <div className="case-copy case-specs">
          <section>
            <div className="eyebrow">03 / {isConcept ? "ESCOPO PREVISTO" : "O QUE FOI ENTREGUE"}</div>
            <h2>{isConcept ? "O que estamos pensando." : "Recursos do site."}</h2>
            <ul>
              {project.features.map((f) => (
                <li key={f}>
                  <Check size={17} />
                  {f}
                </li>
              ))}
            </ul>
          </section>
          <section>
            <div className="eyebrow">04 / TECNOLOGIA</div>
            <h2>{isConcept ? "A base da construção." : "Tecnologias utilizadas."}</h2>
            <div className="tech-tags">
              {project.technologies.map((t) => (
                <span key={t}>{t}</span>
              ))}
            </div>
            {isConcept && (
              <p>
                A arquitetura e as funcionalidades podem mudar ao longo do
                desenvolvimento.
              </p>
            )}
            {project.demoUrl ? (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-link"
              >
                {isConcept ? "Acessar demonstração" : "Visitar site"} <ArrowUpRight size={17} />
              </a>
            ) : (
              <p className="demo-note">
                Demonstração pública ainda não disponível.
              </p>
            )}
          </section>
        </div>
      </div>
      <Contact />
    </main>
  );
}
