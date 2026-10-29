import React from "react";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getProjectById, projectsData } from "@/data/projects";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProjectDetailView from "@/components/ProjectDetailView";

export async function generateStaticParams() {
  return projectsData.map((project) => ({
    id: project.id,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const project = getProjectById(id);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.title} | Abir Hosen`,
    description: project.overview,
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const project = getProjectById(id);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen flex flex-col bg-[var(--bg-primary)] text-[#e2e8f0]">
      <Navbar />
      <main className="flex-1 pt-28 pb-16 sm:pt-32">
        <ProjectDetailView project={project} />
      </main>
      <Footer />
    </div>
  );
}
