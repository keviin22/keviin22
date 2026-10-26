import Image from "next/image";
import type { Project } from "@/data/projects";
import { ProjectVisual } from "./project-visual";
export function ProjectMedia({
  project,
  detail = false,
}: {
  project: Project;
  detail?: boolean;
}) {
  return project.cover ? (
    <div className="project-image">
      <Image
        src={project.cover.src}
        alt={project.cover.alt}
        fill
        sizes="(max-width: 700px) 100vw, 1240px"
        priority={detail}
      />
    </div>
  ) : (
    <ProjectVisual detail={detail} />
  );
}
