"use client";

import { useState } from "react";
import { Icons } from "./icons";
import { portfolioData, SkillCategory } from "@/data/portfolioData";

type CategoryFilter = "All" | SkillCategory;

const categories: CategoryFilter[] = [
  "All",
  "Languages",
  "Frontend",
  "Backend",
  "Tools",
];

const categoryDetails: Record<
  SkillCategory,
  { description: string; icon: typeof Icons.Code2 }
> = {
  Languages: {
    description: "Core programming languages",
    icon: Icons.Code2,
  },
  Frontend: {
    description: "Interfaces and web experiences",
    icon: Icons.Layers,
  },
  Backend: {
    description: "Server-side and data technologies",
    icon: Icons.Database,
  },
  Tools: {
    description: "Tools for building and collaboration",
    icon: Icons.Wrench,
  },
};

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>("All");
  const { skills } = portfolioData;
  const visibleCategories =
    activeCategory === "All"
      ? categories.filter((category): category is SkillCategory => category !== "All")
      : [activeCategory];

  return (
    <section
      id="skills"
      className="scroll-mt-24 border-t border-slate-800/70 bg-slate-950/20 px-4 py-20 sm:px-6 sm:py-24"
    >
      <div className="mx-auto max-w-5xl">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal-400">
            Technical Skills
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Technologies I work with
          </h2>
          <p className="mt-3 leading-7 text-slate-400">
            A growing toolkit across programming, frontend, backend, and developer tools.
          </p>
        </div>

        <div
          className="mt-8 flex flex-wrap gap-2"
          role="group"
          aria-label="Filter skills by category"
        >
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              aria-pressed={activeCategory === category}
              className={`rounded-md border px-4 py-2 text-sm font-medium transition-colors ${
                activeCategory === category
                  ? "border-teal-500 bg-teal-500 text-slate-950"
                  : "border-slate-700 bg-slate-900/70 text-slate-300 hover:border-teal-500/60 hover:text-white"
              }`}
            >
              {category}
              <span className="ml-2 text-xs opacity-70">
                {category === "All"
                  ? skills.length
                  : skills.filter((skill) => skill.category === category).length}
              </span>
            </button>
          ))}
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {visibleCategories.map((category) => {
            const categorySkills = skills.filter(
              (skill) => skill.category === category,
            );
            const { description, icon: Icon } = categoryDetails[category];

            return (
              <article
                key={category}
                className="group relative overflow-hidden rounded-xl border border-slate-700/70 bg-slate-900/50 p-5 transition-colors hover:border-teal-500/40 sm:p-6"
              >
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-8 -top-10 h-32 w-32 rounded-full border border-teal-400/10 bg-teal-400/[0.03] transition-transform group-hover:scale-110"
                />
                <div className="relative flex items-center gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-teal-400/20 bg-teal-400/10 text-teal-300">
                    <Icon size={22} />
                  </span>
                  <div>
                    <h3 className="font-semibold text-white">{category}</h3>
                    <p className="mt-1 text-xs text-slate-400">{description}</p>
                  </div>
                  <span className="ml-auto rounded-full border border-slate-700 bg-slate-950/60 px-2.5 py-1 text-xs font-medium text-slate-300">
                    {categorySkills.length}
                  </span>
                </div>

                <ul className="relative mt-5 flex flex-wrap gap-2">
                  {categorySkills.map((skill) => (
                    <li
                      key={skill.name}
                      className="inline-flex items-center gap-2 rounded-md border border-slate-700/70 bg-slate-950/60 px-3 py-2 text-sm font-medium text-slate-200"
                    >
                      <span
                        aria-hidden="true"
                        className="h-1.5 w-1.5 rounded-full bg-teal-400"
                      />
                      {skill.name}
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>

        <div className="mt-8 flex items-center gap-3 rounded-lg border border-teal-500/20 bg-teal-500/5 p-4 text-sm leading-6 text-slate-300">
          <Icons.Sparkles className="shrink-0 text-teal-400" size={20} />
          <p>
            I&apos;m also exploring full-stack development and AI/ML as part of my
            ongoing learning.
          </p>
        </div>
      </div>
    </section>
  );
}
