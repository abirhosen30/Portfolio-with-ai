import Image from "next/image";
import Link from "next/link";
import { Icons } from "./icons";
import { Project } from "@/data/projects";

interface ProjectDetailViewProps {
  project: Project;
}

export default function ProjectDetailView({ project }: ProjectDetailViewProps) {
  return (
    <article className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
      <Link
        href="/#projects"
        className="inline-flex items-center gap-2 text-sm font-medium text-slate-400 transition-colors hover:text-teal-300"
      >
        <Icons.ArrowLeft size={16} />
        Back to projects
      </Link>

      <header className="mt-10">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal-400">
          {project.category}
        </p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight text-white sm:text-5xl">
          {project.title}
        </h1>
        <p className="mt-4 max-w-3xl text-lg leading-7 text-slate-300">
          {project.tagline}
        </p>

        {(project.liveUrl || project.githubUrl) && (
          <div className="mt-6 flex flex-wrap gap-3">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md border border-teal-500 bg-teal-500 px-4 py-2.5 text-sm font-semibold text-slate-950 transition-colors hover:bg-teal-400"
              >
                Visit live site
                <Icons.ExternalLink size={16} />
              </a>
            )}
            {project.githubUrl && project.category !== "Backend" && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md border border-slate-700 px-4 py-2.5 text-sm font-semibold text-slate-200 transition-colors hover:border-teal-500/60 hover:text-teal-300"
              >
                GitHub repository
                <Icons.Github size={16} />
              </a>
            )}
          </div>
        )}
      </header>

      <div className="relative mt-10 aspect-video overflow-hidden rounded-xl bg-slate-900">
        <Image
          src={project.image}
          alt={`${project.title} project preview`}
          fill
          sizes="(max-width: 896px) 100vw, 896px"
          priority
          className="object-cover"
        />
      </div>

      <section className="mt-10">
        <h2 className="text-xl font-bold text-white">About this project</h2>
        <p className="mt-3 leading-7 text-slate-300">{project.fullDescription}</p>
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-bold text-white">Main technology stack</h2>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.stack.map((technology) => (
            <span
              key={technology}
              className="rounded-md border border-slate-700 bg-slate-900/70 px-3 py-1.5 text-sm text-slate-300"
            >
              {technology}
            </span>
          ))}
        </div>
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-bold text-white">Challenges</h2>
        <ul className="mt-4 space-y-3">
          {project.challenges.map((challenge) => (
            <li
              key={challenge}
              className="flex items-start gap-3 leading-6 text-slate-300"
            >
              <Icons.CheckCircle
                size={18}
                className="mt-1 shrink-0 text-teal-400"
              />
              <span>{challenge}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-bold text-white">
          Potential improvements and future plans
        </h2>
        <ul className="mt-4 space-y-3">
          {project.futurePlans.map((plan) => (
            <li
              key={plan}
              className="flex items-start gap-3 leading-6 text-slate-300"
            >
              <Icons.ChevronRight
                size={18}
                className="mt-1 shrink-0 text-teal-400"
              />
              <span>{plan}</span>
            </li>
          ))}
        </ul>
      </section>

      {project.keyFeatures.length > 0 && (
        <section className="mt-10">
          <h2 className="text-xl font-bold text-white">Highlights</h2>
          <ul className="mt-4 space-y-3">
            {project.keyFeatures.map((feature) => (
              <li
                key={feature}
                className="flex items-start gap-3 leading-6 text-slate-300"
              >
                <Icons.CheckCircle
                  size={18}
                  className="mt-1 shrink-0 text-teal-400"
                />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </section>
      )}
    </article>
  );
}
