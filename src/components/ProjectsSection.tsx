"use client";

import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import { projectsData, Project, ProjectCategory } from "@/data/projects";

type ProjectFilter = "All" | ProjectCategory;

export default function ProjectsSection() {
  const [filter, setFilter] = useState<ProjectFilter>("All");

  const categories: ProjectFilter[] = ["All", "Full Stack", "Frontend", "Backend"];

  const filteredProjects =
    filter === "All"
      ? projectsData
      : projectsData.filter((p) => p.category === filter);

  return (
    <section id="projects" className="py-24 relative overflow-hidden border-t border-slate-900">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-teal-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-mono font-semibold tracking-widest text-teal-400 uppercase bg-teal-500/10 px-3.5 py-1.5 rounded-full border border-teal-500/20">
            My work
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Projects I&apos;ve built
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-400">
            A selection of my web and API projects.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-teal-400 to-sky-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Filter Pills */}
        <div className="flex items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                filter === cat
                  ? "bg-teal-500 text-slate-950 font-bold shadow-md shadow-teal-500/20"
                  : "bg-slate-900/80 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800"
              }`}
            >
              <span>{cat}</span>
              <span className="ml-2 text-[10px] font-mono text-slate-400">
                ({cat === "All" ? projectsData.length : projectsData.filter((p) => p.category === cat).length})
              </span>
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project: Project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* GitHub Repositories Link CTA */}
        <div className="mt-14 text-center">
          <a
            href="https://github.com/abirhosen30"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-teal-300 transition-colors hover:text-teal-200"
          >
            <span>More on GitHub</span>
            <span>→</span>
          </a>
        </div>

      </div>
    </section>
  );
}
