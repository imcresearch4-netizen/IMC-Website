import { notFound } from "next/navigation";
import { ProjectDetailView } from "@/components/project-views/ProjectDetailView";
import { PROJECT_CATEGORIES } from "@/constants/projects";
import { projects } from "@/lib/data/projects";

export function generateStaticParams() {
  return PROJECT_CATEGORIES.flatMap((c) =>
    projects
      .filter((p) => p.project_key === c.key)
      .map((r) => ({ category: c.key, id: String(r.id) }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string; id: string }>;
}) {
  const { category, id } = await params;
  const p = projects.find((r) => r.project_key === category && r.id === Number(id)) || null;
  return { title: p ? p.title : "Project" };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ category: string; id: string }>;
}) {
  const { category, id } = await params;
  if (!PROJECT_CATEGORIES.some((c) => c.key === category)) notFound();
  return <ProjectDetailView categoryKey={category} id={id} />;
}