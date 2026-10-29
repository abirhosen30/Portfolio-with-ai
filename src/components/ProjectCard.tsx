import Image from "next/image";
import Link from "next/link";
import { Icons } from "./icons";
import { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="project-card glass-panel flex flex-col overflow-hidden rounded-xl">
      <div className="relative aspect-[16/9] overflow-hidden bg-slate-900">
        <Image
          src={project.image}
          alt={`${project.title} project preview`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover"
        />
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-xl font-bold tracking-tight text-white">
            {project.title}
          </h3>
          <span className="shrink-0 rounded-full border border-teal-400/20 bg-slate-950/30 px-3 py-1 text-xs text-teal-200">
            {project.category}
          </span>
        </div>
        <p className="text-sm leading-6 text-slate-300">{project.overview}</p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.stack.slice(0, 5).map((technology) => (
            <span
              key={technology}
              className="rounded-md border border-slate-700/70 bg-slate-900/70 px-2.5 py-1 text-xs text-slate-300"
            >
              {technology}
            </span>
          ))}
          {project.stack.length > 5 && (
            <span className="rounded-md border border-slate-700/70 bg-slate-900/70 px-2.5 py-1 text-xs text-slate-400">
              +{project.stack.length - 5}
            </span>
          )}
        </div>

        <div className="mt-auto flex items-center gap-4 border-t border-slate-700/60 pt-5">
          <Link
            href={`/projects/${project.id}`}
            className="inline-flex items-center gap-2 rounded-md border border-teal-500/60 px-3 py-2 text-sm font-semibold text-teal-300 transition-colors hover:bg-teal-500 hover:text-slate-950"
          >
            View Details
            <Icons.ChevronRight size={16} />
          </Link>
          <div className="ml-auto flex items-center gap-3">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open ${project.title} live demo`}
                title="Live demo"
                className="text-slate-400 transition-colors hover:text-teal-300"
              >
                <Icons.ExternalLink size={18} />
              </a>
            )}
            {project.githubUrl && project.category !== "Backend" && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${project.title} GitHub repository`}
                title="GitHub repository"
                className="text-slate-400 transition-colors hover:text-teal-300"
              >
                <Icons.Github size={18} />
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
